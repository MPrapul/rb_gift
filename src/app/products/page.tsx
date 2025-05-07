import React from 'react';
import Link from 'next/link';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const categories = [
  { name: 'All Products', slug: 'all', color: 'from-mint-green to-light-pink' },
  { name: 'Bags', slug: 'bags', color: 'from-light-pink to-mustard-yellow' },
  { name: 'Bean Bag', slug: 'bean-bag', color: 'from-mustard-yellow to-mint-green' },
  { name: 'Books', slug: 'books', color: 'from-mint-green to-light-pink' },
  { name: 'Electronics', slug: 'electronics', color: 'from-light-pink to-mustard-yellow' },
  { name: 'Ergonomics Products', slug: 'ergonomics', color: 'from-mustard-yellow to-mint-green' },
  { name: 'Fitness', slug: 'fitness', color: 'from-mint-green to-light-pink' },
  { name: 'Home Decor', slug: 'home-decor', color: 'from-light-pink to-mustard-yellow' },
  { name: 'Work From Home Accessories', slug: 'wfh', color: 'from-mustard-yellow to-mint-green' },
  { name: 'Neon', slug: 'neon', color: 'from-mint-green to-light-pink' },
  { name: 'Self Pampers', slug: 'self-pampers', color: 'from-light-pink to-mustard-yellow' },
  { name: 'Sipper', slug: 'sipper', color: 'from-mustard-yellow to-mint-green' },
  { name: 'T-Shirts | Jackets | Hoodies', slug: 'apparel', color: 'from-mint-green to-light-pink' },
];

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-light mb-12 text-gray-800">Our Products</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link 
                key={category.slug}
                href={`/products/${category.slug}`}
                className="group"
              >
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color}`} />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-white text-xl font-medium text-center px-4">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
} 