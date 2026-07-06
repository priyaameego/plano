import { useState, useEffect, useRef } from 'react';
import { CircleDot } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const stats = [
  { value: 3, suffix: "k +", label: "Patients" },
  { value: 5, suffix: "k +", label: "Implants" },
  { value: 27, suffix: "k +", label: "Cosmetic Cases" },
  { value: 10, suffix: "k +", label: "Smiles" },
];

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const startTime = performance.now();
      
      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(easeOutQuart * value));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const skills = [
  { label: "Advanced Technology", percent: 100 },
  { label: "Credentials", percent: 100 },
  { label: "Experience", percent: 100 },
];

const testimonials = [
  "We love our Dentist so much that we have followed him from the Southern part of Dallas to Plano! We live in Duncanville... #8yearsstrong!",
  "The staff was incredibly friendly and professional. They made me feel completely at ease during my entire visit.",
  "State of the art facility and top-notch care. I wouldn't trust my family's smiles to anyone else!"
];

export default function HomeStatsAndSkills() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="py-20 bg-white/60 backdrop-blur-md relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10">
        
        {/* Top Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-24">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {/* Gold Block */}
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#e6c175] to-[#cca046] flex items-center justify-center rounded-sm shadow-md mb-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-4xl md:text-5xl lg:text-6xl text-white font-light">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              {/* Label */}
              <span className="text-[#cca046] text-sm md:text-base font-semibold">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom Row: Skills & Testimonial */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12">
          
          {/* Skills Column */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <CircleDot className="w-6 h-6 text-[#cca046]" />
              <h2 className="text-2xl font-bold text-[#cca046]">What is our Skills?</h2>
            </div>
            
            <div className="space-y-8">
              {skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-[#cca046] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-[#cca046] rounded-full"></div>
                      </div>
                      <span className="text-[#cca046] font-medium">{skill.label}</span>
                    </div>
                    <span className="text-[#cca046] font-bold text-sm">{skill.percent}%</span>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-[#cca046]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Column */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <CircleDot className="w-6 h-6 text-[#cca046]" />
              <h2 className="text-2xl font-bold text-[#cca046]">Hear From Our Patients</h2>
            </div>
            
            {/* Chat Bubble Carousel */}
            <div className="relative bg-[#d7ae46] p-8 md:p-10 rounded-xl rounded-bl-sm shadow-lg text-black/90 font-medium leading-relaxed min-h-[160px] flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <p className="text-lg">"{testimonials[currentTestimonial]}"</p>
                </motion.div>
              </AnimatePresence>
              {/* Tail of chat bubble */}
              <div className="absolute -bottom-4 left-0 w-8 h-8 bg-[#d7ae46]" style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 0)' }}></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
