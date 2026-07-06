import { motion } from 'framer-motion';

const staffMembers = [
  {
    name: 'Daisy Ramos',
    title: 'RDA',
    image: 'https://dentalplaceofplano.com/wp-content/uploads/2024/11/1-600x900.jpg'
  }
];

export default function AboutStaff() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#dfb15b] font-bold tracking-widest uppercase text-sm mb-3 block">Our Support</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
            Meet Our Staff
          </h2>
        </motion.div>

        <div className="flex justify-center">
          {staffMembers.map((staff, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="w-full max-w-[320px]"
            >
              <div className="relative w-full aspect-[3/4] flex flex-col justify-end overflow-hidden group bg-white rounded-3xl shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] transition-shadow duration-500 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)] border border-slate-100">
                
                {/* Staff Image */}
                <div className="absolute inset-0 z-0 bg-slate-100">
                  <img 
                    src={staff.image} 
                    alt={staff.name} 
                    className="w-full h-[95%] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                </div>

                {/* Info Panel */}
                <div className="relative z-10 w-full p-8 text-center flex flex-col items-center justify-end">
                  <h3 className="text-3xl font-serif text-white mb-2">
                    {staff.name}
                  </h3>
                  <p className="text-sm font-bold text-[#dfb15b] uppercase tracking-widest">
                    {staff.title}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
