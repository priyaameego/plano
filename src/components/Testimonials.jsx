import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const testimonials = [
  {
    name: "Eleanor Pena",
    role: "Cosmetic Patient",
    content: "The level of care and attention to detail here is unmatched. My veneers look incredibly natural, and the entire process was pain-free. It truly feels like a 5-star spa rather than a dental clinic.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Robert Fox",
    role: "Implant Patient",
    content: "I was terrified of getting an implant, but Dr. Jenkins made it seamless. The recovery was fast, and the result is perfect. Highly recommend their professional team.",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Wade Warren",
    role: "Family Patient",
    content: "My entire family comes here. The staff is so welcoming, and they've completely changed how my kids view the dentist. A premium experience every single time.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-softblue-400 font-semibold uppercase tracking-wider mb-2 block text-sm">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stories of <span className="text-transparent bg-clip-text bg-gradient-to-r from-softblue-300 to-white">Transformed Smiles</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            effect="fade"
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, bulletClass: 'swiper-pagination-bullet bg-white/50 w-3 h-3', bulletActiveClass: 'swiper-pagination-bullet-active !bg-softblue-500' }}
            className="pb-16"
          >
            {testimonials.map((test, idx) => (
              <SwiperSlide key={idx}>
                <div className="glass-card bg-white/10 p-8 md:p-12 rounded-3xl text-center border-white/10">
                  <Quote className="w-16 h-16 mx-auto text-softblue-500/30 mb-6" />
                  <p className="text-xl md:text-3xl font-serif italic text-white/90 mb-10 leading-relaxed">
                    "{test.content}"
                  </p>
                  
                  <div className="flex flex-col items-center">
                    <img src={test.img} alt={test.name} className="w-20 h-20 rounded-full object-cover border-4 border-softblue-500/30 mb-4" />
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <h4 className="text-xl font-bold text-white">{test.name}</h4>
                    <p className="text-softblue-300 text-sm">{test.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
