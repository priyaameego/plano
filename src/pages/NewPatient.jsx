import { motion } from 'framer-motion';
import { FileText, Clock, Smile, CheckCircle, ArrowRight, Calendar } from 'lucide-react';

export default function NewPatient() {
  return (
    <main className="pt-32 pb-0 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl mb-20">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Welcome to <span className="text-[#dfb15b]">Our Practice</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Your journey to a healthier, more beautiful smile begins here. We are thrilled to welcome you to our family.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12 text-[#333333] mt-10">
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-sans">During your appointment</h2>
            <p className="text-[15px] leading-8">
              Either Dr. Daniel Juma will examine you and discuss your concerns and expectations regarding your dental health and designs for a brighter, whiter and beautiful smile.
            </p>
            <p className="text-[15px] leading-8">
              Dr. Juma would both like to encourage a lifetime of healthy smiles and will therefore focus on patient education. Having an appointment that is exclusively yours also allows ample time with us to ensure that all your concerns are addressed.
            </p>
            <p className="text-[15px] leading-8">
              We recommend our patients plan on 60 to 90 minutes for a new patient visit. At Dental Place of Plano, we take pride in personalizing our patient experience. We realize the uniqueness of each patient's general and dental health and consequently, we take seriously your responses to the patient information questionnaires.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-sans">Same day treatment</h2>
            <p className="text-[15px] leading-8">
              We are happy to accommodate any immediate treatment needs following your initial or consequent visits for your convenience whenever possible.
            </p>
          </div>

          <div className="space-y-6 mt-8">
            <h2 className="text-3xl font-bold font-sans">Before your appointment</h2>
            <p className="text-[15px] leading-8 mb-2">
              Remember to bring these with you to your first appointment:<br/>
              Picture ID and Insurance card (if applicable)
            </p>
            
            <p className="text-[15px] leading-8">
              If you are a new patient, please follow the link below to fill out the electronic forms before your first appointment. Having forms completed before you come in will help us to ensure you are seen in a timely manner.
            </p>

            <ul className="list-disc pl-8 space-y-2 text-[15px]">
              <li><a href="#" className="hover:text-[#dfb15b] transition-colors font-medium">New Patient Forms</a></li>
              <li><a href="#" className="hover:text-[#dfb15b] transition-colors font-medium">Consent Forms</a></li>
            </ul>

            <p className="text-[15px] leading-8 mt-6">
              We understand that you have a busy schedule, so when you're preparing to visit the dentist, please remember that your appointments can last between 45 and 90 minutes.
            </p>
          </div>

        </div>
      </div>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop" 
            alt="Dental office" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#dfb15b] font-bold tracking-wider uppercase text-sm mb-4 block">Take The First Step</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready for Your New Smile?
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Schedule your consultation today and experience the difference of premium, personalized dental care. Our team is ready to welcome you.
            </p>
            
            <a 
              href="/book-now" 
              className="inline-flex items-center justify-center gap-2 bg-[#dfb15b] text-black font-bold text-lg px-8 py-4 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(223,177,91,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              <Calendar className="w-5 h-5" />
              Book Your Appointment
              <ArrowRight className="w-5 h-5 ml-1" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
