"use client";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <nav className="fixed w-full bg-gradient-to-r from-[#A7D8F2] to-[#C1E1F5] shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">

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
    </>
  );
}
