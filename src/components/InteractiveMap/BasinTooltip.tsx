import { Basin, TooltipPosition } from '@/types/map.types';

interface BasinTooltipProps {
  basin: Basin;
  position: TooltipPosition;
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
      <div className="basin-tooltip bg-white rounded-xl shadow-2xl p-6 w-80 pointer-events-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-2xl font-semibold text-primary">
            {basin.displayName} Basin
          </h3>
          <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L8 6h8l-4-4zM8 6v12h8V6H8zM10 8h4v8h-4V8z"/>
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
