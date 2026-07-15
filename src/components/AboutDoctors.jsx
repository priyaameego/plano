import { motion } from 'framer-motion';
import { Award, GraduationCap, Stethoscope, Star, CheckCircle } from 'lucide-react';

export default function AboutDoctors() {
  return (
    <section className="pt-10 pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-20">
          <span className="text-[#dfb15b] font-bold tracking-widest uppercase text-sm mb-3 block">Expert Team</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
            Meet Our Doctors
          </h2>
        </div>

        {/* Dr. Daniel Juma - Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group bg-slate-100 max-w-[400px] mx-auto lg:ml-auto">
              <img 
                src="/dr-juma.png" 
                alt="Dr. Daniel Juma" 
                className="w-full h-[550px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-20"></div>
            </div>
          </motion.div>

          {/* Info sliding in from the right */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:pl-8"
          >
            <h3 className="text-4xl font-serif text-gray-900 mb-2">Dr. Daniel Juma</h3>
            <p className="text-[#dfb15b] font-bold tracking-wider uppercase text-sm mb-6">DDS, ICOI</p>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Dr. Juma is dedicated to providing high-quality, comprehensive dental care. With a focus on Oral Implantology and advanced restorative techniques, he brings extensive knowledge and a gentle touch to every patient. He believes in staying at the forefront of dental technology to ensure optimal outcomes and patient comfort.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-50 p-3 rounded-xl shrink-0 mt-1">
                  <Award className="w-5 h-5 text-[#dfb15b]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-[17px] mb-1">Platinum Invisalign Provider 2024</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Recognized for exceptional experience and results in clear aligner orthodontic therapy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-50 p-3 rounded-xl shrink-0 mt-1">
                  <GraduationCap className="w-5 h-5 text-[#dfb15b]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-[17px] mb-1">International Congress of Oral Implantologists</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Active member dedicated to the highest standards of implant dentistry.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-slate-50 p-3 rounded-xl shrink-0 mt-1">
                  <Stethoscope className="w-5 h-5 text-[#dfb15b]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-[17px] mb-1">Clinical Experience</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Providing cosmetic dentistry, airway management, bone grafting, and periodontal surgery.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dr. Stephanie Lobo - Image Left, Text Right (Same layout to match "do the same for Dr. Lobo") */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group bg-slate-100 max-w-[400px] mx-auto lg:ml-auto">
              <img 
                src="https://dentalplaceofplano.com/wp-content/uploads/2024/11/2-600x900.jpg" 
                alt="Dr. Stephanie Lobo" 
                className="w-full h-[550px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-20"></div>
            </div>
          </motion.div>
          
          {/* Info sliding in from the right */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:pl-8"
          >
            <h3 className="text-4xl font-serif text-gray-900 mb-2">Dr. Stephanie Lobo</h3>
            <p className="text-[#dfb15b] font-bold tracking-wider uppercase text-sm mb-6">DDS</p>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Dr. Lobo brings a compassionate approach and exceptional clinical skills to our practice. She is committed to creating uniquely beautiful smiles that last while providing pain-free, comprehensive dental care for the entire family. Her dedication to continuous learning ensures her patients receive the best possible care.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-50 p-3 rounded-xl shrink-0 mt-1">
                  <GraduationCap className="w-5 h-5 text-[#dfb15b]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-[17px] mb-1">Education & Credentials</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Board Certified and ADA recognized practitioner in General dentistry, committed to excellence in patient care and clinical outcomes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-slate-50 p-3 rounded-xl shrink-0 mt-1">
                  <Star className="w-5 h-5 text-[#dfb15b]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-[17px] mb-1">Cosmetic & Preventative Care</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Experienced in delivering a full range of Whole Health Dental treatments, focusing on preventative, restorative, and cosmetic procedures.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
