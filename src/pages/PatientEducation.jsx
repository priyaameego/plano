import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

export default function PatientEducation() {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      title: 'Dental Implants - High-Tech Teeth',
      desc: 'Learn about the high-tech procedure of dental implants and how they can restore your smile.',
      thumbnail: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
      videoUrl: 'https://icoivideos.com/wp-content/themes/deardoctor/inc/video/page-generate-embed.php?callback=parTest&parDirectoryID=62202&parFullName=%20&parVideoName=Dental%20Implants%20-%20High-Tech%20Teeth&parPhone=214-942-0101&parUrl=www.penndentaldfw.com&parVideoCodeName=icoi-overview&parAutoPlay=true'
    },
    {
      title: 'Consequences of Missing Teeth',
      desc: 'Understand the impact of missing teeth on your oral health and explore replacement options.',
      thumbnail: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
      videoUrl: 'https://icoivideos.com/wp-content/themes/deardoctor/inc/video/page-generate-embed.php?callback=parTest&parDirectoryID=62202&parFullName=%20&parVideoName=Consequences%20of%20Missing%20Teeth&parPhone=214-942-0101&parUrl=www.penndentaldfw.com&parVideoCodeName=icoi-consequences&parAutoPlay=true'
    },
    {
      title: 'Preventing Gum Disease',
      desc: 'Learn the early signs of gingivitis and how to protect your gums for a lifetime of health.',
      thumbnail: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4'
    },
    {
      title: 'Post-Operative Care',
      desc: 'Essential guidelines to follow after a dental procedure for a smooth and fast recovery.',
      thumbnail: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4'
    },
    {
      title: 'How to Brush Properly',
      desc: 'Master the technique of brushing to ensure you are thoroughly removing plaque every day.',
      thumbnail: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4'
    },
    {
      title: 'Cosmetic Dentistry Options',
      desc: 'Explore the different ways we can enhance your smile with veneers, whitening, and more.',
      thumbnail: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4'
    }
  ];

  return (
    <main className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Patient <span className="text-[#dfb15b]">Education</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Empowering you with knowledge. Explore our video library to learn more about maintaining optimal oral health and understanding our procedures.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-md shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/60 transition-all duration-300 border border-gray-100 flex flex-col cursor-pointer"
              onClick={() => setActiveVideo(video.videoUrl)}
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden bg-gray-200">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg border border-white/30">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <Play className="w-5 h-5 text-[#dfb15b] ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#dfb15b] transition-colors">{video.title}</h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-grow">
                  {video.desc}
                </p>
                <div className="mt-auto inline-flex items-center text-sm font-bold text-[#dfb15b] group-hover:text-gray-900 transition-colors">
                  Watch Video <Play className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-colors border border-white/20 z-[110]"
              onClick={() => setActiveVideo(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10"
            >
              <iframe
                src={activeVideo}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
