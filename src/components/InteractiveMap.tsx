'use client';

import { useEffect, useState } from 'react';

// GeoJSON basin boundaries
const BASIN_GEOJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "id": "williston",
        "name": "Williston Basin",
        "displayName": "Williston"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-105.0, 49.0], [-101.0, 49.5], [-96.0, 49.0], [-95.5, 47.5],
          [-96.0, 46.0], [-98.0, 45.5], [-101.5, 45.5], [-104.5, 46.0],
          [-105.5, 47.5], [-105.0, 49.0]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "delaware",
        "name": "Delaware Basin",
        "displayName": "Delaware"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-104.8, 33.5], [-104.0, 33.5], [-103.0, 32.5], [-103.0, 30.8],
          [-104.5, 30.8], [-105.5, 31.5], [-105.5, 32.5], [-104.8, 33.5]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "midland",
        "name": "Midland Basin",
        "displayName": "Midland"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-103.0, 33.5], [-101.0, 33.5], [-100.5, 32.5], [-100.5, 31.0],
          [-101.5, 30.0], [-103.0, 30.8], [-103.0, 32.5], [-103.0, 33.5]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "eagle-ford",
        "name": "Eagle Ford Shale",
        "displayName": "Eagle Ford"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-99.8, 28.0], [-99.0, 28.2], [-98.0, 28.8], [-97.5, 29.5],
          [-97.0, 30.0], [-96.5, 31.0], [-97.0, 31.5], [-97.5, 31.0],
          [-98.5, 30.0], [-99.0, 29.0], [-100.0, 28.5], [-99.8, 28.0]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "haynesville",
        "name": "Haynesville Shale",
        "displayName": "Haynesville"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-94.8, 33.2], [-93.5, 33.5], [-93.0, 32.8], [-93.0, 32.0],
          [-93.8, 31.5], [-94.5, 31.5], [-95.0, 32.0], [-95.0, 32.8],
          [-94.8, 33.2]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "uinta",
        "name": "Uinta Basin",
        "displayName": "Uinta"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-111.0, 40.8], [-109.5, 41.0], [-109.0, 40.5], [-109.0, 39.5],
          [-110.5, 38.8], [-111.5, 39.0], [-111.5, 40.0], [-111.0, 40.8]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "dj",
        "name": "DJ Basin",
        "displayName": "DJ Basin"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-105.5, 41.5], [-103.0, 41.5], [-102.0, 41.0], [-101.5, 40.0],
          [-102.0, 38.5], [-104.5, 37.5], [-105.5, 38.5], [-106.0, 40.0],
          [-105.5, 41.5]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "powder-river",
        "name": "Powder River Basin",
        "displayName": "Powder River"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-107.5, 46.5], [-105.5, 47.0], [-104.5, 46.0], [-104.0, 44.5],
          [-105.0, 43.0], [-107.0, 43.0], [-108.0, 44.0], [-107.5, 46.5]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "anadarko",
        "name": "Anadarko Basin",
        "displayName": "Anadarko"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-103.0, 38.0], [-100.0, 38.5], [-95.5, 37.5], [-95.0, 36.0],
          [-96.0, 34.5], [-99.5, 34.0], [-102.0, 34.5], [-103.5, 36.5],
          [-103.0, 38.0]
        ]]
      }
    }
  ]
};

