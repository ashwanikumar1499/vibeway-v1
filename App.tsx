import React from 'react';
import { Section } from './components/Section';
import { Button } from './components/Button';
import { WaitlistForm } from './components/WaitlistForm';
import { Shield, CheckCircle2, XCircle, Menu, X, Users, MapPin, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

// Fresh Wavy VibeWay Logo - Gen Z Edition
const VibeWayLogo = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 18 Q10 10, 14 18 T22 18 Q26 10, 30 18" stroke="url(#paint0_linear)" strokeWidth="4" strokeLinecap="round" fill="none"/>
    <circle cx="6" cy="18" r="3" fill="url(#paint1_radial)" />
    <circle cx="30" cy="18" r="3" fill="url(#paint2_radial)" />
    <defs>
      <linearGradient id="paint0_linear" x1="6" y1="10" x2="30" y2="18" gradientUnits="userSpaceOnUse">
        <stop stopColor="#c0ff00"/>
        <stop offset="0.5" stopColor="#00f0ff"/>
        <stop offset="1" stopColor="#ff0080"/>
      </linearGradient>
      <radialGradient id="paint1_radial">
        <stop stopColor="#c0ff00"/>
        <stop offset="1" stopColor="#7dd956"/>
      </radialGradient>
      <radialGradient id="paint2_radial">
        <stop stopColor="#ff0080"/>
        <stop offset="1" stopColor="#ff4f79"/>
      </radialGradient>
    </defs>
  </svg>
);

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/90 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <div className="font-display font-bold text-xl md:text-2xl tracking-tight text-white flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
          <div className="group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ease-in-out">
             <VibeWayLogo />
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c0ff00] via-[#00f0ff] to-[#ff0080]">VibeWay</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <button onClick={() => scrollToSection('problem')} className="hover:text-[#c0ff00] transition-colors">The Ick</button>
          <button onClick={() => scrollToSection('solution')} className="hover:text-[#00f0ff] transition-colors">The Fix</button>
          <button onClick={() => scrollToSection('join')} className="text-black bg-gradient-to-r from-[#c0ff00] to-[#00f0ff] hover:scale-105 px-5 py-2.5 rounded-full transition-all font-bold shadow-[0_0_20px_rgba(192,255,0,0.3)]">Get Early Access</button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#020617] border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl absolute w-full z-50">
           <button onClick={() => scrollToSection('problem')} className="text-slate-400 text-left py-3 text-lg border-b border-white/5 hover:text-[#ff0080] transition-colors">The Ick</button>
           <button onClick={() => scrollToSection('solution')} className="text-slate-400 text-left py-3 text-lg border-b border-white/5 hover:text-[#c0ff00] transition-colors">The Fix</button>
           <button onClick={() => scrollToSection('join')} className="text-[#c0ff00] font-bold text-left py-3 text-lg">Get Early Access</button>
        </div>
      )}
    </nav>
  );
};

