"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative z-50">
           {/* Assuming ID GROUP logo is red/dark, we might need a white version for transparent header if background is dark.
               For now using the standard one. */}
          <div className="flex items-center gap-2">
            <Image
              src="/logos/ID GROUP.png"
              alt="ID GROUP Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 font-heading uppercase text-sm font-bold tracking-wide">
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-id-red transition-colors">
              Le Groupe <ChevronDown size={16} />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top">
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-id-red text-id-dark normal-case">Mission</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-id-red text-id-dark normal-case">Histoire</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-id-red text-id-dark normal-case">Savoir-Faire</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-id-red text-id-dark normal-case">L&apos;Équipe</Link>
            </div>
          </div>

          <Link href="#" className="hover:text-id-red transition-colors">Nos Engagements</Link>

          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-id-red transition-colors">
              Nos Solutions <ChevronDown size={16} />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top">
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100 text-id-home normal-case">ID HOME</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100 text-id-pro normal-case">ID PRO</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100 text-id-agri normal-case">ID AGRI</Link>
            </div>
          </div>

          <Link href="#" className="hover:text-id-red transition-colors">Actualités</Link>
          <Link href="#" className="hover:text-id-red transition-colors">Contact</Link>
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="#"
            className="bg-id-cta text-white px-6 py-2 rounded font-bold hover:bg-id-red transition-colors uppercase text-sm"
          >
            Espace Client
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-50 text-id-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <nav className="flex flex-col gap-6 text-center text-xl font-heading font-bold text-id-dark">
             <Link href="#" onClick={() => setIsMenuOpen(false)}>Le Groupe</Link>
             <Link href="#" onClick={() => setIsMenuOpen(false)}>Nos Engagements</Link>
             <Link href="#" onClick={() => setIsMenuOpen(false)}>Nos Solutions</Link>
             <Link href="#" onClick={() => setIsMenuOpen(false)}>Actualités</Link>
             <Link href="#" onClick={() => setIsMenuOpen(false)}>Contact</Link>
             <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-id-red">Espace Client</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
