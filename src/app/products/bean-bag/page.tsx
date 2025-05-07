"use client";

import React from 'react';
import Sidebar from '../../../components/Sidebar';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ProductCard';

const products = [
  {
    title: 'Classic Bean Bag Chair',
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2070&auto=format&fit=crop',
    price: '₹3,999',
    category: 'Living Room',
    slug: 'classic-bean-bag'
  },
  {
    title: 'Gaming Bean Bag',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop',
    price: '₹4,499',
    category: 'Gaming',
    slug: 'gaming-bean-bag'
  },
  {
    title: 'Kids Bean Bag',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop',
    price: '₹2,499',
    category: 'Kids Room',
    slug: 'kids-bean-bag'
  },
  {
    title: 'Outdoor Bean Bag',
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2080&auto=format&fit=crop',
    price: '₹5,999',
    category: 'Outdoor',
    slug: 'outdoor-bean-bag'
  },
  {
    title: 'Premium Leather Bean Bag',
    image: 'https://images.unsplash.com/photo-1506898667547-42e22a46e125?q=80&w=1974&auto=format&fit=crop',
    price: '₹7,999',
    category: 'Premium',
    slug: 'premium-bean-bag'
  }
];

export default function BeanBagPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="mb-12">
            <h1 className="text-4xl font-light mb-4 text-gray-800">Bean Bag Collection</h1>
            <p className="text-gray-600 max-w-3xl">
              Discover our comfortable and stylish bean bags perfect for any space. From gaming chairs to outdoor loungers,
              find the perfect bean bag for your comfort needs.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-4 mb-8">
            {['All', 'Living Room', 'Gaming', 'Kids Room', 'Outdoor', 'Premium'].map((category) => (
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