import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop", // Wide: Clinic interior/equipment
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop", // Tall: Treatment room
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop", // Square: Waiting area / bright
  "https://images.unsplash.com/photo-1590664216390-34fa79bf39b8?q=80&w=1000&auto=format&fit=crop", // Square: Dental tools / pristine
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop", // Wide: Modern office interior
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-[#dfb15b]/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#dfb15b] font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Our Clinic
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900"
          >
            Step Into a <span className="text-[#dfb15b]">Relaxing Environment</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 mt-6 text-lg max-w-2xl mx-auto"
          >
            Experience dental care in a space designed for your comfort and peace of mind.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[700px] md:h-[800px]">
          {/* Main Wide */}
          <motion.div 
            className="md:col-span-2 md:row-span-1 rounded-[2.5rem] overflow-hidden relative group shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <img src={images[0]} alt="Clinic interior" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Tall */}
          <motion.div 
            className="hidden md:block md:col-span-1 md:row-span-2 rounded-[2.5rem] overflow-hidden relative group shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <img src={images[1]} alt="Treatment room" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Square 1 */}
          <motion.div 
            className="hidden md:block md:col-span-1 md:row-span-1 rounded-[2.5rem] overflow-hidden relative group shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <img src={images[2]} alt="Waiting area" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Square 2 */}
          <motion.div 
            className="md:col-span-1 md:row-span-1 rounded-[2.5rem] overflow-hidden relative group shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <img src={images[3]} alt="Dental equipment" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Wide 2 */}
          <motion.div 
            className="md:col-span-2 md:row-span-1 rounded-[2.5rem] overflow-hidden relative group shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <img src={images[4]} alt="Modern office interior" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
