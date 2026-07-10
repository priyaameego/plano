import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Check, ChevronDown, Star, Sparkles, Smile, CalendarDays } from 'lucide-react';
import dentalImg from '../assets/dental.jpg';
import invImg from '../assets/inv.jpg';
import xxxImg from '../assets/xxx.png';


const serviceData = {
  'dental-implants': {
    title: 'Dental Implants',
    description: 'Dental implants have become the preferred method of tooth replacement for several important reasons. They offer a permanent, natural-looking solution that restores both function and aesthetics.',
    image: dentalImg,
    benefits: ['Permanent tooth replacement', 'Prevents bone loss', 'Looks and feels natural', 'No slipping or clicking']
  },
  'invisalign': {
    title: 'Invisalign',
    heading: 'Invisalign Clear Aligners',
    description: 'Invisalign is the clear alternative to braces. Dr. Jumas is a certified Invisalign provider who designs customized treatment plans to give you a straighter, healthier smile.',
    image: invImg,
    benefits: ['Smooth & comfortable aligners', 'Virtually invisible', 'Fewer office visits', 'Better oral hygiene', 'Customized treatment plan']
  },
  'navigated-surgery': {
    title: 'Navigated Surgery',
    heading: 'Experience Precision with X-Guide Guided Implant Surgery',
    description: 'Experience the future of dentistry with navigated surgery. Dr. Lobo utilizes the advanced X-Guide system to allow for unprecedented precision in implant placement, ensuring faster recovery and optimal results.',
    image: '/navigated-surgery.jpg',
    benefits: ['Extreme precision', 'Minimally invasive', 'Faster recovery time', 'Highly predictable outcomes']
  },
  'preventive-care': {
    title: 'Preventive Care',
    description: 'The foundation of a healthy smile starts with preventive care. Regular checkups, professional cleanings, and oral cancer screenings help catch problems before they start.',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop',
    benefits: ['Thorough cleanings', 'Early decay detection', 'Oral cancer screening', 'Gum disease prevention']
  },
  'veneer': {
    title: 'Porcelain Veneers',
    description: 'Transform your smile instantly with porcelain veneers. These ultra-thin shells are custom-made to cover the front surface of your teeth, hiding imperfections and creating a flawless appearance.',
    image: '/veneers-2.png',
    benefits: ['Fixes chipped or broken teeth', 'Covers severe discoloration', 'Closes gaps between teeth', 'Stain-resistant material']
  },
  'root-canal': {
    title: 'Root Canal Therapy',
    description: 'Save your natural tooth and eliminate pain with our gentle root canal therapy. Using modern techniques and anesthesia, the procedure is now virtually painless and highly successful.',
    image: '/root-canal.png',
    benefits: ['Stops toothache pain', 'Saves the natural tooth', 'Prevents spread of infection', 'Restores normal biting force']
  },
  'extraction': {
    title: 'Tooth Extraction',
    description: 'When a tooth cannot be saved, gentle extraction is sometimes necessary to protect your overall oral health. Our team ensures your complete comfort throughout the procedure.',
    image: '/extraction-2.png',
    benefits: ['Painless procedure', 'Removes source of infection', 'Prevents crowding (wisdom teeth)', 'Prepares for orthodontics or implants']
  }
};

