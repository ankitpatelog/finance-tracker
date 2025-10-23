"use client";
import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ImageCarousel() {
  const images = [
    "/gif/first.gif",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto pt-6 pb-10">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-1/3 flex-shrink-0 px-2">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={600}
                height={400}
                className="rounded-2xl object-cover shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white shadow-md hover:bg-slate-100 rounded-full p-3"
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white shadow-md hover:bg-slate-100 rounded-full p-3"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
}
