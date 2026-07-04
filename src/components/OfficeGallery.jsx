import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const officeImages = [
  'https://dentalplaceofplano.com/wp-content/uploads/2024/09/2d4025eb99b2ad6d513e45ebb4108a60a26145ca.jpg',
  'https://dentalplaceofplano.com/wp-content/uploads/2024/09/69f4a9412dd45945ed3e7c48830e3b423aa31c69.jpg',
  'https://dentalplaceofplano.com/wp-content/uploads/2024/09/44a0a4977dd9b719cb7b80f7b138c0c731c61147.jpg',
  'https://dentalplaceofplano.com/wp-content/uploads/2024/09/2d4025eb99b2ad6d513e45ebb4108a60a26145ca.jpg',
  'https://dentalplaceofplano.com/wp-content/uploads/2024/09/e3fe5fc5ba3f5f1d6b858bdde7e34b4e909c6a8f.jpg',
  'https://dentalplaceofplano.com/wp-content/uploads/2024/09/fc29dadd22f977807f3bfdbb7d060930aac076da.jpg'
];

export default function OfficeGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % officeImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + officeImages.length) % officeImages.length);
  };

  // Helper to get visible images
  const getVisibleImages = () => {
    const images = [];
    for (let i = 0; i < 3; i++) {
      images.push(officeImages[(currentIndex + i) % officeImages.length]);
    }
    return images;
  };

  const visibleImages = getVisibleImages();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 font-sans">
          Office
        </h2>

        <div className="relative flex items-center">
          
          <button 
            onClick={handlePrev}
            className="absolute -left-4 md:-left-12 z-10 p-2 text-gray-400 hover:text-[#d9af3f] transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="w-full overflow-hidden">
            <div className="flex gap-6 justify-center">
              {visibleImages.map((src, index) => (
                <motion.div 
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full md:w-1/3 aspect-square"
                >
                  <img 
                    src={src} 
                    alt={`Office Gallery ${index + 1}`} 
                    className="w-full h-full object-cover shadow-sm"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <button 
            onClick={handleNext}
            className="absolute -right-4 md:-right-12 z-10 p-2 text-gray-400 hover:text-[#d9af3f] transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

        </div>
      </div>
    </section>
  );
}
