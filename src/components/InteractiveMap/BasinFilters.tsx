import { Basin } from '@/types/map.types';

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
            className={`basin-filter-btn px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-colors ${
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
              className={`basin-filter-btn px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-colors ${
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
