import { motion } from 'framer-motion';

const staffMembers = [
  {
    name: 'Daisy Ramos',
    title: 'RDA',
    image: 'https://dentalplaceofplano.com/wp-content/uploads/2024/11/1-600x900.jpg'
  },
  {
    name: 'Jasmin Caballero',
    title: 'Finance Manager',
    image: 'https://dentalplaceofplano.com/wp-content/uploads/2024/09/931f3bfa650e15643975d8085ead892e0286681c-600x900.jpg'
  },
  {
    name: 'Maria Torres',
    title: 'Office Manager',
    image: 'https://dentalplaceofplano.com/wp-content/uploads/2024/09/041d46bd9bbed4b333be7cfc13c8c1941c7a986c-600x900.jpg'
  }
];

export default function AboutStaff() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {staffMembers.map((staff, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-[350px] h-[500px] flex flex-col justify-end overflow-hidden group bg-slate-50">
                
                {/* Staff Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={staff.image} 
                    alt={staff.name} 
                    className="w-full h-[90%] object-cover object-top"
                  />
                </div>

                {/* Slanted Gold Box */}
                <div 
                  className="relative z-10 w-full bg-[#d9af3f] p-6 text-center flex flex-col items-center justify-center min-h-[160px]"
                  style={{ 
                    clipPath: 'polygon(0 25%, 100% 0, 100% 100%, 0 100%)',
                    marginTop: 'auto' 
                  }}
                >
                  <h3 className="text-2xl font-light text-gray-800 mb-2 mt-4">
                    {staff.name}
                  </h3>
                  <p className="text-xs font-semibold text-gray-700 uppercase tracking-widest">
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
