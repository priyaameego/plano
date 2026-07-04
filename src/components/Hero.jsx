import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const sliderImages = [
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop', // Happy patient
  'https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?q=80&w=2074&auto=format&fit=crop'  // Premium clinic
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${sliderImages[currentImage]}')` }}
          />
        </AnimatePresence>
        {/* Gradient Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#dfb15b] text-sm mb-6 font-medium tracking-wide">
                <Star className="w-4 h-4 fill-current" />
                <span>World-Class Premium Dental Care</span>
              </div>
              
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }} 
                transition={{ duration: 1.2, type: 'spring', bounce: 0.4 }} 
                className="flex flex-col items-start gap-4 mb-10"
              >
                <img src="/logo.png" alt="Dental Place of Plano Logo" className="h-16 md:h-20 w-auto object-contain" />
                <h1 className="text-5xl md:text-7xl font-light text-white leading-tight font-sans uppercase tracking-wide">
                  Dental Place <span className="font-bold text-[#dfb15b]">Of Plano</span>
                </h1>
                <h3 className="text-2xl md:text-3xl text-gray-200 font-light tracking-wide border-l-4 border-[#dfb15b] pl-4 mt-2">
                  Dr. Daniel Juma & Dr. Lobo
                </h3>
              </motion.div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/book-now" className="bg-[#dfb15b] text-black hover:bg-white font-bold flex items-center justify-center gap-2 text-lg px-8 py-4 rounded-sm transition-all duration-300">
                  Book Consultation
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/services" className="px-8 py-4 rounded-sm bg-white/5 backdrop-blur-md border border-gray-600 text-white font-semibold hover:bg-white/10 transition-all duration-300 text-center text-lg">
                  Explore Services
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Client Overlays */}
          <motion.div 
            className="hidden lg:flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="glass-card p-10 rounded-xl bg-black/40 backdrop-blur-md border border-gray-800 shadow-2xl flex flex-col items-center max-w-sm text-center">
              
              {/* Company Logo Overlay */}
              <div className="w-20 h-24 mb-4">
                <svg viewBox="0 0 100 120" fill="none" className="w-full h-full drop-shadow-lg">
                  <path d="M40,20 C30,20 20,30 25,50 C30,70 45,90 50,110 C50,110 40,80 50,60" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <path d="M60,20 C70,20 80,30 75,50 C70,70 55,90 50,110 C50,110 60,80 50,60" stroke="#dfb15b" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <path d="M25,60 C40,40 70,60 85,35" stroke="#dfb15b" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </div>

              {/* Company Name Overlay */}
              <h2 className="text-3xl font-light tracking-widest text-[#dfb15b] uppercase mb-1">
                Dental Place
              </h2>
              <div className="flex items-center justify-center gap-3 w-full mb-8">
                <div className="h-[1px] bg-gray-500 flex-grow"></div>
                <span className="text-xs text-gray-400 tracking-[0.3em] uppercase">Of Plano</span>
                <div className="h-[1px] bg-gray-500 flex-grow"></div>
              </div>

              {/* Doctor Name Overlay */}
              <div className="pt-8 border-t border-gray-800 w-full">
                <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">Lead Specialists</p>
                <p className="text-xl font-serif text-white italic">Dr. Daniel Juma & <span className="text-[#dfb15b]">Dr. Lobo</span></p>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Slider Controls / Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center gap-3">
        {sliderImages.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImage === idx ? 'bg-[#dfb15b] w-10' : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
