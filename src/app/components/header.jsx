"use client";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <nav className="fixed w-full bg-gradient-to-r from-[#A7D8F2] to-[#C1E1F5] shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={250}
              height={250}
              className="hover:scale-105 transition-transform duration-200"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-10 text-slate-700 font-[Inter] font-medium">
            {["Home", "About Us", "Contact Us"].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="relative group text-lg tracking-wide"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#42A5F5] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Icons & Buttons */}
          <div className="flex items-center space-x-6">
            {/* Social Icons */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-[#0077B5] transition-all duration-200 transform hover:scale-110"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-black transition-all duration-200 transform hover:scale-110"
            >
              <FaGithub size={28} />
            </a>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button className="bg-[#64B5F6] text-white px-5 py-2.5 rounded-xl font-semibold text-base shadow-md hover:bg-[#42A5F5] transform hover:scale-105 transition-all duration-200">
                Sign Up
              </button>
              <button className="border-2 border-[#64B5F6] text-[#42A5F5] px-5 py-2.5 rounded-xl font-semibold text-base hover:bg-[#E3F2FD] transform hover:scale-105 transition-all duration-200">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>



      
      // hero section



      
      

<section className="bg-gradient-to-r from-[#A7D8F2]/30 to-[#C1E1F5]/40 pt-24 pb-28 sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-36">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between shadow-2xl border border-blue-100">
      
      {/* Left Content (Text + CTA) */}
      <div className="lg:w-[58%] space-y-6 lg:pr-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
          <span className="block text-blue-600">TRACK YOUR</span>
          <span className="block">DAILY EXPENSES</span>
          <span className="block text-blue-600 mt-1">MONITOR</span> TO MAKE THE <span className="text-blue-600">FUTURE BETTER</span>
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-lg">
          Take control of your finances with our intelligent tracking system. Monitor expenses, set budgets, and achieve your financial goals effortlessly.
        </p>

        <div className="mt-8 flex flex-col space-y-4">
          <button
            className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-semibold rounded-xl shadow-lg text-white bg-[#64B5F6] hover:bg-[#42A5F5] transform hover:scale-105 transition-all duration-200"
          >
            Start Tracking Free
          </button>
          <div className="flex space-x-4 text-sm text-gray-500">
            <span className="flex items-center">
              <span className="mr-1 text-blue-600">&bull;</span> Free 30-day trial
            </span>
            <span className="flex items-center">
              <span className="mr-1 text-blue-600">&bull;</span> No credit card required
            </span>
          </div>
        </div>
      </div>

      {/* Right Content (Image) */}
      <div className="lg:w-[42%] mt-10 lg:mt-0 flex justify-center">
        <img
          className="rounded-2xl shadow-2xl object-cover w-full max-w-sm lg:max-w-md"
          src="https://placehold.co/600x600/1e3a8a/ffffff?text=Professional+Financial+Advisor"
          alt="A smiling woman in professional attire holding a mug, standing in a bright office space."
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/600x600/5b21b6/ffffff?text=Image+Mockup';
          }}
        />
      </div>

    </div>
  </div>
</section>







    </>
  );
}
