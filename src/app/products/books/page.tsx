"use client";

import React from 'react';
import Sidebar from '../../../components/Sidebar';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ProductCard';

const products = [
  {
    title: 'Business & Leadership Collection',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2068&auto=format&fit=crop',
    price: '₹2,999',
    category: 'Business',
    slug: 'business-collection'
  },
  {
    title: 'Self-Help Bundle',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop',
    price: '₹1,999',
    category: 'Self Help',
    slug: 'self-help-bundle'
  },
  {
    title: 'Fiction Bestsellers Pack',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2048&auto=format&fit=crop',
    price: '₹2,499',
    category: 'Fiction',
    slug: 'fiction-bestsellers'
  },
  {
    title: 'Technology & Innovation Books',
    image: 'https://images.unsplash.com/photo-1509266272358-7701da638078?q=80&w=2076&auto=format&fit=crop',
    price: '₹3,499',
    category: 'Technology',
    slug: 'tech-books'
  },
  {
    title: 'Personal Growth Collection',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop',
    price: '₹2,799',
    category: 'Self Help',
    slug: 'personal-growth'
  },
  {
    title: 'Entrepreneurship Bundle',
    image: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop',
    price: '₹3,999',
    category: 'Business',
    slug: 'entrepreneurship-bundle'
  }
];

export default function BooksPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="mb-12">
            <h1 className="text-4xl font-light mb-4 text-gray-800">Books Collection</h1>
            <p className="text-gray-600 max-w-3xl">
              Explore our carefully curated collection of books perfect for gifting. From business and technology to
              personal development and fiction, find the perfect books to inspire and enlighten.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-4 mb-8">
            {['All', 'Business', 'Self Help', 'Fiction', 'Technology'].map((category) => (
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