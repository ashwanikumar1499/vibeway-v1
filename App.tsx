import React from 'react';
import { Section } from './components/Section';
import { Button } from './components/Button';
import { WaitlistForm } from './components/WaitlistForm';
import { Shield, ArrowRight, X, MapPin, Check, Globe, Flame, Lock, Zap, Sparkles, Radar } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const VibeWayLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10L12 24L16 14L20 24L28 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/50 backdrop-blur-2xl border-b border-white/[0.05]">
      <div className="max-w-screen-xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
          <div className="group-hover:rotate-12 transition-transform duration-500">
            <VibeWayLogo />
          </div>
          <span className="font-black tracking-tighter text-xl uppercase italic">VibeWay</span>
        </div>
        <button 
          onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-white/5 hover:bg-white/10 px-6 py-2 rounded-full border border-white/10 text-[10px] font-black tracking-[0.2em] uppercase text-white transition-all"
        >
          Join Season 01
        </button>
      </div>
    </nav>
  );
};

const MemberPreview = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.8 }}
    className="relative group mt-12 md:mt-20"
  >
    <div className="absolute -inset-4 bg-accent/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    <div className="glass-card relative border border-white/10 rounded-[2.5rem] p-1 bg-gradient-to-br from-white/10 to-transparent">
      <div className="bg-black/90 rounded-[2.3rem] px-8 py-6 flex items-center gap-6">
        <div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-gradient-to-tr from-accent to-zinc-900" />
        </div>
        <div className="text-left">
          <div className="flex items-center gap-2 mb-1">
            <p className="text-sm font-bold tracking-tight">Elias T. — <span className="text-accent italic">Main Character</span></p>
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          </div>
          <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">Searching: Tokyo 3AM Food Tour</p>
        </div>
        <div className="hidden sm:flex items-center gap-4 border-l border-white/10 pl-6 ml-4">
          <div className="text-center">
            <p className="text-[9px] text-zinc-600 font-black uppercase">Sync</p>
            <p className="text-xs font-bold text-accent">98%</p>
          </div>
          <div className="px-3 py-1.5 bg-accent text-black rounded-lg text-[10px] font-black uppercase tracking-tighter cursor-pointer hover:bg-white transition-colors">
            Match
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Hero = () => {
  return (
    <header className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background VFX */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-7xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent font-black tracking-[0.3em] uppercase text-[9px] mb-8">
          <Radar size={12} className="animate-pulse" />
          Active Sync: 482 Members Verified
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-[11rem] font-bold tracking-[ -0.05em] leading-[0.85] mb-8 select-none">
          THE GROUP CHAT<br />
          <span className="text-zinc-800 italic">IS DEAD.</span>
        </h1>
        
        <p className="text-zinc-400 text-base md:text-2xl max-w-2xl mx-auto mb-12 font-medium leading-tight px-4 text-balance">
          Stop waiting for the "Maybe" era. <br className="hidden md:block" /> 
          VibeWay finds you humans who actually <span className="text-white">book the flight.</span>
        </p>

        <div className="flex flex-col items-center gap-12">
          <Button 
            onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-black px-16 py-6 text-xs font-black tracking-[0.2em] uppercase rounded-none hover:bg-accent transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.1)]"
          >
            Get Vibe-Checked
          </Button>
          
          <MemberPreview />
        </div>
      </motion.div>
    </header>
  );
};

const Point = ({ title, desc, icon: Icon }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="mb-16 group last:mb-0"
  >
    <div className="flex items-center gap-6 mb-4">
      <div className="p-3 bg-zinc-900/50 rounded-2xl border border-white/5 text-zinc-500 group-hover:text-accent group-hover:border-accent/20 transition-all duration-500">
        <Icon size={22} strokeWidth={2} />
      </div>
      <h4 className="text-2xl font-bold tracking-tight">{title}</h4>
    </div>
    <p className="text-zinc-500 leading-relaxed text-base pl-20 max-w-md">
      {desc}
    </p>
  </motion.div>
);

