import React from 'react';
import { Clock, Package, CreditCard, Truck, RefreshCw, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Package,
      title: "Curated Selection",
      description: "Browse through our handpicked collection of premium fashion items"
    },
    {
      icon: Truck,
      title: "Express Delivery",
      description: "Get your selected items delivered within 30 minutes"
    },
    {
      icon: Clock,
      title: "2-Hour Trial",
      description: "Take your time to try everything in your space"
    },
    {
      icon: Shield,
      title: "Zero Risk",
      description: "No upfront payment required until you decide what to keep"
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      description: "Hassle-free returns for items you don't want to keep"
    },
    {
      icon: CreditCard,
      title: "Secure Checkout",
      description: "Pay only for what you love with secure payment options"
    }
  ];

  return (
    <div className="py-24 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience a new way of shopping that puts you first. Try before you buy,
            with no commitments and no pressure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <feature.icon className="w-10 h-10 text-black mb-6" />
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}