"use client";

import React from 'react';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

export default function TermsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-light mb-8 text-gray-800">Terms & Conditions</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">Use License</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only.</li>
                <li>This is the grant of a license, not a transfer of title.</li>
                <li>This license shall automatically terminate if you violate any of these restrictions.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">Product Information</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>We strive to display our products as accurately as possible.</li>
                <li>Colors may vary depending on your display settings.</li>
                <li>We reserve the right to limit quantities of any product.</li>
                <li>Prices are subject to change without notice.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">User Account</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>You are responsible for maintaining the confidentiality of your account.</li>
                <li>You agree to accept responsibility for all activities that occur under your account.</li>
                <li>We reserve the right to refuse service, terminate accounts, or cancel orders at our discretion.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All content included on this site, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the site, is our property or that of our suppliers and protected by copyright and other laws.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                We shall not be liable for any damages arising from the use or inability to use our products or services. This includes but is not limited to direct, indirect, incidental, punitive, and consequential damages.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">Governing Law</h2>
              <p className="text-gray-600 mb-4">
                These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in Hyderabad, India.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-800">Contact Information</h2>
              <p className="text-gray-600">
                Questions about the Terms & Conditions should be sent to us at:{' '}
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