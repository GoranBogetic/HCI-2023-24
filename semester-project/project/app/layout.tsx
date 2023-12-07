'use client';

import { useState } from 'react';
import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  return (
    <html lang="en">
      <body className={`${isDropdownActive ? 'ofHidden' : ''}`}>
        <nav className="navbar">
          <div className="logo">
            <img src="/logo.svg" />
          </div>
          <div className="linksContainer">
            <Link href="/" className="link">
              Home
            </Link>
            <Link href="/exploration" className="link">
              Exploration
            </Link>
            <Link href="/equipment" className="link">
              Equipment and Methods
            </Link>
            <Link href="/accessories" className="link">
              Accessories
            </Link>
            <Link href="/subscriptions" className="link">
              Subscriptions
            </Link>
            <Link href="/contact" className="link">
              Contact Us
            </Link>
            <Link href="/about" className="link">
              About Us
            </Link>
            <Link href="/cart" className="link">
              Shopping Cart
            </Link>
          </div>
        </nav>
        <nav className="navbarMobile">
          <img src="logo-white.svg" className="mobileLogo" />
          <img src="hamburger.svg" className="hamburger" onClick={() => setIsDropdownActive(!isDropdownActive)} />
        </nav>
        {isDropdownActive && (
          <div className="dropdown">
            <Link href="/" className="linkMobile" onClick={() => setIsDropdownActive(false)}>
              Home
            </Link>
            <Link href="/exploration" className="linkMobile" onClick={() => setIsDropdownActive(false)}>
              Exploration
            </Link>
            <Link href="/equipment" className="linkMobile" onClick={() => setIsDropdownActive(false)}>
              Equipment and Methods
            </Link>
            <Link href="/accessories" className="linkMobile" onClick={() => setIsDropdownActive(false)}>
              Accessories
            </Link>
            <Link href="/subscriptions" className="linkMobile" onClick={() => setIsDropdownActive(false)}>
              Subscriptions
            </Link>
            <Link href="/contact" className="linkMobile" onClick={() => setIsDropdownActive(false)}>
              Contact Us
            </Link>
            <Link href="/about" className="linkMobile" onClick={() => setIsDropdownActive(false)}>
              About Us
            </Link>
            <Link href="/cart" className="linkMobile" onClick={() => setIsDropdownActive(false)}>
              Shopping Cart
            </Link>
          </div>
        )}
        {children}
      </body>
    </html>
  );
}
