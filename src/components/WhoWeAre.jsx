import { motion } from 'framer-motion';

export default function WhoWeAre() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#dfb15b]/5 skew-x-12 translate-x-20"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-light text-navy-900 mb-8 uppercase tracking-wide">
                Who We <span className="font-bold text-[#dfb15b]">Are</span>
              </h2>
              
              <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
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

              <div className="mt-10 inline-block bg-[#dfb15b] text-black font-bold px-8 py-4 rounded-md uppercase tracking-widest text-sm shadow-xl shadow-[#dfb15b]/20">
                Service Options
              </div>
            </motion.div>
          </div>

          {/* Doctor Images */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Doctor 1 */}
              <div className="relative z-10 w-3/4 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Doctor Daniel Juma" 
                  className="w-full h-[350px] object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-20">
                  <h3 className="text-white font-bold text-xl">Dr. Daniel Juma</h3>
                  <p className="text-[#dfb15b] text-sm font-semibold uppercase tracking-wider">Lead Dentist</p>
                </div>
              </div>

              {/* Doctor 2 */}
              <div className="absolute top-32 right-0 w-2/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 translate-x-4 md:translate-x-10">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2064&auto=format&fit=crop" 
                  alt="Doctor Lobo" 
                  className="w-full h-[300px] object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-5 pt-16">
                  <h3 className="text-white font-bold text-lg">Dr. Lobo</h3>
                  <p className="text-[#dfb15b] text-xs font-semibold uppercase tracking-wider">Dental Surgeon</p>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[radial-gradient(#dfb15b_2px,transparent_2px)] [background-size:12px_12px] opacity-20 -z-10"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
