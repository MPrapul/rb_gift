"use client";

import React from 'react';
import Sidebar from '../../../components/Sidebar';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ProductCard';

const products = [
  {
    title: 'Wireless Earbuds Pro',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2069&auto=format&fit=crop',
    price: '₹8,999',
    category: 'Audio',
    slug: 'wireless-earbuds'
  },
  {
    title: 'Smart Watch Series X',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2064&auto=format&fit=crop',
    price: '₹12,999',
    category: 'Wearables',
    slug: 'smart-watch'
  },
  {
    title: 'Portable Power Bank',
    image: 'https://images.unsplash.com/photo-1609592424737-c4f8b7c544c7?q=80&w=2070&auto=format&fit=crop',
    price: '₹2,499',
    category: 'Accessories',
    slug: 'power-bank'
  },
  {
    title: 'Bluetooth Speaker',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2069&auto=format&fit=crop',
    price: '₹4,999',
    category: 'Audio',
    slug: 'bluetooth-speaker'
  },
  {
    title: 'Wireless Charging Pad',
    image: 'https://images.unsplash.com/photo-1622957461168-202c5766c0bf?q=80&w=2070&auto=format&fit=crop',
    price: '₹1,999',
    category: 'Accessories',
    slug: 'charging-pad'
  },
  {
    title: 'Smart Home Hub',
    image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?q=80&w=2071&auto=format&fit=crop',
    price: '₹7,999',
    category: 'Smart Home',
    slug: 'smart-hub'
  }
];

export default function ElectronicsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="mb-12">
            <h1 className="text-4xl font-light mb-4 text-gray-800">Electronics Collection</h1>
            <p className="text-gray-600 max-w-3xl">
              Discover our range of premium electronics perfect for gifting. From wireless earbuds to smart home devices,
              find the latest tech gadgets that make perfect gifts for any occasion.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-4 mb-8">
            {['All', 'Audio', 'Wearables', 'Accessories', 'Smart Home'].map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-gray-300 text-sm text-gray-600 hover:border-primary hover:text-primary transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                {...product}
              />
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
} 