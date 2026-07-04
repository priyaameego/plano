import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden image-zoom-container shadow-2xl">
              <img 
                src="/dr-lobo.png" 
                alt="Dr. Stephanie Lobo" 
                className="w-full h-auto object-cover bg-white"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-1">Dr. Stephanie Lobo</h3>
                <p className="text-softblue-200">Dental Surgeon</p>
              </div>
            </div>
            
            {/* Floating Experience Card */}
            <div className="absolute -bottom-8 -right-8 glass-card p-6 rounded-2xl hidden md:block">
              <div className="text-5xl font-extrabold text-navy-900 mb-2">15+</div>
              <div className="text-slate-600 font-medium">Years of <br/> Excellence</div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="subtitle">About Our Clinic</span>
            <h2 className="heading-lg">
              Redefining the <span className="text-transparent bg-clip-text bg-gradient-to-r from-softblue-500 to-navy-600">Dental Experience</span>
            </h2>
            
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              We believe that visiting the dentist shouldn't be a chore, but a refreshing act of self-care. Our state-of-the-art facility combines advanced dental technology with a soothing, spa-like environment.
            </p>
            
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Our mission is to provide world-class aesthetic and functional dentistry, ensuring every patient leaves with a confident, radiant smile. We craft personalized treatment plans tailored specifically to your unique needs.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Award-winning cosmetic dentistry",
                "Advanced 3D imaging technology",
                "Stress-free, painless treatments",
                "Comprehensive family care"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-navy-800 font-medium text-lg">
                  <CheckCircle2 className="text-softblue-500 w-6 h-6 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <a href="#appointment" className="btn-primary inline-block">
              Learn More About Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
