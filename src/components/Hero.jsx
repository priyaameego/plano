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
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.15 }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 10, ease: "linear" }
            }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${sliderImages[currentImage]}')` }}
          />
        </AnimatePresence>
        {/* Gradient Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
          
          <div className="max-w-2xl flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex flex-col items-start gap-4 mb-10">
                <h1 className="text-5xl md:text-7xl font-light text-white leading-tight font-sans uppercase tracking-wide">
                  Dental Place <span className="font-bold text-[#dfb15b]">Of Plano</span>
                </h1>
                <h3 className="text-2xl md:text-3xl text-gray-200 font-light tracking-wide border-l-4 border-[#dfb15b] pl-4 mt-2">
                  Dr. Daniel Juma & Dr. Lobo
                </h3>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/book-now" className="bg-[#dfb15b] text-black hover:bg-white font-bold flex items-center justify-center gap-2 text-lg px-8 py-4 rounded-sm transition-all duration-300">
                  Book Consultation
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/services" className="px-8 py-4 rounded-sm bg-transparent border border-gray-600 text-white font-semibold hover:bg-white/10 transition-all duration-300 text-center text-lg">
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
              <div className="mb-6">
                <img src="/logo.png" alt="Dental Place of Plano" className="h-24 md:h-32 w-auto object-contain drop-shadow-lg" />
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