function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 1]); // Kept visible always now

  return (
    <div className="min-h-screen bg-black text-white selection:bg-accent/30 overflow-x-hidden font-sans">
      <Navbar />
      <Hero />

      {/* STORYTELLING: THE PROBLEM */}
      <Section id="problem" className="grid md:grid-cols-2 gap-32 items-start py-40">
        <div className="sticky top-40">
          <div className="text-accent font-black tracking-[0.4em] uppercase text-[10px] mb-8 flex items-center gap-2">
            <Flame size={12} /> No More Flakes
          </div>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            Gatekeep your <br />
            <span className="text-zinc-800 italic">Vibe.</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-sm leading-relaxed">
            The group chat is where trips go to die. We built VibeWay to ensure you never waste a "locked in" look on a friend who isn't.
          </p>
        </div>
        
        <div className="pt-20">
          <Point 
            icon={X} 
            title="Accountability Protocol" 
            desc="Every member is ID-verified via Stripe. If you flake on a confirmed trip, your deposit pays for the crew's first night in Tokyo." 
          />
          <Point 
            icon={Zap} 
            title="Energy Matching" 
            desc="Our AI matches your travel pace. Street food junkies don't get stuck in 5-star hotel lobbies. Early birds stay with early birds." 
          />
          <Point 
            icon={Lock} 
            title="Invite Only" 
            desc="We aren't a marketplace; we're a lens. We vet 1,000+ applicants weekly to ensure the quality of the tribe stays peak." 
          />
        </div>
      </Section>

      {/* MID-SCROLL QUOTE */}
      <Section className="bg-zinc-950/50 border-y border-white/[0.05] !max-w-none px-0 py-60">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center text-center">
           <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black mb-12 shadow-2xl">
             <Globe size={28} />
           </div>
           <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-12 max-w-4xl leading-[0.95]">
             "THE ONLY THING WORSE THAN TRAVELING ALONE IS TRAVELING WITH THE WRONG PEOPLE."
           </h2>
           <p className="text-zinc-600 uppercase tracking-[0.5em] font-black text-xs">
             — THE VIBEWAY MANIFESTO
           </p>
        </div>
      </Section>

      {/* FORM SECTION */}
      <div id="join" className="py-40 md:py-80 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(45,212,191,0.08)_0%,_transparent_60%)] pointer-events-none"></div>
        <Section className="text-center relative z-10">
          <h2 className="text-6xl md:text-[13rem] font-bold tracking-tighter mb-12 uppercase">
            LOCKED <span className="text-zinc-800 italic">IN?</span>
          </h2>
          <p className="text-zinc-500 mb-20 max-w-xl mx-auto uppercase tracking-[0.3em] font-black text-xs">
            Season 01 Membership: 18/500 Remaining <br /> 
            <span className="text-accent">Verification Required.</span>
          </p>
          
          <WaitlistForm />
        </Section>
      </div>

      <footer className="py-32 border-t border-white/[0.05] text-center bg-black relative z-10">
        <div className="flex justify-center gap-16 mb-16">
          <a href="#" className="text-zinc-700 hover:text-white transition-all text-[10px] font-black tracking-[0.4em] uppercase italic underline-offset-8 hover:underline">Instagram</a>
          <a href="#" className="text-zinc-700 hover:text-white transition-all text-[10px] font-black tracking-[0.4em] uppercase italic underline-offset-8 hover:underline">TikTok</a>
          <a href="#" className="text-zinc-700 hover:text-white transition-all text-[10px] font-black tracking-[0.4em] uppercase italic underline-offset-8 hover:underline">Privacy</a>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="opacity-20 hover:opacity-100 transition-opacity">
            <VibeWayLogo />
          </div>
          <p className="text-zinc-900 text-[10px] font-black tracking-[0.8em] uppercase">VIBEWAY WORLDWIDE &copy; 2024</p>
        </div>
      </footer>
    </div>
  );
}

export default App;