// Travel Card Component
const TravelCard = () => {
  return (
    <div className="relative w-full max-w-[320px] md:max-w-sm mx-auto perspective-1000">
       {/* Glow Effect */}
       <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-secondary/30 blur-2xl rounded-[30px] opacity-60 animate-pulse"></div>
       
       <motion.div 
         initial={{ rotateY: 15, rotateX: 5, scale: 0.9 }}
         whileInView={{ rotateY: 0, rotateX: 0, scale: 1 }}
         viewport={{ once: true }}
         transition={{ type: "spring", stiffness: 50, damping: 20 }}
         className="relative bg-[#0f172a] border border-white/10 rounded-[2rem] p-5 shadow-2xl overflow-hidden"
       >
          {/* Header */}
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/5">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c0ff00] to-[#00f0ff] flex items-center justify-center text-black font-bold text-xs shadow-inner">
                 JD
               </div>
               <div>
                 <div className="w-24 h-2.5 bg-slate-700 rounded-full mb-1.5 animate-pulse"></div>
                 <div className="w-16 h-2 bg-slate-800 rounded-full"></div>
               </div>
             </div>
             <div className="px-3 py-1 bg-[#c0ff00]/20 text-[#c0ff00] border border-[#c0ff00]/40 rounded-full text-[10px] font-bold tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(192,255,0,0.3)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c0ff00] animate-[pulse_2s_infinite]"></span>
                98% VIBE
             </div>
          </div>

          {/* Image Area */}
          <div className="relative w-full h-40 bg-slate-800 rounded-2xl mb-4 overflow-hidden group">
             {/* Gradient Overlay representing image */}
             <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-700 to-pink-700 group-hover:scale-105 transition-transform duration-700"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

             {/* Location Tag */}
             <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs font-bold backdrop-blur-sm bg-black/30 px-2.5 py-1.5 rounded-xl border border-[#c0ff00]/30 shadow-[0_0_10px_rgba(192,255,0,0.3)]">
               <MapPin size={12} className="text-[#c0ff00]" />
               Kyoto, Japan
             </div>
          </div>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap mb-5">
             {['Street Food', 'Photography', 'Hostels'].map((tag) => (
               <span key={tag} className="px-2.5 py-1 bg-slate-900 border border-slate-700/50 rounded-lg text-[10px] text-slate-400 font-medium">
                 {tag}
               </span>
             ))}
          </div>

          {/* Button */}
          <button className="w-full py-3 bg-gradient-to-r from-[#c0ff00] to-[#00f0ff] text-black font-bold text-sm rounded-xl hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(192,255,0,0.3)] flex items-center justify-center gap-2 group">
             <Sparkles size={14} className="text-black group-hover:rotate-12 transition-transform" />
             Send Vibe Check
          </button>
       </motion.div>

       {/* Floating Elements for 3D feel */}
       <motion.div 
         animate={{ y: [0, -10, 0] }}
         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
         className="absolute -right-4 top-20 bg-slate-900/90 backdrop-blur border border-white/10 p-2 rounded-xl shadow-xl hidden md:block"
       >
         <div className="text-[10px] text-slate-400 mb-1">Budget</div>
         <div className="text-xs font-bold text-white">$1.2k - $1.5k</div>
       </motion.div>
    </div>
  )
}

// Simplified list item for storytelling
const StoryPoint: React.FC<{ title: string; desc: string; type: 'pain' | 'gain'; delay?: number }> = ({ title, desc, type, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: delay }}
    className="flex gap-4 items-start mb-8 group"
  >
    <div className={`mt-1 min-w-[24px] h-6 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 duration-300 ${type === 'pain' ? 'bg-[#ff0080]/20 text-[#ff0080] border border-[#ff0080]/30' : 'bg-[#c0ff00]/20 text-[#c0ff00] border border-[#c0ff00]/30'}`}>
       {type === 'pain' ? <XCircle size={16} /> : <CheckCircle2 size={16} />}
    </div>
    <div>
      <h4 className={`text-lg font-bold font-display mb-1 ${type === 'pain' ? 'text-slate-200' : 'text-white'}`}>{title}</h4>
      <p className="text-slate-400 text-sm md:text-base leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

function App() {
  const scrollToJoin = () => {
    document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Parallax hooks
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1000], ['0%', '20%']);
  const heroTextY = useTransform(scrollY, [0, 500], [0, 50]); 

  return (
    <div className="min-h-screen bg-background text-slate-50 overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <Navbar />

      {/* HERO BACKGROUND */}
      <div className="fixed top-0 left-0 w-full h-[120vh] -z-10 overflow-hidden pointer-events-none">
          {/* Base Dark Gradient */}
          <div className="absolute inset-0 bg-[#020617]"></div>
          
          {/* Animated Aurora Blobs */}
          <motion.div 
            style={{ y: bgY }}
            className="absolute inset-0 opacity-40"
          >
            <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-[#c0ff00]/15 rounded-full blur-[120px] animate-aurora"></div>
            <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-[#00f0ff]/15 rounded-full blur-[140px] animate-aurora" style={{ animationDelay: '-5s' }}></div>
            <div className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[70vw] bg-[#ff0080]/15 rounded-full blur-[120px] animate-aurora" style={{ animationDelay: '-2s' }}></div>
          </motion.div>
      </div>

      {/* HERO SECTION */}
      <main className="pt-32 pb-16 md:pt-48 md:pb-32 relative px-4 md:px-6">
        <Section className="text-center relative z-10 !py-10 md:!py-32">
          <motion.div 
            style={{ y: heroTextY }}
            className="flex flex-col items-center"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#c0ff00]/10 to-[#00f0ff]/10 border border-[#c0ff00]/30 text-[10px] md:text-xs font-bold text-white mb-6 md:mb-8 backdrop-blur-md hover:scale-105 transition-all shadow-[0_0_20px_rgba(192,255,0,0.2)]"
            >
              <Sparkles className="w-3 h-3 text-[#c0ff00]" />
              <span className="tracking-wide uppercase">Find Your Travel Twin</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 md:mb-8 leading-[1.05] font-display max-w-5xl mx-auto drop-shadow-2xl">
              Stop planning trips that <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0ff00] via-[#00f0ff] to-[#ff0080] animate-gradient">never happen.</span>
            </h1>

            <p className="text-base md:text-xl text-slate-300 max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed font-medium px-2">
              Your group chat is a ghost town. Your friends flake. <br className="hidden md:block"/>
              <span className="text-[#c0ff00]">VibeWay</span> finds you a crew that <span className="text-[#ff0080]">actually shows up</span> at the airport.
            </p>
            
            <div className="w-full md:w-auto px-4">
              <Button onClick={scrollToJoin} className="w-full md:w-auto text-base py-4 font-display font-bold shadow-[0_0_40px_rgba(192,255,0,0.3)] hover:shadow-[0_0_50px_rgba(192,255,0,0.5)] bg-gradient-to-r from-[#c0ff00] to-[#00f0ff] text-black hover:scale-105">
                Get Early Access
              </Button>
            </div>
             <p className="text-[10px] md:text-xs text-slate-500 font-mono mt-6">
                no cap, just boarding passes fr fr
              </p>
          </motion.div>
        </Section>
      </main>

      {/* THE PROBLEM SECTION */}
      <div id="problem" className="relative border-t border-white/5 bg-slate-900/30 backdrop-blur-sm">
        <Section>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                <div className="order-2 md:order-1">
                     <h2 className="text-sm font-mono text-[#ff0080] mb-4 uppercase tracking-widest font-bold">The Ick</h2>
                     <h3 className="text-3xl md:text-5xl font-bold font-display mb-8">Why nobody's traveling rn.</h3>

                     <div className="space-y-2">
                        <StoryPoint
                            type="pain"
                            title="Group Chat Graveyard"
                            desc="You drop a 'Bali in March?' Everyone reacts with plane emojis. Then crickets. Three months later someone replies 'sorry just saw this lol' and the trip is DOA."
                            delay={0}
                        />
                        <StoryPoint
                            type="pain"
                            title="Vibe Mismatch Energy"
                            desc="You're trying to backpack through Southeast Asia on $30/day. Your travel buddy wants luxury resorts and bottles at beach clubs. The vibes are OFF."
                            delay={0.1}
                        />
                        <StoryPoint
                            type="pain"
                            title="Solo Traveler Tax"
                            desc="Going alone hits different. Double the hotel costs, nobody to watch your stuff, eating dinner for one while couples everywhere. The loneliness is real."
                            delay={0.2}
                        />
                     </div>
                </div>
                {/* Visual - Abstract Representation of Chaos */}
                <div className="order-1 md:order-2 relative h-[300px] w-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-red-500/5 blur-[80px] rounded-full"></div>
                    <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 border border-white/5 rounded-full flex items-center justify-center animate-spin-slow">
                        <motion.div 
                          animate={{ y: [-10, 10, -10] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-[#0f172a] border border-[#ff0080]/50 rounded-xl flex items-center justify-center text-xs text-[#ff0080] shadow-xl whitespace-nowrap rotate-3"
                        >
                            "maybe next szn?"
                        </motion.div>
                        <motion.div
                           animate={{ x: [10, -10, 10] }}
                           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                           className="absolute bottom-10 right-0 px-4 py-2 bg-[#0f172a] border border-[#ff0080]/50 rounded-xl flex items-center justify-center text-xs text-[#ff0080] shadow-xl whitespace-nowrap -rotate-6"
                        >
                            "lowkey broke rn"
                        </motion.div>
                        <motion.div
                           animate={{ scale: [1, 1.1, 1] }}
                           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                           className="absolute top-1/2 left-0 -translate-x-1/2 px-4 py-2 bg-[#0f172a] border border-[#ff0080]/50 rounded-xl flex items-center justify-center text-xs text-[#ff0080] shadow-xl whitespace-nowrap rotate-6"
                        >
                            "just saw this lol"
                        </motion.div>
                        <XCircle className="w-16 h-16 text-red-500/20" />
                    </div>
                </div>
            </div>
        </Section>
      </div>

      {/* THE SOLUTION SECTION */}
      <div id="solution" className="relative border-t border-white/5 bg-slate-900/50 backdrop-blur-md">
        <Section>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-16 md:gap-24 items-center">
                 {/* Visual - High Fidelity Card */}
                 <div className="order-1 md:order-1 w-full flex justify-center">
                    <TravelCard />
                </div>

                <div className="order-2 md:order-2">
                     <h2 className="text-sm font-mono text-[#c0ff00] mb-4 uppercase tracking-widest font-bold">The Fix</h2>
                     <h3 className="text-3xl md:text-5xl font-bold font-display mb-8">How we actually solved this.</h3>

                     <div className="space-y-2">
                        <StoryPoint
                            type="gain"
                            title="AI Vibe Matching (Actually Good)"
                            desc="We match you based on travel style, budget, and energy. Want street food tours at 6am? We'll find your people. Prefer sleeping till noon and beach clubs? We got you too."
                            delay={0}
                        />
                        <StoryPoint
                            type="gain"
                            title="No Weirdos Allowed"
                            desc="Everyone gets verified through Stripe Identity plus a quick video vibe check. We're building a community of real travelers, not bots or creeps."
                            delay={0.1}
                        />
                        <StoryPoint
                            type="gain"
                            title="Anti-Flake Protection"
                            desc="Everyone puts down a deposit. If someone ghosts last minute without a real reason, their deposit funds the group's first dinner. Accountability hits different."
                            delay={0.2}
                        />
                     </div>
                </div>
            </div>
        </Section>
      </div>

      {/* CTA / JOIN WAITLIST */}
      <div id="join" className="relative overflow-hidden bg-slate-950">
        {/* Ambient Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-t from-[#c0ff00]/15 via-[#00f0ff]/10 to-transparent blur-[140px] rounded-full pointer-events-none"></div>
        
        <Section className="py-24 md:py-40 relative z-10">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 font-display">
                    Your travel twin is <br /> out there <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0ff00] via-[#00f0ff] to-[#ff0080]">rn.</span>
                </h2>
                <p className="text-slate-300 text-lg max-w-xl mx-auto px-4 font-medium">
                    Quit waiting on your flaky friends. <br/>
                    Join travelers who are <span className="text-[#c0ff00]">actually ready</span> to book flights.
                </p>
            </div>
            
            <WaitlistForm />
        </Section>
        
        {/* Footer */}
        <footer className="border-t border-white/5 py-12 text-center text-slate-600 text-sm bg-[#020617] relative z-10 px-4">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">TikTok</a>
            </div>
            <p className="font-mono text-xs opacity-50">&copy; {new Date().getFullYear()} VibeWay Inc. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;