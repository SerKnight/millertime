# Product Requirements Document: Interactive US Basin Map Component

**Version:** 1.0  
**Date:** October 18, 2025  
**Project:** Miller Energy Group - Mineral Rights Acquisition Platform  
**Status:** Ready for Implementation

---

## 1. Overview

### 1.1 Executive Summary
An interactive US map component that serves as a primary conversion tool for Miller Energy Group's mineral rights acquisition business. The map will showcase the company's operational footprint across major oil & gas basins, provide basin-specific data, and guide visitors toward requesting offers or consultations.

### 1.2 Business Objectives
- **Primary:** Increase conversion rate for offer requests by 25%
- **Secondary:** Educate visitors about service areas and expertise
- **Tertiary:** Build trust through transparency and data visualization

### 1.3 Success Metrics
- Click-through rate to contact/offer forms: Target >8%
- Average time on map: Target >45 seconds
- Mobile engagement rate: Target >60% of desktop
- Basin-specific inquiry attribution: Track which basins drive most conversions

---

## 2. User Stories

### 2.1 Primary User Personas

**Persona 1: Mineral Rights Owner (Active Seller)**
- Age: 45-75
- Owns inherited mineral rights in Texas/New Mexico
- Seeking information on whether to sell
- Device: 60% desktop, 40% mobile

**Persona 2: Family Office Representative**
- Age: 35-55
- Managing mineral assets for family estate
- Researching acquisition companies
- Device: 70% desktop, 30% tablet

**Persona 3: Landman/Broker**
- Age: 30-60
- Representing clients with mineral assets
- Comparing acquisition companies
- Device: 80% desktop, 20% mobile

### 2.2 Core User Stories

```
US-001: Basin Discovery
As a mineral rights owner,
I want to see which basins Miller Energy Group operates in,
So that I can quickly determine if they serve my area.

Acceptance Criteria:
- Map displays all 9 basins with clear boundaries
- Basin names are visible on hover
- Active states are highlighted
- Mobile view maintains readability

US-002: Basin Information Access
As a potential seller,
I want to view detailed information about each basin,
So that I can understand Miller Energy Group's experience in my region.

Acceptance Criteria:
- Hover reveals basin-specific data
- Shows deals completed in that basin
- Displays acres acquired
- Lists active states
- Includes CTA button

US-003: Quick Conversion Path
As an interested seller,
I want to request an offer directly from the map,
So that I can start the evaluation process immediately.

Acceptance Criteria:
- CTA button opens contact/offer form
- Basin information pre-populates in form
- Form accessible within 2 clicks
- Mobile-optimized form experience

US-004: Geographic Filtering
As a researcher,
I want to filter basins by region or view all at once,
So that I can focus on relevant areas.

Acceptance Criteria:
- "All" view shows complete footprint
- Individual basin filter highlights specific region
- Smooth transitions between views
- Filter state persists during session

US-005: Trust Building
As a cautious seller,
I want to see proof of Miller Energy Group's experience,
So that I feel confident engaging with them.

Acceptance Criteria:
- Statistics displayed prominently
- Years of experience highlighted
- Deals completed shown
- Acres acquired displayed
```

---

## 3. Technical Specifications

### 3.1 Technology Stack

```
Frontend:
- Mapbox GL JS v3.x (map rendering)
- React 18+ (component framework)
- TypeScript (type safety)
- Tailwind CSS (styling)
- Framer Motion (animations)

APIs:
- Mapbox API (maps, geocoding)
- Custom basin boundary GeoJSON data

Build Tools:
- Next.js 14+ (framework)
- Webpack/Turbopack (bundling)
```

### 3.2 Mapbox Configuration

```typescript
// Mapbox Setup
const MAPBOX_CONFIG = {
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
  style: 'mapbox://styles/mapbox/light-v11', // Clean, professional
  center: [-98.5795, 39.8283], // Geographic center of US
  zoom: 3.5, // Show full continental US
  minZoom: 3,
  maxZoom: 8,
  bounds: [
    [-130, 24], // Southwest
    [-65, 50]   // Northeast
  ]
}

// Responsive Zoom Levels
const RESPONSIVE_ZOOM = {
  mobile: 3,
  tablet: 3.5,
  desktop: 4
}
```

### 3.3 Basin Data Structure

```typescript
interface Basin {
  id: string;
  name: string;
  displayName: string;
  geometry: GeoJSON.Geometry; // Basin boundary polygon
  statistics: {
    dealsCompleted: number;
    acresAcquired: number;
    yearsActive: number;
  };
  states: string[]; // ['TX', 'NM', 'LA']
  statesFullName: string[]; // ['Texas', 'New Mexico', 'Louisiana']
  coordinates: {
    center: [number, number]; // [lng, lat]
    labelPosition: [number, number];
  };
  color: {
    fill: string; // Hex color for basin fill
    stroke: string; // Hex color for border
    hover: string; // Hex color on hover
  };
  icon: {
    type: 'oil-derrick';
    position: [number, number];
  };
  ctaText: string;
  ctaUrl: string;
}

// Example Basin Data
const BASINS: Basin[] = [
  {
    id: 'williston',
    name: 'Williston Basin',
    displayName: 'Williston',
    geometry: { /* GeoJSON */ },
    statistics: {
      dealsCompleted: 150,
      acresAcquired: 15000,
      yearsActive: 12
    },
    states: ['ND', 'MT'],
    statesFullName: ['North Dakota', 'Montana'],
    coordinates: {
      center: [-103.5, 48.0],
      labelPosition: [-103.5, 47.5]
    },
    color: {
      fill: '#D4A756',
      stroke: '#B88F42',
      hover: '#E0BC7A'
    },
    icon: {
      type: 'oil-derrick',
      position: [-103.5, 48.5]
    },
    ctaText: 'Request Williston Offer',
    ctaUrl: '/contact?basin=williston'
  },
  // ... 8 more basins
];
```