const MapAndContactForm = () => {
  const [recaptchaState, setRecaptchaState] = useState('initial');
  const [selectedService, setSelectedService] = useState('');
  
  const handleVerify = () => {
    if (recaptchaState === 'initial') {
      setRecaptchaState('verifying');
      setTimeout(() => setRecaptchaState('success'), 1500);
    }
  };

  const services = [
    "Veneers",
    "Root Canal",
    "Extraction",
    "Dental Implants",
    "Invisalign",
    "Preventive Care",
    "Other"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mt-20 mb-10 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100"
    >
      {/* Map Side */}
      <div className="h-[500px] rounded-[1.5rem] overflow-hidden shadow-inner relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.549216743389!2d-96.7689883!3d33.0294235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c226049c93f9d%3A0x3f617dca4dac35b3!2sDental%20Place%20of%20Plano!5e0!3m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
      </div>

      {/* Contact Form Side */}
      <div className="flex flex-col justify-center">
        <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">
          Request an Appointment
        </h3>
        <p className="text-gray-500 mb-8">
          Fill out the form below and we'll get back to you shortly.
        </p>

        <form className="space-y-5">
          <div className="relative">
            <select 
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:outline-none focus:border-[#dfb15b] bg-gray-50/50 text-gray-700 appearance-none shadow-sm transition-colors cursor-pointer font-medium"
              required
            >
              <option value="" disabled>Select a Service (*)</option>
              {services.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input 
              type="text" 
              placeholder="Your Name (*)" 
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:outline-none focus:border-[#dfb15b] bg-gray-50/50 text-gray-700 shadow-sm transition-colors font-medium"
              required
            />
            <input 
              type="email" 
              placeholder="Your Email (*)" 
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:outline-none focus:border-[#dfb15b] bg-gray-50/50 text-gray-700 shadow-sm transition-colors font-medium"
              required
            />
          </div>
          
          <textarea 
            placeholder="Your Message (Optional)" 
            rows={4}
            className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:outline-none focus:border-[#dfb15b] bg-gray-50/50 text-gray-700 resize-none shadow-sm transition-colors font-medium"
          ></textarea>
          
          {/* reCAPTCHA Mock - Premium styling */}
          <div className="mb-2">
            <div 
              className="inline-flex w-full md:w-auto bg-white border-2 border-gray-100 rounded-2xl p-4 items-center justify-between shadow-sm cursor-pointer hover:border-gray-200 transition-colors gap-6"
              onClick={handleVerify}
            >
              <div className="flex items-center gap-4">
                {recaptchaState === 'initial' && (
                  <div className="w-6 h-6 rounded border-2 border-gray-300 hover:border-gray-400 transition-colors bg-gray-50"></div>
                )}
                {recaptchaState === 'verifying' && (
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-500 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  </div>
                )}
                {recaptchaState === 'success' && (
                  <div className="w-6 h-6 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                )}
                <span className="text-gray-600 font-medium text-sm">
                  I'm not a robot
                </span>
              </div>
              <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-6 h-6 object-contain opacity-60" />
            </div>
          </div>
          
          <button 
            type="button"
            className="w-full bg-[#111] hover:bg-[#dfb15b] text-white hover:text-black text-lg font-bold py-4 rounded-2xl transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group mt-2"
          >
            Send Message
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </motion.div>
  );
};

const PreventiveContactForm = () => {
  const [recaptchaState, setRecaptchaState] = useState('initial');
  const [selectedService, setSelectedService] = useState('');
  
  const handleVerify = () => {
    if (recaptchaState === 'initial') {
      setRecaptchaState('verifying');
      setTimeout(() => setRecaptchaState('success'), 1500);
    }
  };

  const services = [
    "General Preventive Care",
    "Athletic Mouth Guards",
    "Deep Cleaning (Scaling)",
    "Dental Sealants",
    "Fluoride Treatment",
    "Laser Periodontal Therapy",
    "Night Guards",
    "Oral Cancer Screening",
    "Other"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto mt-20 mb-10 items-center">
      {/* Visual / Info Side */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#f9f9f9] rounded-[2.5rem] p-10 md:p-14 border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] h-full flex flex-col justify-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#dfb15b]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6 relative z-10">
          Ready to Protect Your Smile?
        </h3>
        <p className="text-gray-600 leading-relaxed mb-8 relative z-10 text-lg">
          Select the preventive service you're interested in, and our team will get back to you promptly to schedule your appointment.
        </p>
        
        <div className="space-y-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#dfb15b]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Call Us Today</p>
              <p className="text-xl font-bold text-gray-900">972 964 6500</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Premium Form */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <form className="space-y-6">
          <div className="relative">
            <select 
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:outline-none focus:border-[#dfb15b] bg-white text-gray-700 appearance-none shadow-sm transition-colors cursor-pointer"
              required
            >
              <option value="" disabled>Select a Preventive Service (*)</option>
              {services.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Your Name (*)" 
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:outline-none focus:border-[#dfb15b] bg-white text-gray-700 shadow-sm transition-colors"
              required
            />
            <input 
              type="email" 
              placeholder="Your Email (*)" 
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:outline-none focus:border-[#dfb15b] bg-white text-gray-700 shadow-sm transition-colors"
              required
            />
          </div>
          
          <textarea 
            placeholder="Additional details or specific concerns (Optional)" 
            rows={4}
            className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:outline-none focus:border-[#dfb15b] bg-white text-gray-700 resize-none shadow-sm transition-colors"
          ></textarea>
          
          {/* reCAPTCHA Mock - Premium styling */}
          <div className="mb-6 inline-block">
            <div 
              className="min-w-[280px] bg-white border-2 border-gray-100 rounded-2xl p-4 flex items-center justify-between shadow-sm cursor-pointer hover:border-gray-200 transition-colors"
              onClick={handleVerify}
            >
              <div className="flex items-center gap-4">
                {recaptchaState === 'initial' && (
                  <div className="w-6 h-6 rounded border-2 border-gray-300 hover:border-gray-400 transition-colors bg-gray-50"></div>
                )}
                {recaptchaState === 'verifying' && (
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-500 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  </div>
                )}
                {recaptchaState === 'success' && (
                  <div className="w-6 h-6 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                )}
                <span className="text-gray-600 font-medium text-sm">
                  I'm not a robot
                </span>
              </div>
              <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-6 h-6 object-contain opacity-60" />
            </div>
          </div>
          
          <button 
            type="button"
            className="w-full bg-[#111] hover:bg-[#dfb15b] text-white hover:text-black text-lg font-bold py-4 rounded-2xl transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group"
          >
            Submit Request
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

const DentalImplantsContent = () => {
  return (
    <div className="container mx-auto px-6 max-w-6xl py-20 text-[#333333]">
      
      {/* Why Us Section */}
      <div className="relative mb-16">
        <div className="absolute -top-10 left-0 text-[100px] font-extrabold text-[#e0f7fa]/60 leading-none select-none z-0">
          WHY US ?
        </div>
        
        <div className="relative z-10 flex items-center mb-6">
          <div className="w-12 h-0.5 bg-[#dfb15b] mr-4"></div>
          <h2 className="text-4xl font-bold font-sans">
            Why <span className="text-[#dfb15b]">Dental Implants ?</span>
          </h2>
        </div>
        
        <p className="text-[15px] mb-8 relative z-10">
          Dental implants have become the preferred method of tooth replacement for several important reasons:
        </p>

        <div className="space-y-6 relative z-10">
          <div className="flex items-start gap-4">
            <Check className="w-6 h-6 text-[#dfb15b] shrink-0 mt-1" strokeWidth={3} />
            <p className="text-[15px] leading-relaxed">
              Dental implants have by far the best long-term success rates of any treatment option – and this has been documented in the scientific literature for over four decades.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <Check className="w-6 h-6 text-[#dfb15b] shrink-0 mt-1" strokeWidth={3} />
            <p className="text-[15px] leading-relaxed">
              Since dental implants are designed to last a lifetime, there is rarely a need for additional treatment. With other forms of tooth replacement that need to be replaced every 5 to 10 years, additional dentistry is almost always necessary in the future. As a result, dental implant treatment is the most cost-effective option long-term.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <Check className="w-6 h-6 text-[#dfb15b] shrink-0 mt-1" strokeWidth={3} />
            <p className="text-[15px] leading-relaxed">
              No other treatment option prevents the bone resorption/deterioration that occurs when a tooth is lost or removed.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <Check className="w-6 h-6 text-[#dfb15b] shrink-0 mt-1" strokeWidth={3} />
            <p className="text-[15px] leading-relaxed">
              This is the only tooth replacement option that preserves the adjacent teeth, as opposed to cutting them down to place a bridge or hooking a partial denture to them.
            </p>
          </div>
        </div>
      </div>

      {/* Replacing Multiple Teeth Box */}
      <div className="border border-gray-100 rounded-3xl p-10 mb-20 shadow-sm">
        <h3 className="text-2xl font-bold font-sans mb-4 relative inline-block">
          Replacing <span className="text-[#dfb15b]">Multiple teeth</span>
          <div className="absolute -bottom-2 left-0 w-12 h-[3px] bg-[#dfb15b]"></div>
        </h3>
        <p className="text-[15px] leading-relaxed mt-8 mb-4">
          Versatility of Dental implants allows their use in replacing a single tooth, multiple teeth or all of the teeth. The Dallas Fort Worth metroplex patients may require additional procedures to obtain the optimal esthetic and functional outcome which we also provide at Dental Place of Plano.
        </p>
        <p className="text-[15px] leading-relaxed">
          A surgical and prosthetic evaluation and consultation with Dr Daniel Juma or Dr Stephanie Lobo will determine whether you are a candidate for dental implant treatment and whether additional procedures, such as bone grafting will be necessary.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="mb-20">
        <div className="flex items-center mb-6">
          <div className="w-16 h-0.5 bg-[#dfb15b] mr-4"></div>
          <h2 className="text-4xl font-bold font-sans">
            Benefits <span className="text-[#dfb15b]">of Dental Implants?</span>
          </h2>
        </div>
        <p className="text-[15px] mb-12">
          There are several treatment options for replacing missing teeth, however dental implants present numerous unique benefits for patients:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Card 1 */}
          <div className="bg-[#f5f5f5] rounded-[2rem] p-10">
            <h3 className="text-2xl font-bold font-sans mb-4 relative inline-block">
              Designed <span className="text-[#dfb15b]">to Last a Lifetime</span>
              <div className="absolute -bottom-2 left-0 w-12 h-[3px] bg-[#dfb15b]"></div>
            </h3>
            <p className="text-[15px] leading-relaxed mt-8">
              Because dental implants are designed to last a lifetime, they have a better long-term success rate than any other tooth replacement option. Documented clinical research demonstrates that dental implants have a success rate of over 95%, which is significantly higher that tooth-supported bridges and partial or full dentures.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f5f5f5] rounded-[2rem] p-10">
            <h3 className="text-2xl font-bold font-sans mb-4 relative inline-block">
              Preserves <span className="text-[#dfb15b]">Bone and Facial Structures</span>
              <div className="absolute -bottom-2 left-0 w-12 h-[3px] bg-[#dfb15b]"></div>
            </h3>
            <p className="text-[15px] leading-relaxed mt-8">
              Bone resorption, or deterioration, is one of the most serious consequences of missing teeth. By replacing the root of your tooth with a dental implant, your jawbone and smile retain their shape. If you are missing all of your teeth, replacing them with implant-supported replacement teeth will preserve the integrity of your facial structures and prevent the shrinkage of your jaws and the appearance of a collapsed face.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f5f5f5] rounded-[2rem] p-10">
            <h3 className="text-2xl font-bold font-sans mb-4 relative inline-block">
              A <span className="text-[#dfb15b]">Healthier Smile</span>
              <div className="absolute -bottom-2 left-0 w-12 h-[3px] bg-[#dfb15b]"></div>
            </h3>
            <p className="text-[15px] leading-relaxed mt-8">
              Tooth-supported clasps for partial dentures can damage your teeth over time and tooth supported bridges are more susceptible to recurrent dental caries. With dental implants, it is not necessary to cut down the adjacent teeth in order to place a bridge, which compromises the long-term health of the teeth, or hook a partial denture onto natural teeth.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#f5f5f5] rounded-[2rem] p-10">
            <h3 className="text-2xl font-bold font-sans mb-4 relative inline-block">
              Natural <span className="text-[#dfb15b]">Appearance</span>
              <div className="absolute -bottom-2 left-0 w-12 h-[3px] bg-[#dfb15b]"></div>
            </h3>
            <p className="text-[15px] leading-relaxed mt-8">
              Dental implants were developed to replicate the appearance of your natural teeth and preserve your bone to maintain the natural appearance of your smile. Our doctors at Penn Dental and Implant Center will be able to place the dental implants in the precise position to enable the creation of a beautiful crown that matches the shape and color of your natural teeth.
            </p>
          </div>
        </div>

        {/* Card 5 (Centered) */}
        <div className="flex justify-center">
          <div className="bg-[#f5f5f5] rounded-[2rem] p-10 max-w-3xl">
            <h3 className="text-2xl font-bold font-sans mb-4 relative inline-block">
              Hygienic <span className="text-[#dfb15b]">and easy maintenance</span>
              <div className="absolute -bottom-2 left-0 w-12 h-[3px] bg-[#dfb15b]"></div>
            </h3>
            <p className="text-[15px] leading-relaxed mt-8">
              Caring for a single dental implant is basically the same as caring for a natural tooth. You'll be able to brush and floss your implant-supported tooth. Your hygienist will clean your new implant crown during your regular hygiene maintenance appointment.
            </p>
            <p className="text-[15px] leading-relaxed mt-4">
              Ultimately, dental implants will function the same way as your natural teeth, allowing you to smile with confidence and enjoy any type of food.
            </p>
          </div>
        </div>
      </div>

      {/* Evaluation Section */}
      <div>
        <h2 className="text-3xl font-bold font-sans mb-6">Evaluation for Dental Implants</h2>
        <p className="text-[15px] leading-relaxed mb-4">
          Dental Place of Plano offers a surgical and restorative consultation to evaluate each patients unique presentation and determine if they are candidates for dental implant treatment as well as to develop an ideal treatment plan based on their individual needs.
        </p>
        <p className="text-[15px] leading-relaxed mb-4">
          During your consultation, your Doctor will determine the:
        </p>
        <ul className="list-disc pl-8 space-y-2 text-[15px]">
          <li>Quality and quantity of available bone</li>
          <li>Number of dental implants needed to create the optimal result</li>
          <li>Other procedures that may be necessary to prepare the surgical site</li>
        </ul>
      </div>

    </div>
  );
};

const ExtractionContent = () => {
  return (
    <div className="container mx-auto px-6 max-w-6xl py-20 text-[#333333]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#dfb15b] font-bold tracking-widest uppercase text-sm mb-4 block">Oral Surgery</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Tooth <span className="text-[#dfb15b]">Extraction</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Tooth extraction is a surgical procedure to remove a tooth from its gum socket. Gentle extraction is sometimes necessary to protect your overall oral health and prevent further complications.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] relative z-10 border border-gray-100 bg-white flex items-center justify-center p-4">
            <img 
              src="/extraction-1.png" 
              alt="Tooth Extraction Procedure" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#dfb15b]/20 rounded-full blur-3xl -z-10"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Safe & Comfortable Care
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Teeth which are not in the right position can cause pain and bacterial growth in spaces. Bacterial growth can cause frequent infections. Tooth extraction is performed to fix these problems and restore oral health.
          </p>
          <ul className="space-y-4">
            {[
              "Painless procedure with modern anesthesia",
              "Removes the primary source of infection",
              "Prevents crowding (especially wisdom teeth)",
              "Prepares your smile for orthodontics or implants"
            ].map((benefit, i) => (
              <li key={i} className="flex items-center gap-4 text-gray-800 font-medium">
                <div className="w-8 h-8 rounded-full bg-[#dfb15b]/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-[#dfb15b]" strokeWidth={3} />
                </div>
                {benefit}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <MapAndContactForm />
    </div>
  );
};

const RootCanalContent = () => {
  return (
    <div className="container mx-auto px-6 max-w-6xl py-20 text-[#333333]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#dfb15b] font-bold tracking-widest uppercase text-sm mb-4 block">Endodontics</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Root Canal <span className="text-[#dfb15b]">Therapy</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Inflammation or infection in the root of a tooth due to decay can be treated by a procedure called a root canal. If not performed on time, it can result in severe pain and infection.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 lg:order-1"
        >
          <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Save Your Natural Tooth
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            During this procedure, the infected nerve and pulp inside the tooth are carefully removed, and the tooth is thoroughly cleaned and sealed. Modern root canal therapy is highly successful and virtually painless.
          </p>
          <ul className="space-y-4">
            {[
              "Eliminates severe toothache pain",
              "Saves your natural tooth from extraction",
              "Prevents the spread of infection to other teeth",
              "Restores normal biting and chewing force"
            ].map((benefit, i) => (
              <li key={i} className="flex items-center gap-4 text-gray-800 font-medium">
                <div className="w-8 h-8 rounded-full bg-[#dfb15b]/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-[#dfb15b]" strokeWidth={3} />
                </div>
                {benefit}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-1 lg:order-2"
        >
          <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] relative z-10 border border-gray-100 bg-white p-8">
            <img 
              src="https://dentalplaceofplano.com/wp-content/uploads/2021/08/tooth-removebg-preview-600x392.png" 
              alt="Root Canal Therapy" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#dfb15b]/20 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>

      <MapAndContactForm />
    </div>
  );
};

const VeneerContent = () => {
  return (
    <div className="container mx-auto px-6 max-w-6xl py-20 text-[#333333]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#dfb15b] font-bold tracking-widest uppercase text-sm mb-4 block">Cosmetic Dentistry</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Porcelain <span className="text-[#dfb15b]">Veneers</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A veneer is a thin shell of porcelain that is cemented over the surface of a tooth which is chipped, cracked or uneven. Veneers help to improve aesthetics and give you a beautiful, flawless smile.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 lg:order-1"
        >
          <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Transform Your Smile
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Custom-made to match the natural color and shape of your teeth, porcelain veneers offer a long-lasting solution for various cosmetic dental concerns. They are highly stain-resistant and provide a natural-looking enhancement.
          </p>
          <ul className="space-y-4">
            {[
              "Fixes chipped, broken, or worn teeth",
              "Covers severe discoloration or staining",
              "Closes gaps between teeth seamlessly",
              "Creates a perfectly aligned, even smile"
            ].map((benefit, i) => (
              <li key={i} className="flex items-center gap-4 text-gray-800 font-medium">
                <div className="w-8 h-8 rounded-full bg-[#dfb15b]/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-[#dfb15b]" strokeWidth={3} />
                </div>
                {benefit}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-1 lg:order-2"
        >
          <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] relative z-10 border border-gray-100 bg-white p-8">
            <img 
              src="https://dentalplaceofplano.com/wp-content/uploads/2021/08/teeth.png" 
              alt="Beautiful smile with veneers" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#dfb15b]/20 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>

      <MapAndContactForm />
    </div>
  );
};

const PreventiveCareContent = () => {
  return (
    <div className="container mx-auto px-6 max-w-6xl py-12 text-[#333333]">
      <h2 className="text-[40px] font-bold font-sans text-center mb-12 text-[#333333]">Preventive Care</h2>

      <div className="max-w-5xl mx-auto mb-16">
        <p className="text-[18px] font-bold leading-relaxed mb-12 text-[#333333]">
          Dental Place of Plano offers a multitude of cleaning and preventative dental options. We believe a customized experience is very important to the health of your smile!
        </p>

        <div className="space-y-10">
          <div>
            <h3 className="text-[16px] font-bold uppercase tracking-wider mb-3">Athletic Mouth Guards</h3>
            <p className="text-[15px] leading-8 text-[#555]">
              A mouth guard can protect your mouth during any athletic and recreational activities. A good fitting mouth guard can be especially important if you wear braces or have bridgework.
            </p>
          </div>

          <div>
            <h3 className="text-[16px] font-bold uppercase tracking-wider mb-3">Deep Cleaning (Scaling and Root Planing)</h3>
            <p className="text-[15px] leading-8 text-[#555]">
              Scaling and Root Debridement is a gum therapy used to treat Periodontitis (Gum disease). It involves the removal or eliminating of dental plaque, bacterial toxins and calculus which are a cause of the inflammation in the disease process. The therapy helps to re-establish a healthy environment, that is in remission of periodontal disease.
            </p>
          </div>

          <div>
            <h3 className="text-[16px] font-bold uppercase tracking-wider mb-3">Dental Sealants</h3>
            <p className="text-[15px] leading-8 text-[#555]">
              Dental sealants act as a barrier to prevent cavities. Sealants are usually applied to the chewing surfaces of the back teeth.
            </p>
          </div>

          <div>
            <h3 className="text-[16px] font-bold uppercase tracking-wider mb-3">Fluoride Treatment</h3>
            <p className="text-[15px] leading-8 text-[#555]">
              During a fluoride treatment, your dentist will fill a mouth guard with flavored fluoride. The mouth guard will be worn for up to four minutes in order for it to be effective. Fluoride, a naturally-occurring mineral, helps prevent cavities in children and adults by making the outer surface of your teeth (enamel) more resistant to the acid attacks that cause tooth decay.
            </p>
          </div>

          <div>
            <h3 className="text-[16px] font-bold uppercase tracking-wider mb-3">Laser Assisted Periodontal Therapy</h3>
            <p className="text-[15px] leading-8 text-[#555]">
              Laser Assisted Periodontal treatment is a gentle, conservative, non-invasive method of treating gum disease without cutting, suturing or removing tissue that allows for the effective treatment of periodontal disease with no removal of tissue.
            </p>
          </div>

          <div>
            <h3 className="text-[16px] font-bold uppercase tracking-wider mb-3">Night Guards</h3>
            <p className="text-[15px] leading-8 text-[#555]">
              If you have noticed wear and tear on your teeth, are experiencing any symptoms that you suspect might be from grinding your teeth, you may need a night guard.
            </p>
          </div>

          <div>
            <h3 className="text-[16px] font-bold uppercase tracking-wider mb-3">Nutritional Counseling</h3>
            <p className="text-[15px] leading-8 text-[#555]">
              Did you know that eating patterns and food choices play an important role in preventing tooth decay and gum disease, too? We can help you make healthy choices.
            </p>
          </div>

          <div>
            <h3 className="text-[16px] font-bold uppercase tracking-wider mb-3">Oral Cancer Screening</h3>
            <p className="text-[15px] leading-8 text-[#555]">
              The goal of oral cancer screening is early detection of potential pathology that may be indicative of risks for malignancies. At Dental place of Plano, innovative technologies like Velscope in addition to thorough inrea-oral and extra-oral exams are used to help in assessing abnormalities and evaluating dysplastic tissue that may at times offer critical information to aid in early treatment.
            </p>
          </div>

          <div>
            <h3 className="text-[16px] font-bold uppercase tracking-wider mb-3">Oral Hygiene Instruction</h3>
            <p className="text-[15px] leading-8 text-[#555]">
              Oral hygiene can quickly become overwhelming. At Dental Place of Plano, we want to make the process as clear as possible.
            </p>
          </div>

          <div>
            <h3 className="text-[16px] font-bold uppercase tracking-wider mb-3">Preventive Teeth Cleaning</h3>
            <p className="text-[15px] leading-8 text-[#555]">
              During a dental cleaning you will receive a thorough cleaning on your teeth and gums. Prevention and detection is the key to early discovery of gum disease.
            </p>
          </div>
        </div>
      </div>

      <PreventiveContactForm />
    </div>
  );
};

const NavigatedSurgeryContent = () => {
  return (
    <div className="container mx-auto px-6 max-w-6xl py-20 text-[#333333]">
      
      {/* Title & Intro */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#dfb15b] font-bold tracking-widest uppercase text-sm mb-4 block">Advanced Technology</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Experience Precision with <span className="text-[#dfb15b]">X-Guide Guided Implant Surgery</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Experience the future of dentistry with navigated surgery. <strong>Dr. Stephanie Lobo</strong> utilizes the advanced X-Guide system to allow for unprecedented precision in implant placement, ensuring faster recovery and optimal results.
          </p>
        </motion.div>
      </div>

      {/* Split Content: Machine Image & Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] relative z-10 border border-gray-100 bg-white p-8">
            <img 
              src={xxxImg} 
              alt="X-Guide Machine Technology" 
              className="w-full h-full object-contain"
            />
          </div>
          {/* Decorative blur */}
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#dfb15b]/20 rounded-full blur-3xl -z-10"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            The X-Guide Difference
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Navigated surgery is like GPS for your dental implants. By using 3D imaging and real-time tracking, Dr. Stephanie Lobo can precisely guide the implant into the exact desired position.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            This minimally invasive approach means smaller incisions, less discomfort, and a much faster healing process compared to traditional freehand implant surgery.
          </p>
          
          <ul className="space-y-4">
            {[
              "Extreme precision for perfect placement",
              "Minimally invasive with smaller incisions",
              "Faster recovery time and less swelling",
              "Highly predictable, aesthetic outcomes"
            ].map((benefit, i) => (
              <li key={i} className="flex items-center gap-4 text-gray-800 font-medium">
                <div className="w-8 h-8 rounded-full bg-[#dfb15b]/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-[#dfb15b]" strokeWidth={3} />
                </div>
                {benefit}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* CTA Box */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white border border-gray-100 rounded-[3rem] p-12 md:p-16 text-center shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)]"
      >
        <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
          Ready for advanced implant care?
        </h3>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Consult with Dr. Stephanie Lobo to see if you are a candidate for Navigated Surgery.
        </p>
        <Link 
          to="/book-now" 
          className="inline-flex items-center gap-3 bg-[#111] hover:bg-[#dfb15b] text-white hover:text-black font-bold px-8 py-4 rounded-full transition-colors duration-300 shadow-xl"
        >
          Schedule Consultation
          <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>

    </div>
  );
};

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border border-[#dfb15b]/30 rounded-3xl overflow-hidden mb-4 bg-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)]">
      <button
        className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="text-xl font-bold text-gray-900 pr-8">{title}</span>
        <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#dfb15b] text-white' : 'text-[#dfb15b]'}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-8 pb-8 text-gray-600 leading-relaxed text-[15px]">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const InvisalignContent = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

  const accordions = [
    {
      title: 'What is Invisalign?',
      content: 'Invisalign uses a series of custom-made, clear aligners that fit snugly over your teeth. These virtually invisible aligners gradually shift your teeth into their proper positions, offering a discreet and comfortable alternative to traditional metal braces.'
    },
    {
      title: 'How long does treatment take?',
      content: 'Treatment time varies depending on your specific needs, but the average Invisalign treatment takes 12 to 18 months. You will start seeing results in a matter of weeks!'
    },
    {
      title: 'Is Invisalign painful?',
      content: 'Invisalign is generally less painful than traditional braces. You may experience temporary, mild discomfort or pressure for a few days when starting a new set of aligners, which is a sign that they are working to move your teeth.'
    },
    {
      title: 'Can I eat normally during treatment?',
      content: 'Yes! Because Invisalign aligners are removable, there are no food restrictions. Simply take out your aligners before eating or drinking anything besides water, then brush your teeth and put them back in.'
    }
  ];

  return (
    <div className="container mx-auto px-6 max-w-6xl py-20 text-[#333333]">
      
      {/* Credentials & Intro */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-center">
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
            <img src="/dr-juma.png" alt="Dr. Daniel Juma" className="w-full h-full object-cover object-top" />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#dfb15b]/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute top-10 -left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl -z-10"></div>
        </div>
        
        <div className="lg:col-span-7">
          <span className="text-[#dfb15b] font-bold tracking-widest uppercase text-sm mb-3 block">Expert Care</span>
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Certified Invisalign Expertise by <span className="text-[#dfb15b]">Dr. Daniel Juma</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            As a <strong>Platinum Invisalign Provider</strong>, Dr. Daniel Juma possesses the advanced training, experience, and clinical expertise required to design highly customized treatment plans. This prestigious designation means you are in the hands of a specialist who has successfully transformed countless smiles using clear aligner technology.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Invisalign is the clear alternative to braces. We utilize 3D scanning technology to map your entire treatment journey from the very first day, ensuring precise, predictable, and beautiful results.
          </p>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-gray-800 font-semibold bg-gray-50 px-5 py-3 rounded-xl border border-gray-100">
              <CheckCircle2 className="w-5 h-5 text-[#dfb15b]" />
              Customized Plan
            </div>
            <div className="flex items-center gap-2 text-gray-800 font-semibold bg-gray-50 px-5 py-3 rounded-xl border border-gray-100">
              <CheckCircle2 className="w-5 h-5 text-[#dfb15b]" />
              3D Imaging
            </div>
          </div>
        </div>
      </div>

      {/* Premium Benefits Grid */}
      <div className="mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Why Choose Invisalign?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Experience a modern approach to straightening teeth without the hassle of traditional metal braces.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Sparkles className="w-8 h-8 text-[#dfb15b]" />,
              title: "Virtually Invisible",
              desc: "Clear aligners are almost undetectable, allowing you to smile confidently throughout your entire treatment."
            },
            {
              icon: <Smile className="w-8 h-8 text-[#dfb15b]" />,
              title: "Unmatched Comfort",
              desc: "Made from smooth, patented SmartTrack material. No sharp metal brackets or poking wires to irritate your mouth."
            },
            {
              icon: <CalendarDays className="w-8 h-8 text-[#dfb15b]" />,
              title: "Fewer Office Visits",
              desc: "Without the need to tighten wires, you'll spend less time at the dentist and more time enjoying your life."
            }
          ].map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-50 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#dfb15b]/10 rounded-2xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Accordion FAQ Section */}
      <div className="max-w-3xl mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {accordions.map((acc, index) => (
            <AccordionItem 
              key={index}
              title={acc.title} 
              isOpen={openAccordion === index}
              onClick={() => setOpenAccordion(openAccordion === index ? -1 : index)}
            >
              {acc.content}
            </AccordionItem>
          ))}
        </div>
      </div>

      {/* Prominent CTA */}
      <div className="bg-[#0a0a0a] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#dfb15b]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready for your dream smile?
          </h2>
          <p className="text-lg text-white/80 mb-10">
            Schedule your personalized Invisalign consultation with Dr. Juma today and take the first step towards a straighter, healthier smile.
          </p>
          <Link 
            to="/book-now" 
            className="inline-flex items-center gap-3 bg-[#dfb15b] hover:bg-white text-gray-900 font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_15px_30px_-5px_rgba(223,177,91,0.4)]"
          >
            Schedule Your Invisalign Consultation
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

  if (!service) {
    return (
      <main className="pt-32 pb-20 min-h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you are looking for does not exist.</p>
          <Link to="/services" className="bg-[#dfb15b] text-black font-bold px-6 py-3 rounded-full hover:bg-black hover:text-white transition-colors">
            View All Services
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#dfb15b] font-bold tracking-widest uppercase text-sm mb-4 block">Our Services</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {service.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      {serviceId === 'dental-implants' ? (
        <DentalImplantsContent />
      ) : serviceId === 'extraction' ? (
        <ExtractionContent />
      ) : serviceId === 'root-canal' ? (
        <RootCanalContent />
      ) : serviceId === 'veneer' ? (
        <VeneerContent />
      ) : serviceId === 'preventive-care' ? (
        <PreventiveCareContent />
      ) : serviceId === 'invisalign' ? (
        <InvisalignContent />
      ) : serviceId === 'navigated-surgery' ? (
        <NavigatedSurgeryContent />
      ) : (
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{service.heading || `Advanced ${service.title} at Dental Place of Plano`}</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                        <CheckCircle2 className="w-6 h-6 text-[#dfb15b] flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {serviceId === 'invisalign' ? (
                  <Link to="/book-now" className="inline-flex items-center justify-center gap-2 bg-[#111] text-white font-bold px-8 py-4 rounded-full hover:bg-[#dfb15b] hover:text-black transition-colors duration-300 shadow-xl">
                    Schedule your Invisalign consultation today
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                ) : (
                  <Link to="/book-now" className="inline-flex items-center justify-center gap-2 bg-[#111] text-white font-bold px-8 py-4 rounded-full hover:bg-[#dfb15b] hover:text-black transition-colors duration-300 shadow-xl">
                    Consult with our Specialists
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                )}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#dfb15b]/20 rounded-full blur-3xl z-0"></div>
                <div className="absolute -top-8 -right-8 w-48 h-48 bg-black/5 rounded-full blur-3xl z-0"></div>
              </motion.div>

            </div>
          </div>
        </section>
      )}


    </main>
  );
}
