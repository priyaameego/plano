import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Book Appointment",
    desc: "Schedule online or call our premium concierge service."
  },
  {
    num: "02",
    title: "Consultation",
    desc: "Meet with specialists to discuss your custom treatment plan."
  },
  {
    num: "03",
    title: "Treatment",
    desc: "Experience pain-free procedures with our state-of-the-art tech."
  },
  {
    num: "04",
    title: "Healthy Smile",
    desc: "Walk out with confidence and a radiant, lasting smile."
  }
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-[#111] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#dfb15b] font-semibold uppercase tracking-wider mb-4 block text-sm">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-light text-white uppercase tracking-wide">
            Your Journey to a <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e6c175] to-[#cca046]">Perfect Smile</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-[2px] bg-gray-800 -z-10">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#e6c175] to-[#cca046]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative text-center lg:text-left flex flex-col items-center lg:items-start group"
              >
                <div className="w-24 h-24 rounded-full bg-[#0a0a0a] shadow-2xl border border-gray-800 flex items-center justify-center text-3xl font-light text-white mb-6 group-hover:scale-110 group-hover:border-[#dfb15b] transition-all duration-300">
                  {step.num}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#dfb15b] transition-colors">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
