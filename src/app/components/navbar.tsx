'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiShoppingCart, FiHeart, FiUser, FiSearch, FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import { useCart } from '../context/CartContext'; 
import { 
  SignedIn, 
  SignedOut, 
  SignInButton, 
  UserButton 
} from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/lgo.png"
                alt="FurniWise Logo"
                width={50}
                height={40}
                className="w-[40px] sm:w-[50px] h-[30px] sm:h-[40px] pl-[13px]"
              />
              <span className="ml-2 text-2xl font-bold text-gray-900">
                FurniWise
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="nav-link hover:text-blue-600 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Authentication Logic */}
            <SignedOut>
              <SignInButton mode="modal">
                <button className="icon-button">
                  <FiUser className="w-6 h-6" />
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-6 h-6",
                  }
                }}
              />
            </SignedIn>

            <button className="icon-button">
              <FiSearch className="w-6 h-6" />
            </button>
            <Link href="/wishlist" className="icon-button relative">
              <FiHeart className="w-6 h-6" />
            </Link>
            <Link href="/cart" className="icon-button relative">
              <FiShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white 
                  rounded-full px-2 py-0.5 text-xs"
                >
                  {cart.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } md:hidden bg-white shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={toggleMobileMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        {/* Mobile Icons */}
        <div className="px-2 py-3 border-t border-gray-200 flex justify-around items-center">
          {/* Mobile Authentication Logic */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="mobile-icon-button">
                <FiUser className="w-6 h-6" />
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-6 h-6",
                }
              }}
            />
          </SignedIn>

          <button className="mobile-icon-button">
            <FiSearch className="w-6 h-6" />
          </button>
          <Link href="/wishlist" className="mobile-icon-button">
            <FiHeart className="w-6 h-6" />
          </Link>
          <Link href="/cart" className="mobile-icon-button relative">
            <FiShoppingCart className="w-6 h-6" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white 
                rounded-full px-2 py-0.5 text-xs"
              >
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
