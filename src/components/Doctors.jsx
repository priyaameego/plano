import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const doctors = [
  {
    name: "Dr. Sarah Jenkins",
    role: "Lead Cosmetic Dentist",
    exp: "15+ Years Exp",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Dr. Michael Chen",
    role: "Implant Specialist",
    exp: "12+ Years Exp",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Orthodontist",
    exp: "10+ Years Exp",
    img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1974&auto=format&fit=crop"
  }
];

export default function Doctors() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="subtitle">Our Specialists</span>
          <h2 className="heading-lg">
            Meet the <span className="text-navy-900">Masters of Smiles</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Our team of board-certified specialists is dedicated to providing you with the highest standard of dental care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-slate-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-[400px]">
                <img 
                  src={doc.img} 
                  alt={doc.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <a href="#" className="w-10 h-10 rounded-full bg-white text-navy-900 flex items-center justify-center hover:bg-softblue-500 hover:text-white transition-colors">
                      <FaFacebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white text-navy-900 flex items-center justify-center hover:bg-softblue-500 hover:text-white transition-colors">
                      <FaTwitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white text-navy-900 flex items-center justify-center hover:bg-softblue-500 hover:text-white transition-colors">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-8 text-center bg-white border-t border-slate-100">
                <h3 className="text-2xl font-bold text-navy-900 mb-1">{doc.name}</h3>
                <p className="text-softblue-600 font-medium mb-3">{doc.role}</p>
                <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold mb-6">
                  {doc.exp}
                </div>
                <a href="#appointment" className="block w-full py-3 rounded-xl border-2 border-navy-900 text-navy-900 font-bold hover:bg-navy-900 hover:text-white transition-colors">
                  Book Appointment
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
