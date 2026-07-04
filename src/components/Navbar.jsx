import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Clock, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { 
    name: 'Services', 
    dropdown: [
      { name: 'Dental Implants', href: '/services/dental-implants' },
      { name: 'Invisalign', href: '/services/invisalign' },
      { name: 'Navigated Surgery', href: '/services/navigated-surgery' },
      { name: 'Preventive Care', href: '/services/preventive-care' },
      { name: 'Veneer', href: '/services/veneer' },
      { name: 'Root Canal', href: '/services/root-canal' },
      { name: 'Extraction', href: '/services/extraction' }
    ]
  },
  { name: 'Testimonial', href: '/testimonials' },
  { name: 'Patient Resources', 
    dropdown: [
      { name: 'New Patient', href: '/new-patient' },
      { name: 'Patient Education', href: '/patient-education' },
      { name: 'Financial', href: '/financial' }
    ]
  },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Book Now', href: '/book-now' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Alert Bar */}
      <div className="bg-[#dfb15b] text-black text-xs sm:text-sm font-semibold py-2 px-4 z-50 relative">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 max-w-7xl">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6">
            <a 
              href="https://www.google.com/maps/place/Dental+Place+of+Plano/@33.029332,-96.7690026,17.17z/data=!4m6!3m5!1s0x864c226049c93f9d:0x3f617dca4dac35b3!8m2!3d33.0294235!4d-96.7689883!16s%2Fg%2F11g877z61j" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <MapPin className="w-4 h-4" />
              220 Coit Rd #570, Plano, TX 75075
            </a>
            <span className="hidden md:flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              Mon-Sat: 9am - 6pm
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:9729646500" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              972 964 6500
            </a>
            <NavLink 
              to="/book-now"
              className="bg-black text-[#dfb15b] px-4 py-1.5 rounded-full hover:bg-white hover:text-black transition-colors shadow-md text-xs sm:text-sm uppercase tracking-wider"
            >
              Book Appointment
            </NavLink>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${
          scrolled ? 'bg-[#000000] shadow-lg shadow-black/50 py-1' : 'bg-[#0a0a0a] py-2'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative">
          <div className="flex justify-between items-center w-full">
            
            {/* Left: Logo */}
            <div className="flex-1 flex justify-start z-10">
              <NavLink to="/" className="flex items-center group">
                <img src="/logo.png" alt="Dental Place of Plano" className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
              </NavLink>
            </div>

            {/* Center: Desktop Navigation */}
            <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none z-10">
              <div className="flex items-center space-x-2 lg:space-x-8 pointer-events-auto">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group py-4">
                  {link.dropdown ? (
                    <div className="flex items-center cursor-pointer">
                      <span className="text-sm lg:text-[0.95rem] font-semibold transition-colors text-gray-300 group-hover:text-white">
                        {link.name}
                      </span>
                      <svg className="w-4 h-4 ml-1 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  ) : (
                    <NavLink 
                      to={link.href}
                      className="flex items-center group"
                    >
                      {({ isActive }) => (
                        <>
                          {isActive && (
                            <div className="w-[3px] h-[18px] bg-[#dfb15b] transform -skew-x-12 mr-2"></div>
                          )}
                          <span className={`text-sm lg:text-[0.95rem] font-semibold transition-colors flex items-center h-full ${
                            isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                          }`}>
                            {link.name}
                          </span>
                        </>
                      )}
                    </NavLink>
                  )}
                  
                  {/* Dropdown Menu */}
                  {link.dropdown && (
                    <div className="absolute left-0 top-[100%] w-56 bg-[#1a1a1a] border border-gray-800 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left group-hover:translate-y-0 translate-y-2 z-50 overflow-hidden">
                      <div className="py-2">
                        {link.dropdown.map(dropItem => (
                          <NavLink
                            key={dropItem.name}
                            to={dropItem.href}
                            className={({ isActive }) => 
                              `block px-5 py-3 text-sm transition-colors hover:bg-[#dfb15b]/10 hover:text-[#dfb15b] ${
                                isActive ? 'text-[#dfb15b] bg-[#dfb15b]/5' : 'text-gray-300'
                              }`
                            }
                          >
                            {dropItem.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              </div>
            </div>

            {/* Right: Mobile Menu Button */}
            <div className="flex-1 flex justify-end z-10 md:hidden">
              <button 
                className="text-white hover:text-[#dfb15b] transition-colors p-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-full sm:w-80 z-30 bg-black shadow-2xl pt-28 overflow-y-auto"
          >
            <div className="px-6 flex flex-col space-y-2 pb-12">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-gray-800">
                  {link.dropdown ? (
                    <div>
                      <button 
                        className="w-full flex justify-between items-center py-4"
                        onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                      >
                        <span className={`text-lg font-bold ${openDropdown === link.name ? 'text-[#dfb15b]' : 'text-white'}`}>
                          {link.name}
                        </span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 text-[#dfb15b] ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-4 space-y-4">
                              {link.dropdown.map(dropItem => (
                                <NavLink
                                  key={dropItem.name}
                                  to={dropItem.href}
                                  className={({ isActive }) => 
                                    `block text-[0.95rem] transition-colors ${
                                      isActive ? 'text-[#dfb15b]' : 'text-gray-400 hover:text-white'
                                    }`
                                  }
                                  onClick={() => setIsOpen(false)}
                                >
                                  {dropItem.name}
                                </NavLink>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink 
                      to={link.href}
                      className={({ isActive }) => 
                        `block text-lg font-bold py-4 ${
                          isActive ? 'text-[#dfb15b]' : 'text-white'
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
