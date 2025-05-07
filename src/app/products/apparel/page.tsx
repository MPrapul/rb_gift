"use client";

import React from 'react';
import Sidebar from '../../../components/Sidebar';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ProductCard';

const products = [
  {
    title: 'Custom Logo T-Shirt',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop',
    price: '₹999',
    category: 'T-Shirts',
    slug: 'custom-logo-tshirt'
  },
  {
    title: 'Premium Hoodie',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2187&auto=format&fit=crop',
    price: '₹2,499',
    category: 'Hoodies',
    slug: 'premium-hoodie'
  },
  {
    title: 'Corporate Jacket',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2036&auto=format&fit=crop',
    price: '₹3,999',
    category: 'Jackets',
    slug: 'corporate-jacket'
  },
  {
    title: 'Team T-Shirt',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2064&auto=format&fit=crop',
    price: '₹899',
    category: 'T-Shirts',
    slug: 'team-tshirt'
  },
  {
    title: 'Winter Jacket',
    image: 'https://images.unsplash.com/photo-1548126032-079a0fb0099d?q=80&w=2187&auto=format&fit=crop',
    price: '₹4,499',
    category: 'Jackets',
    slug: 'winter-jacket'
  },
  {
    title: 'Zip-Up Hoodie',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=2072&auto=format&fit=crop',
    price: '₹1,999',
    category: 'Hoodies',
    slug: 'zip-up-hoodie'
  }
];

export default function ApparelPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-gradient-to-r from-primary via-gray-800 to-slate-900">
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative h-full flex items-center justify-center text-white text-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-light mb-4">Corporate Apparel</h1>
              <p className="text-lg md:text-xl text-gray-200">
                Premium T-Shirts, Jackets, and Hoodies for your team.
                Elevate your brand with custom corporate wear.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Category Navigation */}
          <div className="flex flex-wrap gap-4 mb-12">
            {['All', 'T-Shirts', 'Jackets', 'Hoodies'].map((category) => (
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
            <h2 className="text-3xl font-light text-center mb-12">Our Commitment</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl text-primary mb-4">👕</div>
                <h3 className="text-xl font-medium mb-2">Quality Fabric</h3>
                <p className="text-gray-600">Premium materials for lasting comfort</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl text-primary mb-4">🎨</div>
                <h3 className="text-xl font-medium mb-2">Custom Design</h3>
                <p className="text-gray-600">Personalized branding options</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl text-primary mb-4">📏</div>
                <h3 className="text-xl font-medium mb-2">Perfect Fit</h3>
                <p className="text-gray-600">Sizes for every team member</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl text-primary mb-4">🌟</div>
                <h3 className="text-xl font-medium mb-2">Professional Look</h3>
                <p className="text-gray-600">Elevate your corporate image</p>
              </div>
            </div>
          </div>

          {/* Customization Section */}
          <div className="mt-24 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-light text-center mb-8">Custom Branding Options</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl text-primary mb-4">🎯</div>
                <h3 className="text-xl font-medium mb-2">Logo Placement</h3>
                <p className="text-gray-600">Choose from multiple positions for your brand logo</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-primary mb-4">🎨</div>
                <h3 className="text-xl font-medium mb-2">Color Options</h3>
                <p className="text-gray-600">Wide range of colors to match your brand</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-primary mb-4">✨</div>
                <h3 className="text-xl font-medium mb-2">Finishing Options</h3>
                <p className="text-gray-600">Embroidery, screen printing, or heat transfer</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
} 