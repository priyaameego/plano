import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import HomeServicesBlocks from '../components/HomeServicesBlocks';
import HomeStatsAndSkills from '../components/HomeStatsAndSkills';
import InsuranceMarquee from '../components/InsuranceMarquee';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <HomeServicesBlocks />
      <HomeStatsAndSkills />
      <InsuranceMarquee />
      <CTA />
    </main>
  );
}
