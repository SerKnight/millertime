'use client';

import { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@/styles/map-theme.css';
import { Basin, BasinData, MapboxConfig, TooltipPosition } from '@/types/map.types';
import BasinTooltip from './BasinTooltip';
import BasinFilters from './BasinFilters';
import LoadingState from './LoadingState';
import MapFallback from './MapFallback';

// Mapbox configuration
const MAPBOX_CONFIG: MapboxConfig = {
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '',
  style: 'mapbox://styles/mapbox/light-v11',
  center: [-98.5795, 39.8283], // Geographic center of US
  zoom: 3.5,
  minZoom: 3,
  maxZoom: 8,
  bounds: [
    [-130, 24], // Southwest
    [-65, 50]   // Northeast
  ]
};

// Responsive zoom levels
const RESPONSIVE_ZOOM = {
  mobile: 3,
  tablet: 3.5,
  desktop: 4
};

interface InteractiveMapProps {
  className?: string;
  height?: string;
}

export default function InteractiveMap({ 
  className = '', 
  height = 'h-[600px]' 
}: InteractiveMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [basinData, setBasinData] = useState<BasinData | null>(null);
  const [activeBasin, setActiveBasin] = useState<Basin | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [hoveredBasin, setHoveredBasin] = useState<Basin | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Load basin data
  useEffect(() => {
    const loadBasinData = async () => {
      try {
        const response = await fetch('/src/data/basins.json');
        const data: BasinData = await response.json();
        setBasinData(data);
      } catch (error) {
        console.error('Failed to load basin data:', error);
        setHasError(true);
      }
    };

    loadBasinData();
  }, []);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || !basinData || map.current) return;

    if (!MAPBOX_CONFIG.accessToken) {
      console.error('Mapbox access token not found');
      setHasError(true);
      return;
    }

    mapboxgl.accessToken = MAPBOX_CONFIG.accessToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: MAPBOX_CONFIG.style,
      center: MAPBOX_CONFIG.center,
      zoom: isMobile ? RESPONSIVE_ZOOM.mobile : RESPONSIVE_ZOOM.desktop,
      minZoom: MAPBOX_CONFIG.minZoom,
      maxZoom: MAPBOX_CONFIG.maxZoom,
      bounds: MAPBOX_CONFIG.bounds
    });

    map.current.on('load', () => {
      addBasinLayers();
      addInteractivity();
      setIsLoading(false);
    });

    map.current.on('error', (e) => {
      console.error('Map error:', e);
      setHasError(true);
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [basinData, isMobile]);

  // Add basin layers to map
  const addBasinLayers = () => {
    if (!map.current || !basinData) return;

    basinData.basins.forEach(basin => {
      // Create GeoJSON feature for basin
      const basinFeature = {
        type: 'Feature' as const,
        properties: { id: basin.id, name: basin.name },
        geometry: basin.geometry || {
          type: 'Polygon' as const,
          coordinates: [[
            [basin.coordinates.center[0] - 1, basin.coordinates.center[1] - 0.5],
            [basin.coordinates.center[0] + 1, basin.coordinates.center[1] - 0.5],
            [basin.coordinates.center[0] + 1, basin.coordinates.center[1] + 0.5],
            [basin.coordinates.center[0] - 1, basin.coordinates.center[1] + 0.5],
            [basin.coordinates.center[0] - 1, basin.coordinates.center[1] - 0.5]
          ]]
        }
      };

      // Add source
      map.current!.addSource(`basin-${basin.id}`, {
        type: 'geojson',
        data: basinFeature
      });

      // Add fill layer
      map.current!.addLayer({
        id: `basin-fill-${basin.id}`,
        type: 'fill',
        source: `basin-${basin.id}`,
        paint: {
          'fill-color': basin.color.stroke,
          'fill-opacity': 0.3
        }
      });

      // Add stroke layer
      map.current!.addLayer({
        id: `basin-stroke-${basin.id}`,
        type: 'line',
        source: `basin-${basin.id}`,
        paint: {
          'line-color': basin.color.stroke,
          'line-width': 2
        }
      });

      // Add icon
      const iconEl = document.createElement('div');
      iconEl.className = 'oil-derrick-icon';
      iconEl.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#D4A756">
          <path d="M12 2L8 6h8l-4-4zM8 6v12h8V6H8zM10 8h4v8h-4V8z"/>
        </svg>
      `;

      new mapboxgl.Marker(iconEl)
        .setLngLat(basin.coordinates.iconPosition)
        .addTo(map.current!);
    });
  };

  // Add hover/click interactivity
  const addInteractivity = () => {
    if (!map.current || !basinData) return;

    basinData.basins.forEach(basin => {
      // Hover enter
      map.current!.on('mouseenter', `basin-fill-${basin.id}`, (e) => {
        if (map.current) {
          map.current.getCanvas().style.cursor = 'pointer';
          map.current.setPaintProperty(
            `basin-fill-${basin.id}`,
            'fill-opacity',
            0.5
          );
          setHoveredBasin(basin);
          if (e.point) {
            setTooltipPosition({ 
              x: e.point.x, 
              y: e.point.y 
            });
          }
        }
      });

      // Hover leave
      map.current!.on('mouseleave', `basin-fill-${basin.id}`, () => {
        if (map.current) {
          map.current.getCanvas().style.cursor = '';
          map.current.setPaintProperty(
            `basin-fill-${basin.id}`,
            'fill-opacity',
            0.3
          );
          setHoveredBasin(null);
        }
      });

      // Click
      map.current!.on('click', `basin-fill-${basin.id}`, () => {
        setActiveBasin(basin);
        // Navigate to contact form with basin parameter
        window.location.href = basin.cta.url;
      });
    });
  };

  // Filter handler
  const handleFilterChange = (filterId: string) => {
    setSelectedFilter(filterId);
    
    if (!map.current) return;
    
    if (filterId === 'all') {
      // Show all basins, reset view
      map.current.flyTo({
        center: MAPBOX_CONFIG.center,
        zoom: isMobile ? RESPONSIVE_ZOOM.mobile : RESPONSIVE_ZOOM.desktop,
        duration: 1000
      });
    } else {
      // Zoom to selected basin
      const basin = basinData?.basins.find(b => b.id === filterId);
      if (basin) {
        map.current.flyTo({
          center: basin.coordinates.center,
          zoom: 6,
          duration: 1000
        });
      }
    }
  };

  // Error state
  if (hasError) {
    return <MapFallback basinData={basinData} />;
  }

  return (
    <div className={`relative w-full ${height} bg-neutral-50 rounded-3xl overflow-hidden ${className}`}>
      {/* Map Container */}
      <div ref={mapContainer} className="w-full h-full" />
      
      {/* Loading State */}
      {isLoading && <LoadingState />}
      
      {/* Basin Filters */}
      {basinData && (
        <BasinFilters
          basins={basinData.basins}
          activeFilter={selectedFilter}
          onFilterChange={handleFilterChange}
        />
      )}
      
      {/* Tooltip */}
      {hoveredBasin && !isMobile && (
        <BasinTooltip
          basin={hoveredBasin}
          position={tooltipPosition}
        />
      )}

      {/* Mobile Bottom Sheet Tooltip */}
      {hoveredBasin && isMobile && (
        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl p-6 z-50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display text-2xl font-semibold text-primary">
              {hoveredBasin.displayName} Basin
            </h3>
            <button
              onClick={() => setHoveredBasin(null)}
              className="text-neutral-400 hover:text-neutral-600"
            >
              ✕
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-primary/5 rounded-lg p-3">
              <div className="text-2xl font-bold text-primary">
                {hoveredBasin.statistics.dealsCompleted}
              </div>
              <div className="text-sm text-neutral-600">Deals Completed</div>
            </div>
            <div className="bg-primary/5 rounded-lg p-3">
              <div className="text-2xl font-bold text-primary">
                {hoveredBasin.statistics.acresAcquired.toLocaleString()}+
              </div>
              <div className="text-sm text-neutral-600">Acres Acquired</div>
            </div>
          </div>

          <div className="mb-4">
            <span className="text-sm text-neutral-600">Active in: </span>
            <span className="text-sm font-medium text-primary">
              {hoveredBasin.statesFullName.join(', ')}
            </span>
          </div>

          <button
            onClick={() => window.location.href = hoveredBasin.cta.url}
            className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-6 rounded-full transition-colors"
          >
            {hoveredBasin.cta.text} →
          </button>
        </div>
      )}

      {/* Trust Indicators Overlay */}
      {basinData && (
        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg">
          <div className="flex gap-6 text-sm">
            <div>
              <div className="font-semibold text-primary">{basinData.totals.totalDeals.toLocaleString()}+</div>
              <div className="text-neutral-600">Deals</div>
            </div>
            <div>
              <div className="font-semibold text-primary">{basinData.totals.totalAcres.toLocaleString()}+</div>
              <div className="text-neutral-600">Acres</div>
            </div>
            <div>
              <div className="font-semibold text-primary">{basinData.totals.yearsInBusiness}+</div>
              <div className="text-neutral-600">Years</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
