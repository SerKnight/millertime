'use client';

import { useEffect, useRef, useState } from 'react';

// Basin data
const BASINS = [
  {
    id: 'williston',
    name: 'Williston Basin',
    displayName: 'Williston',
    states: ['ND', 'MT'],
    statesFullName: ['North Dakota', 'Montana'],
    statistics: {
      dealsCompleted: 150,
      acresAcquired: 15000,
      yearsActive: 12
    },
    coordinates: [-103.5, 48.0] as [number, number],
    cta: {
      text: 'Request Williston Offer',
      url: '/contact?basin=williston'
    }
  },
  {
    id: 'delaware',
    name: 'Delaware Basin',
    displayName: 'Delaware',
    states: ['TX', 'NM'],
    statesFullName: ['Texas', 'New Mexico'],
    statistics: {
      dealsCompleted: 200,
      acresAcquired: 25000,
      yearsActive: 15
    },
    coordinates: [-104.0, 31.5] as [number, number],
    cta: {
      text: 'Request Delaware Offer',
      url: '/contact?basin=delaware'
    }
  },
  {
    id: 'eagle-ford',
    name: 'Eagle Ford Shale',
    displayName: 'Eagle Ford',
    states: ['TX'],
    statesFullName: ['Texas'],
    statistics: {
      dealsCompleted: 180,
      acresAcquired: 20000,
      yearsActive: 14
    },
    coordinates: [-98.5, 28.5] as [number, number],
    cta: {
      text: 'Request Eagle Ford Offer',
      url: '/contact?basin=eagle-ford'
    }
  },
  {
    id: 'haynesville',
    name: 'Haynesville Shale',
    displayName: 'Haynesville',
    states: ['TX', 'LA'],
    statesFullName: ['Texas', 'Louisiana'],
    statistics: {
      dealsCompleted: 120,
      acresAcquired: 12000,
      yearsActive: 10
    },
    coordinates: [-94.0, 32.5] as [number, number],
    cta: {
      text: 'Request Haynesville Offer',
      url: '/contact?basin=haynesville'
    }
  },
  {
    id: 'uinta',
    name: 'Uinta Basin',
    displayName: 'Uinta',
    states: ['UT'],
    statesFullName: ['Utah'],
    statistics: {
      dealsCompleted: 80,
      acresAcquired: 8000,
      yearsActive: 8
    },
    coordinates: [-110.0, 40.0] as [number, number],
    cta: {
      text: 'Request Uinta Offer',
      url: '/contact?basin=uinta'
    }
  },
  {
    id: 'midland',
    name: 'Midland Basin',
    displayName: 'Midland',
    states: ['TX'],
    statesFullName: ['Texas'],
    statistics: {
      dealsCompleted: 190,
      acresAcquired: 22000,
      yearsActive: 15
    },
    coordinates: [-102.0, 31.8] as [number, number],
    cta: {
      text: 'Request Midland Offer',
      url: '/contact?basin=midland'
    }
  },
  {
    id: 'dj',
    name: 'DJ Basin',
    displayName: 'DJ Basin',
    states: ['CO', 'WY'],
    statesFullName: ['Colorado', 'Wyoming'],
    statistics: {
      dealsCompleted: 140,
      acresAcquired: 14000,
      yearsActive: 11
    },
    coordinates: [-104.5, 40.5] as [number, number],
    cta: {
      text: 'Request DJ Basin Offer',
      url: '/contact?basin=dj'
    }
  },
  {
    id: 'powder-river',
    name: 'Powder River Basin',
    displayName: 'Powder River',
    states: ['WY', 'MT'],
    statesFullName: ['Wyoming', 'Montana'],
    statistics: {
      dealsCompleted: 100,
      acresAcquired: 10000,
      yearsActive: 9
    },
    coordinates: [-106.0, 44.5] as [number, number],
    cta: {
      text: 'Request Powder River Offer',
      url: '/contact?basin=powder-river'
    }
  },
  {
    id: 'anadarko',
    name: 'Anadarko Basin',
    displayName: 'Anadarko',
    states: ['OK', 'TX'],
    statesFullName: ['Oklahoma', 'Texas'],
    statistics: {
      dealsCompleted: 160,
      acresAcquired: 18000,
      yearsActive: 13
    },
    coordinates: [-98.5, 35.5] as [number, number],
    cta: {
      text: 'Request Anadarko Offer',
      url: '/contact?basin=anadarko'
    }
  }
];

