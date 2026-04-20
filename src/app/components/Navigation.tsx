import { Link, useLocation } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { Languages, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const { t, language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { path: '/portfolio', label: t('portfolio') },
    { path: '/contact', label: t('contact') },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://i.im.ge/eBIim8/Untitled_design_1_.png"
              alt="OCTOPUS Logo"
              className="h-12 md:h-16 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-lg md:text-2xl font-bold leading-tight">Octopus</span>
              <span className="text-xs md:text-sm leading-tight">stickers car</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-accent-foreground transition-colors ${
                  isActive(link.path) ? 'border-b-2 border-primary-foreground' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1 rounded-md bg-primary-foreground text-primary hover:bg-accent transition-colors"
            >
              <Languages className="w-4 h-4" />
              <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-primary/80 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                className={`block py-2 px-4 rounded-md hover:bg-primary/80 transition-colors ${
                  isActive(link.path) ? 'bg-primary/80' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                toggleLanguage();
                closeMobileMenu();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-primary-foreground text-primary hover:bg-accent transition-colors"
            >
              <Languages className="w-4 h-4" />
              <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
