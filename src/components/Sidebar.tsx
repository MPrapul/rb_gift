"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Sidebar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-primary text-white shadow-lg flex flex-col p-8">
      {/* Logo */}
      <Link href="/" className="block text-center mb-12 group">
        <div className="relative h-24 w-full mb-4 transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/images/Blue_RB_Logo.png"
            alt="RB Gifting Solutions Logo"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        <span className="text-gray-300 italic">gifting & events</span>
      </Link>

      {/* Navigation */}
      <nav className="mb-12">
        <ul className="space-y-6">
          <li>
            <Link href="/" className="text-white hover:text-mint-green transition-colors">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-mint-green transition-colors">
              ABOUT US
            </Link>
          </li>
          <li>
            <button 
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="flex items-center justify-between w-full text-white hover:text-mint-green transition-colors"
            >
              <span>PRODUCTS</span>
              {isProductsOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
            </button>
            {isProductsOpen && (
              <ul className="mt-4 ml-4 space-y-3">
                <li>
                  <Link href="/products/all" className="text-sm text-gray-300 hover:text-mint-green transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/products/bags" className="text-sm text-gray-300 hover:text-mint-green transition-colors">
                    Bags
                  </Link>
                </li>
                <li>
                  <Link href="/products/bean-bag" className="text-sm text-gray-300 hover:text-mint-green transition-colors">
                    Bean Bag
                  </Link>
                </li>
                <li>
                  <Link href="/products/books" className="text-sm text-gray-300 hover:text-mint-green transition-colors">
                    Books
                  </Link>
                </li>
                <li>
                  <Link href="/products/electronics" className="text-sm text-gray-300 hover:text-mint-green transition-colors">
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link href="/products/ergonomics" className="text-sm text-gray-300 hover:text-mint-green transition-colors">
                    Ergonomics Products
                  </Link>
                </li>
                <li>
                  <Link href="/products/fitness" className="text-sm text-gray-300 hover:text-mint-green transition-colors">
                    Fitness
                  </Link>
                </li>
                <li>
                  <Link href="/products/home-decor" className="text-sm text-gray-300 hover:text-mint-green transition-colors">
                    Home Decor
                  </Link>
                </li>
                <li>
                  <Link href="/products/wfh" className="text-sm text-gray-300 hover:text-mint-green transition-colors">
                    Work From Home
                  </Link>
                </li>
                <li>
                  <Link href="/products/neon" className="text-sm text-gray-300 hover:text-mint-green transition-colors">
                    Neon
                  </Link>
                </li>
                <li>
                  <Link href="/products/self-pampers" className="text-sm text-gray-300 hover:text-mint-green transition-colors">
                    Self Pampers
                  </Link>
                </li>
                <li>
                  <Link href="/products/sipper" className="text-sm text-gray-300 hover:text-mint-green transition-colors">
                    Sipper
                  </Link>
                </li>
                <li>
                  <Link href="/products/apparel" className="text-sm text-gray-300 hover:text-mint-green transition-colors">
                    T-Shirts | Jackets | Hoodies
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/events" className="text-white hover:text-mint-green transition-colors">
              EVENTS
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-mint-green transition-colors">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 mt-auto mb-8">
        <Link href="#" className="text-white hover:text-mint-green">
          <FaFacebook size={20} />
        </Link>
        <Link href="#" className="text-white hover:text-mint-green">
          <FaTwitter size={20} />
        </Link>
        <Link href="#" className="text-white hover:text-mint-green">
          <FaInstagram size={20} />
        </Link>
        <Link href="#" className="text-white hover:text-mint-green">
          <FaPinterest size={20} />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar; 