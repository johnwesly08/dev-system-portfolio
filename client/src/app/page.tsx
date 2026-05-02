import BentoGrid from '@/components/BentoGrid';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-midnight">
      {/* Background Glow Blobs */}
      <div className="glow-blob top-[-10%] left-[-10%]" />
      <div className="glow-blob bottom-[-10%] right-[-10%] animate-delay-2000" />
      <div className="glow-blob top-[40%] left-[30%] opacity-50" />

      <BentoGrid />
    </main>
  );
}