### 3.4 Component Architecture

```
src/components/InteractiveMap/
├── index.tsx                    # Main export
├── MapContainer.tsx             # Mapbox wrapper component
├── BasinLayer.tsx               # Basin boundaries rendering
├── BasinTooltip.tsx             # Hover information display
├── BasinFilters.tsx             # Filter buttons UI
├── BasinLegend.tsx              # Map legend
├── MapControls.tsx              # Zoom/pan controls
├── LoadingState.tsx             # Loading skeleton
├── MobileMapView.tsx            # Mobile-optimized view
└── hooks/
    ├── useMapInteraction.tsx    # Map event handling
    ├── useBasinData.tsx         # Basin data management
    └── useViewportTracking.tsx  # Analytics tracking

src/data/
├── basins.json                  # Basin data
├── basin-boundaries.geojson     # GeoJSON geometries
└── basin-statistics.json        # Updated statistics

src/styles/
└── map-theme.css                # Map-specific styling

src/types/
└── map.types.ts                 # TypeScript definitions
```

---

## 4. UI/UX Requirements

### 4.1 Visual Design System

```css
/* Color Palette */
--map-primary: #002b3e;      /* Brand primary */
--map-accent: #D4A756;        /* Brand accent/gold */
--map-basin-default: #E0BC7A; /* Basin fill (light gold) */
--map-basin-hover: #D4A756;   /* Basin hover (gold) */
--map-basin-active: #B88F42;  /* Basin active (dark gold) */
--map-state-outline: #cbd5e1; /* State borders */
--map-background: #f8fafc;    /* Map background */
--map-water: #e0f2fe;         /* Water bodies */

/* Typography */
--font-basin-name: 'Mona Sans', sans-serif;
--font-statistics: 'Mona Sans', sans-serif;

/* Spacing */
--tooltip-padding: 1.5rem;
--filter-gap: 0.75rem;
--icon-size: 24px;
```

### 4.2 Interactive States

```typescript
// Hover State (Basin)
interface HoverState {
  cursor: 'pointer';
  basinFillOpacity: 0.5; // From 0.3
  basinStrokeWidth: 3; // From 2
  showTooltip: true;
  animation: {
    duration: '200ms',
    easing: 'ease-out'
  };
}

// Active State (Basin Selected)
interface ActiveState {
  basinFillOpacity: 0.7;
  basinStrokeWidth: 4;
  showStatistics: true;
  highlightIcon: true;
}

// Loading State
interface LoadingState {
  showSkeleton: true;
  skeletonType: 'shimmer';
  minLoadTime: 300; // ms
}
```

### 4.3 Tooltip Design

```tsx
// Desktop Tooltip (Hover)
<div className="basin-tooltip">
  {/* Header */}
  <div className="tooltip-header">
    <h3>{basin.displayName} Basin</h3>
    <IconOilDerrick />
  </div>
  
  {/* Statistics */}
  <div className="tooltip-stats">
    <div className="stat">
      <span className="stat-value">{deals}</span>
      <span className="stat-label">Deals Completed</span>
    </div>
    <div className="stat">
      <span className="stat-value">{acres}+</span>
      <span className="stat-label">Acres Acquired</span>
    </div>
  </div>
  
  {/* States */}
  <div className="tooltip-states">
    <span className="label">Active in:</span>
    <span className="states">{states.join(', ')}</span>
  </div>
  
  {/* CTA */}
  <Button variant="accent">
    Request {basin.displayName} Offer →
  </Button>
</div>

// Mobile Tooltip (Bottom Sheet)
<Sheet>
  <SheetContent position="bottom">
    {/* Same content, optimized for touch */}
  </SheetContent>
</Sheet>
```

### 4.4 Filter Interface

```tsx
<div className="basin-filters">
  <button 
    className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
    onClick={() => setFilter('all')}
  >
    All Basins
  </button>
  
  {BASINS.map(basin => (
    <button
      key={basin.id}
      className={`filter-btn ${activeFilter === basin.id ? 'active' : ''}`}
      onClick={() => setFilter(basin.id)}
    >
      {basin.displayName}
    </button>
  ))}
</div>
```

### 4.5 Mobile Optimization

