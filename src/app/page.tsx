"use client";

import React from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Slideshow from '../components/Slideshow';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 ml-64">
        <Slideshow />
        <Footer />
      </main>
    </div>
  );
} 