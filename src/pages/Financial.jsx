import { motion } from 'framer-motion';
import { CreditCard, Shield, Banknote } from 'lucide-react';

export default function Financial() {
  return (
    <main className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Financial & <span className="text-[#dfb15b]">Insurance</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We believe that high-quality dental care should be accessible. We offer various payment options and work with many insurance providers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center"
          >
            <div className="w-16 h-16 mx-auto bg-[#dfb15b]/20 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-[#dca843]" />
            </div>
            <h3 className="text-xl font-bold mb-4">Dental Insurance</h3>
            <p className="text-gray-600 mb-6">
              We are in-network with most major PPO dental insurance plans. Our team will gladly help verify your benefits and file claims on your behalf.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center"
          >
            <div className="w-16 h-16 mx-auto bg-[#dfb15b]/20 rounded-full flex items-center justify-center mb-6">
              <CreditCard className="w-8 h-8 text-[#dca843]" />
            </div>
            <h3 className="text-xl font-bold mb-4">Payment Methods</h3>
            <p className="text-gray-600 mb-6">
              We accept Cash, Checks, Visa, MasterCard, American Express, and Discover. Payment is due at the time service is rendered.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center"
          >
            <div className="w-16 h-16 mx-auto bg-[#dfb15b]/20 rounded-full flex items-center justify-center mb-6">
              <Banknote className="w-8 h-8 text-[#dca843]" />
            </div>
            <h3 className="text-xl font-bold mb-4">Financing</h3>
            <p className="text-gray-600 mb-6">
              We partner with CareCredit and LendingClub to offer flexible, low-to-no interest monthly payment plans to fit your budget.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-black text-white p-10 md:p-14 rounded-3xl text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Questions about your coverage?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
            Navigating insurance can be tricky. Call our front desk today with your insurance information, and we'll provide a complimentary benefits check!
          </p>
          <a href="tel:9729646500" className="inline-block bg-[#dfb15b] text-black font-bold py-4 px-10 rounded-full text-lg hover:bg-white transition-colors">
            Call (972) 964-6500
          </a>
        </motion.div>
      </div>
    </main>
  );
}
