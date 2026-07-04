import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Financial() {
  return (
    <main className="pt-16 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl text-[#333333]">
        
        {/* Insurance and Financial Options Section */}
        <div className="mb-16">
          <h2 className="text-[32px] font-bold font-sans mb-6">Insurance and Financial options</h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-7/12">
              <p className="text-[15px] leading-8 mb-6">
                Dental Place of Plano, it is our objective to offer an exceptional patient experience by offering flexible hours of operation, a variety of financial alternatives, innovative treatment options using the latest technology in order to provide personalized, pain free dental care for the entire family while creating uniquely beautiful smiles that last!
              </p>
              
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/48/CareCredit_Logo.svg" 
                alt="CareCredit" 
                className="h-10 object-contain"
              />
            </div>
            
            <div className="md:w-5/12">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop" 
                alt="Patient and Dentist" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Accepted Insurance Section */}
        <div>
          <h2 className="text-[32px] font-bold font-sans mb-6">Accepted Insurance</h2>
          <p className="text-[15px] leading-8 mb-14">
            We know that your insurance benefits are valuable to you, so we will work with you to help maximize your benefits. We accept most major PPO dental insurances and we are in-network with many common plans.
          </p>

          <div className="relative flex items-center">
            <button className="absolute -left-4 md:-left-8 z-10 text-gray-500 hover:text-black transition-colors">
              <ChevronLeft className="w-8 h-8" strokeWidth={1.5} />
            </button>
            
            <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-between px-6 md:px-4 gap-8">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/UnitedHealthcare_logo.svg/1200px-UnitedHealthcare_logo.svg.png" alt="UnitedHealthcare" className="h-10 w-auto object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Delta_Dental_logo.svg/1200px-Delta_Dental_logo.svg.png" alt="Delta Dental" className="h-12 w-auto object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/BlueCross_BlueShield.svg/1200px-BlueCross_BlueShield.svg.png" alt="BlueCross BlueShield" className="h-16 w-auto object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Aetna_logo.svg/1200px-Aetna_logo.svg.png" alt="Aetna" className="h-9 w-auto object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Cigna_logo.svg/1200px-Cigna_logo.svg.png" alt="Cigna" className="h-14 w-auto object-contain" />
            </div>

            <button className="absolute -right-4 md:-right-8 z-10 text-gray-500 hover:text-black transition-colors">
              <ChevronRight className="w-8 h-8" strokeWidth={1.5} />
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
