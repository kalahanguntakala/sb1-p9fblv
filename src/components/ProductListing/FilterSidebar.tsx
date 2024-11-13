import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FilterSection {
  title: string;
  options: { label: string; count: number }[];
}

interface PriceRange {
  min: number;
  max: number;
}

interface FilterSidebarProps {
  filters: FilterSection[];
  selectedFilters: string[];
  priceRange: PriceRange;
  onFilterChange: (filter: string) => void;
  onPriceRangeChange: (range: PriceRange) => void;
}

export default function FilterSidebar({
  filters,
  selectedFilters,
  priceRange,
  onFilterChange,
  onPriceRangeChange,
}: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(
    filters.map(f => f.title)
  );

  const toggleSection = (title: string) => {
    setExpandedSections(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="w-64 flex-shrink-0 pr-8">
      <div className="sticky top-24">
        <h2 className="text-lg font-medium mb-6">Filters</h2>

        {/* Price Range */}
        <div className="mb-8">
          <h3 className="text-sm font-medium mb-4">Price Range</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <input
                type="number"
                value={priceRange.min}
                onChange={(e) => onPriceRangeChange({ ...priceRange, min: Number(e.target.value) })}
                className="w-full px-3 py-2 border rounded-lg text-sm"
                placeholder="Min"
              />
              <input
                type="number"
                value={priceRange.max}
                onChange={(e) => onPriceRangeChange({ ...priceRange, max: Number(e.target.value) })}
                className="w-full px-3 py-2 border rounded-lg text-sm"
                placeholder="Max"
              />
            </div>
            <input
              type="range"
              min="0"
              max="10000"
              value={priceRange.max}
              onChange={(e) => onPriceRangeChange({ ...priceRange, max: Number(e.target.value) })}
              className="w-full"
            />
          </div>
        </div>

        {/* Filter Sections */}
        {filters.map((section) => (
          <div key={section.title} className="mb-6">
            <button
              className="flex items-center justify-between w-full text-sm font-medium mb-4"
              onClick={() => toggleSection(section.title)}
            >
              {section.title}
              {expandedSections.includes(section.title) ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>
            {expandedSections.includes(section.title) && (
              <div className="space-y-3">
                {section.options.map((option) => (
                  <label key={option.label} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedFilters.includes(option.label)}
                      onChange={() => onFilterChange(option.label)}
                      className="rounded border-gray-300 text-black focus:ring-black"
                    />
                    <span className="text-sm text-gray-600">{option.label}</span>
                    <span className="text-xs text-gray-400">({option.count})</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}