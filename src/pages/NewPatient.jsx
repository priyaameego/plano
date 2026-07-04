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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 rounded-[2rem] shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full opacity-50"></div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4 relative z-10">Your First Visit</h2>
            <ul className="space-y-6 relative z-10">
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#dfb15b]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#dfb15b]/20 transition-colors">
                  <Clock className="w-6 h-6 text-[#dca843]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Comprehensive Exam</h3>
                  <p className="text-gray-600 leading-relaxed mt-1">Your first visit will include a thorough examination of your teeth, gums, and overall oral health.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#dfb15b]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#dfb15b]/20 transition-colors">
                  <Smile className="w-6 h-6 text-[#dca843]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Personalized Care Plan</h3>
                  <p className="text-gray-600 leading-relaxed mt-1">We will discuss your dental goals and create a custom treatment plan tailored specifically for you.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#111] text-white p-10 rounded-[2rem] shadow-xl shadow-gray-900/20 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300"
          >
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#dfb15b] rounded-full opacity-20 blur-3xl group-hover:opacity-30 transition-opacity"></div>
            <h2 className="text-2xl font-bold mb-6 text-[#dfb15b] border-b border-gray-800 pb-4 relative z-10">New Patient Forms</h2>
            <p className="mb-8 text-gray-300 leading-relaxed relative z-10">
              Save time during your first visit by filling out our new patient forms online. It's quick, secure, and goes directly to our system.
            </p>
            <a href="#" className="inline-flex items-center gap-2 bg-[#dfb15b] text-black font-bold py-4 px-8 rounded-full hover:bg-white transition-all duration-300 hover:shadow-lg relative z-10">
              <FileText className="w-5 h-5" />
              Complete Forms Online
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-8 text-gray-900">What to Bring</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Valid Photo ID', 'Insurance Card', 'List of Medications', 'Previous Dental Records'].map((item, idx) => (
              <motion.div 
                whileHover={{ y: -3 }}
                key={idx} 
                className="bg-white px-6 py-4 rounded-full shadow-sm border border-gray-100 flex items-center gap-3 font-medium text-gray-700 hover:shadow-md hover:border-[#dfb15b]/30 transition-all cursor-default"
              >
                <CheckCircle className="w-5 h-5 text-[#dfb15b]" />
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
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
