import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const officeImages = [
  'https://dentalplaceofplano.com/wp-content/uploads/2024/09/fc29dadd22f977807f3bfdbb7d060930aac076da.jpg',
  'https://dentalplaceofplano.com/wp-content/uploads/2024/09/ec04464250ed701fb2e4564614d01c8b4345356d.jpg',
  'https://dentalplaceofplano.com/wp-content/uploads/2024/09/e459ff3b0da2f28ec4e6abcdb5d1d14cee3e2854-1.jpg',
  'https://dentalplaceofplano.com/wp-content/uploads/2024/09/e3fe5fc5ba3f5f1d6b858bdde7e34b4e909c6a8f-1.jpg',
  'https://dentalplaceofplano.com/wp-content/uploads/2024/09/99e85c5d46192b185a2eb6c6ddf7522a5db91414.jpg',
  'https://dentalplaceofplano.com/wp-content/uploads/2024/09/94a2557d150989e0c64693853bf27574f7240cc2.jpg',
  'https://dentalplaceofplano.com/wp-content/uploads/2024/09/69f4a9412dd45945ed3e7c48830e3b423aa31c69.jpg'
];

export default function OfficeGallery() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-[#dfb15b] font-bold tracking-widest uppercase text-sm mb-3 block">Tour Our Clinic</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
            Our Modern Office
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="pb-12 px-4"
          >
            {officeImages.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative rounded-3xl overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] group aspect-[4/3] w-full">
                  <img 
                    src={src} 
                    alt={`Office Gallery ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
