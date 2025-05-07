"use client";

import React from 'react';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-light mb-8 text-gray-800">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Name and contact information</li>
                <li>Billing and shipping addresses</li>
                <li>Order history and preferences</li>
                <li>Email communications and correspondence</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Process your orders and transactions</li>
                <li>Send you order confirmations and updates</li>
                <li>Respond to your comments and questions</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our products and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Professional advisers and consultants</li>
                <li>Law enforcement or regulatory bodies when required</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate security measures to protect your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Secure data storage facilities</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with supervisory authorities</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at:{' '}
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