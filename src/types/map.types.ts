export interface Basin {
  id: string;
  name: string;
  displayName: string;
  description: string;
  statistics: {
    dealsCompleted: number;
    acresAcquired: number;
    yearsActive: number;
    averageResponseTime: string;
  };
  states: string[];
  statesFullName: string[];
  primaryCounties: string[];
  formations: string[];
  coordinates: {
    center: [number, number];
    labelPosition: [number, number];
    iconPosition: [number, number];
  };
  color: {
    fill: string;
    stroke: string;
    hover: string;
  };
  cta: {
    text: string;
    url: string;
    secondaryText: string;
  };
}

export interface BasinData {
  basins: Basin[];
  totals: {
    totalDeals: number;
    totalAcres: number;
    yearsInBusiness: number;
    statesCovered: number;
  };
}

export interface MapboxConfig {
  accessToken: string;
  style: string;
  center: [number, number];
  zoom: number;
  minZoom: number;
  maxZoom: number;
  bounds: [[number, number], [number, number]];
}

export interface TooltipPosition {
  x: number;
  y: number;
}

export interface MapInteraction {
  hoveredBasin: Basin | null;
  activeBasin: Basin | null;
  selectedFilter: string;
  tooltipPosition: TooltipPosition;
}

export interface TrustIndicator {
  label: string;
  value: string;
  icon: string;
}

export interface MapError {
  type: 'MAP_LOAD_FAILED' | 'BASIN_DATA_MISSING' | 'NETWORK_ERROR';
  title: string;
  message: string;
  action: string;
  fallback: string;
}
