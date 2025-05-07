"use client";

import React from 'react';
import Sidebar from '../../../components/Sidebar';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ProductCard';

const products = [
  {
    title: 'Ergonomic Office Chair',
    image: 'https://images.unsplash.com/photo-1589884629038-b631346a23c0?q=80&w=2069&auto=format&fit=crop',
    price: '₹15,999',
    category: 'Chairs',
    slug: 'ergonomic-office-chair'
  },
  {
    title: 'Adjustable Standing Desk',
    image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=2070&auto=format&fit=crop',
    price: '₹24,999',
    category: 'Desks',
    slug: 'adjustable-standing-desk'
  },
  {
    title: 'Laptop Stand',
    image: 'https://images.unsplash.com/photo-1662947995689-ec5157bdf8c1?q=80&w=2070&auto=format&fit=crop',
    price: '₹2,499',
    category: 'Accessories',
    slug: 'laptop-stand'
  },
  {
    title: 'Ergonomic Keyboard',
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=2070&auto=format&fit=crop',
    price: '₹4,999',
    category: 'Accessories',
    slug: 'ergonomic-keyboard'
  },
  {
    title: 'Monitor Arm',
    image: 'https://images.unsplash.com/photo-1616255245307-1dbd70f3c713?q=80&w=2069&auto=format&fit=crop',
    price: '₹3,999',
    category: 'Accessories',
    slug: 'monitor-arm'
  },
  {
    title: 'Footrest',
    image: 'https://images.unsplash.com/photo-1611967164521-abae8fba4668?q=80&w=2069&auto=format&fit=crop',
    price: '₹1,999',
    category: 'Accessories',
    slug: 'footrest'
  }
];

export default function ErgonomicsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-gradient-to-r from-primary to-blue-900">
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative h-full flex items-center justify-center text-white text-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-light mb-4">Ergonomic Solutions</h1>
              <p className="text-lg md:text-xl text-gray-200">
                Transform your workspace with our premium ergonomic products. 
                Designed for comfort, built for productivity.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Category Navigation */}
          <div className="flex flex-wrap gap-4 mb-12">
            {['All', 'Chairs', 'Desks', 'Accessories'].map((category) => (
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
          <div className="mt-24 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <div className="text-4xl text-primary mb-4">✨</div>
              <h3 className="text-xl font-medium mb-2">Premium Quality</h3>
              <p className="text-gray-600">Carefully selected products that meet the highest ergonomic standards</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <div className="text-4xl text-primary mb-4">🛡️</div>
              <h3 className="text-xl font-medium mb-2">Warranty Protected</h3>
              <p className="text-gray-600">All products come with manufacturer warranty and our quality guarantee</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <div className="text-4xl text-primary mb-4">🚚</div>
              <h3 className="text-xl font-medium mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and secure delivery to your doorstep</p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
} 