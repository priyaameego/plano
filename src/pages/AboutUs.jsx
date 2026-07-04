import AboutHero from '../components/AboutHero';
import AboutPractice from '../components/AboutPractice';
import AboutDoctors from '../components/AboutDoctors';
import AboutStaff from '../components/AboutStaff';
import OfficeGallery from '../components/OfficeGallery';
import CTA from '../components/CTA';

export default function AboutUs() {
  return (
    <main className="bg-white overflow-x-hidden">
      <AboutHero />
      <AboutPractice />
      <AboutDoctors />
      <AboutStaff />
      <OfficeGallery />
      <CTA />
    </main>
  );
}
