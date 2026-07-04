import { motion } from 'framer-motion';
import { Shield, Sparkles, HeartPulse, Clock, Smile, Users } from 'lucide-react';

const reasons = [
  {
    icon: <Sparkles className="w-8 h-8 text-softblue-600" />,
    title: "Latest Technology",
    desc: "Equipped with cutting-edge 3D scanners and laser dentistry for precise, pain-free treatments."
  },
  {
    icon: <Users className="w-8 h-8 text-softblue-600" />,
    title: "Expert Specialists",
    desc: "Our board-certified doctors bring decades of combined experience in complex dental procedures."
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-softblue-600" />,
    title: "Painless Experience",
    desc: "We prioritize your comfort with sedation options and gentle techniques in a relaxing environment."
  },
  {
    icon: <Shield className="w-8 h-8 text-softblue-600" />,
    title: "Affordable Care",
    desc: "Premium care doesn't have to break the bank. We offer flexible payment plans and accept most insurances."
  },
  {
    icon: <Clock className="w-8 h-8 text-softblue-600" />,
    title: "Emergency Support",
    desc: "Dental emergencies can happen anytime. We offer priority scheduling for urgent cases."
  },
  {
    icon: <Smile className="w-8 h-8 text-softblue-600" />,
    title: "Family Dentistry",
    desc: "Comprehensive oral care tailored for patients of all ages, from toddlers to seniors."
  }
];

export default function WhyChooseUs() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="subtitle">Why Choose Us</span>
          <h2 className="heading-lg">
            Experience the <span className="text-navy-900">Gold Standard</span> in Dentistry
          </h2>
          <p className="text-slate-600 text-lg">
            We've meticulously designed every aspect of our practice to deliver exceptional results and an unforgettable patient experience.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx} 
              variants={item}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-softblue-50 flex items-center justify-center mb-6 group-hover:bg-gradient-to-tr group-hover:from-softblue-500 group-hover:to-navy-600 group-hover:text-white transition-colors duration-300">
                {/* Clone icon to handle color change on hover via parent CSS if needed, but we rely on group-hover text color usually. Let's just keep it simple */}
                <div className="group-hover:brightness-200 transition-all">
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
