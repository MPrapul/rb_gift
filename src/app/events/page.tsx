"use client";

import React from 'react';
import Image from 'next/image';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

const events = [
  {
    title: 'Corporate Events',
    description: 'From team building to annual celebrations, we create memorable corporate events.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop',
    categories: ['Team Building', 'Annual Meets', 'Product Launches', 'Award Ceremonies']
  },
  {
    title: 'Festive Celebrations',
    description: 'Make every festival special with our curated celebration packages.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074&auto=format&fit=crop',
    categories: ['Diwali', 'Christmas', 'New Year', 'Employee Birthdays']
  },
  {
    title: 'Wellness Events',
    description: 'Promote employee wellness through engaging health and fitness events.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop',
    categories: ['Yoga Sessions', 'Fitness Challenges', 'Mental Health Workshops', 'Nutrition Seminars']
  }
];

const testimonials = [
  {
    text: "RB Gifting Solutions transformed our annual corporate event into an unforgettable experience. Their attention to detail was exceptional!",
    author: "Sarah Johnson",
    company: "Tech Innovations Ltd"
  },
  {
    text: "The team's creativity and professionalism made our product launch a huge success. Highly recommended!",
    author: "Michael Chen",
    company: "Global Systems Inc"
  },
  {
    text: "Their wellness events have significantly improved our company culture and employee engagement.",
    author: "Priya Patel",
    company: "Future Finance"
  }
];

export default function EventsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-gradient-to-r from-primary via-blue-800 to-indigo-900">
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative h-full flex items-center justify-center text-white text-center px-4">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-light mb-6">Corporate Events</h1>
              <p className="text-xl md:text-2xl text-gray-200">
                Creating extraordinary experiences that leave lasting impressions
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Event Categories */}
          <div className="space-y-24">
            {events.map((event, index) => (
              <motion.div 
                key={event.title}
                className="grid md:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-light text-gray-800">{event.title}</h2>
                  <p className="text-lg text-gray-600">{event.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {event.categories.map((category) => (
                      <span 
                        key={category}
                        className="px-4 py-2 bg-gray-50 text-primary rounded-full text-sm hover:bg-primary hover:text-white transition-colors cursor-pointer"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Services Section */}
          <motion.div 
            className="mt-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-light text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="text-4xl text-primary mb-4">🎯</div>
                <h3 className="text-xl font-medium mb-2">Event Planning</h3>
                <p className="text-gray-600">Comprehensive event planning and management</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="text-4xl text-primary mb-4">🎁</div>
                <h3 className="text-xl font-medium mb-2">Gift Curation</h3>
                <p className="text-gray-600">Personalized corporate gifting solutions</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="text-4xl text-primary mb-4">🎨</div>
                <h3 className="text-xl font-medium mb-2">Theme Design</h3>
                <p className="text-gray-600">Creative theme development and execution</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="text-4xl text-primary mb-4">📸</div>
                <h3 className="text-xl font-medium mb-2">Documentation</h3>
                <p className="text-gray-600">Professional event photography and video</p>
              </div>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div 
            className="mt-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-3xl font-light text-center mb-12">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="p-8 bg-gray-50 rounded-lg hover:shadow-xl transition-all duration-300"
                >
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-medium text-gray-800">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <h2 className="text-3xl font-light mb-6">Ready to Plan Your Event?</h2>
            <p className="text-lg text-gray-600 mb-8">Let's create something extraordinary together</p>
            <a 
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
        <Footer />
      </main>
    </div>
  );
} 