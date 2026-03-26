import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-3" : "bg-white py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <div className="w-8 h-8 bg-novus-orange flex items-center justify-center text-white font-heading font-bold text-xl">
            N
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-novus-slate">
            NOVUS <span className="text-gray-400 font-normal">CONSTRUCTION INC.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium text-novus-charcoal hover:text-novus-orange transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+19519030824" className="flex items-center gap-2 text-sm font-medium text-novus-slate hover:text-novus-orange transition-colors">
            <Phone className="w-4 h-4" />
            (951) 903-0824
          </a>
          <Button asChild>
            <Link to="/contact">Request Estimate</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 p-2 text-novus-slate"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 pb-6 transition-transform duration-300 ease-in-out md:hidden",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col gap-6 text-lg font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-novus-charcoal hover:text-novus-orange transition-colors border-b border-gray-100 pb-4"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-novus-charcoal hover:text-novus-orange transition-colors border-b border-gray-100 pb-4"
            >
              Contact
            </Link>
          </nav>
          <div className="mt-auto flex flex-col gap-4">
            <a href="tel:+19519030824" className="flex items-center justify-center gap-2 text-lg font-medium text-novus-slate py-4 border border-gray-200 rounded-sm">
              <Phone className="w-5 h-5" />
              (951) 903-0824
            </a>
            <Button size="lg" className="w-full" asChild>
              <Link to="/contact">Request Estimate</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