export default function CDNMap() {
  const [mapContainer, setMapContainer] = useState<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [map, setMap] = useState<any>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  console.log('CDNMap component rendered');
  console.log('Current state:', { mapContainer: !!mapContainer, isLoading, map: !!map });

  // Debug useEffect that runs on every render
  useEffect(() => {
    console.log('CDNMap useEffect triggered - state changed');
    console.log('New state:', { mapContainer: !!mapContainer, isLoading, map: !!map });
  });

  useEffect(() => {
    if (!mapContainer) return;

    console.log('Container ready, initializing map...');
    console.log('Map container element:', mapContainer);
    console.log('Window object:', typeof window !== 'undefined' ? typeof window : 'undefined');
    console.log('Mapbox available:', typeof window !== 'undefined' && !!(window as any).mapboxgl);

    const createMap = () => {
      if (typeof window === 'undefined') return;
      
      const mapboxgl = (window as any).mapboxgl;
      const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
      
      console.log('Mapbox token:', token ? 'Found' : 'Not found');
      mapboxgl.accessToken = token;

      console.log('Creating map instance...');
      const mapInstance = new mapboxgl.Map({
        container: mapContainer,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-98.5795, 39.8283],
        zoom: 3.5,
        minZoom: 3,
        maxZoom: 8
      });

      console.log('Map instance created:', mapInstance);

      mapInstance.on('load', () => {
        console.log('Map loaded successfully');
        setIsLoading(false);
        setMap(mapInstance);
        addBasinLayers(mapInstance);
      });

      mapInstance.on('error', (e: any) => {
        console.error('Mapbox error:', e);
        setIsLoading(false);
      });

      // Timeout fallback
      setTimeout(() => {
        if (isLoading) {
          console.log('Map loading timeout, showing fallback');
          setIsLoading(false);
        }
      }, 5000);
    };

    // Check if Mapbox is already loaded
    if (typeof window === 'undefined' || !(window as any).mapboxgl) {
      console.log('Mapbox not loaded, loading from CDN...');
      
      if (typeof document !== 'undefined') {
        // Load CSS
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.href = 'https://api.mapbox.com/mapbox-gl-js/v3.15.0/mapbox-gl.css';
        document.head.appendChild(cssLink);

        // Load JS
        const script = document.createElement('script');
        script.src = 'https://api.mapbox.com/mapbox-gl-js/v3.15.0/mapbox-gl.js';
        script.onload = () => {
          console.log('Mapbox GL JS loaded from CDN');
          createMap();
        };
        script.onerror = () => {
          console.error('Failed to load Mapbox GL JS');
          setIsLoading(false);
        };
        document.head.appendChild(script);
      }
    } else {
      console.log('Mapbox already loaded');
      createMap();
    }
  }, [mapContainer]);

  const addBasinLayers = (mapInstance: any) => {
    BASINS.forEach(basin => {
      // Create basin geometry
      const basinGeometry = {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: basin.coordinates
        },
        properties: {
          id: basin.id,
          name: basin.name,
          displayName: basin.displayName,
          states: basin.states,
          statesFullName: basin.statesFullName,
          statistics: basin.statistics,
          cta: basin.cta
        }
      };

      // Add source
      mapInstance.addSource(`basin-${basin.id}`, {
        type: 'geojson',
        data: basinGeometry
      });

      // Add circle layer
      mapInstance.addLayer({
        id: `basin-circle-${basin.id}`,
        type: 'circle',
        source: `basin-${basin.id}`,
        paint: {
          'circle-color': '#D4A756',
          'circle-radius': 20,
          'circle-opacity': 0.3,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#D4A756'
        }
      });

      // Add label
      mapInstance.addLayer({
        id: `basin-label-${basin.id}`,
        type: 'symbol',
        source: `basin-${basin.id}`,
        layout: {
          'text-field': basin.displayName,
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-size': 14,
          'text-offset': [0, -2],
          'text-anchor': 'bottom'
        },
        paint: {
          'text-color': '#002b3e',
          'text-halo-color': '#ffffff',
          'text-halo-width': 2
        }
      });

      // Add interactivity
      mapInstance.on('mouseenter', `basin-circle-${basin.id}`, () => {
        mapInstance.getCanvas().style.cursor = 'pointer';
        mapInstance.setPaintProperty(`basin-circle-${basin.id}`, 'circle-opacity', 0.5);
      });

      mapInstance.on('mouseleave', `basin-circle-${basin.id}`, () => {
        mapInstance.getCanvas().style.cursor = '';
        mapInstance.setPaintProperty(`basin-circle-${basin.id}`, 'circle-opacity', 0.3);
      });

      mapInstance.on('click', `basin-circle-${basin.id}`, () => {
        if (typeof window !== 'undefined') {
          window.location.href = basin.cta.url;
        }
      });
    });
  };

  const handleFilterChange = (filterId: string) => {
    setSelectedFilter(filterId);
    
    if (!map) return;

    if (filterId === 'all') {
      map.flyTo({
        center: [-98.5795, 39.8283],
        zoom: 3.5,
        duration: 1000
      });
    } else {
      const basin = BASINS.find(b => b.id === filterId);
      if (basin) {
        map.flyTo({
          center: basin.coordinates,
          zoom: 6,
          duration: 1000
        });
      }
    }
  };

  // Always render the container, but show loading overlay when needed
  return (
    <div className="relative w-full h-[600px] bg-neutral-50 rounded-3xl overflow-hidden">
      {/* Map Container - Always render this so ref gets set */}
      <div ref={setMapContainer} className="w-full h-full" />
      
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-neutral-600">Loading interactive map...</p>
            <div className="mt-4 p-4 bg-yellow-100 rounded-lg text-sm">
              <p><strong>Debug Info:</strong></p>
              <p>Container: {mapContainer ? 'Ready' : 'Not ready'}</p>
              <p>Mapbox: {typeof window !== 'undefined' && (window as any).mapboxgl ? 'Available' : 'Not loaded'}</p>
              <p>Loading: {isLoading ? 'Yes' : 'No'}</p>
            </div>
          </div>
        </div>
      )}

      {/* Fallback when map fails to load */}
      {!map && !isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-8">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Our Operational Basins
            </h3>
            <div className="mb-4 p-4 bg-red-100 rounded-lg text-sm">
              <p><strong>Fallback State Debug:</strong></p>
              <p>Container: {mapContainer ? 'Ready' : 'Not ready'}</p>
              <p>Mapbox: {typeof window !== 'undefined' && (window as any).mapboxgl ? 'Available' : 'Not loaded'}</p>
              <p>Loading: {isLoading ? 'Yes' : 'No'}</p>
              <p>Map instance: {map ? 'Created' : 'Not created'}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
              {BASINS.map((basin) => (
                <div key={basin.id} className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-primary mb-2">{basin.displayName}</h4>
                  <p className="text-sm text-neutral-600 mb-2">
                    {basin.statesFullName.join(', ')}
                  </p>
                  <div className="flex justify-between text-xs text-neutral-500">
                    <span>{basin.statistics.dealsCompleted} deals</span>
                    <span>{basin.statistics.acresAcquired.toLocaleString()}+ acres</span>
                  </div>
                  <a
                    href={basin.cta.url}
                    className="inline-block mt-2 text-accent hover:text-accent-dark text-sm font-medium"
                  >
                    Request Offer →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Basin Filters - Only show when map is loaded */}
      {map && (
        <div className="absolute top-6 left-6 right-6 z-10">
          <div className="bg-white/90 backdrop-blur rounded-xl shadow-lg p-4">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => handleFilterChange('all')}
                className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-colors ${
                  selectedFilter === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                All Basins
              </button>
              
              {BASINS.map(basin => (
                <button
                  key={basin.id}
                  onClick={() => handleFilterChange(basin.id)}
                  className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-colors ${
                    selectedFilter === basin.id
                      ? 'bg-accent text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {basin.displayName}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Trust Indicators Overlay - Only show when map is loaded */}
      {map && (
        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg">
          <div className="flex gap-6 text-sm">
            <div>
              <div className="font-semibold text-primary">1,320+</div>
              <div className="text-neutral-600">Deals</div>
            </div>
            <div>
              <div className="font-semibold text-primary">144K+</div>
              <div className="text-neutral-600">Acres</div>
            </div>
            <div>
              <div className="font-semibold text-primary">15+</div>
              <div className="text-neutral-600">Years</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}