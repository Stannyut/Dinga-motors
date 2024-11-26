import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="Madinga Logo" className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">
            <a href="/" className="hover:text-yellow-400">
              Madinga
            </a>
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-yellow-400">
            Home
          </a>
          <a href="#inventory" className="hover:text-yellow-400">
            Inventory
          </a>
          <a href="#about" className="hover:text-yellow-400">
            About Us
          </a>
          <a href="#contact" className="hover:text-yellow-400">
            Contact
          </a>
        </nav>

        {/* Mobile Menu */}
        <button
          id="mobile-menu-button"
          className="md:hidden focus:outline-none"
          onClick={() => {
            const menu = document.getElementById("mobile-menu");
            menu.classList.toggle("hidden");
          }}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="md:hidden bg-gray-700 text-white hidden flex-col py-4 px-6 space-y-2"
      >
        <a href="#home" className="hover:text-yellow-400 block">
          Home
        </a>
        <a href="#inventory" className="hover:text-yellow-400 block">
          Inventory
        </a>
        <a href="#about" className="hover:text-yellow-400 block">
          About Us
        </a>
        <a href="#contact" className="hover:text-yellow-400 block">
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
