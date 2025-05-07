"use client";

import React from 'react';
import Image from 'next/image';
import Sidebar from '../../../../components/Sidebar';
import Footer from '../../../../components/Footer';

export default function ProductDetailPage({ params }) {
  // This is a placeholder. In a real application, you would fetch product details from an API or database
  const product = {
    title: 'Product Title',
    description: 'Detailed product description would go here. This would include all the features and benefits of the product.',
    price: '₹X,XXX',
    images: ['/images/placeholder.jpg'],
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
    ],
    specifications: {
      'Dimension': 'XX x XX x XX cm',
      'Weight': 'XXX g',
      'Material': 'Premium Quality',
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative h-[500px] bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-4xl font-light mb-4 text-gray-800">{product.title}</h1>
              <p className="text-2xl text-primary font-semibold mb-6">{product.price}</p>
              
              <div className="prose prose-lg text-gray-600 mb-8">
                <p>{product.description}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-medium mb-4">Features</h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-medium mb-4">Specifications</h2>
                <dl className="space-y-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex">
                      <dt className="w-32 text-gray-600">{key}:</dt>
                      <dd className="flex-1 text-gray-800">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <button className="mt-8 w-full bg-primary text-white py-4 rounded-lg hover:bg-opacity-90 transition-colors">
                Contact Us About This Product
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
} 