import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import dentalImg from '../assets/dental.jpg';
import invImg from '../assets/inv.jpg';

const services = [
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    desc: "Transform your smile with premium veneers, bonding, and total smile makeovers.",
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    desc: "Permanent, natural-looking replacements for missing teeth using titanium posts.",
    img: dentalImg
  },
  {
    id: "invisalign",
    title: "Invisalign Clear Aligners",
    desc: "Straighten your teeth discreetly without traditional metal braces.",
    img: invImg
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    desc: "Professional laser whitening treatments for a instantly brighter, radiant smile.",
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "preventive-care",
    title: "General Dentistry",
    desc: "Comprehensive checkups, cleanings, and preventive care for long-lasting oral health.",
    img: "https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?q=80&w=2074&auto=format&fit=crop"
  },
  {
    id: "porcelain-crowns",
    title: "Porcelain Crowns",
    desc: "Restore damaged teeth with durable, tooth-colored ceramic crowns.",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <section id="services" className="pt-4 pb-24 bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#dfb15b]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#cca046]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-[#dfb15b] font-semibold uppercase tracking-wider mb-4 text-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Our Services</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight uppercase tracking-wide"
            >
              Comprehensive Care for <br/> a <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e6c175] to-[#cca046]">Brighter Smile</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="group relative rounded-sm overflow-hidden cursor-pointer shadow-xl bg-[#111] border border-transparent hover:border-[#dfb15b]/30 hover:shadow-[0_0_30px_rgba(223,177,91,0.15)] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-[#0a0a0a]/40 group-hover:bg-[#0a0a0a]/10 transition-all duration-500 z-10" />
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full h-[450px] object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              <Link to={`/services/${service.id}`} className="absolute inset-0 z-30" />
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 transition-opacity duration-300">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-[#dfb15b] transition-colors duration-300 relative z-40">
                    <Link to={`/services/${service.id}`}>{service.title}</Link>
                  </h3>
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden relative z-40">
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[#dfb15b] font-semibold text-sm uppercase tracking-wider group-hover:gap-4 transition-all duration-300 relative z-40">
                    <Link to={`/services/${service.id}`} className="flex items-center gap-2 group-hover:gap-4">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
