"use client";

import React from 'react';
import Sidebar from '../../../components/Sidebar';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ProductCard';

const products = [
  {
    title: 'Modern Wall Art',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop',
    price: '₹4,999',
    category: 'Wall Decor',
    slug: 'modern-wall-art'
  },
  {
    title: 'Decorative Vase Set',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2080&auto=format&fit=crop',
    price: '₹2,999',
    category: 'Vases',
    slug: 'decorative-vase-set'
  },
  {
    title: 'Table Lamp',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=2066&auto=format&fit=crop',
    price: '₹3,499',
    category: 'Lighting',
    slug: 'table-lamp'
  },
  {
    title: 'Throw Pillows Set',
    image: 'https://images.unsplash.com/photo-1616627561950-9f746e330187?q=80&w=2071&auto=format&fit=crop',
    price: '₹1,999',
    category: 'Textiles',
    slug: 'throw-pillows'
  },
  {
    title: 'Ceramic Plant Pot',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2072&auto=format&fit=crop',
    price: '₹1,499',
    category: 'Planters',
    slug: 'ceramic-plant-pot'
  },
  {
    title: 'Wall Mirror',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2027&auto=format&fit=crop',
    price: '₹5,999',
    category: 'Mirrors',
    slug: 'wall-mirror'
  }
];

export default function HomeDecorPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-gradient-to-r from-primary via-indigo-900 to-purple-900">
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative h-full flex items-center justify-center text-white text-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-light mb-4">Home Decor</h1>
              <p className="text-lg md:text-xl text-gray-200">
                Transform spaces with our curated collection of home decor.
                Each piece tells a story, creates an ambiance.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Category Navigation */}
          <div className="flex flex-wrap gap-4 mb-12">
            {['All', 'Wall Decor', 'Lighting', 'Textiles', 'Vases', 'Mirrors'].map((category) => (
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

          {/* Style Guide Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-light text-center mb-12">Style Guide</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl text-primary mb-4">🎨</div>
                <h3 className="text-xl font-medium mb-2">Modern Minimalist</h3>
                <p className="text-gray-600">Clean lines, neutral colors, and simple elegance</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl text-primary mb-4">🌿</div>
                <h3 className="text-xl font-medium mb-2">Natural Elements</h3>
                <p className="text-gray-600">Bringing the outdoors in with organic textures and materials</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl text-primary mb-4">✨</div>
                <h3 className="text-xl font-medium mb-2">Artisanal Touch</h3>
                <p className="text-gray-600">Handcrafted pieces that add character to your space</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
} 