// Project sites across all basins
const PROJECT_SITES = [
  {
    id: 'bakken-1',
    name: 'Bakken Core Project',
    basin: 'williston',
    coordinates: [-103.2, 48.1] as [number, number],
    purchasePrice: 2850000,
    acres: 320,
    production: 45000,
    status: 'Producing',
    year: 2021,
    description: 'High-producing Bakken wells with 3-mile laterals'
  },
  {
    id: 'bakken-2', 
    name: 'Three Forks Development',
    basin: 'williston',
    coordinates: [-102.8, 47.9] as [number, number],
    purchasePrice: 1200000,
    acres: 180,
    production: 28000,
    status: 'Producing',
    year: 2022,
    description: 'Stacked pay zones with multiple formations'
  },
  {
    id: 'delaware-1',
    name: 'Wolfcamp A Acquisition',
    basin: 'delaware',
    coordinates: [-104.1, 31.8] as [number, number],
    purchasePrice: 4200000,
    acres: 450,
    production: 62000,
    status: 'Producing',
    year: 2020,
    description: 'Premium Delaware Basin acreage with excellent economics'
  },
  {
    id: 'delaware-2',
    name: 'Bone Spring Project',
    basin: 'delaware', 
    coordinates: [-103.7, 32.2] as [number, number],
    purchasePrice: 1800000,
    acres: 220,
    production: 35000,
    status: 'Producing',
    year: 2023,
    description: 'Multi-zone development with stacked completions'
  },
  {
    id: 'eagle-ford-1',
    name: 'Eagle Ford Core',
    basin: 'eagle-ford',
    coordinates: [-98.3, 28.8] as [number, number],
    purchasePrice: 3200000,
    acres: 380,
    production: 55000,
    status: 'Producing',
    year: 2019,
    description: 'Oil window with excellent EURs and low breakevens'
  },
  {
    id: 'eagle-ford-2',
    name: 'Condensate Window',
    basin: 'eagle-ford',
    coordinates: [-98.7, 29.2] as [number, number],
    purchasePrice: 2100000,
    acres: 280,
    production: 41000,
    status: 'Producing',
    year: 2021,
    description: 'Rich condensate production with premium pricing'
  },
  {
    id: 'haynesville-1',
    name: 'Haynesville Dry Gas',
    basin: 'haynesville',
    coordinates: [-94.2, 32.6] as [number, number],
    purchasePrice: 1500000,
    acres: 200,
    production: 32000,
    status: 'Producing',
    year: 2022,
    description: 'High-BTU natural gas with strong market fundamentals'
  },
  {
    id: 'uinta-1',
    name: 'Uinta Waxy Crude',
    basin: 'uinta',
    coordinates: [-110.1, 40.2] as [number, number],
    purchasePrice: 800000,
    acres: 150,
    production: 18000,
    status: 'Producing',
    year: 2023,
    description: 'Unique waxy crude with premium pricing differential'
  },
  {
    id: 'midland-1',
    name: 'Spraberry Development',
    basin: 'midland',
    coordinates: [-102.3, 32.1] as [number, number],
    purchasePrice: 3600000,
    acres: 420,
    production: 68000,
    status: 'Producing',
    year: 2020,
    description: 'Legacy Spraberry with modern completion techniques'
  },
  {
    id: 'midland-2',
    name: 'Wolfcamp B Project',
    basin: 'midland',
    coordinates: [-101.8, 31.9] as [number, number],
    purchasePrice: 2400000,
    acres: 300,
    production: 48000,
    status: 'Producing',
    year: 2021,
    description: 'Deep Wolfcamp with excellent reservoir quality'
  },
  {
    id: 'dj-1',
    name: 'Niobrara Development',
    basin: 'dj',
    coordinates: [-104.8, 40.8] as [number, number],
    purchasePrice: 1900000,
    acres: 250,
    production: 38000,
    status: 'Producing',
    year: 2022,
    description: 'Colorado Niobrara with regulatory compliance expertise'
  },
  {
    id: 'dj-2',
    name: 'Wattenberg Field',
    basin: 'dj',
    coordinates: [-104.2, 40.1] as [number, number],
    purchasePrice: 2800000,
    acres: 350,
    production: 52000,
    status: 'Producing',
    year: 2019,
    description: 'Proven Wattenberg acreage with established infrastructure'
  },
  {
    id: 'powder-river-1',
    name: 'Powder River Coal Bed',
    basin: 'powder-river',
    coordinates: [-106.2, 44.8] as [number, number],
    purchasePrice: 900000,
    acres: 180,
    production: 22000,
    status: 'Producing',
    year: 2023,
    description: 'Coal bed methane with environmental stewardship focus'
  },
  {
    id: 'anadarko-1',
    name: 'SCOOP Play',
    basin: 'anadarko',
    coordinates: [-98.8, 35.2] as [number, number],
    purchasePrice: 2200000,
    acres: 280,
    production: 42000,
    status: 'Producing',
    year: 2021,
    description: 'Oklahoma SCOOP with stacked pay potential'
  },
  {
    id: 'anadarko-2',
    name: 'STACK Development',
    basin: 'anadarko',
    coordinates: [-98.3, 35.8] as [number, number],
    purchasePrice: 1700000,
    acres: 220,
    production: 35000,
    status: 'Producing',
    year: 2022,
    description: 'STACK formation with multiple target zones'
  }
];

