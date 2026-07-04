import { motion } from 'framer-motion';
import { Award, GraduationCap, Clock, BadgeCheck } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Daniel Juma',
    title: 'Lead Dentist',
    image: 'https://dentalplaceofplano.com/wp-content/uploads/2021/02/Dan.png',
    reverse: false,
    credentials: [
      'Platinum Invisalign Provider 2024',
      'International Congress of Oral Implantologists'
    ],
    education: 'Doctor of Dental Surgery (DDS)',
    experience: '15+ Years of Clinical Excellence',
    awards: [
      'Top Dentist Award 2023',
      'Excellence in Cosmetic Dentistry'
    ],
    certifications: [
      'Advanced Implant Placement',
      'Laser Dentistry Certified'
    ]
  },
  {
    name: 'Dr. Stephanie Lobo',
    title: 'Associate Dentist',
    image: 'https://dentalplaceofplano.com/wp-content/uploads/2024/11/1.jpg',
    reverse: true,
    credentials: [
      'American Dental Association',
      'Texas Dental Association'
    ],
    education: 'Doctor of Dental Medicine (DMD)',
    experience: '10+ Years of Clinical Excellence',
    awards: [
      'Patient Choice Award 2022',
      'Outstanding Young Professional'
    ],
    certifications: [
      'Invisalign Certified Provider',
      'Advanced Endodontics'
    ]
  }
];

export default function AboutDoctors() {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#dfb15b] font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Meet Our Experts
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900"
          >
            Our Exceptional Doctors
          </motion.h2>
        </div>

        <div className="space-y-32">
          {doctors.map((doctor, index) => (
            <div key={index} className={`flex flex-col ${doctor.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
              
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, x: doctor.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-1/2 relative"
              >
                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 group">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle glassmorphism overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Decorative blob */}
                <div className={`absolute -bottom-8 ${doctor.reverse ? '-right-8' : '-left-8'} w-64 h-64 bg-[#dfb15b]/20 rounded-full blur-3xl z-0`}></div>
              </motion.div>

              {/* Content Side */}
              <motion.div 
                initial={{ opacity: 0, x: doctor.reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-1/2"
              >
                {/* Premium Glassmorphism Info Card */}
                <div className="bg-white/80 backdrop-blur-xl p-10 md:p-12 rounded-[2.5rem] shadow-xl border border-white/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-xl text-[#dfb15b] font-medium mb-8">{doctor.title}</p>
                  
                  <div className="space-y-8">
                    {/* Credentials Section */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center text-[#dfb15b]">
                          <Award className="w-5 h-5" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">Key Credentials</h4>
                      </div>
                      <div className="flex flex-wrap gap-3 pl-13">
                        {doctor.credentials.map((cred, idx) => (
                          <span key={idx} className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-sm font-medium text-gray-800 border border-slate-200">
                            {cred}
                          </span>
                        ))}
                      </div>
                    </div>

                    <hr className="border-gray-100" />

                    {/* Education & Experience */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <GraduationCap className="w-5 h-5 text-[#dfb15b]" />
                          <h4 className="font-bold text-gray-900">Education</h4>
                        </div>
                        <p className="text-gray-600 pl-8">{doctor.education}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <Clock className="w-5 h-5 text-[#dfb15b]" />
                          <h4 className="font-bold text-gray-900">Experience</h4>
                        </div>
                        <p className="text-gray-600 pl-8">{doctor.experience}</p>
                      </div>
                    </div>

                    <hr className="border-gray-100" />

                    {/* Awards & Certifications */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <Award className="w-5 h-5 text-[#dfb15b]" />
                          <h4 className="font-bold text-gray-900">Awards</h4>
                        </div>
                        <ul className="space-y-2 pl-8">
                          {doctor.awards.map((award, idx) => (
                            <li key={idx} className="text-gray-600 text-sm flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#dfb15b]"></span>
                              {award}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <BadgeCheck className="w-5 h-5 text-[#dfb15b]" />
                          <h4 className="font-bold text-gray-900">Certifications</h4>
                        </div>
                        <ul className="space-y-2 pl-8">
                          {doctor.certifications.map((cert, idx) => (
                            <li key={idx} className="text-gray-600 text-sm flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#dfb15b]"></span>
                              {cert}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
