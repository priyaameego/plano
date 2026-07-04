import { motion } from 'framer-motion';

const doctors = [
  {
    name: 'Dr. Daniel Juma',
    title: 'DDS, ICOI',
    image: 'https://dentalplaceofplano.com/wp-content/uploads/2021/02/Dan.png',
  },
  {
    name: 'Dr. Stephanie Lobo',
    title: 'DDS',
    image: 'https://dentalplaceofplano.com/wp-content/uploads/2024/11/2-600x900.jpg',
  }
];

export default function AboutDoctors() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {doctors.map((doctor, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-[400px] h-[550px] flex flex-col justify-end overflow-hidden group">
                
                {/* Doctor Image */}
                <div className="absolute inset-0 z-0 flex justify-center">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="h-[85%] w-auto object-cover object-top"
                  />
                </div>

                {/* Slanted Gold Box */}
                <div 
                  className="relative z-10 w-full bg-[#d9af3f] p-8 text-center flex flex-col items-center justify-center min-h-[180px]"
                  style={{ 
                    clipPath: 'polygon(0 25%, 100% 0, 100% 100%, 0 100%)',
                    marginTop: 'auto' 
                  }}
                >
                  <h3 className="text-3xl font-light text-gray-800 mb-2 mt-4">
                    {doctor.name}
                  </h3>
                  <p className="text-sm font-semibold text-gray-700 uppercase tracking-widest">
                    {doctor.title}
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
