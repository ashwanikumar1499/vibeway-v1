import React from 'react';
import { Section } from './components/Section';
import { Button } from './components/Button';
import { WaitlistForm } from './components/WaitlistForm';
import { Shield, CheckCircle2, XCircle, Menu, X, Users, MapPin, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

// Restored Original Geometric VibeWay Logo
const VibeWayLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 8L12 26L16 16" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 16L20 26L28 8" stroke="url(#paint1_linear)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear" x1="4" y1="8" x2="12" y2="26" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2dd4bf"/>
        <stop offset="1" stopColor="#0f766e"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="16" y1="16" x2="28" y2="8" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0f766e"/>
        <stop offset="1" stopColor="#fb923c"/>
      </linearGradient>
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
        <div className="font-display font-bold text-xl md:text-2xl tracking-tight text-white flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
          <div className="group-hover:scale-110 transition-transform duration-300 ease-in-out">
             <VibeWayLogo />
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">VibeWay.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <button onClick={() => scrollToSection('problem')} className="hover:text-primary transition-colors">The Problem</button>
          <button onClick={() => scrollToSection('solution')} className="hover:text-primary transition-colors">The Solution</button>
          <button onClick={() => scrollToSection('join')} className="text-white bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full transition-all hover:scale-105 border border-white/5 font-semibold">Join The Club</button>
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
           <button onClick={() => scrollToSection('problem')} className="text-slate-400 text-left py-3 text-lg border-b border-white/5">The Problem</button>
           <button onClick={() => scrollToSection('solution')} className="text-slate-400 text-left py-3 text-lg border-b border-white/5">The Solution</button>
           <button onClick={() => scrollToSection('join')} className="text-primary font-bold text-left py-3 text-lg">Join Waitlist</button>
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
               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-inner">
                 JD
               </div>
               <div>
                 <div className="w-24 h-2.5 bg-slate-700 rounded-full mb-1.5 animate-pulse"></div>
                 <div className="w-16 h-2 bg-slate-800 rounded-full"></div>
               </div>
             </div>
             <div className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-[10px] font-bold tracking-wider flex items-center gap-1.5 shadow-[0_0_10px_rgba(45,212,191,0.2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-[pulse_2s_infinite]"></span>
                98% MATCH
             </div>
          </div>

          {/* Image Area */}
          <div className="relative w-full h-40 bg-slate-800 rounded-2xl mb-4 overflow-hidden group">
             {/* Gradient Overlay representing image */}
             <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 group-hover:scale-105 transition-transform duration-700"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
             
             {/* Location Tag */}
             <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs font-bold backdrop-blur-sm bg-black/20 px-2 py-1 rounded-lg border border-white/10">
               <MapPin size={12} className="text-secondary" />
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
          <button className="w-full py-3 bg-white text-black font-bold text-sm rounded-xl hover:bg-slate-200 transition-colors shadow-lg flex items-center justify-center gap-2 group">
             <Sparkles size={14} className="text-secondary group-hover:rotate-12 transition-transform" />
             Send Invite
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
    <div className={`mt-1 min-w-[24px] h-6 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 duration-300 ${type === 'pain' ? 'bg-red-500/10 text-red-400' : 'bg-primary/10 text-primary'}`}>
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
            <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-indigo-900/30 rounded-full blur-[100px] animate-aurora"></div>
            <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[120px] animate-aurora" style={{ animationDelay: '-5s' }}></div>
            <div className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[70vw] bg-secondary/10 rounded-full blur-[100px] animate-aurora" style={{ animationDelay: '-2s' }}></div>
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
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-medium text-slate-300 mb-6 md:mb-8 backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              <Sparkles className="w-3 h-3 text-secondary" />
              <span className="tracking-wide uppercase">Community-First Travel</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 md:mb-8 leading-[1.05] font-display max-w-5xl mx-auto drop-shadow-2xl">
              Don't let your <br className="hidden md:block" />
              dream trip <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">stay a dream.</span>
            </h1>
            
            <p className="text-base md:text-xl text-slate-400 max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed font-light px-2">
              The group chat is dead. Your friends are "busy." <br className="hidden md:block"/> VibeWay matches you with a verified crew that actually books the ticket.
            </p>
            
            <div className="w-full md:w-auto px-4">
              <Button onClick={scrollToJoin} className="w-full md:w-auto text-base py-4 font-display font-bold shadow-[0_0_30px_-5px_rgba(45,212,191,0.2)] hover:shadow-[0_0_40px_-5px_rgba(45,212,191,0.4)]">
                Find Your Crew
              </Button>
            </div>
             <p className="text-[10px] md:text-xs text-slate-600 font-mono mt-6">
                // No subscription. No ads. Just boarding passes.
              </p>
          </motion.div>
        </Section>
      </main>

      {/* THE PROBLEM SECTION */}
      <div id="problem" className="relative border-t border-white/5 bg-slate-900/30 backdrop-blur-sm">
        <Section>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                <div className="order-2 md:order-1">
                     <h2 className="text-sm font-mono text-red-400 mb-4 uppercase tracking-widest">The Problem</h2>
                     <h3 className="text-3xl md:text-5xl font-bold font-display mb-8">Why travel sucks right now.</h3>
                     
                     <div className="space-y-2">
                        <StoryPoint 
                            type="pain"
                            title="The 'Group Chat Limbo'"
                            desc="You start a chat. Everyone sends fire emojis. Then you pick a date, and suddenly everyone is 'swamped at work'. The trip dies in the chat."
                            delay={0}
                        />
                        <StoryPoint 
                            type="pain"
                            title="The Vibe Clash"
                            desc="You end up traveling with a friend of a friend. You want street food and hostels; they want resorts and room service. The trip becomes a compromise."
                            delay={0.1}
                        />
                        <StoryPoint 
                            type="pain"
                            title="The Solo Tax"
                            desc="Going alone means paying double for accommodation, having no one to watch your bag at the airport, and dining alone when you don't want to."
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
                          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-[#0f172a] border border-red-500/30 rounded-xl flex items-center justify-center text-xs text-red-400 shadow-xl whitespace-nowrap"
                        >
                            "Maybe next year?"
                        </motion.div>
                        <motion.div 
                           animate={{ x: [10, -10, 10] }}
                           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                           className="absolute bottom-10 right-0 px-4 py-2 bg-[#0f172a] border border-red-500/30 rounded-xl flex items-center justify-center text-xs text-red-400 shadow-xl whitespace-nowrap"
                        >
                            "Too expensive"
                        </motion.div>
                        <motion.div 
                           animate={{ scale: [1, 1.1, 1] }}
                           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                           className="absolute top-1/2 left-0 -translate-x-1/2 px-4 py-2 bg-[#0f172a] border border-red-500/30 rounded-xl flex items-center justify-center text-xs text-red-400 shadow-xl whitespace-nowrap"
                        >
                            "I'm broke lol"
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
                     <h2 className="text-sm font-mono text-primary mb-4 uppercase tracking-widest">The Solution</h2>
                     <h3 className="text-3xl md:text-5xl font-bold font-display mb-8">The VibeWay Protocol.</h3>
                     
                     <div className="space-y-2">
                        <StoryPoint 
                            type="gain"
                            title="Algorithmic Vibe Matching"
                            desc="We don't just match destinations. We match budgets, energy levels (chill vs. chaotic), and interests. You get a crew that travels like you do."
                            delay={0}
                        />
                        <StoryPoint 
                            type="gain"
                            title="Verified Humans Only"
                            desc="Every member passes a Stripe Identity check and a video intro. We filter out weirdos so you can travel with peace of mind."
                            delay={0.1}
                        />
                        <StoryPoint 
                            type="gain"
                            title="Escrow Accountability"
                            desc="The flake-killer. Everyone puts a deposit down. If someone bails last minute without cause, their deposit goes to the group's bar tab."
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
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-t from-primary/10 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
        
        <Section className="py-24 md:py-40 relative z-10">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 font-display">
                    Your crew is <br /> waiting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">offline.</span>
                </h2>
                <p className="text-slate-400 text-lg max-w-xl mx-auto px-4">
                    Stop waiting for your friends to be free. <br/> Join the club of travelers who are ready to go now.
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