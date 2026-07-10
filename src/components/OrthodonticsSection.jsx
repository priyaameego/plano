import ordImg from '../assets/ord.jpg';

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

        <h2 className="text-3xl font-bold text-gray-900 mb-6">Orthodontics</h2>
        <p className="text-gray-600 leading-relaxed text-sm max-w-sm mx-auto">
          From clear aligner therapy including Invisalign and Clear correct , our Orthodontic options offers you and your family a choice in achieving your best smile!
        </p>
      </div>

      {/* Right Image */}
      <div 
        className="w-full h-80 md:h-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${ordImg})` }}
      ></div>
    </section>
  );
}