```typescript
// Mobile View Configuration
const MOBILE_CONFIG = {
  // Simplified interaction
  interaction: 'tap', // No hover, use tap
  tooltipPosition: 'bottom-sheet', // Not floating
  filterPosition: 'horizontal-scroll', // Scrollable filter bar
  
  // Simplified visuals
  basinLabels: 'abbreviated', // Shorter names
  statisticsDisplay: 'icons-only', // Space-saving
  
  // Performance
  simplifyGeometry: true, // Reduce polygon complexity
  reduceAnimations: true, // Faster interactions
  lazyLoadIcons: true // Load icons as needed
}

// Touch Targets
const TOUCH_TARGETS = {
  minSize: 44, // px (iOS guidelines)
  basinMinArea: 2000, // sq px
  buttonPadding: 12 // px
}
```

---

## 5. Data Structure & Content

### 5.1 Complete Basin Dataset

```json
{
  "basins": [
    {
      "id": "williston",
      "name": "Williston Basin",
      "displayName": "Williston",
      "description": "Major Bakken formation in North Dakota and Montana",
      "statistics": {
        "dealsCompleted": 150,
        "acresAcquired": 15000,
        "yearsActive": 12,
        "averageResponseTime": "24 hours"
      },
      "states": ["ND", "MT"],
      "statesFullName": ["North Dakota", "Montana"],
      "primaryCounties": ["McKenzie", "Dunn", "Williams", "Mountrail"],
      "formations": ["Bakken", "Three Forks"],
      "coordinates": {
        "center": [-103.5, 48.0],
        "labelPosition": [-103.5, 47.5],
        "iconPosition": [-103.5, 48.5]
      },
      "color": {
        "fill": "rgba(212, 167, 86, 0.3)",
        "stroke": "#D4A756",
        "hover": "rgba(212, 167, 86, 0.5)"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[/* boundary coordinates */]]
      },
      "cta": {
        "text": "Request Williston Offer",
        "url": "/contact?basin=williston",
        "secondaryText": "Same-day quotes available"
      }
    },
    {
      "id": "delaware",
      "name": "Delaware Basin",
      "displayName": "Delaware",
      "description": "Permian sub-basin in West Texas and New Mexico",
      "statistics": {
        "dealsCompleted": 200,
        "acresAcquired": 25000,
        "yearsActive": 15,
        "averageResponseTime": "24 hours"
      },
      "states": ["TX", "NM"],
      "statesFullName": ["Texas", "New Mexico"],
      "primaryCounties": ["Reeves", "Loving", "Lea", "Eddy"],
      "formations": ["Bone Spring", "Wolfcamp"],
      "coordinates": {
        "center": [-104.0, 31.5],
        "labelPosition": [-104.0, 31.0],
        "iconPosition": [-104.0, 32.0]
      },
      "color": {
        "fill": "rgba(212, 167, 86, 0.3)",
        "stroke": "#D4A756",
        "hover": "rgba(212, 167, 86, 0.5)"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[/* boundary coordinates */]]
      },
      "cta": {
        "text": "Request Delaware Offer",
        "url": "/contact?basin=delaware",
        "secondaryText": "Same-day quotes available"
      }
    },
    {
      "id": "eagle-ford",
      "name": "Eagle Ford Shale",
      "displayName": "Eagle Ford",
      "statistics": {
        "dealsCompleted": 180,
        "acresAcquired": 20000,
        "yearsActive": 14,
        "averageResponseTime": "24 hours"
      },
      "states": ["TX"],
      "statesFullName": ["Texas"],
      "primaryCounties": ["Karnes", "DeWitt", "La Salle", "Dimmit"],
      "coordinates": {
        "center": [-98.5, 28.5],
        "labelPosition": [-98.5, 28.0],
        "iconPosition": [-98.5, 29.0]
      }
    },
    {
      "id": "haynesville",
      "name": "Haynesville Shale",
      "displayName": "Haynesville",
      "statistics": {
        "dealsCompleted": 120,
        "acresAcquired": 12000,
        "yearsActive": 10
      },
      "states": ["TX", "LA"],
      "statesFullName": ["Texas", "Louisiana"],
      "primaryCounties": ["Harrison", "Panola", "Caddo", "Bossier"],
      "coordinates": {
        "center": [-94.0, 32.5],
        "labelPosition": [-94.0, 32.0],
        "iconPosition": [-94.0, 33.0]
      }
    },
    {
      "id": "uinta",
      "name": "Uinta Basin",
      "displayName": "Uinta",
      "statistics": {
        "dealsCompleted": 80,
        "acresAcquired": 8000,
        "yearsActive": 8
      },
      "states": ["UT"],
      "statesFullName": ["Utah"],
      "primaryCounties": ["Duchesne", "Uintah"],
      "coordinates": {
        "center": [-110.0, 40.0],
        "labelPosition": [-110.0, 39.5],
        "iconPosition": [-110.0, 40.5]
      }
    },
    {
      "id": "midland",
      "name": "Midland Basin",
      "displayName": "Midland",
      "statistics": {
        "dealsCompleted": 190,
        "acresAcquired": 22000,
        "yearsActive": 15
      },
      "states": ["TX"],
      "statesFullName": ["Texas"],
      "primaryCounties": ["Midland", "Martin", "Howard", "Glasscock"],
      "coordinates": {
        "center": [-102.0, 31.8],
        "labelPosition": [-102.0, 31.3],
        "iconPosition": [-102.0, 32.3]
      }
    },
    {
      "id": "dj",
      "name": "DJ Basin",
      "displayName": "DJ Basin",
      "statistics": {
        "dealsCompleted": 140,
        "acresAcquired": 14000,
        "yearsActive": 11
      },
      "states": ["CO", "WY"],
      "statesFullName": ["Colorado", "Wyoming"],
      "primaryCounties": ["Weld", "Adams", "Laramie"],
      "coordinates": {
        "center": [-104.5, 40.5],
        "labelPosition": [-104.5, 40.0],
        "iconPosition": [-104.5, 41.0]
      }
    },
    {
      "id": "powder-river",
      "name": "Powder River Basin",
      "displayName": "Powder River",
      "statistics": {
        "dealsCompleted": 100,
        "acresAcquired": 10000,
        "yearsActive": 9
      },
      "states": ["WY", "MT"],
      "statesFullName": ["Wyoming", "Montana"],
      "primaryCounties": ["Campbell", "Johnson", "Sheridan"],
      "coordinates": {
        "center": [-106.0, 44.5],
        "labelPosition": [-106.0, 44.0],
        "iconPosition": [-106.0, 45.0]
      }
    },
    {
      "id": "anadarko",
      "name": "Anadarko Basin",
      "displayName": "Anadarko",
      "statistics": {
        "dealsCompleted": 160,
        "acresAcquired": 18000,
        "yearsActive": 13
      },
      "states": ["OK", "TX"],
      "statesFullName": ["Oklahoma", "Texas"],
      "primaryCounties": ["Canadian", "Dewey", "Blaine", "Kingfisher"],
      "coordinates": {
        "center": [-98.5, 35.5],
        "labelPosition": [-98.5, 35.0],
        "iconPosition": [-98.5, 36.0]
      }
    }
  ],
  "totals": {
    "totalDeals": 1320,
    "totalAcres": 144000,
    "yearsInBusiness": 15,
    "statesCovered": 9
  }
}
```

