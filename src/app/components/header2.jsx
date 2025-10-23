"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { signOut } from "next-auth/react";

export default function Headerdash() {
  const router = useRouter();

  const handleNavigation = (path) => router.push(path);
  const handleLogout = async () => {
    try {
      await signOut({
        redirect: true,
        callbackUrl: "/signin",
      });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="fixed w-full bg-gradient-to-r from-[#A7D8F2] to-[#C1E1F5] shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
        {/* ✅ Left: Large Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          <Image
            src="/logo.svg"
            alt="CoinTrack Logo"
            width={250}
            height={250}
            className="hover:scale-105 transition-transform duration-200"
          />
        </div>

        {/* ✅ Center: Navigation Links */}
        <div className="hidden md:flex space-x-10 text-slate-700 font-[Inter] font-medium">
          <button
            onClick={() => handleNavigation("/")}
            className="relative group text-lg tracking-wide"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#42A5F5] transition-all duration-300 group-hover:w-full"></span>
          </button>

          <button
            onClick={() => handleNavigation("/contact")}
            className="relative group text-lg tracking-wide"
          >
            Contact Us
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#42A5F5] transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>

        {/* ✅ Right: Social Icons + Logout */}
        <div className="flex items-center space-x-6">
          <a
            href="https://www.linkedin.com/in/ankit-patel-78023238b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-[#0077B5] transition-all duration-200 transform hover:scale-110"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="https://github.com/ankitpatelog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-black transition-all duration-200 transform hover:scale-110"
          >
            <FaGithub size={28} />
          </a>

          <button
            onClick={handleLogout}
            className="bg-[#64B5F6] text-white px-5 py-2.5 rounded-xl font-semibold text-base shadow-md hover:bg-[#42A5F5] transform hover:scale-105 transition-all duration-200"
          >
            LogOut
          </button>
        </div>
      </div>
    </nav>
  );
}
