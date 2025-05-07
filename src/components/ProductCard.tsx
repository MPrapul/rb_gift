"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  title: string;
  image: string;
  price: string;
  category: string;
  slug: string;
}

const ProductCard = ({ title, image, price, category, slug }: ProductCardProps) => {
  return (
    <Link href={`/products/${slug}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
        <div className="relative h-64 w-full">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={false}
          />
        </div>
        <div className="p-4">
          <p className="text-sm text-mint-green mb-2">{category}</p>
          <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
          <p className="text-mustard-yellow font-semibold">{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard; 