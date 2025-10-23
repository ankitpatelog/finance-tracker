"use client";
import Image from "next/image";
import React from "react";

export default function LandingPage() {
  return (
    <section className="pt-24 pb-28 sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-36 bg-gradient-to-b from-[#E3F2FD] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left Section - Text and CTA */}
          <div className="lg:w-[55%] space-y-4 lg:pr-10 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug text-gray-900">
              <span className="block text-[#42A5F5]">TRACK YOUR</span>
              <span className="block">DAILY EXPENSES</span>
              <span className="block text-[#42A5F5] mt-1">MONITOR</span> TO MAKE
              THE <span className="text-[#42A5F5]">FUTURE BETTER</span>
            </h1>

            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
              Take control of your finances with our intelligent tracking
              system. Monitor expenses, set budgets, and achieve your financial
              goals with ease.
            </p>

            <div className="mt-8 flex flex-col items-center lg:items-start space-y-3">
              <button
                className="w-full sm:w-auto inline-flex justify-center items-center px-10 py-4
             text-base md:text-lg font-semibold rounded-full
             bg-gradient-to-r from-[#64B5F6] to-[#42A5F5]
             text-white shadow-md hover:shadow-xl
             transform transition-all duration-300 ease-out
             hover:scale-105 hover:from-[#42A5F5] hover:to-[#1E88E5]
             focus:outline-none focus:ring-4 focus:ring-[#64B5F6]/30"
              >
                Start Tracking Free
              </button>

              <div className="flex space-x-3 text-sm md:text-base text-gray-500">
                <span className="flex items-center">
                  <span className="mr-1 text-[#42A5F5]">&bull;</span> Track Your Money Now
                </span>
                <span className="flex items-center">
                  <span className="mr-1 text-[#42A5F5]">&bull;</span> No credit
                  card required
                </span>
              </div>
            </div>
          </div>

          {/* Right Section - Larger GIF Triangle */}
          <div className="lg:w-[45%] flex flex-col items-center justify-center relative mt-12 lg:mt-0">
            
            {/* Top GIF */}
            <div className="w-48 h-48 sm:w-58 sm:h-58 lg:w-62 lg:h-62 mb-6 transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/gif/first.gif"
                alt="Top Animation"
                width={240}
                height={240}
                className="rounded-2xl shadow-lg"
              />
            </div>

            {/* Bottom GIFs - Left & Right */}
            <div className="flex justify-between w-full mt-6 space-x-8">
              <div className="w-44 h-44 sm:w-54 sm:h-54 lg:w-58 lg:h-58 transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/gif/second.gif"
                  alt="Bottom Left Animation"
                  width={220}
                  height={220}
                  className="rounded-2xl shadow-lg"
                />
              </div>

              <div className="w-44 h-44 sm:w-54 sm:h-54 lg:w-58 lg:h-58 transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/gif/third.gif"
                  alt="Bottom Right Animation"
                  width={220}
                  height={220}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
