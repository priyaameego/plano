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
                src="https://cdn.worldvectorlogo.com/logos/carecredit.svg" 
                alt="CareCredit" 
                className="h-10 object-contain"
              />
            </div>
            
            <div className="md:w-5/12">
              <img 
                src="https://dentalplaceofplano.com/wp-content/uploads/2020/05/emergency.jpg" 
                alt="Emergency Dental" 
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

          <div className="w-full flex overflow-x-auto md:overflow-visible items-center md:justify-center gap-14 md:gap-20 px-4 py-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <img src="https://dentalplaceofplano.com/wp-content/uploads/2021/02/bcbs.png" alt="BlueCross BlueShield" className="h-10 md:h-14 w-auto object-contain mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-300 shrink-0 snap-center" />
            <img src="https://dentalplaceofplano.com/wp-content/uploads/2021/02/aetna-1-1.jpg" alt="Aetna" className="h-9 md:h-12 w-auto object-contain mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-300 shrink-0 snap-center" />
            <img src="https://dentalplaceofplano.com/wp-content/uploads/2021/02/cigna-1.jpg" alt="Cigna" className="h-10 md:h-14 w-auto object-contain mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-300 shrink-0 snap-center" />
            <img src="https://dentalplaceofplano.com/wp-content/uploads/2021/02/MetLife.png" alt="MetLife" className="h-7 md:h-10 w-auto object-contain mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-300 shrink-0 snap-center" />
            <img src="https://dentalplaceofplano.com/wp-content/uploads/2021/02/delta-1-1.jpg" alt="Delta Dental" className="h-10 md:h-14 w-auto object-contain mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-300 shrink-0 snap-center" />
          </div>
        </div>

      </div>
    </main>
  );
}
