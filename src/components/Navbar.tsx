import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-500 pt-4 px-4 md:px-0">
      <div className="max-w-6xl mx-auto transition-all duration-500 rounded-full border bg-white/40 backdrop-blur-xl shadow-lg border-white/60 py-2 px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Dark text on light background */}
          <Link to="/" className="flex flex-col group">
            <span className="text-lg md:text-xl font-bold tracking-tight text-navy transition-colors group-hover:text-gold">
              Bookkeeping by Nalini
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-gold font-bold">
              Professional Services
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-sm font-semibold transition-colors hover:text-gold group
                  ${location.pathname === link.path ? 'text-gold' : 'text-navy'}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />
                </Link>
              ))}
            </div>

            {/* Socials & CTA */}
            <div className="flex items-center space-x-5 pl-6 border-l border-navy/20">
              <a href="https://web.facebook.com/..." target="_blank" rel="noopener noreferrer" className="transition-all text-navy/70 hover:text-gold hover:scale-110">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/..." target="_blank" rel="noopener noreferrer" className="transition-all text-navy/70 hover:text-gold hover:scale-110">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/..." target="_blank" rel="noopener noreferrer" className="transition-all text-navy/70 hover:text-gold hover:scale-110">
                <Linkedin size={18} />
              </a>
              <Link to="/contact" className="text-xs font-bold py-2.5 px-6 rounded-full transition-all active:scale-95 bg-navy text-white hover:bg-gold hover:text-navy shadow-sm">
                Free Consultation
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-navy transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav - Stronger Glassmorphism */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 mx-auto max-w-[90%] bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border border-white/50"
          >
            <div className="flex flex-col p-8 space-y-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-bold ${
                    location.pathname === link.path ? 'text-gold' : 'text-navy'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-black/5" />
              <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-gold text-white font-bold py-4 rounded-2xl">
                Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}