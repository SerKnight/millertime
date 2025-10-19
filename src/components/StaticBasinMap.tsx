'use client';

import { useState } from 'react';

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
    cta: {
      text: 'Request Anadarko Offer',
      url: '/contact?basin=anadarko'
    }
  }
];

interface BasinCardProps {
  basin: typeof BASINS[0];
  isSelected: boolean;
  onClick: () => void;
}

function BasinCard({ basin, isSelected, onClick }: BasinCardProps) {
  return (
    <div
      className={`cursor-pointer transition-all duration-200 ${
        isSelected 
          ? 'bg-accent text-white shadow-lg scale-105' 
          : 'bg-white hover:bg-neutral-50 hover:shadow-md'
      }`}
      onClick={onClick}
    >
      <div className="p-6 rounded-xl border border-neutral-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">{basin.displayName}</h3>
          <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z"/>
            </svg>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold">{basin.statistics.dealsCompleted}</div>
            <div className="text-sm opacity-75">Deals</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{basin.statistics.acresAcquired.toLocaleString()}+</div>
            <div className="text-sm opacity-75">Acres</div>
          </div>
        </div>
        
        <div className="mb-4">
          <span className="text-sm opacity-75">Active in: </span>
          <span className="text-sm font-medium">{basin.statesFullName.join(', ')}</span>
        </div>
        
        <button
          className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
            isSelected
              ? 'bg-white text-accent hover:bg-neutral-100'
              : 'bg-accent text-white hover:bg-accent-dark'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            window.location.href = basin.cta.url;
          }}
        >
          {basin.cta.text} →
        </button>
      </div>
    </div>
  );
}

export default function StaticBasinMap() {
  const [selectedBasin, setSelectedBasin] = useState<string>('all');
  const [hoveredBasin, setHoveredBasin] = useState<string | null>(null);

  const filteredBasins = selectedBasin === 'all' 
    ? BASINS 
    : BASINS.filter(basin => basin.id === selectedBasin);

  return (
    <div className="w-full">
      {/* Filter Buttons */}
      <div className="mb-8">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
          <button
            onClick={() => setSelectedBasin('all')}
            className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-colors ${
              selectedBasin === 'all'
                ? 'bg-primary text-white'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            All Basins
          </button>
          
          {BASINS.map(basin => (
            <button
              key={basin.id}
              onClick={() => setSelectedBasin(basin.id)}
              className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-colors ${
                selectedBasin === basin.id
                  ? 'bg-accent text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {basin.displayName}
            </button>
          ))}
        </div>
      </div>

      {/* Basin Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBasins.map((basin) => (
          <BasinCard
            key={basin.id}
            basin={basin}
            isSelected={selectedBasin === basin.id}
            onClick={() => setSelectedBasin(basin.id)}
          />
        ))}
      </div>

      {/* Trust Indicators */}
      <div className="mt-12 bg-primary/5 rounded-xl p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-primary mb-2">
            Our Track Record
          </h3>
          <p className="text-neutral-600">
            Over 15 years of experience in mineral rights acquisition
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">1,320+</div>
            <div className="text-sm text-neutral-600">Deals Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">144K+</div>
            <div className="text-sm text-neutral-600">Acres Acquired</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">15+</div>
            <div className="text-sm text-neutral-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">9</div>
            <div className="text-sm text-neutral-600">States Covered</div>
          </div>
        </div>
      </div>
    </div>
  );
}
