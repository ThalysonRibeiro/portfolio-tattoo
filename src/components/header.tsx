"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mountd, setMounted] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:768px)');
    setIsLargeScreen(mediaQuery.matches);
    function handleResize() {
      setIsLargeScreen(mediaQuery.matches)
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  }, []);

  useEffect(() => {
    setMounted(true);
    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollToSection(id: string) {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      setIsMenuOpen(false)
    }
  }
  return (
    <header className={`fixed w-full flex items-center justify-center z-50 transition-all duration-300
      ${isScrolled
        ? 'bg-zinc-950/80 backdrop-blur-sm shadow-lg'
        : 'bg-transparent'}`}>
      <div
        className={`max-w-7xl w-full z-50 transition-all duration-300`}
      >
        <div className=" w-full px-4">
          <div className="w-full flex items-center h-20 md:justify-end justify-between">
            {mountd && isLargeScreen && (
              <h1 className="text-3xl text-primary">STIG TATTOO</h1>
            )}

            <nav className="hidden w-full md:flex items-center justify-end gap-3">
              {['Inicio', 'serviços', 'Sobre', 'Contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="font-bold text-gray-300 hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
              <Link href="/galeria" className="font-bold text-gray-300 hover:text-primary transition-colors">Galeria</Link>
              <Link href="/posts" className="font-bold text-gray-300 hover:text-primary transition-colors">Posts</Link>
            </nav>
            <button
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen
                ? <X />
                : <GiHamburgerMenu size={24} className="hover:text-primary" />}
            </button>
          </div>
        </div>
        {/* Menu Mobie */}
        {isMenuOpen && (
          <div
            className={`md:hidden fixed w-full z-50 transition-all duration-300 ${isScrolled
              ? 'bg-zinc-950 backdrop-blur-sm shadow-lg'
              : 'bg-zinc-950/90'}`}
          >
            <div className="conatiner mx-auto px-4 py-4">
              <nav className="flex flex-col items-start gap-3 font-bold">
                {['Inicio', 'serviços', 'Sobre', 'Contato'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                ))}
                <Link href="/galeria" className="font-bold text-gray-300 hover:text-primary transition-colors">Galeria</Link>
                <Link href="/posts" className="font-bold text-gray-300 hover:text-primary transition-colors">Posts</Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

function X() {
  return <div className="hover:text-primary font-bold">X</div>
}