### 5.2 Trust Indicators

```typescript
const TRUST_INDICATORS = {
  experience: {
    label: "Years of Experience",
    value: "15+",
    icon: "calendar"
  },
  deals: {
    label: "Deals Completed",
    value: "1,320+",
    icon: "handshake"
  },
  acres: {
    label: "Acres Acquired",
    value: "144,000+",
    icon: "map"
  },
  states: {
    label: "States Covered",
    value: "9",
    icon: "map-pin"
  },
  rating: {
    label: "Customer Satisfaction",
    value: "4.9/5",
    icon: "star"
  },
  response: {
    label: "Average Response Time",
    value: "24 Hours",
    icon: "clock"
  }
}
```

---

## 6. Feature Specifications

### 6.1 Core Features (MVP)

**F-001: Basin Visualization**
- Display all 9 oil & gas basins with boundaries
- Color-coded basin regions (using brand gold/accent colors)
- State borders visible but subtle
- Basin names displayed on hover
- Oil derrick icons at basin centers

**F-002: Interactive Hover States**
- Smooth opacity/stroke changes on hover
- Tooltip appears near cursor (desktop) or bottom sheet (mobile)
- Shows: basin name, deals completed, acres acquired, active states
- CTA button in tooltip
- 200ms transition animations

**F-003: Basin Filtering**
- "All Basins" view (default)
- Individual basin filters (9 buttons)
- Smooth zoom/pan to filtered basin
- Highlighted basin with dimmed others
- Active filter state indicated

**F-004: Click-Through Conversion**
- CTA button in tooltip opens contact form
- Basin parameter passed to form (?basin=williston)
- Form pre-populated with basin information
- Secondary CTA: "Call (720) 318-6907"

**F-005: Mobile Optimization**
- Touch-friendly interactions (tap instead of hover)
- Bottom sheet tooltip on basin tap
- Horizontal scrolling filter bar
- Simplified basin boundaries (reduced polygon complexity)
- Larger touch targets (44px minimum)

### 6.2 Enhanced Features (Phase 2)

**F-006: Deal Heatmap**
- Visual intensity based on deals completed
- Darker gold = more activity
- Animated gradient overlay option

**F-007: Success Stories Integration**
- Link to basin-specific testimonials
- "View recent deals in {basin}" link
- Customer stories popup

**F-008: Real-time Statistics**
- Auto-update deal count (if available)
- "Last updated" timestamp
- Animation on stat changes

**F-009: Comparison Mode**
- Select multiple basins to compare
- Side-by-side statistics
- "Compare Offers" CTA

**F-010: Interactive Timeline**
- Scrub through years of activity
- See basin expansion over time
- Historical deal data

---

## 7. Implementation Plan

### 7.1 Phase 1: MVP (Week 1-2)

**Sprint 1.1: Setup & Infrastructure**
- [ ] Install Mapbox GL JS and configure API
- [ ] Create component file structure
- [ ] Set up TypeScript types
- [ ] Configure Tailwind for map styling
- [ ] Create basin data JSON files

