# Interactive Map Component

A conversion-focused interactive US map component for Miller Energy Group's mineral rights acquisition business.

## Features

- **Interactive Basin Visualization**: 9 major oil & gas basins with hover states
- **Mobile-Optimized**: Touch interactions and responsive design
- **Conversion-Focused**: CTA buttons and trust indicators
- **Professional Design**: Brand-consistent styling with smooth animations
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation

## Components

### Main Components
- `InteractiveMap` - Main map container with Mapbox integration
- `BasinTooltip` - Desktop hover tooltip with basin statistics
- `BasinFilters` - Filter buttons for basin selection
- `LoadingState` - Loading skeleton while map initializes
- `MapFallback` - Static fallback when map fails to load

### Data Files
- `basins.json` - Basin data with statistics and coordinates
- `basin-boundaries.geojson` - GeoJSON basin boundary polygons
- `map.types.ts` - TypeScript type definitions

## Usage

```tsx
import InteractiveMap from '@/components/InteractiveMap';

export default function MapPage() {
  return (
    <InteractiveMap 
      height="h-[700px]"
      className="shadow-2xl"
    />
  );
}
```

## Configuration

### Environment Variables
```bash
# Required
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here

# Optional
NEXT_PUBLIC_ANALYTICS_ID=your_ga4_id_here
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn_here
```

### Mapbox Setup
1. Get a Mapbox access token from [mapbox.com](https://account.mapbox.com/access-tokens/)
2. Add it to your `.env.local` file
3. The map will automatically configure with professional styling

## Basin Data

The component displays 9 major oil & gas basins:

1. **Williston Basin** (ND, MT) - Bakken formation
2. **Delaware Basin** (TX, NM) - Permian sub-basin
3. **Eagle Ford Shale** (TX) - South Texas shale
4. **Haynesville Shale** (TX, LA) - Natural gas play
5. **Uinta Basin** (UT) - Northeastern Utah
6. **Midland Basin** (TX) - Permian sub-basin
7. **DJ Basin** (CO, WY) - Denver-Julesburg
8. **Powder River Basin** (WY, MT) - Coal and oil
9. **Anadarko Basin** (OK, TX) - Oklahoma and Texas

## Mobile Optimization

- **Touch Interactions**: Tap to view basin information
- **Bottom Sheet**: Mobile-optimized tooltip design
- **Responsive Zoom**: Different zoom levels for mobile/desktop
- **Touch Targets**: 44px minimum for accessibility

## Styling

The component uses Tailwind CSS with custom map-specific styles:

- **Brand Colors**: Primary (#002b3e), Accent (#D4A756)
- **Basin Colors**: Gold theme with hover states
- **Animations**: Smooth transitions and micro-interactions
- **Accessibility**: High contrast and focus states

## Performance

- **Lazy Loading**: Map loads only when needed
- **Optimized Geometries**: Simplified basin boundaries
- **Caching**: Browser cache for map tiles
- **Mobile Performance**: Reduced animations and simplified visuals

## Analytics

Track user interactions with the map:

```typescript
// Events tracked
- map_loaded
- basin_hovered
- basin_clicked
- filter_applied
- cta_clicked
- form_opened
```

## Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: ARIA labels and semantic HTML
- **High Contrast**: Support for high contrast mode
- **Reduced Motion**: Respects user motion preferences
- **Focus Management**: Clear focus indicators

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Map Not Loading
1. Check Mapbox token is set correctly
2. Verify network connectivity
3. Check browser console for errors
4. Fallback component will display if map fails

### Performance Issues
1. Reduce basin polygon complexity
2. Enable lazy loading
3. Optimize images and icons
4. Check mobile performance

### Mobile Issues
1. Test touch interactions
2. Verify responsive breakpoints
3. Check bottom sheet functionality
4. Test on various devices

## Development

```bash
# Install dependencies
npm install mapbox-gl @types/mapbox-gl

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

1. Set Mapbox token in production environment
2. Test on various devices and browsers
3. Monitor performance and analytics
4. Update basin statistics regularly

## Maintenance

- **Monthly**: Update basin statistics
- **Quarterly**: Review basin boundaries
- **As Needed**: Security updates and bug fixes
- **Continuous**: Monitor performance and user feedback
