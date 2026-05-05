import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TerminalTile from '@/components/TerminalTile'; // <-- Add this import
import AboutAndSkills from '@/components/AboutAndSkills';
import Achievements from '@/components/Achievements';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-midnight">
      
      {/* Background Glow Blobs */}
      <div className="glow-blob top-[-10%] left-[-10%] fixed -z-10" />
      <div className="glow-blob bottom-[-10%] right-[-10%] animate-delay-2000 fixed -z-10" />
      <div className="glow-blob top-[40%] left-[30%] opacity-50 fixed -z-10" />

      <Navbar />

      <div className="relative z-10">
        <Hero />
        
        {/* TERMINAL SECTION - Removed negative margin, added clean padding */}
        <section className="px-6 max-w-3xl mx-auto pt-16 pb-24 relative z-20">
          <div className="h-64 rounded-2xl shadow-2xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden">
            <TerminalTile />
          </div>
        </section>

        <AboutAndSkills />
        <Achievements />
        <Projects />
        <Contact />
      </div>

    </main>
  );
}