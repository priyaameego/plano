import { motion } from 'framer-motion';

const staffMembers = [
  {
    name: 'Daisy',
    title: 'Registered Dental Assistant (RDA)',
    image: 'https://images.unsplash.com/photo-1594824432258-f94f923e2dc4?q=80&w=2070&auto=format&fit=crop' // Placeholder portrait
  }
  // Emerson will be added here once a photo is available
];

export default function AboutStaff() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#dfb15b] font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Our Supporting Team
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            Meet Our Staff
          </motion.h2>
        </div>

        {/* Premium Office/Team Image Replacement */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 w-full h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2069&auto=format&fit=crop" 
            alt="Dental Office Team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-8 left-8 right-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-2 shadow-sm">A Welcoming Environment</h3>
            <p className="text-white/90 text-sm max-w-2xl mx-auto shadow-sm">Dedicated to making your visit as comfortable as possible.</p>
          </div>
        </motion.div>

        {/* Staff Cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {staffMembers.map((staff, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="bg-slate-50 rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="aspect-square w-full overflow-hidden">
                    <img 
                      src={staff.image} 
                      alt={staff.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 text-center bg-white">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{staff.name}</h3>
                    <p className="text-[#dfb15b] font-medium uppercase tracking-wider text-sm">{staff.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
