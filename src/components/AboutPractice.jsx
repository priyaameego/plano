import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const servicesList = [
  'Root Canals', 'Bridges', 'Dental Implants',
  'Veneer', 'Crowns', 'Orthodontics'
];

export default function AboutPractice() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Top Section: Text and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8 font-sans">
              About Our Practice
            </h2>
            
            <div className="text-gray-600 text-[15px] leading-8 space-y-6 mb-10">
              <p>
                Dental Place of Plano is a family owned and operated practice with two highly skilled and dedicated doctors,
                Doctor Daniel Juma and Doctor Jeffrey He. They are supported by a friendly, experienced and professional
                team, with a mission to provide our patients with consistent care of the highest quality. Patients can therefore
                expect to always have the personal attention of their doctor who is committed to being a trusted partner in
                their pursuit of great health and an amazing smile. Doctor Daniel Juma and Doctor Jeffrey He both endeavor
                to spend ample time with each patient to ensure that all treatment needs are met and concerns addressed to
                the best of their ability.
              </p>
              <p>
                At Dental Place of Plano, it is our objective to offer an exceptional patient experience by offering flexible
                hours of operation, a variety of financial alternatives, innovative treatment options using the latest technology
                in order to provide personalized, pain free comprehensive dental care for the entire family while creating
                uniquely beautiful smiles that last!
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-2">
              {servicesList.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#d9af3f]" />
                  <span className="text-gray-700 text-sm">{service}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <img 
              src="https://dentalplaceofplano.com/wp-content/uploads/2021/02/Dan.png" 
              alt="Dr. Daniel Juma" 
              className="w-full max-w-[400px] object-contain drop-shadow-xl"
            />
          </motion.div>

        </div>

        {/* Bottom Section: Credentials, Experience, Convenience */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-16"
        >
          
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4 font-sans">Credentials</h3>
            <p className="text-gray-600 text-[15px] leading-8">
              Our Board Certified doctors are ADA recognized practitioners in General dentistry, with Dr Juma focusing on Oral Implantology. Dental Place of Plano provides a full
              range of Whole Health Dental treatment including cosmetic and restorative dentistry, airway management, orthodontics, surgical procedures such as dental implant
              placement, removal of wisdom teeth, bone grafting, and periodontal surgery. Dr Juma and Dr He are recognized as leaders in the profession, involved in researching
              innovative techniques, educating colleagues, and serving in prominent positions in various professional associations including the Academy of General Dentistry, the
              International Congress of Oral Implantology, Clear Correct Board Mentor, Fastbraces Master Provider.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4 font-sans">Experience</h3>
            <p className="text-gray-600 text-[15px] leading-8">
              As one of the premier dental implant practices in the DFW Metroplex, Dr Daniel Juma and Dr Jeffrey He have extensive experience providing general dentistry and
              surgical dental implant procedures, including advanced techniques in Cosmetic and Restorative dentistry , Clear aligner Orthodontic treatement , bone grafting and
              complex implant reconstruction. Our doctors here at Dental Place of Plano are highly regarded for their expertise in this highly technical field.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4 font-sans">Convenience</h3>
            <p className="text-gray-600 text-[15px] leading-8">
              Dental Place of Plano is conveniently located minutes from downtown Dallas and the surrounding cities of Frisco, Mckinney, Allen, Richardson, Murphy and Carrolton.
              We are located at the intersection of Park and Coit road. Our modern practice has been renovated to include state-of-the-art imaging, monitoring and surgical
              equipment designed to provide a safe and comfortable environment for our patients.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
