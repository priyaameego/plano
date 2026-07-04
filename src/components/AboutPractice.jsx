import { motion } from 'framer-motion';
import { Heart, Users, Clock, CreditCard, Stethoscope, Microscope, Settings, Monitor, Target } from 'lucide-react';

const highlights = [
  { icon: Heart, title: 'Family-Owned & Operated', description: 'A welcoming practice built on trust and community values.' },
  { icon: Users, title: 'Friendly & Experienced Team', description: 'Compassionate professionals dedicated to your smile.' },
  { icon: Stethoscope, title: 'Personalized Patient Care', description: 'Tailored treatment plans for your unique needs.' },
  { icon: Clock, title: 'Flexible Scheduling', description: 'Convenient appointment times to fit your busy life.' },
  { icon: CreditCard, title: 'Affordable Financial Options', description: 'Making premium dental care accessible to everyone.' },
  { icon: Microscope, title: 'Advanced Dental Technology', description: 'State-of-the-art equipment for precise results.' },
];

const technologies = [
  'Digital Impressions',
  'Digital Radiography',
  '3D Cone Beam CT Imaging',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutPractice() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.span variants={itemVariants} className="text-[#dfb15b] font-bold tracking-widest uppercase text-sm mb-4 block">
              Welcome to Dental Place of Plano
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Exceptional Care, <br/>Beautiful Smiles
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Dental Place of Plano, we believe that every patient deserves the highest standard of care in a warm and inviting atmosphere. As a <strong>Family-Owned & Operated</strong> practice, we treat our patients like our own family. Our <strong>Friendly & Experienced Team</strong> is committed to providing <strong>Personalized Patient Care</strong> that addresses your unique goals and concerns.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-10 leading-relaxed">
              We proudly serve the vibrant <strong>Communities Served</strong> in and around Plano. By offering <strong>Flexible Scheduling</strong> and <strong>Affordable Financial Options</strong>, we ensure that achieving a healthy smile is completely stress-free.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {highlights.map((item, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center flex-shrink-0 text-[#dfb15b] shadow-sm border border-gray-100">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="p-6 bg-slate-50 rounded-3xl border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-[#dfb15b]" />
                Advanced Dental Technology
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {technologies.map((tech, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <Monitor className="w-4 h-4 text-[#dfb15b]" />
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern Dental Practice" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#dfb15b]/20 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-black/5 rounded-full blur-3xl z-0"></div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -left-8 top-1/4 bg-white p-6 rounded-3xl shadow-xl z-20 border border-gray-100 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#dfb15b]/10 rounded-full flex items-center justify-center text-[#dfb15b]">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">15+</p>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Years of Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