**Sprint 1.2: Core Map Rendering**
- [ ] Implement MapContainer component
- [ ] Load US base map with custom styling
- [ ] Add state boundary layers
- [ ] Configure viewport (center, zoom, bounds)
- [ ] Implement loading states

**Sprint 1.3: Basin Layers**
- [ ] Create GeoJSON basin boundaries
- [ ] Implement BasinLayer component
- [ ] Add basin fill and stroke styling
- [ ] Implement hover state changes
- [ ] Add oil derrick icons

**Sprint 1.4: Interactivity**
- [ ] Implement basin hover detection
- [ ] Create BasinTooltip component
- [ ] Add statistics display
- [ ] Implement CTA buttons
- [ ] Add click handlers

**Sprint 1.5: Filtering**
- [ ] Create BasinFilters component
- [ ] Implement "All" and individual basin filters
- [ ] Add zoom/pan animations on filter
- [ ] Highlight/dim basin logic
- [ ] Add filter state management

**Sprint 1.6: Mobile Optimization**
- [ ] Implement responsive breakpoints
- [ ] Create mobile bottom sheet tooltip
- [ ] Optimize touch targets
- [ ] Simplify mobile visuals
- [ ] Test on multiple devices

### 7.2 Phase 2: Enhancements (Week 3-4)

**Sprint 2.1: Polish & Animations**
- [ ] Add micro-animations
- [ ] Implement smooth transitions
- [ ] Add loading skeletons
- [ ] Enhance visual feedback
- [ ] Performance optimization

**Sprint 2.2: Analytics Integration**
- [ ] Add viewport tracking
- [ ] Track basin interactions
- [ ] Monitor conversion attribution
- [ ] Implement heatmap analytics
- [ ] Set up A/B testing infrastructure

**Sprint 2.3: Advanced Features**
- [ ] Implement deal heatmap visualization
- [ ] Add success stories integration
- [ ] Create comparison mode
- [ ] Build interactive timeline (if desired)

### 7.3 Phase 3: Testing & Launch (Week 5)

**Sprint 3.1: Testing**
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Mobile device testing (iOS, Android)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Performance testing (Lighthouse)
- [ ] User testing with target personas

**Sprint 3.2: Launch**
- [ ] Integrate into home page
- [ ] Set up error monitoring (Sentry)
- [ ] Configure analytics tracking
- [ ] Deploy to production
- [ ] Monitor initial metrics

---

## 8. Technical Implementation Guide

### 8.1 Component Structure

```tsx
// src/components/InteractiveMap/index.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { BASINS, MAPBOX_CONFIG } from '@/data/basins';
import BasinTooltip from './BasinTooltip';
import BasinFilters from './BasinFilters';

export default function InteractiveMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [activeBasin, setActiveBasin] = useState<Basin | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [hoveredBasin, setHoveredBasin] = useState<Basin | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // Initialize map
  useEffect(() => {
    if (map.current) return; // Initialize only once

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: MAPBOX_CONFIG.style,
      center: MAPBOX_CONFIG.center,
      zoom: MAPBOX_CONFIG.zoom,
      minZoom: MAPBOX_CONFIG.minZoom,
      maxZoom: MAPBOX_CONFIG.maxZoom,
      bounds: MAPBOX_CONFIG.bounds
    });

    map.current.on('load', () => {
      // Add basin layers, sources, etc.
      addBasinLayers();
      addInteractivity();
    });
  }, []);

  // Add basin layers to map
  const addBasinLayers = () => {
    BASINS.forEach(basin => {
      // Add source
      map.current!.addSource(`basin-${basin.id}`, {
        type: 'geojson',
        data: basin.geometry
      });

      // Add fill layer
      map.current!.addLayer({
        id: `basin-fill-${basin.id}`,
        type: 'fill',
        source: `basin-${basin.id}`,
        paint: {
          'fill-color': basin.color.fill,
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
      map.current!.loadImage('/icons/oil-derrick.png', (error, image) => {
        if (error) throw error;
        if (!map.current!.hasImage('oil-derrick')) {
          map.current!.addImage('oil-derrick', image!);
        }
        map.current!.addLayer({
          id: `basin-icon-${basin.id}`,
          type: 'symbol',
          source: `basin-${basin.id}`,
          layout: {
            'icon-image': 'oil-derrick',
            'icon-size': 0.5
          }
        });
      });
    });
  };

  // Add hover/click interactivity
  const addInteractivity = () => {
    BASINS.forEach(basin => {
      // Hover enter
      map.current!.on('mouseenter', `basin-fill-${basin.id}`, (e) => {
        map.current!.getCanvas().style.cursor = 'pointer';
        map.current!.setPaintProperty(
          `basin-fill-${basin.id}`,
          'fill-opacity',
          0.5
        );
        setHoveredBasin(basin);
        if (e.lngLat) {
          setTooltipPosition({ 
            x: e.point.x, 
            y: e.point.y 
          });
        }
      });

      // Hover leave
      map.current!.on('mouseleave', `basin-fill-${basin.id}`, () => {
        map.current!.getCanvas().style.cursor = '';
        map.current!.setPaintProperty(
          `basin-fill-${basin.id}`,
          'fill-opacity',
          0.3
        );
        setHoveredBasin(null);
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
    
    if (filterId === 'all') {
      // Show all basins, reset view
      map.current!.flyTo({
        center: MAPBOX_CONFIG.center,
        zoom: MAPBOX_CONFIG.zoom,
        duration: 1000
      });
    } else {
      // Zoom to selected basin
      const basin = BASINS.find(b => b.id === filterId);
      if (basin) {
        map.current!.flyTo({
          center: basin.coordinates.center,
          zoom: 6,
          duration: 1000
        });
      }
    }
  };

  return (
    <div className="relative w-full h-[600px] bg-neutral-50 rounded-3xl overflow-hidden">
      {/* Map Container */}
      <div ref={mapContainer} className="w-full h-full" />
      
      {/* Basin Filters */}
      <BasinFilters
        basins={BASINS}
        activeFilter={selectedFilter}
        onFilterChange={handleFilterChange}
      />
      
      {/* Tooltip */}
      {hoveredBasin && (
        <BasinTooltip
          basin={hoveredBasin}
          position={tooltipPosition}
        />
      )}

      {/* Trust Indicators Overlay */}
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
    </div>
  );
}
```

