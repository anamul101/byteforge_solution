"use client";
import React, { useState } from "react";
import Button from "../utility/button";
import Menu from "../assets/icons/menu.svg";
import Link from "next/link";

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      style={{ backgroundColor: "black", color: "white" }}
      className="bg-black text-left relative z-50 bg-offpurple/20 backdrop-blur-[6px] md:backdrop-blur-0 md:bg-transparent"
    >
      <hr
        style={{
          backgroundImage:
            "linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, #FFF 52.07%, rgba(255, 255, 255, 0.00) 100%)",
        }}
        className="absolute bottom-0 w-full h-px -translate-x-1/2 border-0 opacity-10 left-1/2"
      />

      <div className="container lg:w-[1280px] py-2">
        <div className="flex items-center lg:relative lg:justify-between h-14 lg:h-18">
          <div className="flex justify-between w-full lg:w-auto lg:relative lg:z-10">
            <div className="flex items-center">
              <div className="h-5 -mt-1">
                <a aria-label="Scale" href="/">
                  <h2 className="sr-only">Scale</h2>
                  <svg
                    className="w-auto h-full fill-current text-white"
                    viewBox="0 0 489 157"
                  >
                    <path d="M352.083 156.702a7.581 7.581 0 01-7.582-7.582V7.582A7.581 7.581 0 01352.083 0a7.581 7.581 0 017.583 7.582V149.12a7.581 7.581 0 01-7.583 7.582zm129.674-19.861a7.581 7.581 0 00-.871-10.687 7.581 7.581 0 00-10.687.871c-7.835 9.223-19.563 14.513-32.182 14.513-20.904 0-37.911-17.007-37.911-37.911s17.007-37.91 37.911-37.91c16.986 0 31.177 12.204 34.257 28.306h-46.391a7.581 7.581 0 00-7.582 7.583 7.581 7.581 0 007.582 7.582h54.593a7.58 7.58 0 007.582-7.582v-1.012c0-27.595-22.448-50.044-50.044-50.044-29.267 0-53.077 23.81-53.077 53.077s23.814 53.075 53.08 53.075c17.076 0 33.019-7.24 43.74-19.861zm-162.53 12.279v-48.529c0-27.595-22.448-50.043-50.043-50.043-29.268 0-53.078 23.81-53.078 53.077s23.81 53.077 53.078 53.077a7.581 7.581 0 007.582-7.582 7.58 7.58 0 00-7.582-7.582c-20.904 0-37.911-17.007-37.911-37.911s17.007-37.91 37.911-37.91c19.231 0 34.879 15.645 34.879 34.879v48.526a7.58 7.58 0 007.582 7.582 7.585 7.585 0 007.582-7.584zM89.711 126.373c0-7.4-2.718-17.494-15.668-23.559-7.77-3.64-17.52-5.135-26.949-6.581-22.09-3.387-29.934-6.217-29.934-15.355 0-9.955 13.805-15.164 27.443-15.164 8.594 0 20.944 1.733 30.986 9.991a7.584 7.584 0 009.635-11.715c-13.51-11.112-29.547-13.445-40.619-13.445-29.274 0-42.607 15.722-42.607 30.329 0 7.45 2.729 17.611 15.728 23.72 7.813 3.671 17.605 5.171 27.074 6.624 21.954 3.367 29.749 6.161 29.749 15.151 0 9.071-10.829 15.164-26.942 15.164-16.496 0-29.068-6.689-35.092-10.678a7.584 7.584 0 00-10.508 2.138 7.582 7.582 0 002.138 10.508c12.854 8.513 28.289 13.201 43.457 13.201 29.089 0 42.108-15.234 42.108-30.329zm109.939 7.95a7.585 7.585 0 00-2.117-10.513 7.584 7.584 0 00-10.513 2.118c-6.494 9.774-17.362 15.607-29.068 15.607-20.904 0-37.911-17.006-37.911-37.91 0-20.904 17.007-37.91 37.911-37.91 11.708 0 22.574 5.833 29.068 15.607a7.582 7.582 0 0010.513 2.117 7.581 7.581 0 002.117-10.512c-9.312-14.014-24.902-22.38-41.698-22.38-29.267 0-53.077 23.81-53.077 53.078 0 29.267 23.81 53.077 53.077 53.077 16.798 0 32.386-8.366 41.698-22.379z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <button
              className="flex items-center lg:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6 fill-current text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 fill-current text-white"
                  viewBox="0 0 24 12"
                >
                  <rect width="24" height="2"></rect>
                  <rect y="5" width="24" height="2"></rect>
                  <rect y="10" width="24" height="2"></rect>
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation - always visible on lg screens */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link
                    href="/Products"
                    className="text-white hover:text-opacity-70 text-sm"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Services"
                    className="text-white hover:text-opacity-70 text-sm"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/enterprise"
                    className="text-white hover:text-opacity-70 text-sm"
                  >
                    Enterprise
                  </Link>
                </li>
                <li>
                  <Link
                    href="/government"
                    className="text-white hover:text-opacity-70 text-sm"
                  >
                    Government
                  </Link>
                </li>
                <li>
                  <Link
                    href="/customers"
                    className="text-white hover:text-opacity-70 text-sm"
                  >
                    Customers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/About"
                    className="text-white hover:text-opacity-70 text-sm"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Mobile Navigation - shown when menu is toggled */}
          <div
            className={`lg:hidden fixed top-14 left-0 right-0 bg-black transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "h-auto opacity-100"
                : "h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="px-4 py-2">
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/Products"
                    className="text-white hover:text-opacity-70 text-sm"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Services"
                    className="text-white hover:text-opacity-70 text-sm"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <button className="text-white hover:text-opacity-70 text-sm w-full text-left py-2">
                    Enterprise
                  </button>
                </li>
                <li>
                  <button className="text-white hover:text-opacity-70 text-sm w-full text-left py-2">
                    Government
                  </button>
                </li>
                <li>
                  <button className="text-white hover:text-opacity-70 text-sm w-full text-left py-2">
                    Customers
                  </button>
                </li>
                <li>
                <Link
                    href="/About"
                    className="text-white hover:text-opacity-70 text-sm"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
