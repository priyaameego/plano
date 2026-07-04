import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Check } from 'lucide-react';
import CTA from '../components/CTA';

const serviceData = {
  'dental-implants': {
    title: 'Dental Implants',
    description: 'Dental implants have become the preferred method of tooth replacement for several important reasons. They offer a permanent, natural-looking solution that restores both function and aesthetics.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop',
    benefits: ['Permanent tooth replacement', 'Prevents bone loss', 'Looks and feels natural', 'No slipping or clicking']
  },
  'invisalign': {
    title: 'Invisalign',
    heading: 'Invisalign Clear Aligners',
    description: 'Invisalign is the clear alternative to braces. Dr. Jumas is a certified Invisalign provider who designs customized treatment plans to give you a straighter, healthier smile.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop',
    benefits: ['Smooth & comfortable aligners', 'Virtually invisible', 'Fewer office visits', 'Better oral hygiene', 'Customized treatment plan']
  },
  'navigated-surgery': {
    title: 'Navigated Surgery',
    heading: 'Experience Precision with X-Guide Guided Implant Surgery',
    description: 'Experience the future of dentistry with navigated surgery. Dr. Lobo utilizes the advanced X-Guide system to allow for unprecedented precision in implant placement, ensuring faster recovery and optimal results.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2070&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop',
    benefits: ['Fixes chipped or broken teeth', 'Covers severe discoloration', 'Closes gaps between teeth', 'Stain-resistant material']
  },
  'root-canal': {
    title: 'Root Canal Therapy',
    description: 'Save your natural tooth and eliminate pain with our gentle root canal therapy. Using modern techniques and anesthesia, the procedure is now virtually painless and highly successful.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop',
    benefits: ['Stops toothache pain', 'Saves the natural tooth', 'Prevents spread of infection', 'Restores normal biting force']
  },
  'extraction': {
    title: 'Tooth Extraction',
    description: 'When a tooth cannot be saved, gentle extraction is sometimes necessary to protect your overall oral health. Our team ensures your complete comfort throughout the procedure.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop',
    benefits: ['Painless procedure', 'Removes source of infection', 'Prevents crowding (wisdom teeth)', 'Prepares for orthodontics or implants']
  }
};

