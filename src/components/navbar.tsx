"use client"
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="navbar bg-black p-4 opacity-60 fixed top-0 left-0 w-full z-50 p-4">
            {/* Mobile Layout */}
            <div className="navbar-start lg:hidden">
                <div className="dropdown">
                    <button
                        tabIndex={0}
                        role="button"
                        onClick={() => setDropdownOpen(!isDropdownOpen)}
                        className="btn btn-ghost"
                        aria-label="Toggle navigation menu"
                    >
                        <GiHamburgerMenu className="h-6 w-6 text-white" />
                    </button>
                    {isDropdownOpen && (
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow"
                            onBlur={() => setDropdownOpen(false)}
                        >
                            <li>
                                <a className="text-black hover:text-[#2FA4F9] cursor-pointer">Company</a>
                                <ul className="p-2">
                                    <li><a className="text-black hover:text-[#2FA4F9]">About</a></li>
                                    <li><a className="text-black hover:text-[#2FA4F9]">Meet the Team</a></li>
                                    <li><a className="text-black hover:text-[#2FA4F9]">Careers</a></li>
                                </ul>
                            </li>
                            <li><a className="text-black hover:text-[#2FA4F9]">Portfolio</a></li>
                            <li><a className="text-black hover:text-[#2FA4F9]">Service</a></li>
                            <li><a className="text-black hover:text-[#2FA4F9]">Client</a></li>
                            <li><a className="text-black hover:text-[#2FA4F9]">Contact</a></li>
                        </ul>
                    )}
                </div>
            </div>
            
            {/* Mobile Branding */}
            <div className="navbar-end lg:hidden">
                <a className="text-white font-bold text-[19px] mr-6">FUGO CREATIVE</a>
            </div>

            {/* Desktop Layout */}
            <div className="navbar-start hidden lg:flex">
                <a className="text-2xl font-bold text-white">FUGO CREATIVE</a>
            </div>
            <div className="navbar-end hidden lg:flex lg:justify-end lg:pr-10">
                <ul className="menu menu-horizontal space-x-6">
                    <li>
                        <details>
                            <summary className="text-white font-semibold text-lg hover:text-[#2FA4F9] cursor-pointer">
                                Company
                            </summary>
                            <ul className="p-2 bg-white shadow-md rounded-md">
                                <li><a className="text-black font-medium hover:text-[#2FA4F9]">About</a></li>
                                <li><a className="text-black font-medium hover:text-[#2FA4F9]">Meet the Team</a></li>
                                <li><a className="text-black font-medium hover:text-[#2FA4F9]">Careers</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a className="text-white font-semibold text-lg hover:text-[#2FA4F9]">Portfolio</a></li>
                    <li><a className="text-white font-semibold text-lg hover:text-[#2FA4F9]">Service</a></li>
                    <li><a className="text-white font-semibold text-lg hover:text-[#2FA4F9]">Client</a></li>
                    <li><a className="text-white font-semibold text-lg hover:text-[#2FA4F9]">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}
