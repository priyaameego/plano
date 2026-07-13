import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const sliderImages = [
  '/veneers-1.png',
  '/dental-implant.png',
  '/orthodontics.png'
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => setCurrentImage((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () => setCurrentImage((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 8, ease: "linear" }
            }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${sliderImages[currentImage]}')` }}
          />
        </AnimatePresence>
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Slider Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-black/20 hover:bg-black/60 text-white backdrop-blur-sm transition-all border border-white/10 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-black/20 hover:bg-black/60 text-white backdrop-blur-sm transition-all border border-white/10 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-12 md:mt-0">
        
        {/* Company Logo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <img src="/logo.png" alt="Dental Place of Plano" className="h-16 md:h-24 w-auto object-contain drop-shadow-2xl" />
        </motion.div>
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-4 drop-shadow-lg">
            Dental Place <span className="text-[#dfb15b] font-bold">Of Plano</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-200 font-light tracking-wide mb-10 drop-shadow-md">
            Dr. Daniel Juma & Dr. Stephanie Lobo
          </h2>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            <a 
              href="/book-now" 
              className="w-full sm:w-auto bg-[#dfb15b] text-white font-bold flex items-center justify-center gap-2 text-lg px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_-10px_rgba(223,177,91,0.5)] shadow-lg"
            >
              Book Consultation
            </a>
            <a 
              href="/services" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-center text-lg shadow-lg"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Slider Controls / Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center gap-3">
        {sliderImages.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
              currentImage === idx ? 'bg-[#dfb15b] w-8' : 'bg-white/40 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
