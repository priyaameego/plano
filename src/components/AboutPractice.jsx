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
              A Family-Owned Practice Focused on You
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Led by Dr. Daniel Juma and Dr. Stephanie Lobo, our practice is dedicated to providing personalized, patient-focused care in a welcoming environment. 
              Our friendly and experienced team is here to ensure that every visit is comfortable, effective, and tailored to your unique needs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="flex items-start gap-2">
                <div className="bg-white p-1.5 rounded shadow-sm shrink-0">
                  <Users className="w-4 h-4 text-[#d9af3f]" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 text-xs">Experienced Team</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">Friendly, professional, and dedicated care.</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-white p-1.5 rounded shadow-sm shrink-0">
                  <Heart className="w-4 h-4 text-[#d9af3f]" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 text-xs">Patient-Focused</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">Personalized treatments for your smile.</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-white p-1.5 rounded shadow-sm shrink-0">
                  <Clock className="w-4 h-4 text-[#d9af3f]" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 text-xs">Flexible Scheduling</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">Appointments that fit your lifestyle.</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-white p-1.5 rounded shadow-sm shrink-0">
                  <DollarSign className="w-4 h-4 text-[#d9af3f]" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 text-xs">Affordable Options</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">Flexible financial plans available.</p>
                </div>
              </div>
            </div>
            
            {/* Communities Served */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-[#8a3324]" />
                <h4 className="font-semibold text-gray-800 text-sm">Communities We Serve</h4>
              </div>
              <p className="text-gray-600 leading-relaxed text-xs">
                Plano, Dallas, Frisco, McKinney, Allen, Richardson, Murphy, Carrollton, and surrounding areas.
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
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] group">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop" 
                alt="Modern Dental Technology" 
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
