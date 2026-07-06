import { motion } from 'framer-motion';

const officeImages = [
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop', 
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop', 
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop', 
];

export default function OfficeGallery() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-[#dfb15b] font-bold tracking-widest uppercase text-sm mb-3 block">Tour Our Clinic</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
            Our Modern Office
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {officeImages.map((src, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] group aspect-[4/5] md:aspect-[3/4]"
            >
              <img 
                src={src} 
                alt={`Office Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
