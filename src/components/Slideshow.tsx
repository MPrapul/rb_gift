"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    image: '/images/micheile-henderson-Afjk-6oFzPE-unsplash.jpg',
    title: 'Crafting Memories',
    subtitle: 'One Gift at a Time'
  },
  {
    image: '/images/daria-shevtsova-d7v2EXFJcWY-unsplash.jpg',
    title: 'Celebrate Moments',
    subtitle: 'With Thoughtful Gifts'
  },
  {
    image: '/images/kasturi-roy-LgYKTcpYpio-unsplash.jpg',
    title: 'Creating Joy',
    subtitle: 'Through Perfect Gifts'
  }
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative h-full w-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center text-white text-center">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-light tracking-wider">
                  {slide.title}
                </h1>
                <p className="text-2xl md:text-3xl font-light">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? 'bg-white w-4' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow; 