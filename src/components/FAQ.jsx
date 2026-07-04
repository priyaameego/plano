import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Do you offer emergency dental services?",
    a: "Yes, we provide priority scheduling for dental emergencies such as severe toothaches, broken teeth, or lost fillings. Please call our clinic immediately if you need urgent care."
  },
  {
    q: "What should I expect during my first visit?",
    a: "Your initial visit includes a comprehensive oral examination, digital X-rays if necessary, and a consultation with our specialists to discuss your goals and customized treatment plan."
  },
  {
    q: "Do you accept my insurance?",
    a: "We accept most major PPO insurance plans and offer flexible financing options to ensure you get the premium care you deserve without financial stress."
  },
  {
    q: "Are your treatments painful?",
    a: "Patient comfort is our top priority. We use the latest pain-free techniques and offer various sedation options to ensure a relaxing, anxiety-free experience."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <span className="subtitle">FAQ</span>
            <h2 className="heading-lg">
              Frequently Asked <span className="text-navy-900">Questions</span>
            </h2>
            <p className="text-slate-600 mb-8">
              Have a question that isn't answered here? Feel free to reach out to our support team for more information.
            </p>
            <a href="#contact" className="btn-secondary">
              Contact Support
            </a>
          </div>

          <div className="lg:w-2/3">
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100"
                >
                  <button
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    onClick={() => setOpen(open === idx ? null : idx)}
                  >
                    <span className="text-lg font-bold text-navy-900">{faq.q}</span>
                    <span className="w-8 h-8 rounded-full bg-softblue-50 flex items-center justify-center text-softblue-600 flex-shrink-0 transition-transform duration-300">
                      {open === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {open === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-slate-600 border-t border-slate-50 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
