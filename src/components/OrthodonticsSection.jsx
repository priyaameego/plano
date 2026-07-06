import { Smile } from 'lucide-react';

export default function OrthodonticsSection() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3 min-h-[450px]">
      {/* Left Image */}
      <div 
        className="w-full h-80 md:h-auto bg-cover bg-center"
        style={{ backgroundImage: "url('/orthodontics.png')" }}
      ></div>
      
      {/* Center Content */}
      <div className="w-full bg-white flex flex-col items-center justify-center p-12 lg:p-16 text-center">
        <div className="w-12 h-12 bg-[#2d2d2d] rounded-full flex items-center justify-center mb-6">
          <Smile className="text-white w-6 h-6" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Orthodontics</h2>
        <p className="text-gray-600 leading-relaxed text-sm max-w-sm mx-auto">
          From clear aligner therapy including Invisalign and Clear correct , our Orthodontic options offers you and your family a choice in achieving your best smile!
        </p>
      </div>

      {/* Right Image */}
      <div 
        className="w-full h-80 md:h-auto bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop')" }}
      ></div>
    </section>
  );
}
