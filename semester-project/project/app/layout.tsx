"use client";

import { useState } from "react";
import "./globals.css";
import Link from "next/link";
import Head from "next/head";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const pathname = usePathname();

  return (
    <html lang='en'>
      <title>The Cafe</title>
      <body className={`${isDropdownActive ? "ofHidden" : ""}`}>
        <nav className='navbar'>
          <div className='logo'>
            <img src='/logo.svg' />
          </div>
          <div className='linksContainer'>
            <Link href='/' className={`link ${pathname === "/" && "active"}`}>
              Home
            </Link>
            <Link
              href='/accessories/mugs'
              className={`link ${pathname.includes("accessories") && "active"}`}
            >
              Accessories
            </Link>
            <Link
              href='/blog'
              className={`link ${pathname.includes("blog") && "active"}`}
            >
              Blog
            </Link>
            <Link
              href='/about'
              className={`link ${pathname.includes("about") && "active"}`}
            >
              About Us
            </Link>
          </div>
        </nav>
        <nav className='navbarMobile'>
          <img src='logo-white.svg' className='mobileLogo' />
          <img
            src='hamburger.svg'
            className='hamburger'
            onClick={() => setIsDropdownActive(!isDropdownActive)}
          />
        </nav>
        {isDropdownActive && (
          <div className='dropdown'>
            <Link
              href='/'
              className='linkMobile'
              onClick={() => setIsDropdownActive(false)}
            >
              Home
            </Link>
            <Link
              href='/accessories/mugs'
              className='linkMobile'
              onClick={() => setIsDropdownActive(false)}
            >
              Accessories
            </Link>
            <Link
              href='/blog'
              className='linkMobile'
              onClick={() => setIsDropdownActive(false)}
            >
              Blog
            </Link>
            <Link
              href='/about'
              className='linkMobile'
              onClick={() => setIsDropdownActive(false)}
            >
              About Us
            </Link>
          </div>
        )}
        {children}
        <div className='footer'>
          <div className='footerContainer'>
            <div className='footerColumn'>
              <img src='/logo-white.svg' />
              <p className='footerText'>The best or nothing</p>
            </div>
            <div className='footerColumn'>
              <h4>Sitemap</h4>
              <Link href='/' className='footerLink'>
                Home
              </Link>
              <Link href='/accessories/mugs' className='footerLink'>
                Accessories
              </Link>
              <Link href='/blog' className='footerLink'>
                Blog
              </Link>
              <Link href='/about' className='footerLink'>
                About Us
              </Link>
            </div>
            <div className='footerColumn'>
              <h4>Contact Us</h4>
              <span className='footerLink'>Ruđera Boškovića 32</span>
              <span className='footerLink'>21000, Split, Croatia</span>
              <span className='footerLinkPhone'>
                <img src='/phoneIcon.svg' className='phoneIcon' /> +385 123 0000
              </span>
              <span className='footerLink'>design@fesb.hr</span>
              <span className='footerMedia'>
                <img src='/fb.svg' className='icon' />
                <img src='/inst.svg' className='icon' />
                <img src='/lIn.svg' className='icon' />
                <img src='/X.svg' className='icon' />
              </span>
            </div>
          </div>
          <div className='copyright'>
            Copyright @ 2023 FESB. All rights reserved
          </div>
        </div>
        <div className='footerMobile'>
          <img src='logo-white.svg' className='mobileLogo' />
          <h4>Contact Us</h4>
          <span className='footerLink'>Ruđera Boškovića 32</span>
          <span className='footerLink'>21000, Split, Croatia</span>
          <span className='footerLinkPhone'>
            <img src='/phoneIcon.svg' className='phoneIcon' /> +385 123 0000
          </span>
          <span className='footerLink'>design@fesb.hr</span>
          <span className='footerMedia'>
            <img src='/fb.svg' className='icon' />
            <img src='/inst.svg' className='icon' />
            <img src='/lIn.svg' className='icon' />
            <img src='/X.svg' className='icon' />
          </span>
          <h4 className='sitemap'>Sitemap</h4>
          <Link href='/' className='footerLink'>
            Home
          </Link>
          <Link href='/accessories/mugs' className='footerLink'>
            Accessories
          </Link>
          <Link href='/blog' className='footerLink'>
            Blog
          </Link>
          <Link href='/about' className='footerLink'>
            About Us
          </Link>
          <div className='copyright'>
            Copyright @ 2023 FESB. All rights reserved
          </div>
        </div>
      </body>
    </html>
  );
}