### 8.2 Basin Tooltip Component

```tsx
// src/components/InteractiveMap/BasinTooltip.tsx
interface BasinTooltipProps {
  basin: Basin;
  position: { x: number; y: number };
}

export default function BasinTooltip({ basin, position }: BasinTooltipProps) {
  return (
    <div
      className="absolute pointer-events-none z-50"
      style={{
        left: position.x + 10,
        top: position.y + 10,
        transform: 'translateY(-50%)'
      }}
    >
      <div className="bg-white rounded-xl shadow-2xl p-6 w-80 pointer-events-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-2xl font-semibold text-primary">
            {basin.displayName} Basin
          </h3>
          <svg className="w-6 h-6 text-accent" /* oil derrick icon */>
            {/* SVG path */}
          </svg>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-primary/5 rounded-lg p-3">
            <div className="text-2xl font-bold text-primary">
              {basin.statistics.dealsCompleted}
            </div>
            <div className="text-sm text-neutral-600">Deals Completed</div>
          </div>
          <div className="bg-primary/5 rounded-lg p-3">
            <div className="text-2xl font-bold text-primary">
              {basin.statistics.acresAcquired.toLocaleString()}+
            </div>
            <div className="text-sm text-neutral-600">Acres Acquired</div>
          </div>
        </div>

        {/* States */}
        <div className="mb-4">
          <span className="text-sm text-neutral-600">Active in: </span>
          <span className="text-sm font-medium text-primary">
            {basin.statesFullName.join(', ')}
          </span>
        </div>

        {/* CTA */}
        <button
          onClick={() => window.location.href = basin.cta.url}
          className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-6 rounded-full transition-colors"
        >
          {basin.cta.text} →
        </button>
        
        <div className="mt-2 text-center text-xs text-neutral-500">
          {basin.cta.secondaryText}
        </div>
      </div>
    </div>
  );
}
```

### 8.3 Basin Filters Component

```tsx
// src/components/InteractiveMap/BasinFilters.tsx
interface BasinFiltersProps {
  basins: Basin[];
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
}

export default function BasinFilters({ 
  basins, 
  activeFilter, 
  onFilterChange 
}: BasinFiltersProps) {
  return (
    <div className="absolute top-6 left-6 right-6 z-10">
      <div className="bg-white/90 backdrop-blur rounded-xl shadow-lg p-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => onFilterChange('all')}
            className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-colors ${
              activeFilter === 'all'
                ? 'bg-primary text-white'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            All Basins
          </button>
          
          {basins.map(basin => (
            <button
              key={basin.id}
              onClick={() => onFilterChange(basin.id)}
              className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-colors ${
                activeFilter === basin.id
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
  );
}
```

---

## 9. Analytics & Success Metrics

### 9.1 Key Performance Indicators (KPIs)

```typescript
const ANALYTICS_EVENTS = {
  // Map Interactions
  MAP_LOADED: 'map_loaded',
  BASIN_HOVERED: 'basin_hovered',
  BASIN_CLICKED: 'basin_clicked',
  FILTER_APPLIED: 'filter_applied',
  CTA_CLICKED: 'cta_clicked',
  
  // Conversion Events
  FORM_OPENED: 'offer_form_opened',
  FORM_SUBMITTED: 'offer_form_submitted',
  PHONE_CLICKED: 'phone_number_clicked',
  
  // Engagement Metrics
  TIME_ON_MAP: 'time_on_map',
  BASINS_EXPLORED: 'basins_explored_count',
  SCROLL_DEPTH: 'map_scroll_depth'
}

// Tracking Implementation
const trackMapInteraction = (eventName: string, data: any) => {
  // Google Analytics 4
  gtag('event', eventName, {
    ...data,
    component: 'interactive_map'
  });
  
  // Mixpanel (or alternative)
  mixpanel.track(eventName, data);
};
```

