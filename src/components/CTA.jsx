
export default function CTA() {
  return (
    <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-12 leading-tight drop-shadow-lg">
          Your one stop Dental home...driven<br/>to meet your expectations in care<br/>and service!
        </h2>
        
        <a 
          href="/contact" 
          className="inline-flex items-center justify-center bg-[#dfb15b] text-black font-semibold text-lg px-8 py-3 rounded-full border-[3px] border-[#4fd1c5] hover:bg-white transition-colors duration-300 shadow-xl"
        >
          Let's Contact Us 
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </a>
      </div>
    </section>
  );
}
