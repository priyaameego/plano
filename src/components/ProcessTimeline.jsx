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
    <section className="section-padding bg-white relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="subtitle">How It Works</span>
          <h2 className="heading-lg">
            Your Journey to a <span className="text-navy-900">Perfect Smile</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-slate-100 -z-10">
            <motion.div 
              className="h-full bg-gradient-to-r from-softblue-300 to-softblue-600"
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
                <div className="w-24 h-24 rounded-full bg-white shadow-xl border-4 border-slate-50 flex items-center justify-center text-3xl font-extrabold text-navy-900 mb-6 group-hover:scale-110 group-hover:border-softblue-100 transition-all duration-300">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
