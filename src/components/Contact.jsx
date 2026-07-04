import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Loader2, Square } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [cloudflareState, setCloudflareState] = useState('initial'); // 'initial', 'verifying', 'success'

  const handleVerify = () => {
    if (cloudflareState !== 'initial') return;
    setCloudflareState('verifying');
    setTimeout(() => {
      setCloudflareState('success');
    }, 1500);
  };

  return (
    <main className="w-full bg-white pt-32 pb-0">
      {/* Top Contact Info */}
      <div className="container mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
          {/* Email */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-[#dca843] rounded-full flex items-center justify-center mb-6 shadow-lg transform transition hover:scale-110">
              <Mail className="w-6 h-6 text-black" fill="currentColor" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Email</h3>
            <a href="mailto:info@dentalplaceofplano.com" className="text-gray-600 hover:text-[#dfb15b] transition-colors">
              info@dentalplaceofplano.com
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-[#dca843] rounded-full flex items-center justify-center mb-6 shadow-lg transform transition hover:scale-110">
              <Phone className="w-6 h-6 text-black" fill="currentColor" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Phone</h3>
            <a href="tel:9729646500" className="text-gray-600 hover:text-[#dfb15b] transition-colors">
              972 964 6500
            </a>
          </motion.div>

          {/* Address */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-[#dca843] rounded-full flex items-center justify-center mb-6 shadow-lg transform transition hover:scale-110">
              <MapPin className="w-6 h-6 text-black" fill="currentColor" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Address</h3>
            <p className="text-gray-600">
              2220 Coit Rd #570, Plano, TX 75075,<br />United States
            </p>
          </motion.div>
        </div>
      </div>

      {/* Map & Form Section */}
      <div className="relative w-full min-h-[900px] flex items-center justify-center py-20 mb-24">
        {/* Background Map */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11545.922114757362!2d-96.768988!3d33.029424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c220f8c3725f5%3A0x3f628f895c1a5b33!2sDental%20Place%20of%20Plano!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            className="w-full h-full border-0 grayscale opacity-80 mix-blend-multiply" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Form Container */}
        <div className="relative z-10 w-full max-w-4xl px-4 mt-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-white rounded-[2rem] shadow-2xl p-10 md:p-14 relative pb-24 border border-gray-100"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input 
                  type="text" 
                  placeholder="Your Name (*)" 
                  className="w-full px-6 py-4 rounded-3xl border-[2.5px] border-[#dfb15b] focus:outline-none focus:ring-4 focus:ring-[#dfb15b]/20 transition-all text-gray-700 placeholder-gray-500" 
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Your Email (*)" 
                  className="w-full px-6 py-4 rounded-3xl border-[2.5px] border-[#dfb15b] focus:outline-none focus:ring-4 focus:ring-[#dfb15b]/20 transition-all text-gray-700 placeholder-gray-500" 
                  required 
                />
                <input 
                  type="tel" 
                  placeholder="Mobile Number" 
                  className="w-full px-6 py-4 rounded-3xl border-[2.5px] border-[#dfb15b] focus:outline-none focus:ring-4 focus:ring-[#dfb15b]/20 transition-all text-gray-700 placeholder-gray-500" 
                />
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full px-6 py-4 rounded-3xl border-[2.5px] border-[#dfb15b] focus:outline-none focus:ring-4 focus:ring-[#dfb15b]/20 transition-all text-gray-700 placeholder-gray-500" 
                />
              </div>

              <textarea 
                placeholder="Your Message" 
                rows="6" 
                className="w-full px-6 py-5 rounded-3xl border-[2.5px] border-[#dfb15b] focus:outline-none focus:ring-4 focus:ring-[#dfb15b]/20 transition-all text-gray-700 placeholder-gray-500 resize-none"
              ></textarea>

              {/* Interactive Cloudflare Mock */}
              <div 
                className="max-w-xs bg-[#fafafa] border border-gray-200 rounded-sm p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={handleVerify}
              >
                <div className="flex items-center gap-3 w-40">
                  <AnimatePresence mode="wait">
                    {cloudflareState === 'initial' && (
                      <motion.div 
                        key="initial"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="w-8 h-8 rounded flex items-center justify-center border-2 border-gray-300 bg-white"
                      >
                      </motion.div>
                    )}
                    {cloudflareState === 'verifying' && (
                      <motion.div 
                        key="verifying"
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0 }}
                        className="w-8 h-8 flex items-center justify-center"
                      >
                        <Loader2 className="w-6 h-6 text-[#F38020] animate-spin" />
                      </motion.div>
                    )}
                    {cloudflareState === 'success' && (
                      <motion.div 
                        key="success"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-green-600 rounded-full flex items-center justify-center w-8 h-8"
                      >
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <span className="text-gray-700 text-sm font-medium">
                    {cloudflareState === 'initial' && 'Verify you are human'}
                    {cloudflareState === 'verifying' && 'Verifying...'}
                    {cloudflareState === 'success' && 'Success!'}
                  </span>
                </div>
                
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1 font-bold text-gray-600 tracking-tight text-md">
                    <svg className="w-5 h-5 text-[#F38020]" viewBox="0 0 24 24" fill="currentColor">
                       <path d="M19.4 8.7C19 5 15.8 2 12 2 8.7 2 5.8 4 4.5 6.9c-2.5.3-4.5 2.5-4.5 5.1 0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5 0-2.4-1.7-4.4-4-4.9l-.6-.4z"/>
                    </svg>
                    CLOUDFLARE
                  </div>
                  <div className="text-[10px] text-gray-500">Privacy • Help</div>
                </div>
              </div>

              {/* Submit Button (Overflowing bottom) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit" 
                  className={`font-bold py-4 px-12 rounded-full text-lg shadow-xl transition-all whitespace-nowrap text-white ${
                    cloudflareState === 'success' ? 'bg-[#dca843] hover:bg-[#c99e4c] hover:shadow-2xl' : 'bg-gray-400 cursor-not-allowed'
                  }`}
                  disabled={cloudflareState !== 'success'}
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
