"use client";

import React from 'react';
import Sidebar from '../../../components/Sidebar';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ProductCard';

const products = [
  {
    title: 'Luxury Bath Set',
    image: 'https://images.unsplash.com/photo-1570194065650-d707c8801027?q=80&w=2070&auto=format&fit=crop',
    price: '₹3,999',
    category: 'Bath & Body',
    slug: 'luxury-bath-set'
  },
  {
    title: 'Aromatherapy Diffuser',
    image: 'https://images.unsplash.com/photo-1602928298849-325cec8771c0?q=80&w=2070&auto=format&fit=crop',
    price: '₹2,499',
    category: 'Wellness',
    slug: 'aromatherapy-diffuser'
  },
  {
    title: 'Skincare Gift Box',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2070&auto=format&fit=crop',
    price: '₹4,999',
    category: 'Skincare',
    slug: 'skincare-gift-box'
  },
  {
    title: 'Scented Candle Set',
    image: 'https://images.unsplash.com/photo-1602910344008-22f323cc1817?q=80&w=2070&auto=format&fit=crop',
    price: '₹1,999',
    category: 'Home Fragrance',
    slug: 'scented-candle-set'
  },
  {
    title: 'Spa Robe & Slippers',
    image: 'https://images.unsplash.com/photo-1532011760459-9f5a256d4e30?q=80&w=2070&auto=format&fit=crop',
    price: '₹2,999',
    category: 'Comfort',
    slug: 'spa-robe-slippers'
  },
  {
    title: 'Wellness Tea Collection',
    image: 'https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?q=80&w=2069&auto=format&fit=crop',
    price: '₹1,499',
    category: 'Beverages',
    slug: 'wellness-tea'
  }
];

export default function SelfPampersPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-gradient-to-r from-primary via-pink-800 to-purple-900">
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative h-full flex items-center justify-center text-white text-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-light mb-4">Self Pampers</h1>
              <p className="text-lg md:text-xl text-gray-200">
                Indulge in luxury with our curated collection of self-care products.
                Because you deserve the best.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Category Navigation */}
          <div className="flex flex-wrap gap-4 mb-12">
            {['All', 'Bath & Body', 'Wellness', 'Skincare', 'Home Fragrance', 'Comfort', 'Beverages'].map((category) => (
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
          <div className="mt-24">
            <h2 className="text-3xl font-light text-center mb-12">The Art of Self-Care</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl text-primary mb-4">🌿</div>
                <h3 className="text-xl font-medium mb-2">Natural Ingredients</h3>
                <p className="text-gray-600">Premium quality, ethically sourced materials</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl text-primary mb-4">✨</div>
                <h3 className="text-xl font-medium mb-2">Luxury Experience</h3>
                <p className="text-gray-600">Carefully curated for ultimate relaxation</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl text-primary mb-4">🎁</div>
                <h3 className="text-xl font-medium mb-2">Perfect Gifting</h3>
                <p className="text-gray-600">Beautifully packaged for gifting</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
} 