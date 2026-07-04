import AboutHero from '../components/AboutHero';
import AboutPractice from '../components/AboutPractice';
import AboutDoctors from '../components/AboutDoctors';
import AboutStaff from '../components/AboutStaff';
import CTA from '../components/CTA';

export default function AboutUs() {
  return (
    <main className="bg-white">
      <AboutHero />
      <AboutPractice />
      <AboutDoctors />
      <AboutStaff />
      <CTA />
    </main>
  );
}
