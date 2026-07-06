import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  { id: 'dental-implants', title: 'Dental Implants', image: '/dental-implant.png' },
  { id: 'navigated-surgery', title: 'Navigated Surgery', image: '/navigated-surgery.jpg' },
  { id: 'preventive-care', title: 'Preventive Care', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2000' },
  { id: 'veneer', title: 'Veneers', image: '/veneers-1.png' },
  { id: 'root-canal', title: 'Root Canal', image: '/root-canal.png' },
  { id: 'extraction', title: 'Extraction', image: '/extraction-1.png' }
];

export default function WhoWeAre() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#dfb15b]/5 skew-x-12 translate-x-20"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          
          {/* Text Content */}
          <div className="lg:col-span-6 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-[#dfb15b] font-bold tracking-widest uppercase text-sm mb-3 block">Discover</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-8 leading-tight">
                Who We <span className="font-bold text-[#dfb15b]">Are</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl">
                <p>
                  Dental Place of Plano is a family owned and operated practice with two highly skilled and dedicated doctors, <strong>Doctor Daniel Juma</strong> and <strong>Doctor Lobo</strong>. They are supported by a friendly, experienced and professional team, with a mission to provide our patients with consistent care of the highest quality.
                </p>
                <p>
                  Patients can therefore expect to always have the personal attention of their doctor who is committed to being a trusted partner in their pursuit of great health and an amazing smile. Doctor Juma and Doctor Lobo both endeavor to spend ample time with each patient to ensure that all treatment needs are met and concerns addressed to the best of their ability.
                </p>
                <p>
                  At Dental Place of Plano, it is our objective to offer an exceptional patient experience by offering flexible hours of operation, a variety of financial alternatives, and innovative treatment options using the latest technology in order to provide personalized, pain-free comprehensive dental care for the entire family while creating uniquely beautiful smiles that last!
                </p>
              </div>

              <a 
                href="/services"
                className="inline-flex items-center gap-2 bg-[#dfb15b] text-white font-bold px-8 py-4 rounded-full uppercase tracking-widest text-sm shadow-[0_10px_25px_-5px_rgba(223,177,91,0.5)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#cda049] hover:shadow-[0_15px_30px_-5px_rgba(223,177,91,0.6)]"
              >
                Services
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Doctor Images */}
          <div className="lg:col-span-6 xl:col-span-5 relative mt-16 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative h-[650px]"
            >
              {/* Doctor 1 (Juma) */}
              <div className="absolute top-0 left-0 w-3/4 max-w-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10 group">
                <img 
                  src="/dr-juma.png" 
                  alt="Doctor Daniel Juma" 
                  className="w-full h-[400px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 pt-24">
                  <h3 className="text-white font-serif text-2xl mb-1 drop-shadow-md">Dr. Daniel Juma</h3>
                  <p className="text-[#dfb15b] text-sm font-bold uppercase tracking-wider">Lead Dentist</p>
                </div>
              </div>

              {/* Doctor 2 (Lobo) */}
              <div className="absolute bottom-0 right-0 w-[65%] max-w-[320px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20 group">
                <img 
                  src="https://dentalplaceofplano.com/wp-content/uploads/2024/11/2-600x900.jpg" 
                  alt="Doctor Stephanie Lobo" 
                  className="w-full h-[320px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 pt-20">
                  <h3 className="text-white font-serif text-xl mb-1 drop-shadow-md">Dr. Lobo</h3>
                  <p className="text-[#dfb15b] text-xs font-bold uppercase tracking-wider">Dental Surgeon</p>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-[radial-gradient(#dfb15b_1px,transparent_1px)] [background-size:24px_24px] opacity-10 -z-10 animate-[spin_60s_linear_infinite]"></div>
            </motion.div>
          </div>

        </div>

        {/* Premium Service Cards Section */}
        <div className="mt-32 pt-16 border-t border-gray-200/60">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#dfb15b] font-bold tracking-widest uppercase text-sm mb-3 block">Expertise</span>
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900">
              Our Premium Services
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.a
                href={`/services/${service.id}`}
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative block w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-black cursor-pointer"
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-80"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h4 className="text-2xl font-serif text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                    {service.title}
                  </h4>
                  <div className="flex items-center text-[#dfb15b] font-semibold text-sm opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
