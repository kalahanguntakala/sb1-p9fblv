import React from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: "New Arrivals",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80",
    itemCount: "250+ Items"
  },
  {
    name: "Trending Now",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80",
    itemCount: "180+ Items"
  },
  {
    name: "Summer Collection",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80",
    itemCount: "320+ Items"
  }
];

export default function FeaturedCategories() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-light mb-4">Featured Categories</h2>
            <p className="text-gray-600">Explore our curated collections</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-black hover:gap-4 transition-all">
            View All Categories
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group cursor-pointer relative overflow-hidden rounded-2xl aspect-[4/5]"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-2xl font-medium mb-2">{category.name}</h3>
                <p className="text-white/80">{category.itemCount}</p>
                <button className="mt-4 flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Shop Now
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}