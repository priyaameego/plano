import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          src="/orthodontics.png" 
          alt="Dental Place of Plano Practice" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-[#dfb15b] font-bold tracking-widest uppercase text-sm mb-4 block">Dental Place of Plano</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About Our Practice
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Where advanced technology meets compassionate, personalized care. We are dedicated to providing a luxurious and comfortable dental experience for you and your family.
          </p>
          <div className="mt-10">
            <a href="/book-now" className="inline-block bg-[#dfb15b] text-white font-bold py-4 px-10 rounded-full hover:bg-[#cda049] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_-10px_rgba(223,177,91,0.5)]">
              Book an Appointment
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll to Discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-[#dfb15b]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
