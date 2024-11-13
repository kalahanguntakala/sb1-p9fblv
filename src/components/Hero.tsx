import React from 'react';
import { ArrowRight, Clock, Package, RefreshCw, Truck } from 'lucide-react';

const features = [
  {
    icon: Package,
    title: "Browse & Order",
    description: "Select up to 10 clothes from curated collections"
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Get items delivered in 30 minutes"
  },
  {
    icon: Clock,
    title: "2-Hour Trial",
    description: "Try everything in your comfort zone"
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "Keep what you love, return the rest"
  }
];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent z-10" />
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <div className="relative h-full w-full">
            <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80"
              alt="Fashion model"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Hero Text */}
          <div className="mb-12">
            <h1 className="text-6xl md:text-7xl font-light mb-6 leading-tight">
              Try First.
              <br />
              <span className="font-medium">Pay Later.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience luxury fashion at home. Get items delivered in 30 minutes, 
              try them for 2 hours, keep what you love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary flex items-center justify-center gap-2 group">
                Start Shopping
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn btn-secondary">
                View Collections
              </button>
            </div>
          </div>

          {/* Trial Process */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-gray-200">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer"
              >
                <div className="mb-4 transition-transform duration-300 group-hover:-translate-y-1">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-black/5 rounded-xl transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-light mb-2">₹0</div>
              <p className="text-gray-600">Upfront Payment</p>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">2hrs</div>
              <p className="text-gray-600">Trial Period</p>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">100%</div>
              <p className="text-gray-600">Secure Returns</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Quote */}
      <div className="absolute bottom-8 right-8 max-w-xs bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hidden lg:block">
        <p className="text-lg font-light italic mb-4">
          "Try before you buy - the future of fashion shopping is here!"
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80" 
              alt="Customer"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-medium">Sarah Johnson</p>
            <p className="text-sm text-gray-600">Fashion Enthusiast</p>
          </div>
        </div>
      </div>
    </section>
  );
}