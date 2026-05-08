"use client";

import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleGoogleSignIn = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased">
      <style jsx global>{\`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&family=Roboto:wght@500&display=swap');
        
        body {
          background: #000;
          margin: 0;
          font-family: 'Barlow', sans-serif;
        }

        .liquid-glass {
          background: rgba(255,255,255,0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: none;
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
          position: relative;
          overflow: hidden;
        }

        .liquid-glass-strong {
          background: rgba(255,255,255,0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(50px);
          -webkit-backdrop-filter: blur(50px);
          border: none;
          box-shadow: 4px 4px 4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.15);
          position: relative;
          overflow: hidden;
        }

        .font-heading { font-family: 'Instrument Serif', serif; }
        .font-body { font-family: 'Barlow', sans-serif; }
      \`}</style>

      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-40 pointer-events-none"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* Navigation */}
      <nav className="fixed top-4 left-0 right-0 px-6 lg:px-16 z-50 flex items-center justify-between">
        <a href="#home" onClick={() => setCurrentPage('home')} className="liquid-glass rounded-full w-12 h-12 flex items-center justify-center">
          <img src="/logo.png" alt="Logo" className="w-full h-full object-cover rounded-full" />
        </a>
        <div className="hidden md:flex liquid-glass rounded-full px-2 py-1.5 items-center gap-1">
          {['Home', 'Privacy Policy', 'Sign Up'].map(item => (
            <a 
              key={item} 
              href={\`#\${item.toLowerCase().replace(/\\s+/g, '-')}\`} 
              className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="w-12 h-12" />
      </nav>

      {/* Content Rendering */}
      <main className="relative z-10">
        {currentPage === 'home' && (
          <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <div className="liquid-glass rounded-full px-3 py-1 flex items-center gap-2 mb-12">
              <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-semibold uppercase">New</span>
              <span className="text-sm text-white/90 font-body pr-3">Stock Simulator v2.0 Live Now</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-heading italic text-white tracking-tighter leading-none mb-8">
              Master the Market
            </h1>
            <p className="max-w-2xl text-lg text-white/70 font-body font-light mb-10 leading-relaxed">
              Experience stock market mastery with cutting-edge simulations. Our platform delivers real-world trading scenarios and advanced analytics.
            </p>
            <div className="flex gap-6 items-center">
              <a href="#sign-up" className="text-white hover:underline font-body">Sign In</a>
              <a href="https://play.google.com/store/apps/details?id=com.virionplaysgg.stokk" className="liquid-glass rounded-full px-8 py-3 text-sm font-medium">Download App</a>
            </div>
          </section>
        )}

        {currentPage === 'sign-up' && (
          <section className="min-h-screen flex items-center justify-center pt-20">
            <div className="liquid-glass rounded-[2rem] p-10 w-full max-w-md text-center">
              <h2 className="font-heading italic text-white text-5xl mb-8">Sign Up</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email" className="w-full px-6 py-4 rounded-full bg-white/10 text-white placeholder-white/40 focus:outline-none focus:bg-white/15" />
                <input type="password" placeholder="Password" className="w-full px-6 py-4 rounded-full bg-white/10 text-white placeholder-white/40 focus:outline-none focus:bg-white/15" />
                <button className="w-full liquid-glass-strong rounded-full py-4 font-semibold">Create Account</button>
                
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/10"></span></div>
                  <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#0a0a0a] px-2 text-white/40">Or continue with</span></div>
                </div>

                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="group relative flex h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-white text-black transition-all hover:bg-[#f8f9fa] border border-[#dadce0]"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.11c-.22-.66-.35-1.36-.35-2.11s.13-1.45.35-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84c.87-2.6 3.3-4.51 6.16-4.51z" fill="#EA4335"/>
                  </svg>
                  <span style={{ fontFamily: "'Roboto', sans-serif", fontSize: "15px", fontWeight: "500", color: "#1f1f1f" }}>Sign in with Google</span>
                </button>
              </form>
            </div>
          </section>
        )}

        {currentPage === 'privacy-policy' && (
          <section className="min-h-screen pt-32 px-6 max-w-4xl mx-auto">
            <h1 className="font-heading italic text-6xl mb-12">Privacy Policy</h1>
            <div className="liquid-glass rounded-[2rem] p-12 space-y-8 text-white/80 leading-relaxed">
              <div><h3 className="text-white text-xl mb-4">Information We Collect</h3><p>We collect information you provide directly to us when creating an account.</p></div>
              <div><h3 className="text-white text-xl mb-4">Data Security</h3><p>We implement industry-standard security measures to protect your personal data.</p></div>
            </div>
          </section>
        )}
      </main>

      <footer className="relative z-10 py-20 text-center text-white/30 text-sm">
        &copy; 2026 STOKK. All rights reserved.
      </footer>
    </div>
  );
}
