import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop", // wide
  "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1974&auto=format&fit=crop", // tall
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop", // square
  "https://images.unsplash.com/photo-1598256989800-fea5ce5146c1?q=80&w=2070&auto=format&fit=crop", // square
  "https://images.unsplash.com/photo-1590664216390-34fa79bf39b8?q=80&w=2070&auto=format&fit=crop", // wide
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="subtitle">Our Clinic</span>
          <h2 className="heading-lg">
            Step Into a <span className="text-navy-900">Relaxing Environment</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] md:h-[800px]">
          {/* Main Wide */}
          <motion.div 
            className="md:col-span-2 md:row-span-1 rounded-2xl overflow-hidden relative group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <img src={images[0]} alt="Clinic" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-navy-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Tall */}
          <motion.div 
            className="hidden md:block md:col-span-1 md:row-span-2 rounded-2xl overflow-hidden relative group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <img src={images[1]} alt="Clinic" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-navy-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Square 1 */}
          <motion.div 
            className="hidden md:block md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden relative group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <img src={images[2]} alt="Clinic" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-navy-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Square 2 */}
          <motion.div 
            className="md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden relative group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <img src={images[3]} alt="Clinic" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-navy-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Wide 2 */}
          <motion.div 
            className="md:col-span-2 md:row-span-1 rounded-2xl overflow-hidden relative group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <img src={images[4]} alt="Clinic" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-navy-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
