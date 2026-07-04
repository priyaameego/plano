import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Cosmetic Dentistry",
    desc: "Transform your smile with premium veneers, bonding, and total smile makeovers.",
    img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Dental Implants",
    desc: "Permanent, natural-looking replacements for missing teeth using titanium posts.",
    img: "https://images.unsplash.com/photo-1598256989800-fea5ce5146c1?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Invisalign Clear Aligners",
    desc: "Straighten your teeth discreetly without traditional metal braces.",
    img: "https://images.unsplash.com/photo-1527613426406-09871fc51c22?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Teeth Whitening",
    desc: "Professional laser whitening treatments for a instantly brighter, radiant smile.",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "General Dentistry",
    desc: "Comprehensive checkups, cleanings, and preventive care for long-lasting oral health.",
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Porcelain Crowns",
    desc: "Restore damaged teeth with durable, tooth-colored ceramic crowns.",
    img: "https://images.unsplash.com/photo-1609840114138-02452342b474?q=80&w=1974&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-navy-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-softblue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-softblue-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-softblue-400 font-semibold uppercase tracking-wider mb-2 block text-sm">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Comprehensive Care for <br/> a <span className="text-transparent bg-clip-text bg-gradient-to-r from-softblue-300 to-white">Brighter Smile</span>
            </h2>
          </div>
          <a href="#all-services" className="btn-secondary text-sm !bg-transparent !text-white border-white/30 hover:!bg-white hover:!text-navy-900 whitespace-nowrap">
            View All Services
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/20 transition-all duration-500 z-10" />
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent opacity-90">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-softblue-300 transition-colors">{service.title}</h3>
                <p className="text-white/70 mb-6 line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {service.desc}
                </p>
                <div className="flex items-center gap-2 text-softblue-300 font-semibold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
