import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a]">
      {/* Background Image / Banner */}
      <a href="/contact" className="block w-full h-full cursor-pointer relative group">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full relative"
        >
          {/* Using img tag because the text is baked in, so it scales properly */}
          <img 
            src="/hero-bg-custom.png" 
            alt="Your one stop Dental home...driven to meet your expectations in care and service!" 
            className="w-full object-cover min-h-[30vh] md:min-h-[400px]"
          />
          {/* Subtle overlay on hover to indicate clickability */}
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300"></div>
        </motion.div>
      </a>
    </section>
  );
}
