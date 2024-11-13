"use client";

import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      title: "Company",
      isDropdown: true,
      dropdownItems: [
        { title: "About", href: "/about" },
        { title: "Meet the Team", href: "/team" },
        { title: "Careers", href: "/careers" },
      ],
    },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Service", href: "/service" },
    { title: "Client", href: "/client" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm shadow-lg" : "bg-black/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo - Now on the left for both mobile and desktop */}
          <a
            href="/homepage"
            className={`font-bold text-white transition-all ${
              isScrolled ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
            }`}
          >
            FUGO CREATIVE
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.isDropdown ? (
                  <div className="relative">
                    <button className="text-white font-semibold hover:text-[#2FA4F9] transition-colors py-2">
                      {link.title}
                    </button>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-lg shadow-xl py-2 min-w-[160px]">
                        {link.dropdownItems.map((item, idx) => (
                          <a
                            key={idx}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#2FA4F9] transition-colors"
                          >
                            {item.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="text-white font-semibold hover:text-[#2FA4F9] transition-colors"
                  >
                    {link.title}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button - Now on the right */}
          <div className="lg:hidden">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="p-2 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <GiHamburgerMenu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isDropdownOpen ? "max-h-[400px]" : "max-h-0"
          }`}
        >
          <div className="bg-white rounded-lg shadow-xl mt-2 mb-4">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.isDropdown ? (
                  <div className="px-4 py-2">
                    <div className="font-semibold text-gray-800 mb-2">
                      {link.title}
                    </div>
                    <div className="pl-4 space-y-2">
                      {link.dropdownItems.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          className="block text-gray-600 hover:text-[#2FA4F9] transition-colors"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="block px-4 py-2 text-gray-800 hover:text-[#2FA4F9] transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {link.title}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
