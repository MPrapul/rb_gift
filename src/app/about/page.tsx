"use client";

import React from 'react';
import Image from 'next/image';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-gradient-to-r from-primary via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative h-full flex items-center justify-center text-white text-center px-4">
            <motion.div 
              className="max-w-3xl"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={fadeIn.transition}
            >
              <h1 className="text-5xl md:text-6xl font-light mb-6">Our Story</h1>
              <p className="text-xl md:text-2xl text-gray-200">
                Creating memorable moments through thoughtful gifting since 2020
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-light text-gray-800">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To transform corporate gifting into meaningful experiences that strengthen relationships and create lasting impressions. We believe in the power of thoughtful gestures to build connections and foster positive workplace culture.
              </p>
            </motion.div>
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-light text-gray-800">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the leading corporate gifting solution provider, known for our innovative approach, sustainable practices, and ability to create personalized experiences that resonate with both givers and recipients.
              </p>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-light text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-lg bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="text-4xl text-primary mb-4">💝</div>
                <h3 className="text-xl font-medium mb-4">Thoughtfulness</h3>
                <p className="text-gray-600">Every gift is carefully chosen to create meaningful connections</p>
              </div>
              <div className="text-center p-8 rounded-lg bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="text-4xl text-primary mb-4">🌱</div>
                <h3 className="text-xl font-medium mb-4">Sustainability</h3>
                <p className="text-gray-600">Committed to eco-friendly practices and sustainable gifting solutions</p>
              </div>
              <div className="text-center p-8 rounded-lg bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="text-4xl text-primary mb-4">🎯</div>
                <h3 className="text-xl font-medium mb-4">Innovation</h3>
                <p className="text-gray-600">Continuously evolving to meet modern gifting needs</p>
              </div>
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-3xl font-light mb-12">Our Team</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((member) => (
                <div key={member} className="group">
                  <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={`https://images.unsplash.com/photo-${1500000000000 + member}?q=80&w=1000&auto=format&fit=crop`}
                      alt={`Team Member ${member}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800">Team Member {member}</h3>
                  <p className="text-gray-600">Position</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <Footer />
      </main>
    </div>
  );
} 