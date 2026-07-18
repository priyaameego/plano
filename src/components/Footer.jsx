import { ArrowUp } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-slate-300 pt-20 pb-10 border-t-4 border-[#dfb15b]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="Dental Place of Plano" className="h-12 w-auto object-contain" />
            </a>
            <div className="space-y-4 mb-6">
              <p className="flex items-start gap-2">
                <span className="text-[#dfb15b] font-bold">Address:</span>
                <span>220 Coit Rd #570, Plano, TX 75075</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#dfb15b] font-bold">Phone:</span>
                <a href="tel:9729646500" className="hover:text-white transition-colors">972 964 6500</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#dfb15b] font-bold">Email:</span>
                <a href="mailto:info@dentalplaceofplano.com" className="hover:text-white transition-colors">info@dentalplaceofplano.com</a>
              </p>
            </div>
            <div className="flex gap-4">
              <a href="https://facebook.com/dentalplaceofplano" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#dfb15b] hover:text-black transition-all text-white">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/dentalplaceofplano" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#dfb15b] hover:text-black transition-all text-white">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6">Office Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-start">
                <span className="w-36 text-gray-400">Monday - Friday:</span> 
                <span className="text-white">9:00 am - 5:00 pm</span>
              </li>
              <li className="flex justify-start">
                <span className="w-36 text-gray-400">Saturday:</span> 
                <span className="text-white">By Appointment</span>
              </li>
              <li className="flex justify-start">
                <span className="w-36 text-gray-400">Sunday:</span> 
                <span className="text-white">Closed</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', link: '/' },
                { name: 'About Us', link: '/about' },
                { name: 'Services', link: '/services' },
                { name: 'Book Now', link: '/book-now' },
                { name: 'Testimonials', link: '/testimonials' },
                { name: 'Contact Us', link: '/contact' }
              ].map((item, i) => (
                <li key={i}>
                  <Link to={item.link} className="hover:text-[#dfb15b] transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dfb15b]" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Services */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6">Featured Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'Dental Implants', link: '/services/dental-implants' },
                { name: 'Navigated Surgery', link: '/services/navigated-surgery' },
                { name: 'Preventive Care', link: '/services/preventive-care' },
                { name: 'Veneer', link: '/services/veneer' },
                { name: 'Root Canal', link: '/services/root-canal' },
                { name: 'Extraction', link: '/services/extraction' }
              ].map((service, i) => (
                <li key={i}>
                  <Link to={service.link} className="hover:text-[#dfb15b] transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dfb15b]" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="relative border-t-2 border-[#111] bg-black mt-10">
        <div className="container mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center">
          
          <p className="text-sm text-gray-400">
            Copyright &copy; 2026 Ameego Labs. All Rights Reserved
          </p>

          {/* Scroll to Top Button (overlapping the border) */}
          <button 
            onClick={scrollToTop}
            className="absolute left-1/2 md:left-auto md:right-1/3 transform -translate-x-1/2 -top-6 w-12 h-12 rounded-full bg-[#dca843] flex items-center justify-center hover:bg-white text-black transition-all shadow-lg"
          >
            <ArrowUp className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4 text-sm text-[#dca843] mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-gray-800">|</span>
            <a href="/contact" className="hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
