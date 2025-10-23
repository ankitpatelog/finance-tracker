"use client";

import React from "react";
import Headerdash from "../components/header2";
import { FaLinkedin, FaGithub, FaGlobe, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // X (Twitter) icon

export default function ContactPage() {
  return (
    <>
      <Headerdash />

      {/* Main Section */}
      <section className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl border border-[#C1E1F5] p-10 transition-all duration-300 hover:shadow-2xl">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            Get in <span className="text-[#42A5F5]">Touch</span>
          </h1>
          <p className="text-slate-600 text-lg mb-10">
            I'm <span className="font-semibold text-slate-700">Ankit Patel</span> — a
            passionate developer available for <br className="hidden sm:block" />{" "}
            <span className="text-[#42A5F5] font-medium">project development work</span>.
            Let’s build something amazing together.
          </p>

          {/* Contact Details */}
          <div className="space-y-4 mb-10">
            <div className="flex items-center justify-center space-x-3 text-slate-700 text-base">
              <FaEnvelope className="text-[#42A5F5]" />
              <a
                href="mailto:ankitpatel22092004@gmail.com"
                className="hover:underline"
              >
                ankitpatel22092004@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center space-x-3 text-slate-700 text-base">
              <FaPhone className="text-[#42A5F5]" />
              <a href="tel:+919654534175" className="hover:underline">
                +91 9654534175
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-10 mb-10">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ankit-patel-78023238b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-[#0077B5] transition-all duration-200 transform hover:scale-110"
            >
              <FaLinkedin size={38} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ankitpatelog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-black transition-all duration-200 transform hover:scale-110"
            >
              <FaGithub size={38} />
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/ankitpatel_og"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-black transition-all duration-200 transform hover:scale-110"
            >
              <FaXTwitter size={38} />
            </a>

            {/* Portfolio */}
            <a
              href="#"
              className="text-slate-700 hover:text-[#42A5F5] transition-all duration-200 transform hover:scale-110 cursor-not-allowed"
              title="Portfolio (Under Development)"
            >
              <FaGlobe size={38} />
            </a>
          </div>

          {/* Portfolio Note */}
          <div className="bg-[#E3F2FD] border border-[#64B5F6] rounded-lg py-3 px-4 text-[#334155] shadow-sm">
            <p className="font-medium text-base">
              🌐 Portfolio: <span className="text-[#42A5F5]">Under Development</span>
            </p>
          </div>

          {/* Footer */}
          <p className="mt-10 text-sm text-slate-500">
            © {new Date().getFullYear()} Ankit Patel. All Rights Reserved.
          </p>
        </div>
      </section>
    </>
  );
}
