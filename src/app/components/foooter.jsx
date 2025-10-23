"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-gray-300 py-12 mt-20 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Brand / Logo Section */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-extrabold text-[#64B5F6] tracking-wide drop-shadow-md">
            CoinTrak
          </h2>
          <p className="text-sm text-gray-400 mt-2 max-w-xs">
            Track your daily income and expenses effortlessly — built for smarter money
            management and financial clarity.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-gray-400">
          {[
            {
              icon: <FaLinkedin size={24} />,
              href: "https://www.linkedin.com/in/ankit-patel-78023238b/",
              color: "#0077B5",
            },
            {
              icon: <FaGithub size={24} />,
              href: "https://github.com/ankitpatelog",
              color: "#ffffff",
            },
            {
              icon: <FaXTwitter size={24} />,
              href: "https://x.com/ankitpatel_og",
              color: "#ffffff",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <span className="absolute inset-0 rounded-full bg-[#64B5F6] opacity-0 group-hover:opacity-20 blur-lg transition-all duration-300"></span>
              <div
                className="relative text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                style={{ color: item.color }}
              >
                {item.icon}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Glowing Divider */}
      <div className="mt-10 mb-4 h-[1px] w-3/4 mx-auto bg-gradient-to-r from-transparent via-[#64B5F6] to-transparent opacity-60"></div>

      {/* Bottom Text */}
      <div className="text-center text-sm">
        <p className="tracking-wide text-gray-400">
          Made with <span className="text-red-500 animate-pulse">❤️</span> by{" "}
          <span className="font-semibold text-[#64B5F6] drop-shadow-[0_0_8px_#64B5F6]">
            Ankit Patel
          </span>
        </p>
      </div>

      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-20 bg-[#64B5F6]/10 blur-3xl rounded-full pointer-events-none"></div>
    </footer>
  );
}
