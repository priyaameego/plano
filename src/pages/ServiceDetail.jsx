import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
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

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

  // If service doesn't exist, show a fallback
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
    <main className="min-h-screen bg-slate-50">
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

      {/* Bottom Section */}
      {serviceId === 'preventive-care' ? (
        <section className="bg-white py-20 border-t border-gray-100">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Patient-Friendly Preventive Services</h2>
            <p className="text-gray-600 mb-10 text-lg">Select a preventive service below to learn more about how we can help you maintain a perfect smile.</p>
            <div className="max-w-md mx-auto mb-10 text-left">
              <label className="block text-gray-700 font-bold mb-2">Select a Service:</label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#dfb15b] focus:ring-2 focus:ring-[#dfb15b]/50 bg-gray-50 text-gray-800 transition-shadow">
                <option value="">-- Choose a Service --</option>
                <option value="cleaning">Professional Cleaning</option>
                <option value="exam">Comprehensive Exam</option>
                <option value="xray">Digital X-Rays</option>
                <option value="fluoride">Fluoride Treatment</option>
                <option value="sealants">Dental Sealants</option>
              </select>
            </div>
            <Link to="/book-now" className="inline-flex items-center justify-center gap-2 bg-[#dfb15b] text-black font-bold px-8 py-4 rounded-full hover:bg-black hover:text-white transition-colors duration-300 shadow-xl">
              Schedule Your Checkup
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      ) : (
        <CTA />
      )}
    </main>
  );
}
