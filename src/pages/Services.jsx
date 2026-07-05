import ParticleBackground from '../components/ParticleBackground';

export default function Services() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden font-sans">
      <ParticleBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
          {/* Left Tooth Image */}
          <div className="w-full md:w-5/12 flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop" 
              alt="Dental Care" 
              className="w-full h-auto object-cover rounded-xl drop-shadow-sm opacity-90"
              style={{ maxHeight: '400px' }}
            />
          </div>
          
          {/* Right Text */}
          <div className="w-full md:w-7/12 pt-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 tracking-tight">
              Dental <span className="font-light text-blue-500">Implants</span>
            </h1>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Your tooth is made up of two parts , the root which is embedded in your jawbone and the crown which is the part of the tooth you can see. When a tooth is missing or removed, the bone that previously surrounded the tooth root begins to resorb or deteriorate.
              </p>
              <p>
                Dental implants are basically substitute tooth roots that function similar to natural tooth roots, stimulating bone growth and providing a strong foundation for replacement teeth.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 tracking-tight">
            Why Dental <span className="font-light text-blue-500">Implants?</span>
          </h2>
          
          <p className="text-gray-600 mb-6 text-lg">
            Dental implants have become the preferred method of tooth replacement for several important reasons:
          </p>
          
          <ul className="list-disc pl-5 space-y-4 text-gray-600 text-lg leading-relaxed marker:text-gray-400">
            <li className="pl-2">
              No other treatment option prevents the <strong className="text-gray-800 font-semibold">bone resorption/deterioration</strong> that occurs when a tooth is lost or removed.
            </li>
            <li className="pl-2">
              This is the only tooth replacement option that <strong className="text-gray-800 font-semibold">preserves the adjacent teeth</strong>, as opposed to cutting them down to place a bridge or hooking a partial denture to them.
            </li>
            <li className="pl-2">
              Dental implants have by far the best <strong className="text-gray-800 font-semibold">long-term success rates</strong> of any treatment option - and this has been documented in the scientific literature for over four decades.
            </li>
            <li className="pl-2">
              Since dental implants are designed to last a lifetime, there is rarely a need for additional treatment. With other forms of tooth replacement that need to be replaced every 5 to 10 years, additional dentistry is almost always necessary in the future. As a result, dental implant treatment is the <strong className="text-gray-800 font-semibold">most cost-effective</strong> option long-term.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
