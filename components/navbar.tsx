"use client";

import Link from "next/link";
import Image from 'next/image';
import localFont from 'next/font/local';
import { useState } from 'react';
import logo from '../app/rsc/logo.png';

const montserrat_font = localFont({
  src: "../app/rsc/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="brand">
        <Image
          className="brand-logo"
          src={logo}
          width={60}
          height={60}
          alt="EVERSAMA Labs logo"
        />
        <h1 className={`brand-title ${montserrat_font.className}`}>
          EVERSAMA LABS
        </h1>
      </div>

      <div className="navbar-container">
        <ul className={`nav-menu ${montserrat_font.className} ${isOpen ? 'nav-menu-open' : ''}`}>
          <li className="nav-item">
            <Link href="/" className="nav-links" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/projects" className="nav-links" onClick={() => setIsOpen(false)}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-links" onClick={() => setIsOpen(false)}>About</Link>
          </li>
        </ul>
      </div>

      <div
        className={`hamburger ${isOpen ? 'hamburger-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}