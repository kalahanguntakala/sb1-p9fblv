import React, { useState } from 'react';
import FilterSidebar from '../components/ProductListing/FilterSidebar';
import ProductGrid from '../components/ProductListing/ProductGrid';
import SortDropdown from '../components/ProductListing/SortDropdown';
import { Filter, SlidersHorizontal } from 'lucide-react';

const mockProducts = [
  {
    id: '1',
    name: 'Slim Fit Cotton Shirt',
    brand: 'Zara',
    price: 2499,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80',
    isNew: true,
  },
  // Add more mock products...
];

const mockFilters = [
  {
    title: 'Categories',
    options: [
      { label: 'T-Shirts', count: 120 },
      { label: 'Shirts', count: 85 },
      { label: 'Jeans', count: 45 },
      { label: 'Trousers', count: 38 },
    ],
  },
  {
    title: 'Brands',
    options: [
      { label: 'Zara', count: 56 },
      { label: 'H&M', count: 48 },
      { label: 'Levis', count: 32 },
      { label: 'Nike', count: 28 },
    ],
  },
  {
    title: 'Size',
    options: [
      { label: 'S', count: 89 },
      { label: 'M', count: 156 },
      { label: 'L', count: 120 },
      { label: 'XL', count: 78 },
    ],
  },
];

const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price_asc' },
  { label: 'Price: High to Low', value: 'price_desc' },
  { label: 'Popularity', value: 'popularity' },
];

export default function ProductListingPage() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [sortBy, setSortBy] = useState('newest');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const handleFilterChange = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-medium">Men's Clothing</h1>
            <p className="text-gray-600 mt-1">Showing 248 results</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="md:hidden flex items-center gap-2 px-4 py-2 border rounded-lg"
              onClick={() => setIsMobileFiltersOpen(true)}
            >
              <Filter size={16} />
              <span>Filters</span>
            </button>
            <SortDropdown
              options={sortOptions}
              value={sortBy}
              onChange={setSortBy}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Desktop Filters */}
          <div className="hidden md:block">
            <FilterSidebar
              filters={mockFilters}
              selectedFilters={selectedFilters}
              priceRange={priceRange}
              onFilterChange={handleFilterChange}
              onPriceRangeChange={setPriceRange}
            />
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <ProductGrid products={mockProducts} />
          </div>
        </div>

        {/* Mobile Filters Modal */}
        {isMobileFiltersOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileFiltersOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-80 bg-white p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium">Filters</h2>
                <button onClick={() => setIsMobileFiltersOpen(false)}>
                  <SlidersHorizontal size={20} />
                </button>
              </div>
              <FilterSidebar
                filters={mockFilters}
                selectedFilters={selectedFilters}
                priceRange={priceRange}
                onFilterChange={handleFilterChange}
                onPriceRangeChange={setPriceRange}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}