"use client";

import React from 'react';
import Sidebar from '../../../components/Sidebar';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ProductCard';

const products = [
  {
    title: 'Smart Water Bottle',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=2087&auto=format&fit=crop',
    price: '₹2,499',
    category: 'Smart',
    slug: 'smart-water-bottle'
  },
  {
    title: 'Insulated Travel Mug',
    image: 'https://images.unsplash.com/photo-1577937927133-66ef87ce9c88?q=80&w=2074&auto=format&fit=crop',
    price: '₹1,999',
    category: 'Travel',
    slug: 'insulated-travel-mug'
  },
  {
    title: 'Sports Sipper',
    image: 'https://images.unsplash.com/photo-1616740793717-0abb7eff6c4a?q=80&w=2070&auto=format&fit=crop',
    price: '₹999',
    category: 'Sports',
    slug: 'sports-sipper'
  },
  {
    title: 'Glass Water Bottle',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=2087&auto=format&fit=crop',
    price: '₹1,499',
    category: 'Glass',
    slug: 'glass-water-bottle'
  },
  {
    title: 'Vacuum Flask',
    image: 'https://images.unsplash.com/photo-1622478129905-11cce6f04458?q=80&w=2070&auto=format&fit=crop',
    price: '₹2,999',
    category: 'Travel',
    slug: 'vacuum-flask'
  },
  {
    title: 'Kids Sipper',
    image: 'https://images.unsplash.com/photo-1575372587186-5012f8886b4e?q=80&w=2070&auto=format&fit=crop',
    price: '₹799',
    category: 'Kids',
    slug: 'kids-sipper'
  }
];

export default function SipperPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-gradient-to-r from-primary via-blue-700 to-cyan-900">
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative h-full flex items-center justify-center text-white text-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-light mb-4">Sippers & Water Bottles</h1>
              <p className="text-lg md:text-xl text-gray-200">
                Stay hydrated in style with our premium collection of sippers and water bottles.
                Sustainable and stylish solutions for every need.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Category Navigation */}
          <div className="flex flex-wrap gap-4 mb-12">
            {['All', 'Smart', 'Travel', 'Sports', 'Glass', 'Kids'].map((category) => (
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

          {/* Features Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-light text-center mb-12">Product Features</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl text-primary mb-4">♨️</div>
                <h3 className="text-xl font-medium mb-2">Temperature Control</h3>
                <p className="text-gray-600">Keep drinks hot or cold for hours</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl text-primary mb-4">🌱</div>
                <h3 className="text-xl font-medium mb-2">Eco-Friendly</h3>
                <p className="text-gray-600">Sustainable materials, less plastic waste</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl text-primary mb-4">💧</div>
                <h3 className="text-xl font-medium mb-2">Leak-Proof</h3>
                <p className="text-gray-600">Secure seals for worry-free carrying</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl text-primary mb-4">🎨</div>
                <h3 className="text-xl font-medium mb-2">Stylish Design</h3>
                <p className="text-gray-600">Modern aesthetics for everyday use</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
} 