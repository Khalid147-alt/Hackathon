// components/Navbar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FiShoppingCart, FiHeart, FiUser, FiSearch } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
             
                <img src='/lgo.png' alt=''className="w-[50px] h-[40px] pl-[13px]"></img>
             
              <span className="ml-2 text-2xl font-bold text-gray-900">Furniro</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/shop" className="nav-link">
              Shop
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="icon-button">
              <FiUser className="w-6 h-6" />
            </button>
            <button className="icon-button">
              <FiSearch className="w-6 h-6" />
            </button>
            <button className="icon-button">
              <FiHeart className="w-6 h-6" />
            </button>
            <button className="icon-button">
              <FiShoppingCart className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className="mobile-nav-link">
            Home
          </Link>
          <Link href="/shop" className="mobile-nav-link">
            Shop
          </Link>
          <Link href="/blog" className="mobile-nav-link">
            Blog
          </Link>
          <Link href="/contact" className="mobile-nav-link">
            Contact
          </Link>
        </div>
        <div className="px-2 py-3 border-t border-gray-200 flex justify-around">
          <button className="mobile-icon-button">
            <FiUser className="w-6 h-6" />
          </button>
          <button className="mobile-icon-button">
            <FiSearch className="w-6 h-6" />
          </button>
          <button className="mobile-icon-button">
            <FiHeart className="w-6 h-6" />
          </button>
          <button className="mobile-icon-button">
            <FiShoppingCart className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;