const MapAndContactForm = () => {
  const [recaptchaState, setRecaptchaState] = useState('initial');
  
  const handleVerify = () => {
    if (recaptchaState === 'initial') {
      setRecaptchaState('verifying');
      setTimeout(() => setRecaptchaState('success'), 1500);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-12">
      {/* Map */}
      <div className="h-[400px] rounded-sm overflow-hidden flex flex-col justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.549216743389!2d-96.7689883!3d33.0294235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c226049c93f9d%3A0x3f617dca4dac35b3!2sDental%20Place%20of%20Plano!5e0!3m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div>
        {/* reCAPTCHA Mock */}
        <div className="mb-6">
          <div 
            className="w-full max-w-[300px] bg-[#f9f9f9] border border-[#d3d3d3] rounded-sm p-4 flex items-center justify-between shadow-sm cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={handleVerify}
          >
            <div className="flex items-center gap-3">
              {recaptchaState === 'initial' && (
                <div className="w-7 h-7 rounded-sm border-2 border-[#c1c1c1] bg-white hover:border-[#a0a0a0] transition-colors"></div>
              )}
              {recaptchaState === 'verifying' && (
                <div className="w-7 h-7 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                </div>
              )}
              {recaptchaState === 'success' && (
                <div className="w-7 h-7 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
              <span className="text-[#282828] text-[14px] font-medium ml-1">
                I'm not a robot
              </span>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <img 
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                alt="reCAPTCHA" 
                className="w-8 h-8 object-contain"
              />
              <div className="text-[10px] text-[#555] mt-1 font-sans">
                reCAPTCHA
              </div>
              <div className="text-[8px] text-[#555] space-x-1 mt-0.5">
                <span className="hover:underline">Privacy</span>
                <span>-</span>
                <span className="hover:underline">Terms</span>
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Your Name (*)" 
            className="w-full px-6 py-4 rounded-full border-[1.5px] border-[#dfb15b] focus:outline-none focus:ring-1 focus:ring-[#dfb15b] bg-transparent text-gray-700"
            required
          />
          <input 
            type="email" 
            placeholder="Your Email (*)" 
            className="w-full px-6 py-4 rounded-full border-[1.5px] border-[#dfb15b] focus:outline-none focus:ring-1 focus:ring-[#dfb15b] bg-transparent text-gray-700"
            required
          />
          <textarea 
            placeholder="Your Message" 
            rows={4}
            className="w-full px-6 py-4 rounded-3xl border-[1.5px] border-[#dfb15b] focus:outline-none focus:ring-1 focus:ring-[#dfb15b] bg-transparent text-gray-700 resize-none"
          ></textarea>
          
          <button 
            type="button"
            className="bg-[#dca843] hover:bg-[#c6963a] text-white text-lg font-medium py-3 px-8 rounded-full transition-colors inline-block mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
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
          A surgical and prosthetic evaluation and consultation with Dr Daniel Juma or Dr Jeffrey He will determine whether you are a candidate for dental implant treatment and whether additional procedures, such as bone grafting will be necessary.
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
    <div className="container mx-auto px-6 max-w-6xl py-12 text-[#333333]">
      <h2 className="text-[40px] font-bold font-sans text-center mb-8 text-[#333333]">Extraction</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-8 max-w-5xl mx-auto">
        <div className="pt-4">
          <p className="text-[15px] leading-8">
            Tooth extraction is a surgical procedure to remove tooth from the gum socket. Teeth which are not in right position can cause pain and bacterial growth in spaces. Bacterial growth can cause frequent infections. Tooth extraction is performed to fix these problems.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop" alt="Extraction" className="w-[300px] h-[400px] object-cover" />
        </div>
      </div>

      <MapAndContactForm />
    </div>
  );
};

const RootCanalContent = () => {
  return (
    <div className="container mx-auto px-6 max-w-6xl py-12 text-[#333333]">
      <h2 className="text-[40px] font-bold font-sans text-center mb-16 text-[#333333]">Root Canal</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8 max-w-5xl mx-auto">
        <div className="pt-4 pr-4">
          <p className="text-[15px] leading-8 text-[#333333]">
            Inflammation or infection in the root of tooth due to tooth decay can be treated by a procedure called root canal. In this procedure nerve and pulp inside the tooth are removed and tooth is sealed after cleaning. If this procedure is not performed on time it can result in severe pain and infection.
          </p>
        </div>
        <div className="flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" 
            alt="Root Canal Procedure" 
            className="w-full max-w-[400px] h-auto object-cover rounded-xl"
          />
        </div>
      </div>

      <MapAndContactForm />
    </div>
  );
};

const VeneerContent = () => {
  return (
    <div className="container mx-auto px-6 max-w-6xl py-12 text-[#333333]">
      <h2 className="text-[40px] font-bold font-sans text-center mb-16 text-[#333333]">Veneer</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-8 max-w-5xl mx-auto">
        <div className="pt-4 pr-4">
          <p className="text-[15px] leading-8 text-[#333333]">
            A veneer is thin shell of tooth that is cemented over the surface of tooth which is chipped, cracked or uneven. Veneer helps to improve aesthetics and give you a beautiful smile.
          </p>
        </div>
        <div className="flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop" 
            alt="Veneer Procedure" 
            className="w-full max-w-[400px] h-[200px] object-cover"
          />
        </div>
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

      <MapAndContactForm />
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

      {/* Bottom Section */}
      {!['extraction', 'root-canal', 'veneer', 'preventive-care'].includes(serviceId) && (
        <CTA />
      )}
    </main>
  );
}
