"use client";
import { useState, useCallback } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setDropdownOpen((prev) => !prev);
  }, []);

  const navigationLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Service", href: "/portfolio" },
    { title: "Team", href: "/team" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="navbar bg-black/60 backdrop-blur-sm py-2">
        {/* Mobile Layout */}
        <div className="navbar-start lg:hidden">
          <div className="dropdown">
            <button
              tabIndex={0}
              onClick={toggleDropdown}
              className="btn btn-ghost hover:bg-black/20 transition-colors duration-200"
              aria-label="Toggle navigation menu"
              aria-expanded={isDropdownOpen}
            >
              <GiHamburgerMenu className="h-6 w-6 text-white" />
            </button>
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white/95 backdrop-blur-sm rounded-box z-10 mt-3 w-52 p-2 shadow-lg animate-fadeIn"
                onBlur={() => setDropdownOpen(false)}
              >
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-black hover:text-[#2FA4F9] transition-colors duration-200 font-medium"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Mobile Branding */}
        <div className="navbar-end lg:hidden">
          <Link href="/" className="text-white font-bold text-[19px] mr-8">
            FUGO CREATIVE
          </Link>
        </div>

        {/* Desktop Layout */}
        <div className="navbar-start hidden lg:flex ml-8">
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-[#2FA4F9] transition-colors duration-200"
          >
            FUGO CREATIVE
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex lg:justify-end lg:pr-10">
          <ul className="menu menu-horizontal space-x-6">
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-white font-semibold text-lg hover:text-[#2FA4F9] transition-colors duration-200"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
