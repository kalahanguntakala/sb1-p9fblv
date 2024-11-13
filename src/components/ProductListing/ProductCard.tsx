import React from 'react';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  image: string;
  isNew?: boolean;
}

export default function ProductCard({ 
  name, 
  brand, 
  price, 
  originalPrice, 
  image, 
  isNew 
}: ProductCardProps) {
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        <button 
          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm 
                     shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
        >
          <Heart className="w-5 h-5" />
        </button>
        {isNew && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-black text-white text-xs font-medium rounded-full">
            New Arrival
          </span>
        )}
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="font-medium text-gray-900 group-hover:text-black">{brand}</h3>
        <p className="text-sm text-gray-600">{name}</p>
        <div className="flex items-center gap-2">
          <span className="font-medium">₹{price.toLocaleString()}</span>
          <span className="text-sm text-gray-500 line-through">₹{originalPrice.toLocaleString()}</span>
          <span className="text-sm text-green-600 font-medium">{discount}% off</span>
        </div>
      </div>
    </div>
  );
}