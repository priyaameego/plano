import { Crown } from 'lucide-react';

export default function ImplantCosmeticSection() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3 min-h-[450px]">
      {/* Left Content */}
      <div className="w-full bg-[#d9b73c] flex flex-col items-center justify-center p-12 lg:p-16 text-center">
        <div className="mb-6">
        </div>
        <h2 className="text-3xl font-bold text-black mb-6">Implant Dentistry</h2>
        <p className="text-black/80 leading-relaxed text-sm max-w-sm mx-auto">
          Dental implants are arguably the standard of care in replacing missing or terminal dentition. Implants offer several solutions to restore a smile to not only form and function, but also improve on esthetics. With innovations in technology and advancement in materials, Implants are proving to be long lasting permanent options than ever before and having them placed is much easier and comfortable than you may imagine!
        </p>
      </div>

      {/* Center Image */}
      <div 
        className="w-full h-80 md:h-auto bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop')" }}
      ></div>
      
      {/* Right Content */}
      <div className="w-full bg-[#d9b73c] flex flex-col items-center justify-center p-12 lg:p-16 text-center">
        <div className="mb-6">
        </div>
        <h2 className="text-3xl font-bold text-black mb-6">Cosmetic Dentistry</h2>
        <p className="text-black/80 leading-relaxed text-sm max-w-sm mx-auto">
          A confident , striking smile can make all the difference ,whether at work or at play. Our Cosmetic options will open you up to pursuing the best you possible! Consult with us for your smile makeover today!
        </p>
      </div>
    </section>
  );
}
