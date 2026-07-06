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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <Users className="w-6 h-6 text-[#d9af3f]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Experienced Team</h4>
                  <p className="text-sm text-gray-500 mt-1">Friendly, professional, and dedicated care.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <Heart className="w-6 h-6 text-[#d9af3f]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Patient-Focused</h4>
                  <p className="text-sm text-gray-500 mt-1">Personalized treatments for your smile.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <Clock className="w-6 h-6 text-[#d9af3f]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Flexible Scheduling</h4>
                  <p className="text-sm text-gray-500 mt-1">Appointments that fit your lifestyle.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <DollarSign className="w-6 h-6 text-[#d9af3f]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Affordable Options</h4>
                  <p className="text-sm text-gray-500 mt-1">Flexible financial plans available.</p>
                </div>
              </div>
            </div>
            
            {/* Communities Served */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-[#8a3324]" />
                <h4 className="font-bold text-gray-800 text-lg">Communities We Serve</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              
              {/* Technology Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#dfb15b]/20 p-3 rounded-full backdrop-blur-sm">
                    <Cpu className="w-6 h-6 text-[#dfb15b]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-white font-bold">Advanced Technology</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-white/95 bg-black/20 p-3 rounded-lg backdrop-blur-sm">
                    <CheckCircle2 className="w-6 h-6 text-[#dfb15b] shrink-0" />
                    <span className="font-medium text-lg">Digital Impressions</span>
                  </li>
                  <li className="flex items-center gap-4 text-white/95 bg-black/20 p-3 rounded-lg backdrop-blur-sm">
                    <CheckCircle2 className="w-6 h-6 text-[#dfb15b] shrink-0" />
                    <span className="font-medium text-lg">Digital Radiography</span>
                  </li>
                  <li className="flex items-center gap-4 text-white/95 bg-black/20 p-3 rounded-lg backdrop-blur-sm">
                    <CheckCircle2 className="w-6 h-6 text-[#dfb15b] shrink-0" />
                    <span className="font-medium text-lg">3D Cone Beam CT Imaging</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-[#dfb15b] rounded-3xl"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