// Basin metadata with mineral rights insights
const BASINS = [
  {
    id: 'williston',
    name: 'Williston Basin',
    displayName: 'Williston',
    states: ['ND', 'MT'],
    statesFullName: ['North Dakota', 'Montana'],
    statistics: { dealsCompleted: 150, acresAcquired: 15000, yearsActive: 12 },
    coordinates: [-103.5, 48.0] as [number, number],
    cta: { text: 'Request Williston Offer', url: '/contact?basin=williston' },
    insights: [
      'Bakken Formation produces light, sweet crude oil',
      'Horizontal drilling and fracking revolutionized production since 2008',
      'North Dakota offers some of the highest royalty rates in the US'
    ]
  },
  {
    id: 'delaware',
    name: 'Delaware Basin',
    displayName: 'Delaware',
    states: ['TX', 'NM'],
    statesFullName: ['Texas', 'New Mexico'],
    statistics: { dealsCompleted: 200, acresAcquired: 25000, yearsActive: 15 },
    coordinates: [-104.0, 31.5] as [number, number],
    cta: { text: 'Request Delaware Offer', url: '/contact?basin=delaware' },
    insights: [
      'Multiple stacked pay zones increase mineral value significantly',
      'Wolfcamp and Bone Spring formations are primary targets',
      'New Mexico vs. Texas mineral rights have different tax structures'
    ]
  },
  {
    id: 'eagle-ford',
    name: 'Eagle Ford Shale',
    displayName: 'Eagle Ford',
    states: ['TX'],
    statesFullName: ['Texas'],
    statistics: { dealsCompleted: 180, acresAcquired: 20000, yearsActive: 14 },
    coordinates: [-98.5, 28.5] as [number, number],
    cta: { text: 'Request Eagle Ford Offer', url: '/contact?basin=eagle-ford' },
    insights: [
      'Produces oil, condensate, and natural gas across different windows',
      'Texas Relinquishment Act can affect mineral ownership duration',
      'Average well produces 100,000+ barrels over its lifetime'
    ]
  },
  {
    id: 'haynesville',
    name: 'Haynesville Shale',
    displayName: 'Haynesville',
    states: ['TX', 'LA'],
    statesFullName: ['Texas', 'Louisiana'],
    statistics: { dealsCompleted: 120, acresAcquired: 12000, yearsActive: 10 },
    coordinates: [-94.0, 32.5] as [number, number],
    cta: { text: 'Request Haynesville Offer', url: '/contact?basin=haynesville' },
    insights: [
      'One of the deepest shale plays at 10,500-13,500 feet',
      'Primarily dry natural gas with high BTU content',
      'Louisiana allows separate ownership of shallow vs. deep rights'
    ]
  },
  {
    id: 'uinta',
    name: 'Uinta Basin',
    displayName: 'Uinta',
    states: ['UT'],
    statesFullName: ['Utah'],
    statistics: { dealsCompleted: 80, acresAcquired: 8000, yearsActive: 8 },
    coordinates: [-110.0, 40.0] as [number, number],
    cta: { text: 'Request Uinta Offer', url: '/contact?basin=uinta' },
    insights: [
      'Produces waxy crude oil unique to this region',
      'Significant federal and Ute Tribal lands complicate ownership',
      'Monument Butte field is one of the largest in the lower 48 states'
    ]
  },
  {
    id: 'midland',
    name: 'Midland Basin',
    displayName: 'Midland',
    states: ['TX'],
    statesFullName: ['Texas'],
    statistics: { dealsCompleted: 190, acresAcquired: 22000, yearsActive: 15 },
    coordinates: [-102.0, 31.8] as [number, number],
    cta: { text: 'Request Midland Offer', url: '/contact?basin=midland' },
    insights: [
      'Spraberry and Wolfcamp formations drive production',
      'Over 100 years of production history with modern revival',
      'Texas mineral rights can be severed from surface rights indefinitely'
    ]
  },
  {
    id: 'dj',
    name: 'DJ Basin',
    displayName: 'DJ Basin',
    states: ['CO', 'WY'],
    statesFullName: ['Colorado', 'Wyoming'],
    statistics: { dealsCompleted: 140, acresAcquired: 14000, yearsActive: 11 },
    coordinates: [-104.5, 40.5] as [number, number],
    cta: { text: 'Request DJ Basin Offer', url: '/contact?basin=dj' },
    insights: [
      'Niobrara shale produces both oil and natural gas',
      'Colorado has strict setback regulations affecting new drilling',
      'Wattenberg Field is the 5th largest oil field in the US'
    ]
  },
  {
    id: 'powder-river',
    name: 'Powder River Basin',
    displayName: 'Powder River',
    states: ['WY', 'MT'],
    statesFullName: ['Wyoming', 'Montana'],
    statistics: { dealsCompleted: 100, acresAcquired: 10000, yearsActive: 9 },
    coordinates: [-106.0, 44.5] as [number, number],
    cta: { text: 'Request Powder River Offer', url: '/contact?basin=powder-river' },
    insights: [
      'Rich in both oil/gas and coal bed methane (CBM) production',
      'Split estate issues common with federal surface ownership',
      'Wyoming offers favorable tax treatment for mineral owners'
    ]
  },
  {
    id: 'anadarko',
    name: 'Anadarko Basin',
    displayName: 'Anadarko',
    states: ['OK', 'TX'],
    statesFullName: ['Oklahoma', 'Texas'],
    statistics: { dealsCompleted: 160, acresAcquired: 18000, yearsActive: 13 },
    coordinates: [-98.5, 35.5] as [number, number],
    cta: { text: 'Request Anadarko Offer', url: '/contact?basin=anadarko' },
    insights: [
      'SCOOP and STACK plays offer horizontal drilling opportunities',
      'Oklahoma uses a complex forced pooling system',
      'One of the nation\'s largest natural gas producing regions'
    ]
  }
];