### 9.2 Success Metrics Targets

| Metric | Baseline | Target (30 days) | Target (90 days) |
|--------|----------|------------------|------------------|
| Map Engagement Rate | N/A | 60% | 75% |
| Avg Time on Map | N/A | 45 sec | 60 sec |
| Basin Hover Rate | N/A | 80% | 90% |
| CTA Click-through | N/A | 8% | 12% |
| Form Completion | N/A | 40% | 50% |
| Mobile Engagement | N/A | 50% | 65% |
| Basin Attribution | N/A | 70% | 85% |

### 9.3 A/B Testing Plan

**Test 1: Tooltip Design**
- A: Minimal tooltip (stats only)
- B: Rich tooltip (stats + CTA)
- Metric: CTA click-through rate

**Test 2: Filter Placement**
- A: Top horizontal bar
- B: Left sidebar
- Metric: Filter usage rate

**Test 3: Basin Colors**
- A: Single gold color
- B: Heatmap by activity
- Metric: Basin exploration count

**Test 4: Mobile Interaction**
- A: Tap to view tooltip
- B: Long-press for details
- Metric: Mobile engagement rate

---

## 10. Accessibility Requirements

### 10.1 WCAG 2.1 AA Compliance

```typescript
// Accessibility Features
const ACCESSIBILITY_FEATURES = {
  // Keyboard Navigation
  keyboard: {
    tabIndex: 0, // Make map focusable
    arrowKeys: 'Navigate between basins',
    enter: 'Select basin',
    escape: 'Close tooltip'
  },
  
  // Screen Reader Support
  ariaLabels: {
    map: 'Interactive map of US oil and gas basins',
    basin: (name) => `${name} Basin`,
    filter: (name) => `Filter by ${name} Basin`,
    cta: (name) => `Request offer for ${name} Basin`
  },
  
  // Visual Accessibility
  contrast: {
    textOnLight: 7.1, // AAA
    textOnDark: 7.1, // AAA
    basinBorders: 4.5 // AA
  },
  
  // Focus Management
  focus: {
    visible: 'Always show focus ring',
    order: 'Logical tab order',
    trap: 'Trap in tooltip when open'
  }
}
```

### 10.2 Implementation Checklist

- [ ] All interactive elements keyboard accessible
- [ ] Proper ARIA labels on all controls
- [ ] Sufficient color contrast (4.5:1 minimum)
- [ ] Focus indicators visible
- [ ] Screen reader tested (NVDA, JAWS, VoiceOver)
- [ ] Reduced motion option for animations
- [ ] Text alternatives for visual information
- [ ] Semantic HTML structure

---

## 11. Performance Requirements

### 11.1 Performance Targets

| Metric | Target | Critical Threshold |
|--------|--------|-------------------|
| Initial Load Time | < 2s | < 3s |
| Time to Interactive | < 3s | < 4s |
| First Contentful Paint | < 1.5s | < 2s |
| Largest Contentful Paint | < 2.5s | < 3.5s |
| Cumulative Layout Shift | < 0.1 | < 0.25 |
| First Input Delay | < 100ms | < 300ms |

### 11.2 Optimization Strategies

```typescript
// Performance Optimizations
const OPTIMIZATIONS = {
  // Asset Optimization
  mapStyle: 'Use custom lightweight Mapbox style',
  geometries: 'Simplify basin polygons (reduce points by 50%)',
  images: 'Use WebP format, lazy load icons',
  
  // Code Splitting
  dynamicImport: 'Lazy load map component',
  chunkSplitting: 'Separate Mapbox GL bundle',
  
  // Caching
  mapTiles: 'Browser cache tiles (30 days)',
  basinData: 'LocalStorage cache (7 days)',
  
  // Rendering
  requestIdleCallback: 'Defer non-critical features',
  debounceHover: 'Debounce hover events (100ms)',
  throttleScroll: 'Throttle scroll events (200ms)'
}
```

---

## 12. Error Handling & Edge Cases

### 12.1 Error States

```typescript
// Error Handling
enum ErrorType {
  MAP_LOAD_FAILED = 'MAP_LOAD_FAILED',
  BASIN_DATA_MISSING = 'BASIN_DATA_MISSING',
  GEOLOCATION_DENIED = 'GEOLOCATION_DENIED',
  NETWORK_ERROR = 'NETWORK_ERROR'
}

const ERROR_MESSAGES = {
  [ErrorType.MAP_LOAD_FAILED]: {
    title: 'Map Unavailable',
    message: 'Unable to load the interactive map. Please refresh the page.',
    action: 'Refresh Page',
    fallback: 'Show static basin list'
  },
  [ErrorType.BASIN_DATA_MISSING]: {
    title: 'Data Unavailable',
    message: 'Basin information is temporarily unavailable.',
    action: 'Try Again',
    fallback: 'Show contact form'
  },
  [ErrorType.NETWORK_ERROR]: {
    title: 'Connection Issue',
    message: 'Please check your internet connection.',
    action: 'Retry',
    fallback: 'Show offline message'
  }
}
```

### 12.2 Fallback Experiences

