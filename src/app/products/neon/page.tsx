"use client";

import React from 'react';
import Sidebar from '../../../components/Sidebar';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ProductCard';

const products = [
  {
    title: 'Custom Name Neon Sign',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2069&auto=format&fit=crop',
    price: '₹4,999',
    category: 'Custom Signs',
    slug: 'custom-name-neon'
  },
  {
    title: 'Motivational Quote Light',
    image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=2069&auto=format&fit=crop',
    price: '₹6,999',
    category: 'Quotes',
    slug: 'motivational-quote'
  },
  {
    title: 'LED Strip Light Kit',
    image: 'https://images.unsplash.com/photo-1586791965591-15d8892f6dd6?q=80&w=2072&auto=format&fit=crop',
    price: '₹2,499',
    category: 'LED Strips',
    slug: 'led-strip-kit'
  },
  {
    title: 'Geometric Neon Art',
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=2074&auto=format&fit=crop',
    price: '₹8,999',
    category: 'Art',
    slug: 'geometric-neon'
  },
  {
    title: 'RGB Gaming Light',
    image: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=2070&auto=format&fit=crop',
    price: '₹3,999',
    category: 'Gaming',
    slug: 'rgb-gaming-light'
  },
  {
    title: 'Logo Design Light',
    image: 'https://images.unsplash.com/photo-1519608425089-7f3bfa6f6bb8?q=80&w=2070&auto=format&fit=crop',
    price: '₹7,999',
    category: 'Business',
    slug: 'logo-design-light'
  }
];

export default function NeonPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-gradient-to-r from-primary via-purple-900 to-pink-900">
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative h-full flex items-center justify-center text-white text-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-light mb-4">Neon & LED Lights</h1>
              <p className="text-lg md:text-xl text-gray-200">
                Illuminate your space with custom neon signs and LED lights.
                Make a statement that glows.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Category Navigation */}
          <div className="flex flex-wrap gap-4 mb-12">
            {['All', 'Custom Signs', 'Quotes', 'LED Strips', 'Art', 'Gaming', 'Business'].map((category) => (
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
            <h2 className="text-3xl font-light text-center mb-12">Why Choose Our Neon Products?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl text-primary mb-4">⚡</div>
                <h3 className="text-xl font-medium mb-2">Energy Efficient</h3>
                <p className="text-gray-600">LED technology for low power consumption</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl text-primary mb-4">🎨</div>
                <h3 className="text-xl font-medium mb-2">Customizable</h3>
                <p className="text-gray-600">Personalize your design and colors</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl text-primary mb-4">🛠️</div>
                <h3 className="text-xl font-medium mb-2">Easy Installation</h3>
                <p className="text-gray-600">Ready to mount with all accessories included</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
} 