import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Brands() {
  const brands = [
    {
      name: "Luxury Collection",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80",
      category: "Premium"
    },
    {
      name: "Street Style",
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80",
      category: "Trending"
    },
    {
      name: "Designer Wear",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80",
      category: "Exclusive"
    },
    {
      name: "Casual Edit",
      image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80",
      category: "Essentials"
    }
  ];

  return (
    <div className="py-24 bg-[#FCFCFC]" id="brands">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-light mb-4">Featured Collections</h2>
            <p className="text-gray-600">Curated selection of premium fashion brands</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-black hover:gap-4 transition-all">
            View All Collections
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-sm mb-2">{brand.category}</div>
                  <h3 className="text-xl font-medium">{brand.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}