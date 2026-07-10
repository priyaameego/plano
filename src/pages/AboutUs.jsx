import AboutHero from '../components/AboutHero';
import AboutPractice from '../components/AboutPractice';
import AboutDoctors from '../components/AboutDoctors';
import AboutStaff from '../components/AboutStaff';
import OfficeGallery from '../components/OfficeGallery';

export default function AboutUs() {
  return (
    <main className="bg-white overflow-x-hidden">
      <AboutHero />
      <AboutPractice />
      <AboutDoctors />
      <AboutStaff />
      <OfficeGallery />
    </main>
  );
}
