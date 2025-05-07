"use client";

import React from 'react';
import Sidebar from '../../../components/Sidebar';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ProductCard';

const products = [
  {
    title: 'Elegant Leather Tote',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop',
    price: '₹2,499',
    category: 'Premium Bags',
    slug: 'elegant-leather-tote'
  },
  {
    title: 'Canvas Laptop Bag',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1887&auto=format&fit=crop',
    price: '₹1,899',
    category: 'Work Bags',
    slug: 'canvas-laptop-bag'
  },
  {
    title: 'Eco-Friendly Jute Bag',
    image: 'https://images.unsplash.com/photo-1605733513597-a8f8341084e6?q=80&w=1829&auto=format&fit=crop',
    price: '₹899',
    category: 'Sustainable Collection',
    slug: 'eco-friendly-jute-bag'
  },
  {
    title: 'Premium Gift Bag Set',
    image: 'https://images.unsplash.com/photo-1549927681-0b673b8243ab?q=80&w=1770&auto=format&fit=crop',
    price: '₹1,499',
    category: 'Gift Bags',
    slug: 'premium-gift-bag-set'
  },
  {
    title: 'Luxury Leather Messenger',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=2076&auto=format&fit=crop',
    price: '₹3,499',
    category: 'Premium Bags',
    slug: 'luxury-leather-messenger'
  },
  {
    title: 'Travel Duffel Bag',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1887&auto=format&fit=crop',
    price: '₹2,799',
    category: 'Travel Collection',
    slug: 'travel-duffel-bag'
  }
];

export default function BagsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="mb-12">
            <h1 className="text-4xl font-light mb-4 text-gray-800">Gift Bags Collection</h1>
            <p className="text-gray-600 max-w-3xl">
              Discover our exclusive collection of premium bags perfect for gifting. From elegant leather totes to eco-friendly options,
              find the perfect bag for every occasion. Each piece is carefully selected for quality and style.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-4 mb-8">
            {['All', 'Premium Bags', 'Work Bags', 'Gift Bags', 'Sustainable Collection'].map((category) => (
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