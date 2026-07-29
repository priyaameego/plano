import { Link } from 'react-router-dom';
import familyImg from '../assets/family.png';
import toothImg from '../assets/tooth.png';

const services = [
  {
    name: 'Dental Implants',
    link: '/dental-implants',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Navigated Surgery',
    link: '/navigated-surgery',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Preventive Care',
    link: '/preventive-care',
    image: familyImg
  },
  {
    name: 'Veneer',
    link: '/veneer',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Root Canal',
    link: '/root-canal',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Extraction',
    link: '/extraction',
    image: toothImg
  }
];

export default function HomeServicesBlocks() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              to={service.link} 
              key={index}
              className="group relative block aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wide">
                  {service.name}
                </h3>
                <div className="w-12 h-1 bg-[#dfb15b] mt-4 transform origin-left transition-all duration-300 group-hover:w-24"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
