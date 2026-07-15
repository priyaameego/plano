import { motion } from 'framer-motion';
import { MapPin, Cpu, Heart, Clock, DollarSign, Users, CheckCircle2 } from 'lucide-react';

export default function AboutPractice() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#dfb15b] font-bold tracking-widest uppercase text-sm mb-3 block">Welcome to Dental Place of Plano</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 leading-tight">
              About Our Practice
            </h2>
            
            <div className="text-gray-600 text-[15px] leading-relaxed space-y-6 mb-8">
              <p>
                Dental Place of Plano is a family-owned and operated dental practice led by Dr. Daniel Juma and Dr. Stephanie Lobo. Supported by a skilled, friendly, and experienced team, we are committed to delivering high-quality personalized care in a welcoming environment. Our doctors take the time to get to know each patient, carefully address concerns, and develop treatment plans tailored to individual needs. We believe in building lasting relationships and serving as trusted partners to achieve optimal oral health and confident smiles.
              </p>
              <p>
                Our goal is to provide an exceptional patient experience through flexible scheduling, affordable financial options, and advanced treatment solutions. Using the latest dental technology, we deliver comprehensive, comfortable care for patients of all ages while creating healthy, beautiful smiles that last.
              </p>
              <p>
                Conveniently located at the intersection of Park Boulevard and Coit Road, Dental Place of Plano serves patients from Plano, Dallas, Frisco, McKinney, Allen, Richardson, Murphy, Carrollton, and surrounding communities. Our modern office is equipped with state-of-the-art imaging, monitoring, and surgical technology designed to maximize patient comfort and safety. We utilize advanced tools such as digital impressions, digital radiography, and 3D Cone Beam CT imaging. Our technology provides detailed three-dimensional views of the teeth, jaws, and surrounding structures, allowing Dr. Juma and Dr. Lobo to diagnose conditions more accurately and plan treatments with greater precision than traditional dental X-rays alone.
              </p>
            </div>
            
          </motion.div>

          {/* Right Column - Image & Tech */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] group bg-slate-200">
              <img 
                src="https://dentalplaceofplano.com/wp-content/uploads/2024/09/99e85c5d46192b185a2eb6c6ddf7522a5db91414.jpg" 
                alt="Dental Place of Plano Team" 
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-[#dfb15b] rounded-3xl"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
