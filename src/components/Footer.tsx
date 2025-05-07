import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="text-center">
            <h3 className="font-semibold mb-4">Phone</h3>
            <p className="text-gray-300">Contact us via email</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-4">Email</h3>
            <p className="text-gray-300">info@rbgifting.com</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-4">Address</h3>
            <p className="text-gray-300">Banjara Hills, Hyderabad</p>
          </div>
        </div>

        {/* Social Media and Legal Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-center space-x-6 mb-8">
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
          <div className="flex flex-wrap justify-center gap-x-8 text-sm text-gray-300">
            <Link href="/privacy" className="hover:text-mint-green">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-mint-green">
              Terms & Conditions
            </Link>
            <Link href="/refunds" className="hover:text-mint-green">
              Refunds/Cancellations
            </Link>
            <Link href="/shipping" className="hover:text-mint-green">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 