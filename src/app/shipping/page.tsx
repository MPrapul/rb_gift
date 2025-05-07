"use client";

import React from 'react';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

export default function ShippingPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-light mb-8 text-gray-800">Shipping Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">Processing Time</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Standard orders are processed within 1-2 business days.</li>
                <li>Custom orders may require 3-5 business days for processing.</li>
                <li>Orders placed during weekends or holidays will be processed on the next business day.</li>
                <li>You will receive a confirmation email with tracking details once your order is shipped.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">Shipping Methods</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Standard Delivery: 3-5 business days</li>
                <li>Express Delivery: 1-2 business days (available for select locations)</li>
                <li>Same Day Delivery: Available in Hyderabad for orders placed before 12 PM</li>
                <li>International Shipping: 7-14 business days (subject to customs clearance)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">Shipping Costs</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Free shipping on orders above ₹2000 within India</li>
                <li>Standard shipping charges: ₹100-200 depending on location</li>
                <li>Express delivery charges: Additional ₹200-500 based on location and weight</li>
                <li>International shipping costs are calculated at checkout based on destination and weight</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">Delivery Areas</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>We deliver to all major cities in India</li>
                <li>Remote areas may require additional delivery time</li>
                <li>International shipping available to select countries</li>
                <li>Some locations may have delivery restrictions</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">Tracking Orders</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Tracking information will be sent via email once the order is shipped</li>
                <li>You can track your order using the tracking number on our website</li>
                <li>For any tracking related queries, please contact our customer support</li>
                <li>Please allow 24 hours for tracking information to be updated</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">Shipping Restrictions</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Certain products may not be available for international shipping</li>
                <li>We do not ship to PO boxes</li>
                <li>Additional documentation may be required for international orders</li>
                <li>Some items may require special handling and additional shipping time</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">Contact Information</h2>
              <p className="text-gray-600">
                For any questions about our shipping policy, please contact us at:{' '}
                <a href="mailto:info@rbgifting.com" className="text-primary hover:text-opacity-80">
                  info@rbgifting.com
                </a>
              </p>
            </section>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
} 