"use client";

import React from 'react';
import Sidebar from '../../../components/Sidebar';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ProductCard';

const products = [
  {
    title: 'Ergonomic Desk Chair',
    image: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?q=80&w=2069&auto=format&fit=crop',
    price: '₹12,999',
    category: 'Furniture',
    slug: 'ergonomic-desk-chair'
  },
  {
    title: 'Adjustable Desk',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=2069&auto=format&fit=crop',
    price: '₹18,999',
    category: 'Furniture',
    slug: 'adjustable-desk'
  },
  {
    title: 'Desk Organizer Set',
    image: 'https://images.unsplash.com/photo-1587467512961-120760940315?q=80&w=2070&auto=format&fit=crop',
    price: '₹1,499',
    category: 'Accessories',
    slug: 'desk-organizer'
  },
  {
    title: 'LED Desk Lamp',
    image: 'https://images.unsplash.com/photo-1534281672995-d96caa00c7ef?q=80&w=2070&auto=format&fit=crop',
    price: '₹2,999',
    category: 'Lighting',
    slug: 'led-desk-lamp'
  },
  {
    title: 'Noise-Canceling Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop',
    price: '₹8,999',
    category: 'Electronics',
    slug: 'noise-canceling-headphones'
  },
  {
    title: 'Laptop Stand',
    image: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37?q=80&w=2070&auto=format&fit=crop',
    price: '₹1,999',
    category: 'Accessories',
    slug: 'laptop-stand'
  }
];

export default function WFHPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-gradient-to-r from-primary via-blue-800 to-indigo-900">
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative h-full flex items-center justify-center text-white text-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-light mb-4">Work From Home</h1>
              <p className="text-lg md:text-xl text-gray-200">
                Transform your home office with our curated collection of WFH essentials.
                Comfort meets productivity.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Category Navigation */}
          <div className="flex flex-wrap gap-4 mb-12">
            {['All', 'Furniture', 'Electronics', 'Accessories', 'Lighting'].map((category) => (
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
            <h2 className="text-3xl font-light text-center mb-12">Why Choose Our WFH Products?</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="text-4xl text-primary mb-4">🛋️</div>
                <h3 className="text-xl font-medium mb-2">Ergonomic Design</h3>
                <p className="text-gray-600">Designed for comfort during long work hours</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="text-4xl text-primary mb-4">⚡</div>
                <h3 className="text-xl font-medium mb-2">Productivity</h3>
                <p className="text-gray-600">Tools that enhance your work efficiency</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="text-4xl text-primary mb-4">🎯</div>
                <h3 className="text-xl font-medium mb-2">Quality</h3>
                <p className="text-gray-600">Premium materials and construction</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="text-4xl text-primary mb-4">🎨</div>
                <h3 className="text-xl font-medium mb-2">Style</h3>
                <p className="text-gray-600">Modern designs that complement your space</p>
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="mt-24 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-light text-center mb-8">WFH Setup Tips</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-4 text-primary">Ergonomic Essentials</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Maintain proper posture with ergonomic chairs</li>
                  <li>• Position your screen at eye level</li>
                  <li>• Use wrist rests for keyboard and mouse</li>
                  <li>• Take regular breaks and stretch</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4 text-primary">Productivity Boosters</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Create a dedicated workspace</li>
                  <li>• Ensure proper lighting</li>
                  <li>• Minimize distractions</li>
                  <li>• Stay organized with proper storage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
} 