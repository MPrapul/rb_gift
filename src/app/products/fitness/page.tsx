"use client";

import React from 'react';
import Sidebar from '../../../components/Sidebar';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ProductCard';

const products = [
  {
    title: 'Premium Yoga Mat',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=2080&auto=format&fit=crop',
    price: '₹2,499',
    category: 'Yoga',
    slug: 'premium-yoga-mat'
  },
  {
    title: 'Resistance Bands Set',
    image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?q=80&w=2074&auto=format&fit=crop',
    price: '₹1,499',
    category: 'Equipment',
    slug: 'resistance-bands'
  },
  {
    title: 'Smart Fitness Watch',
    image: 'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?q=80&w=2070&auto=format&fit=crop',
    price: '₹5,999',
    category: 'Wearables',
    slug: 'smart-fitness-watch'
  },
  {
    title: 'Adjustable Dumbbells',
    image: 'https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=2127&auto=format&fit=crop',
    price: '₹8,999',
    category: 'Equipment',
    slug: 'adjustable-dumbbells'
  },
  {
    title: 'Foam Roller',
    image: 'https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?q=80&w=2072&auto=format&fit=crop',
    price: '₹1,299',
    category: 'Recovery',
    slug: 'foam-roller'
  },
  {
    title: 'Jump Rope Pro',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=2025&auto=format&fit=crop',
    price: '₹899',
    category: 'Equipment',
    slug: 'jump-rope'
  }
];

export default function FitnessPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-gradient-to-r from-primary via-blue-800 to-indigo-900">
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative h-full flex items-center justify-center text-white text-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-light mb-4">Fitness & Wellness</h1>
              <p className="text-lg md:text-xl text-gray-200">
                Premium fitness equipment and accessories for your wellness journey.
                Gift the joy of health and fitness.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Category Navigation */}
          <div className="flex flex-wrap gap-4 mb-12">
            {['All', 'Yoga', 'Equipment', 'Wearables', 'Recovery'].map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                {...product}
              />
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mt-24 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <div className="text-4xl text-primary mb-4">💪</div>
              <h3 className="text-xl font-medium mb-2">Quality Equipment</h3>
              <p className="text-gray-600">Professional-grade fitness equipment for home workouts</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <div className="text-4xl text-primary mb-4">🎯</div>
              <h3 className="text-xl font-medium mb-2">Goal-Oriented</h3>
              <p className="text-gray-600">Products designed to help achieve fitness goals effectively</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <div className="text-4xl text-primary mb-4">🌟</div>
              <h3 className="text-xl font-medium mb-2">Expert Selection</h3>
              <p className="text-gray-600">Curated by fitness experts for optimal results</p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
} 