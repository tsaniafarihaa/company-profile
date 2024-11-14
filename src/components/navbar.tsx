"use client";
import { useState, useCallback, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const toggleDropdown = useCallback(() => {
    setDropdownOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
  }, [pathname]);

  const navigationLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Service", href: "/portfolio" },
    { title: "Team", href: "/team" },
  ];

  const handleLinkClick = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="navbar bg-black/60 backdrop-blur-sm py-2">
        {/* Logo - Both Mobile & Desktop */}
        <div className="navbar-start">
          <Link
            href="/"
            onClick={handleLinkClick}
            className="text-white font-bold text-[19px] lg:text-2xl ml-4 lg:ml-8 hover:text-[#2FA4F9] transition-colors duration-200"
          >
            FUGO CREATIVE
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-end hidden lg:flex lg:pr-10">
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

        {/* Mobile Menu Button & Dropdown */}
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <button
              tabIndex={0}
              onClick={toggleDropdown}
              className="btn btn-ghost hover:bg-black/20 transition-colors duration-200 mr-4"
              aria-label="Toggle navigation menu"
              aria-expanded={isDropdownOpen}
            >
              <GiHamburgerMenu className="h-6 w-6 text-white" />
            </button>
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white/95 backdrop-blur-sm rounded-box z-10 mt-3 w-52 p-2 shadow-lg animate-fadeIn right-0"
                onBlur={() => setDropdownOpen(false)}
              >
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
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
      </div>
    </nav>
  );
}
