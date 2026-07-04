import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import HomeServicesBlocks from '../components/HomeServicesBlocks';
import HomeStatsAndSkills from '../components/HomeStatsAndSkills';
import InsuranceMarquee from '../components/InsuranceMarquee';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-50">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-[#dfb15b]/10 blur-[100px]"
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, 50, 100, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ top: '-10%', left: '-10%' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-[#0b1b36]/10 blur-[80px]"
        animate={{
          x: [0, -100, 0, 100, 0],
          y: [0, -50, -100, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ top: '40%', right: '-10%' }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-[#cca046]/10 blur-[120px]"
        animate={{
          x: [0, 50, 0, -50, 0],
          y: [0, -100, 0, 100, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ bottom: '-10%', left: '20%' }}
      />
    </div>
  );
};

export default function Home() {
  return (
    <main className="relative">
      <BackgroundAnimation />
      <Hero />
      <WhoWeAre />
      <HomeServicesBlocks />
      <HomeStatsAndSkills />
      <CTA />
    </main>
  );
}