export default function EnhancedBasinMap() {
  const [mapContainer, setMapContainer] = useState<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [map, setMap] = useState<any>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [hoveredBasin, setHoveredBasin] = useState<typeof BASINS[0] | null>(null);
  const [hoveredProject, setHoveredProject] = useState<typeof PROJECT_SITES[0] | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!mapContainer) return;

    const createMap = () => {
      if (typeof window === 'undefined') return;
      
      const mapboxgl = (window as any).mapboxgl;
      const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || 'pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGV4YW1wbGUifQ.example';
      mapboxgl.accessToken = token;

      const mapInstance = new mapboxgl.Map({
        container: mapContainer,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-98.5795, 39.8283],
        zoom: 3.5,
        minZoom: 3,
        maxZoom: 8
      });

      // Add navigation controls
      mapInstance.addControl(new mapboxgl.NavigationControl(), 'top-right');

      mapInstance.on('load', () => {
        setIsLoading(false);
        setMap(mapInstance);
        addBasinPolygons(mapInstance);
      });

      mapInstance.on('error', (e: any) => {
        console.error('Mapbox error:', e);
        setIsLoading(false);
      });

      setTimeout(() => {
        if (isLoading) setIsLoading(false);
      }, 5000);
    };

    if (typeof window === 'undefined' || !(window as any).mapboxgl) {
      if (typeof document !== 'undefined') {
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.href = 'https://api.mapbox.com/mapbox-gl-js/v3.15.0/mapbox-gl.css';
        document.head.appendChild(cssLink);

        const script = document.createElement('script');
        script.src = 'https://api.mapbox.com/mapbox-gl-js/v3.15.0/mapbox-gl.js';
        script.onload = () => createMap();
        script.onerror = () => setIsLoading(false);
        document.head.appendChild(script);
      }
    } else {
      createMap();
    }
  }, [mapContainer]);

  const addBasinPolygons = (mapInstance: any) => {
    mapInstance.addSource('basin-polygons', {
      type: 'geojson',
      data: BASIN_GEOJSON
    });

    mapInstance.addLayer({
      id: 'basin-fills',
      type: 'fill',
      source: 'basin-polygons',
      paint: {
        'fill-color': '#D4A756',
        'fill-opacity': [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          0.35,
          0.15
        ]
      }
    });

    mapInstance.addLayer({
      id: 'basin-outlines',
      type: 'line',
      source: 'basin-polygons',
      paint: {
        'line-color': '#D4A756',
        'line-width': [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          3,
          2
        ],
        'line-opacity': 0.8
      }
    });

    // Add project sites
    const projectFeatures = PROJECT_SITES.map(project => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: project.coordinates
      },
      properties: {
        id: project.id,
        name: project.name,
        basin: project.basin,
        purchasePrice: project.purchasePrice,
        acres: project.acres,
        production: project.production,
        status: project.status,
        year: project.year,
        description: project.description
      }
    }));

    mapInstance.addSource('project-sites', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: projectFeatures
      }
    });

    mapInstance.addLayer({
      id: 'project-sites',
      type: 'circle',
      source: 'project-sites',
      paint: {
        'circle-color': '#3B82F6',
        'circle-radius': [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          10,
          7
        ],
        'circle-stroke-color': '#ffffff',
        'circle-stroke-width': [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          3,
          2
        ],
        'circle-opacity': 0.9
      }
    });

    BASINS.forEach(basin => {
      const labelGeometry = {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: basin.coordinates
        },
        properties: {
          id: basin.id,
          displayName: basin.displayName
        }
      };

      mapInstance.addSource(`basin-label-${basin.id}`, {
        type: 'geojson',
        data: labelGeometry
      });

      mapInstance.addLayer({
        id: `basin-label-${basin.id}`,
        type: 'symbol',
        source: `basin-label-${basin.id}`,
        layout: {
          'text-field': basin.displayName,
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-size': 14,
          'text-anchor': 'center'
        },
        paint: {
          'text-color': '#002b3e',
          'text-halo-color': '#ffffff',
          'text-halo-width': 2
        }
      });
    });

    let hoveredBasinId: string | null = null;
    let hoveredProjectId: string | null = null;

    // Basin hover interactions
    mapInstance.on('mousemove', 'basin-fills', (e: any) => {
      if (e.features.length > 0) {
        if (hoveredBasinId !== null) {
          mapInstance.setFeatureState(
            { source: 'basin-polygons', id: hoveredBasinId },
            { hover: false }
          );
        }
        hoveredBasinId = e.features[0].properties.id;
        mapInstance.setFeatureState(
          { source: 'basin-polygons', id: hoveredBasinId },
          { hover: true }
        );
        mapInstance.getCanvas().style.cursor = 'pointer';

        const basin = BASINS.find(b => b.id === hoveredBasinId);
        if (basin) {
          setHoveredBasin(basin);
          setHoveredProject(null);
          setCursorPosition({ x: e.point.x, y: e.point.y });
        }
      }
    });

    mapInstance.on('mouseleave', 'basin-fills', () => {
      if (hoveredBasinId !== null) {
        mapInstance.setFeatureState(
          { source: 'basin-polygons', id: hoveredBasinId },
          { hover: false }
        );
      }
      hoveredBasinId = null;
      mapInstance.getCanvas().style.cursor = '';
      setHoveredBasin(null);
    });

    // Project site hover interactions
    mapInstance.on('mousemove', 'project-sites', (e: any) => {
      if (e.features.length > 0) {
        if (hoveredProjectId !== null) {
          mapInstance.setFeatureState(
            { source: 'project-sites', id: hoveredProjectId },
            { hover: false }
          );
        }
        hoveredProjectId = e.features[0].properties.id;
        mapInstance.setFeatureState(
          { source: 'project-sites', id: hoveredProjectId },
          { hover: true }
        );
        mapInstance.getCanvas().style.cursor = 'pointer';

        const project = PROJECT_SITES.find(p => p.id === hoveredProjectId);
        if (project) {
          setHoveredProject(project);
          setHoveredBasin(null);
          setCursorPosition({ x: e.point.x, y: e.point.y });
        }
      }
    });

    mapInstance.on('mouseleave', 'project-sites', () => {
      if (hoveredProjectId !== null) {
        mapInstance.setFeatureState(
          { source: 'project-sites', id: hoveredProjectId },
          { hover: false }
        );
      }
      hoveredProjectId = null;
      mapInstance.getCanvas().style.cursor = '';
      setHoveredProject(null);
    });

    mapInstance.on('click', 'basin-fills', (e: any) => {
      if (e.features.length > 0) {
        const basinId = e.features[0].properties.id;
        const basin = BASINS.find(b => b.id === basinId);
        if (basin && typeof window !== 'undefined') {
          window.location.href = basin.cta.url;
        }
      }
    });
  };

  const handleFilterChange = (filterId: string) => {
    setSelectedFilter(filterId);
    
    if (!map) return;

    if (filterId === 'all') {
      map.flyTo({
        center: [-98.5795, 39.8283],
        zoom: 3.5,
        duration: 300
      });
    } else {
      const feature = BASIN_GEOJSON.features.find(f => f.properties.id === filterId);
      if (feature) {
        const bounds = new (window as any).mapboxgl.LngLatBounds();
        
        if (feature.geometry.type === 'Polygon') {
          feature.geometry.coordinates[0].forEach((coord: number[]) => {
            bounds.extend(coord as [number, number]);
          });
        }
        
        map.fitBounds(bounds, {
          padding: 100,
          duration: 300
        });
      }
    }
  };

  // Calculate project statistics
  const totalProjects = PROJECT_SITES.length;
  const totalPurchasePrice = PROJECT_SITES.reduce((sum, project) => sum + project.purchasePrice, 0);
  const totalAcres = PROJECT_SITES.reduce((sum, project) => sum + project.acres, 0);
  const totalProduction = PROJECT_SITES.reduce((sum, project) => sum + project.production, 0);

  return (
    <div className="relative w-full h-[100vh] min-h-[800px] bg-neutral-50 rounded-3xl overflow-hidden">
      <div ref={setMapContainer} className="w-full h-full" />
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-neutral-600">Loading interactive map...</p>
          </div>
        </div>
      )}

      {!map && !isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-8">
            <h3 className="text-xl font-semibold text-primary mb-4">Our Active Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl">
              {PROJECT_SITES.map((project) => (
                <div key={project.id} className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-primary mb-2">{project.name}</h4>
                  <p className="text-sm text-neutral-600 mb-2">
                    {project.year} • {project.status}
                  </p>
                  <div className="space-y-1 text-xs text-neutral-500">
                    <div className="flex justify-between">
                      <span>Purchase:</span>
                      <span className="font-semibold">${(project.purchasePrice / 1000000).toFixed(1)}M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Acres:</span>
                      <span className="font-semibold">{project.acres}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Production:</span>
                      <span className="font-semibold">{project.production.toLocaleString()} BOE</span>
                    </div>
                  </div>
                  <p className="text-xs text-neutral-600 mt-2">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hover Tooltip Card */}
      {hoveredBasin && (
        <div 
          className="absolute z-50 pointer-events-none transition-opacity duration-200"
          style={{
            left: `${cursorPosition.x + 20}px`,
            top: `${cursorPosition.y - 20}px`,
            transform: cursorPosition.x > window.innerWidth / 2 ? 'translateX(-100%) translateX(-40px)' : 'none'
          }}
        >
          <div className="bg-white rounded-xl shadow-2xl p-4 max-w-xs border-2 border-gold-200">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-bold text-primary text-lg">{hoveredBasin.displayName}</h4>
                <p className="text-xs text-neutral-500">{hoveredBasin.statesFullName.join(', ')}</p>
              </div>
              <div className="bg-gold-100 rounded-lg px-2 py-1">
                <div className="text-xs font-semibold text-gold-800">{hoveredBasin.statistics.dealsCompleted}+ deals</div>
              </div>
            </div>
            
            <div className="space-y-2 mb-3">
              {hoveredBasin.insights.map((insight, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0"></div>
                  <p className="text-xs text-neutral-700 leading-relaxed">{insight}</p>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
              <div className="text-xs text-neutral-500">
                {hoveredBasin.statistics.acresAcquired.toLocaleString()}+ acres acquired
              </div>
              <div className="text-xs font-medium text-accent">Click to inquire →</div>
            </div>
          </div>
        </div>
      )}

      {/* Project Site Tooltip */}
      {hoveredProject && (
        <div 
          className="absolute z-50 pointer-events-none transition-opacity duration-200"
          style={{
            left: `${cursorPosition.x + 20}px`,
            top: `${cursorPosition.y - 20}px`,
            transform: cursorPosition.x > window.innerWidth / 2 ? 'translateX(-100%) translateX(-40px)' : 'none'
          }}
        >
          <div className="bg-white rounded-xl shadow-2xl p-4 max-w-xs border-2 border-primary/30">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-bold text-primary text-lg">{hoveredProject.name}</h4>
                <p className="text-xs text-neutral-500">{hoveredProject.year} • {hoveredProject.status}</p>
              </div>
              <div className="bg-primary/10 rounded-lg px-2 py-1">
                <div className="text-xs font-semibold text-primary">{hoveredProject.acres} acres</div>
              </div>
            </div>
            
            <div className="space-y-2 mb-3">
              <div className="flex justify-between items-center">
                <span className="text-neutral-600 text-sm">Purchase Price:</span>
                <span className="font-bold text-primary text-lg">${(hoveredProject.purchasePrice / 1000000).toFixed(1)}M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600 text-sm">Production:</span>
                <span className="font-bold text-primary text-lg">{hoveredProject.production.toLocaleString()} BOE</span>
              </div>
              <div className="bg-neutral-50 rounded-lg p-3 mt-3">
                <p className="text-sm text-neutral-700 leading-relaxed">{hoveredProject.description}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-primary/20">
              <div className="text-sm font-medium text-primary">Click to learn more →</div>
            </div>
          </div>
        </div>
      )}
      
      {map && (
        <div className="absolute top-6 left-6 z-10 max-w-[calc(100%-200px)]">
          <div className="bg-white/90 backdrop-blur rounded-xl shadow-lg p-4">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => handleFilterChange('all')}
                className={`px-4 py-3 rounded-full font-medium text-sm whitespace-nowrap transition-colors ${
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
                  className={`px-4 py-3 rounded-full font-medium text-sm whitespace-nowrap transition-colors ${
                    selectedFilter === basin.id
                      ? 'bg-accent text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <span>{basin.displayName}</span>
                    <span className="text-xs opacity-75 mt-0.5">{basin.states.join(', ')}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {map && (
        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg">
          <div className="flex gap-6 text-sm">
            <div>
              <div className="font-semibold text-primary">{totalProjects}</div>
              <div className="text-neutral-600">Active Projects</div>
            </div>
            <div>
              <div className="font-semibold text-primary">${(totalPurchasePrice / 1000000).toFixed(0)}M</div>
              <div className="text-neutral-600">Total Investment</div>
            </div>
            <div>
              <div className="font-semibold text-primary">{totalAcres.toLocaleString()}</div>
              <div className="text-neutral-600">Acres Acquired</div>
            </div>
            <div>
              <div className="font-semibold text-primary">{(totalProduction / 1000).toFixed(0)}K</div>
              <div className="text-neutral-600">BOE Produced</div>
            </div>
          </div>
        </div>
      )}

      {/* Map Legend */}
      {map && (
        <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg">
          <h4 className="font-semibold text-primary text-sm mb-3">Map Legend</h4>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gold-500"></div>
              <span className="text-neutral-600">Oil & Gas Basins</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 border-2 border-white"></div>
              <span className="text-neutral-600">Project Sites</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neutral-400"></div>
              <span className="text-neutral-600">Hover for details</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}