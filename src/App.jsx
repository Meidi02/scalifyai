import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 w-[95%] max-w-5xl ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border border-gray-200/50 shadow-sm text-primary'
          : 'bg-transparent text-background'
      }`}
    >
      <div className="font-sans font-bold text-xl tracking-tight">ScalifyAI</div>

      <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
        <a href="#features" className="hover:-translate-y-[1px] transition-transform">Features</a>
        <a href="#philosophy" className="hover:-translate-y-[1px] transition-transform">Philosophy</a>
        <a href="#protocol" className="hover:-translate-y-[1px] transition-transform">Protocol</a>
      </div>

      <div className="hidden md:block">
        <a href="https://calendly.com/meidi-scalifyai/discovery-call" target="_blank" rel="noopener noreferrer" className={`inline-block btn-magnetic rounded-full px-6 py-2 text-sm font-bold transition-colors ${scrolled ? 'bg-accent text-white' : 'bg-white text-dark'}`}>
          <span className="btn-content">Get Started</span>
        </a>
      </div>

      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-background border border-gray-200 shadow-xl rounded-2xl flex flex-col p-4 gap-4 md:hidden text-primary">
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#philosophy" onClick={() => setMenuOpen(false)}>Philosophy</a>
          <a href="#protocol" onClick={() => setMenuOpen(false)}>Protocol</a>
          <a href="https://calendly.com/meidi-scalifyai/discovery-call" target="_blank" rel="noopener noreferrer" className="bg-accent text-white rounded-full px-6 py-3 font-bold mt-2 text-center">
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

function App() {
  const heroRef = useRef(null);

  useEffect(() => {
    let typeWriterInterval;
    let shufflerInterval;
    let typeIndex = 0;
    
    const ctx = gsap.context(() => {
      // Hero Entrance Animation
      gsap.to('.hero-text', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });

      gsap.to('.hero-cta', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6
      });
      
      // Parallax Background
      gsap.to('.hero-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // --- Feature 1: Diagnostic Shuffler ---
      const shufflerCards = ['.shuffler-card-1', '.shuffler-card-2', '.shuffler-card-3'];
      let currentOrder = [0, 1, 2];
      
      shufflerInterval = setInterval(() => {
        // Shift order
        currentOrder.unshift(currentOrder.pop());
        
        currentOrder.forEach((originalIndex, currentPos) => {
          gsap.to(shufflerCards[originalIndex], {
            y: currentPos * 16,
            scale: 1 - (currentPos * 0.05),
            opacity: currentPos === 0 ? 1 : currentPos === 1 ? 0.7 : 0.4,
            zIndex: 10 - currentPos,
            duration: 0.6,
            ease: "back.out(1.5)"
          });
        });
      }, 3000);

      // --- Feature 2: Telemetry Typewriter ---
      const typeText = "> ANALYZING FUNNEL VELOCITY...\n> AVG RESPONSE TIME: 1.4 MINS\n> LEAD-TO-BOOKING CONVERSION: +391%\n> REVIEWS GENERATED: 142/MO\n> SYSTEM ENGAGED.";
      const typeTarget = document.querySelector('.typewriter-text');
      
      const typeWriter = () => {
        if (!typeTarget) return;
        if (typeIndex < typeText.length) {
          typeTarget.innerHTML = typeText.substring(0, typeIndex + 1).replace(/\n/g, '<br/>') + '<span class="animate-pulse">_</span>';
          typeIndex++;
          typeWriterInterval = setTimeout(typeWriter, Math.random() * 50 + 30);
        } else {
          setTimeout(() => {
            typeIndex = 0;
            typeWriter();
          }, 3000);
        }
      };
      
      ScrollTrigger.create({
        trigger: '.typewriter-text',
        start: 'top 80%',
        onEnter: () => typeWriter(),
        once: true
      });

      // --- Feature 3: Cursor Protocol Scheduler ---
      const scheduleTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      scheduleTimeline
        // Start off screen
        .set('.svg-cursor', { x: -20, y: 150, opacity: 0 })
        // Move into view
        .to('.svg-cursor', { x: 50, y: 50, opacity: 1, duration: 0.8, ease: 'power2.out' })
        // Move to target cell
        .to('.svg-cursor', { x: 120, y: 40, duration: 0.6, ease: 'power1.inOut' })
        // "Click" animation
        .to('.svg-cursor', { scale: 0.8, duration: 0.1 })
        // Cell reaction
        .to('.target-cell', { backgroundColor: '#CC5833', duration: 0.2 }, '<') // Accent color
        .to('.svg-cursor', { scale: 1, duration: 0.1 })
        // Move to Save button
        .to('.svg-cursor', { x: 180, y: 110, duration: 0.6, delay: 0.3, ease: 'power1.inOut' })
        // "Click" save
        .to('.svg-cursor', { scale: 0.8, duration: 0.1 })
        .to('.save-btn', { scale: 0.95, duration: 0.1 }, '<')
        .to('.save-btn', { scale: 1, duration: 0.1 })
        // Fade out
        .to('.svg-cursor', { opacity: 0, duration: 0.4, delay: 0.2 })
        // Reset cell
        .set('.target-cell', { backgroundColor: '#F2F0E9' }); // Back to background

      // --- Philosophy Section ---
      gsap.to('.philosophy-bg', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '#philosophy',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      gsap.to('.philosophy-text-1', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#philosophy',
          start: 'top 60%',
        }
      });
      
      gsap.to('.philosophy-text-2', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: '#philosophy',
          start: 'top 60%',
        }
      });

      // --- Protocol Section (Sticky Stacking) ---
      const cards = gsap.utils.toArray('.protocol-card');
      
      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: false,
          id: `card-${i}`,
          end: i === cards.length - 1 ? "+=0" : "max"
        });
        
        // Scale down previous cards
        if (i < cards.length - 1) {
          gsap.to(card.querySelector('.bg-white, .bg-primary\\/5, .bg-dark'), {
            scale: 0.9,
            opacity: 0.5,
            filter: 'blur(2px)',
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top bottom",
              end: "top top",
              scrub: true
            }
          });
        }
      });

    }, heroRef);

    return () => {
      ctx.revert();
      clearInterval(shufflerInterval);
      clearTimeout(typeWriterInterval);
    };
  }, []);

  return (
    <div ref={heroRef}>
      <Navbar />
      <main>
        <section className="relative h-[100dvh] w-full overflow-hidden flex items-end pb-24 px-6 md:px-16" id="hero">
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop" 
               alt="Raw concrete brutalist architecture" 
               className="w-full h-full object-cover object-center hero-bg"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto hero-content">
            <h1 className="text-white flex flex-col gap-2">
              <span className="font-sans font-bold text-3xl md:text-5xl tracking-tight hero-text opacity-0 translate-y-10">
                Deploy the
              </span>
              <span className="font-drama italic text-6xl md:text-8xl lg:text-[140px] leading-[0.85] text-background hero-text opacity-0 translate-y-10">
                Machine.
              </span>
            </h1>
            
            <div className="mt-12 opacity-0 translate-y-10 hero-cta">
              <a href="https://calendly.com/meidi-scalifyai/discovery-call" target="_blank" rel="noopener noreferrer" className="inline-block btn-magnetic bg-accent text-white px-8 py-4 rounded-full font-bold text-lg font-sans">
                <span className="btn-content">Activate Growth</span>
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 px-6 md:px-16 bg-background relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="font-sans font-bold text-4xl md:text-5xl text-dark mb-4 tracking-tight">Interactive Functional Artifacts</h2>
              <p className="font-mono text-primary text-sm uppercase tracking-wider">01 // Micro-UIs</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Card 1: Diagnostic Shuffler */}
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col h-[400px] overflow-hidden relative feature-card">
                <div className="mb-8 z-10 relative">
                  <h3 className="font-sans font-bold text-2xl text-dark mb-2">Zero Dropped Leads</h3>
                  <p className="text-dark/70 font-sans text-sm">Our world-class AI agents engage 24/7, ensuring no lead ever falls through the cracks.</p>
                </div>
                
                <div className="flex-1 relative mt-4 shuffler-container w-full max-w-[280px] mx-auto">
                  <div className="absolute w-full bg-background rounded-xl p-4 border border-gray-100 shadow-sm top-0 shuffler-card-1">
                    <p className="font-mono text-xs text-primary mb-2">Incoming Call</p>
                    <p className="font-sans text-sm font-medium">"I need to book a session for next Tuesday."</p>
                    <div className="mt-3 flex gap-2">
                      <span className="px-2 py-1 bg-accent/10 text-accent rounded text-[10px] font-bold uppercase">Handled</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-[10px] font-bold uppercase">AI Agent</span>
                    </div>
                  </div>
                  <div className="absolute w-full bg-background rounded-xl p-4 border border-gray-100 shadow-sm top-4 scale-95 opacity-70 shuffler-card-2">
                    <p className="font-mono text-xs text-primary mb-2">SMS Received</p>
                    <p className="font-sans text-sm font-medium">"What are your hours this weekend?"</p>
                  </div>
                  <div className="absolute w-full bg-background rounded-xl p-4 border border-gray-100 shadow-sm top-8 scale-90 opacity-40 shuffler-card-3">
                    <p className="font-mono text-xs text-primary mb-2">Web Chat</p>
                    <p className="font-sans text-sm font-medium">"Do you accept insurance for PT?"</p>
                  </div>
                </div>
              </div>

              {/* Card 2: Telemetry Typewriter */}
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col h-[400px] feature-card">
                <div className="mb-8">
                  <h3 className="font-sans font-bold text-2xl text-dark mb-2">+391% Conversion Lift</h3>
                  <p className="text-dark/70 font-sans text-sm">Real-time ROI telemetry & automated 5-star review generation.</p>
                </div>

                <div className="flex-1 bg-dark rounded-xl p-4 overflow-hidden flex flex-col relative">
                  <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                    <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest">Live Feed</span>
                  </div>
                  <div className="font-mono text-sm text-green-400 leading-relaxed typewriter-text h-full">
                    {/* Populated by GSAP */}
                  </div>
                </div>
              </div>

              {/* Card 3: Cursor Protocol Scheduler */}
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col h-[400px] feature-card">
                <div className="mb-8">
                  <h3 className="font-sans font-bold text-2xl text-dark mb-2">Maximized LTV</h3>
                  <p className="text-dark/70 font-sans text-sm">Intelligent follow-ups rescuing dead leads and adding hundreds of thousands in new revenue.</p>
                </div>

                <div className="flex-1 relative">
                  <div className="grid grid-cols-7 gap-1 h-32">
                    {['S','M','T','W','T','F','S'].map((day, i) => (
                      <div key={i} className="flex flex-col gap-1 items-center">
                        <span className="font-mono text-[10px] text-dark/40">{day}</span>
                        <div className={`w-full aspect-square rounded-md border border-gray-100 transition-colors ${i === 3 ? 'bg-primary/5 target-cell' : 'bg-background'}`}></div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <div className="px-4 py-2 bg-background rounded-full font-sans text-xs font-bold text-dark/50 border border-gray-100">Cancel</div>
                    <div className="px-4 py-2 bg-primary text-white rounded-full font-sans text-xs font-bold flex items-center gap-2 save-btn transition-transform">
                      Save <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                    </div>
                  </div>

                  {/* SVG Cursor */}
                  <svg className="absolute w-6 h-6 z-20 svg-cursor opacity-0 pointer-events-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4L11.0718 20.5057L13.1314 13.9189L20.5057 11.0718L4 4Z" fill="#1A1A1A" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className="relative py-40 px-6 md:px-16 bg-dark overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1541888002625-50e5040f7b02?q=80&w=2940&auto=format&fit=crop" 
               alt="Concrete brutalist pattern" 
               className="w-full h-full object-cover object-center opacity-10 philosophy-bg"
             />
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto flex flex-col justify-center min-h-[50vh]">
            <p className="font-sans text-background/60 text-lg md:text-2xl mb-8 philosophy-text-1 opacity-0 translate-y-8">
              Most systems let <span className="text-background/90 font-medium">40% of leads fall through the cracks.</span>
            </p>
            <h2 className="font-drama italic text-5xl md:text-7xl lg:text-8xl text-background leading-tight philosophy-text-2 opacity-0 translate-y-8">
              We build the best conversion system <br className="hidden md:block"/>
              <span className="text-accent underline decoration-1 underline-offset-8">in the world.</span>
            </h2>
          </div>
        </section>

        {/* Protocol Section (Sticky Stacking) */}
        <section id="protocol" className="bg-background relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-16 pt-32 pb-16">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-dark mb-4 tracking-tight">Deployment Protocol</h2>
            <p className="font-mono text-primary text-sm uppercase tracking-wider">02 // Integration</p>
          </div>

          <div className="protocol-container relative w-full h-[300vh]">
            
            {/* Card 1 */}
            <div className="protocol-card protocol-card-1 sticky top-0 h-screen w-full flex items-center justify-center p-6 md:p-16">
              <div className="bg-primary/5 rounded-[3rem] w-full max-w-5xl h-[80vh] flex flex-col md:flex-row overflow-hidden border border-primary/10 shadow-lg">
                <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
                  <span className="font-mono text-accent text-lg mb-6 block">01</span>
                  <h3 className="font-sans font-bold text-4xl md:text-5xl text-dark mb-6">System Architecture</h3>
                  <p className="font-sans text-lg text-dark/70 leading-relaxed">We map your clinic's existing patient flow and architect bespoke AI agents to slot into your communication channels seamlessly.</p>
                </div>
                <div className="w-full md:w-1/2 bg-dark flex items-center justify-center relative overflow-hidden">
                  <svg className="w-64 h-64 text-accent/20 animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
                    <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="0.5" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="protocol-card protocol-card-2 sticky top-0 h-screen w-full flex items-center justify-center p-6 md:p-16">
              <div className="bg-white rounded-[3rem] w-full max-w-5xl h-[80vh] flex flex-col md:flex-row overflow-hidden border border-gray-200 shadow-2xl">
                <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
                  <span className="font-mono text-accent text-lg mb-6 block">02</span>
                  <h3 className="font-sans font-bold text-4xl md:text-5xl text-dark mb-6">Agent Deployment</h3>
                  <p className="font-sans text-lg text-dark/70 leading-relaxed">Voice and text models are trained on your specific services. Every lead is called within 2 minutes and booked directly into your calendar without human intervention.</p>
                </div>
                <div className="w-full md:w-1/2 bg-primary flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-light to-primary opacity-50"></div>
                  <div className="grid grid-cols-10 grid-rows-10 gap-2 w-64 h-64 z-10">
                    {[...Array(100)].map((_, i) => (
                      <div key={i} className="bg-white/20 rounded-sm w-full h-full animate-pulse" style={{ animationDelay: `${Math.random() * 2}s` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="protocol-card protocol-card-3 sticky top-0 h-screen w-full flex items-center justify-center p-6 md:p-16">
              <div className="bg-dark rounded-[3rem] w-full max-w-5xl h-[80vh] flex flex-col md:flex-row overflow-hidden border border-gray-800 shadow-2xl">
                <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
                  <span className="font-mono text-accent text-lg mb-6 block">03</span>
                  <h3 className="font-sans font-bold text-4xl md:text-5xl text-background mb-6">Unrivaled Conversions</h3>
                  <p className="font-sans text-lg text-background/70 leading-relaxed">The best conversion system in the world ensures that no lead ever falls through the cracks, systematically adding hundreds of thousands in new revenue to your clinic.</p>
                </div>
                <div className="w-full md:w-1/2 bg-zinc-900 flex items-center justify-center relative overflow-hidden">
                  <svg className="w-full h-32 text-accent" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <path 
                      className="pulse-wave"
                      d="M0 50 Q 50 50 100 50 T 200 50 T 300 50 T 400 50" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Pricing / Membership Section */}
        <section id="pricing" className="py-32 px-6 md:px-16 bg-background relative z-10 border-t border-gray-100/50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center flex flex-col items-center">
              <h2 className="font-sans font-bold text-4xl md:text-5xl text-dark mb-4 tracking-tight">Activate Systems</h2>
              <p className="font-mono text-primary text-sm uppercase tracking-wider mb-6">03 // Initialization</p>
              <p className="font-sans text-dark/70 text-lg max-w-2xl">Select the deployment velocity that matches your clinic's capacity for scale.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
              
              {/* Tier 1 */}
              <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-sm flex flex-col h-full hover:-translate-y-2 transition-transform duration-500">
                <div className="mb-8">
                  <h3 className="font-sans font-bold text-2xl text-dark mb-2">Essential</h3>
                  <p className="font-sans text-dark/60 text-sm">Automated inbound capture.</p>
                </div>
                <div className="mb-8 flex-1">
                  <ul className="flex flex-col gap-4">
                    <li className="flex items-start gap-3 text-sm font-sans text-dark/80"><span className="text-accent mt-0.5">•</span> 24/7 AI Voice Receptionist</li>
                    <li className="flex items-start gap-3 text-sm font-sans text-dark/80"><span className="text-accent mt-0.5">•</span> Web Chat & SMS Booking</li>
                    <li className="flex items-start gap-3 text-sm font-sans text-dark/80"><span className="text-accent mt-0.5">•</span> Basic Call Analytics</li>
                  </ul>
                </div>
                <a href="https://calendly.com/meidi-scalifyai/discovery-call" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-full border border-primary text-primary font-bold font-sans text-sm hover:bg-primary hover:text-white transition-colors text-center inline-block">
                  Join Waitlist
                </a>
              </div>

              {/* Tier 2 (Highlighted) */}
              <div className="bg-primary rounded-[2.5rem] p-10 border border-primary/20 shadow-xl flex flex-col h-[105%] relative z-10 md:-my-4 hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Recommended
                </div>
                <div className="mb-8">
                  <h3 className="font-sans font-bold text-3xl text-white mb-2">Performance</h3>
                  <p className="font-sans text-white/70 text-sm">Full funnel leak prevention.</p>
                </div>
                <div className="mb-8 flex-1">
                  <ul className="flex flex-col gap-4">
                    <li className="flex items-start gap-3 text-sm font-sans text-white/90"><span className="text-accent mt-0.5">•</span> Everything in Essential</li>
                    <li className="flex items-start gap-3 text-sm font-sans text-white/90"><span className="text-accent mt-0.5">•</span> Intelligent Lead Follow-up</li>
                    <li className="flex items-start gap-3 text-sm font-sans text-white/90"><span className="text-accent mt-0.5">•</span> Review Generation Engine</li>
                    <li className="flex items-start gap-3 text-sm font-sans text-white/90"><span className="text-accent mt-0.5">•</span> Real-time ROI Telemetry</li>
                  </ul>
                </div>
                <a href="https://calendly.com/meidi-scalifyai/discovery-call" target="_blank" rel="noopener noreferrer" className="btn-magnetic w-full bg-accent text-white py-4 rounded-full font-bold font-sans text-sm text-center inline-block">
                  <span className="btn-content">Book Consultation</span>
                </a>
              </div>

              {/* Tier 3 */}
              <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-sm flex flex-col h-full hover:-translate-y-2 transition-transform duration-500">
                <div className="mb-8">
                  <h3 className="font-sans font-bold text-2xl text-dark mb-2">Enterprise</h3>
                  <p className="font-sans text-dark/60 text-sm">Scale across multiple locations.</p>
                </div>
                <div className="mb-8 flex-1">
                  <ul className="flex flex-col gap-4">
                    <li className="flex items-start gap-3 text-sm font-sans text-dark/80"><span className="text-accent mt-0.5">•</span> Everything in Performance</li>
                    <li className="flex items-start gap-3 text-sm font-sans text-dark/80"><span className="text-accent mt-0.5">•</span> Database Reactivation</li>
                    <li className="flex items-start gap-3 text-sm font-sans text-dark/80"><span className="text-accent mt-0.5">•</span> Custom API Integrations</li>
                    <li className="flex items-start gap-3 text-sm font-sans text-dark/80"><span className="text-accent mt-0.5">•</span> Dedicated Success Manager</li>
                  </ul>
                </div>
                <a href="https://calendly.com/meidi-scalifyai/discovery-call" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-full border border-primary text-primary font-bold font-sans text-sm hover:bg-primary hover:text-white transition-colors text-center inline-block">
                  Contact Sales
                </a>
              </div>

            </div>
          </div>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-background rounded-t-[4rem] px-6 md:px-16 pt-24 pb-12 mt-[-4rem] relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 border-b border-background/10 pb-16 mb-12">
          <div className="flex flex-col gap-4 max-w-sm">
            <h2 className="font-sans font-bold text-3xl tracking-tight">ScalifyAI</h2>
            <p className="font-sans text-background/70">Deployment of autonomous growth systems for modern clinics.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <h4 className="font-sans font-bold text-lg mb-2">Systems</h4>
              <a href="#" className="font-sans text-background/70 hover:text-white transition-colors">AI Voice Agents</a>
              <a href="#" className="font-sans text-background/70 hover:text-white transition-colors">Review Engine</a>
              <a href="#" className="font-sans text-background/70 hover:text-white transition-colors">Reactivation</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-sans font-bold text-lg mb-2">Company</h4>
              <a href="#" className="font-sans text-background/70 hover:text-white transition-colors">About</a>
              <a href="#" className="font-sans text-background/70 hover:text-white transition-colors">Case Studies</a>
              <a href="#" className="font-sans text-background/70 hover:text-white transition-colors">Contact</a>
              <a href="/privacy-policy" className="font-sans text-background/70 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms-and-conditions" className="font-sans text-background/70 hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="font-sans text-background/50 text-sm">© {new Date().getFullYear()} ScalifyAI. All rights reserved.</p>
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="font-mono text-xs text-background/70 uppercase tracking-widest">Systems Operational</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