```tsx
// Fallback Component (No JS or Map Fail)
function MapFallback() {
  return (
    <div className="w-full bg-neutral-50 rounded-3xl p-12">
      <h2 className="font-display text-3xl font-semibold text-primary mb-6">
        We Buy Mineral Rights in 9 Major Basins
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BASINS.map(basin => (
          <div key={basin.id} className="bg-white rounded-xl p-6">
            <h3 className="font-display text-xl font-semibold text-primary mb-2">
              {basin.name}
            </h3>
            <p className="text-neutral-600 mb-4">
              {basin.statesFullName.join(', ')}
            </p>
            <a
              href={basin.cta.url}
              className="inline-flex items-center text-accent font-semibold hover:text-accent-dark"
            >
              Request Offer →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## 13. Deployment & Maintenance

### 13.1 Environment Configuration

```bash
# .env.local
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here
NEXT_PUBLIC_ANALYTICS_ID=your_ga4_id_here
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn_here
```

### 13.2 Monitoring & Alerts

```typescript
// Monitoring Setup
const MONITORING = {
  errorTracking: {
    tool: 'Sentry',
    threshold: '> 5 errors/hour',
    alert: 'Email + Slack'
  },
  performance: {
    tool: 'Lighthouse CI',
    threshold: 'Score < 90',
    frequency: 'Every deploy'
  },
  uptime: {
    tool: 'Pingdom',
    threshold: 'Downtime > 1 min',
    alert: 'SMS + Email'
  }
}
```

### 13.3 Update Schedule

- **Basin Statistics**: Update monthly (1st of month)
- **Basin Boundaries**: Review quarterly
- **Design Tweaks**: Continuous based on A/B tests
- **Feature Additions**: Quarterly releases
- **Security Updates**: As needed (within 24 hours)

---

## 14. Handoff Checklist

### 14.1 Assets Required

- [ ] Mapbox API key (production)
- [ ] Basin boundary GeoJSON files
- [ ] Oil derrick icon PNG/SVG
- [ ] Basin statistics data (CSV or JSON)
- [ ] Brand colors and design system
- [ ] Analytics tracking IDs

### 14.2 Design Files

- [ ] Figma/Sketch designs for all states
- [ ] Mobile mockups (320px, 375px, 414px)
- [ ] Tablet mockups (768px, 1024px)
- [ ] Desktop mockups (1280px, 1920px)
- [ ] Animation specifications
- [ ] Color palette documentation

### 14.3 Documentation

- [ ] This PRD
- [ ] API documentation (Mapbox)
- [ ] Component documentation (Storybook)
- [ ] Testing procedures
- [ ] Deployment guide
- [ ] Maintenance runbook

---

## 15. Questions for Stakeholders

1. **Statistics Accuracy**: Are the basin statistics (deals, acres) accurate and updated? Who maintains these?

2. **Contact Form Integration**: Does the existing contact form support basin parameter pre-population?

3. **Mobile Priority**: What percentage of current traffic is mobile? Should we prioritize mobile-first development?

4. **Budget**: What is the budget for Mapbox API calls? (Important for usage planning)

5. **Timeline**: Is the 5-week timeline acceptable, or is there a hard deadline?

6. **Success Stories**: Are there basin-specific customer testimonials we can integrate?

7. **Legal/Compliance**: Are there any legal restrictions on displaying basin boundaries or statistics?

8. **Branding**: Should we use existing website colors exclusively, or create a unique map palette?

9. **Analytics**: Do we have access to Google Analytics 4 or another analytics platform?

10. **Maintenance**: Who will be responsible for updating basin statistics and content?

---

## Appendix A: Glossary

- **Basin**: A geological depression where sedimentary rocks and hydrocarbons accumulate
- **Mineral Rights**: Ownership of subsurface minerals (oil, gas, coal, etc.)
- **Royalty Interest**: Right to receive percentage of production revenue
- **ORRI**: Overriding Royalty Interest - carved from working interest
- **Working Interest**: Ownership stake bearing operational costs
- **Leasehold**: Rights granted by mineral owner to operator
- **Landman**: Professional who negotiates mineral rights transactions
- **GeoJSON**: JSON format for encoding geographic data structures
- **Mapbox GL JS**: JavaScript library for interactive maps
- **CTA**: Call-to-Action - button or link prompting user action

---

## Appendix B: References

- Mapbox GL JS Documentation: https://docs.mapbox.com/mapbox-gl-js/
- GeoJSON Specification: https://geojson.org/
- WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- Next.js Documentation: https://nextjs.org/docs
- Framer Motion: https://www.framer.com/motion/

---

**Document Version Control:**
- v1.0 - October 18, 2025 - Initial PRD creation
- Ready for implementation by AI coding assistant

**Next Steps:**
1. Review and approve PRD with stakeholders
2. Gather required assets (API keys, basin data, icons)
3. Set up development environment
4. Begin Phase 1 implementation
5. Schedule weekly progress reviews

---

*This PRD is comprehensive and ready to hand to an AI coding assistant for immediate implementation. All technical specifications, user stories, and requirements are clearly defined.*

