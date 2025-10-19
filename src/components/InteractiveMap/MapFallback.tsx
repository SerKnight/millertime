import { BasinData } from '@/types/map.types';

interface MapFallbackProps {
  basinData: BasinData | null;
}

export default function MapFallback({ basinData }: MapFallbackProps) {
  if (!basinData) {
    return (
      <div className="w-full bg-neutral-50 rounded-3xl p-12 text-center">
        <h2 className="font-display text-3xl font-semibold text-primary mb-6">
          Interactive Map Unavailable
        </h2>
        <p className="text-neutral-600 mb-8">
          We're experiencing technical difficulties. Please contact us directly for information about our services.
        </p>
        <div className="space-y-4">
          <a
            href="/contact"
            className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-primary-dark transition-colors"
          >
            Contact Us
          </a>
          <div className="text-sm text-neutral-500">
            Phone: (720) 318-6907
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-neutral-50 rounded-3xl p-12">
      <h2 className="font-display text-3xl font-semibold text-primary mb-6">
        We Buy Mineral Rights in {basinData.totals.statesCovered} Major Basins
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {basinData.basins.map(basin => (
          <div key={basin.id} className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-display text-xl font-semibold text-primary mb-2">
              {basin.name}
            </h3>
            <p className="text-neutral-600 mb-4">
              {basin.statesFullName.join(', ')}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <div>
                <div className="font-semibold text-primary">{basin.statistics.dealsCompleted}</div>
                <div className="text-neutral-600">Deals</div>
              </div>
              <div>
                <div className="font-semibold text-primary">{basin.statistics.acresAcquired.toLocaleString()}+</div>
                <div className="text-neutral-600">Acres</div>
              </div>
            </div>
            <a
              href={basin.cta.url}
              className="inline-flex items-center text-accent font-semibold hover:text-accent-dark transition-colors"
            >
              {basin.cta.text} →
            </a>
          </div>
        ))}
      </div>
      
      {/* Trust Indicators */}
      <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
        <h3 className="font-display text-2xl font-semibold text-primary mb-6 text-center">
          Our Experience
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-primary">{basinData.totals.yearsInBusiness}+</div>
            <div className="text-neutral-600">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">{basinData.totals.totalDeals.toLocaleString()}+</div>
            <div className="text-neutral-600">Deals Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">{basinData.totals.totalAcres.toLocaleString()}+</div>
            <div className="text-neutral-600">Acres Acquired</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">{basinData.totals.statesCovered}</div>
            <div className="text-neutral-600">States Covered</div>
          </div>
        </div>
      </div>
    </div>
  );
}
