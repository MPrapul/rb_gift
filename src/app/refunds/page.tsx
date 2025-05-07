"use client";

import React from 'react';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

export default function RefundsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-light mb-8 text-gray-800">Refunds & Cancellations Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">Order Cancellation</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Orders can be cancelled within 24 hours of placing the order.</li>
                <li>For customized products, cancellation is only possible before production begins.</li>
                <li>To cancel an order, please contact us via email at info@rbgifting.com.</li>
                <li>Once the order is shipped, cancellation requests cannot be processed.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">Refund Process</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Refunds will be processed within 7-10 business days after approval.</li>
                <li>The refund will be credited to the original payment method used for the purchase.</li>
                <li>Shipping charges are non-refundable unless the cancellation is due to our error.</li>
                <li>Bank charges or payment gateway fees may be deducted from the refund amount as per the payment provider's policies.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">Non-Refundable Items</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Customized or personalized products</li>
                <li>Products marked as non-returnable</li>
                <li>Products that have been used or damaged after delivery</li>
                <li>Gift cards or digital products</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">Return Policy</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Returns are accepted within 7 days of delivery.</li>
                <li>Products must be unused and in their original packaging.</li>
                <li>Return shipping costs must be borne by the customer unless the return is due to our error.</li>
                <li>Proof of purchase is required for all returns.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">Damaged or Defective Products</h2>
              <p className="text-gray-600 mb-4">
                If you receive a damaged or defective product:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Contact us within 48 hours of delivery.</li>
                <li>Provide clear photos of the damage or defect.</li>
                <li>We will arrange for return shipping at our cost.</li>
                <li>A replacement will be sent or a full refund will be processed.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">Contact Information</h2>
              <p className="text-gray-600">
                For any questions about our refunds and cancellations policy, please contact us at:{' '}
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