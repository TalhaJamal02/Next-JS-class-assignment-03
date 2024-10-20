'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav
        aria-label="Main navigation"
        className="bg-white border-gray-400 px-4 lg:px-6 py-2.5"
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Company Logo"
            />
          </Link>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu-2"
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="desktop-menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="/"
                  className="border-gray-100  hover:text-orange-700 lg:p-0"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="border-gray-100 hover:text-orange-700 lg:p-0"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="border-gray-100 hover:text-orange-700 lg:p-0"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className=" hover:text-orange-700 lg:p-0"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          <div
            className={`${isOpen ? 'flex' : 'hidden'
              } flex-col items-center w-full lg:hidden bg-gray-300 backdrop-blur-lg border border-gray-700 rounded-lg p-4`}
            id="mobile-menu"
          >
            <ul className="flex flex-col font-medium mt-4 space-y-4">
              <li>
                <Link
                  href="/"
                  className=" hover:text-orange-700 lg:p-0"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className=" hover:text-orange-700 lg:p-0"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className=" hover:text-orange-700 lg:p-0"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className=" hover:text-orange-700 lg:p-0"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
