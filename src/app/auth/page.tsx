"use client";

import React, { useState } from "react";
import Link from "next/link";

// Icons
const ArrowUpRight = ({ className = "" }: { className?: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <line x1="7" y1="7" x2="17" y2="17"></line>
  </svg>
);

const SunIcon = ({ className = "" }: { className?: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const MoonIcon = ({ className = "" }: { className?: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

export default function SignInPage() {
  const [isDark, setIsDark] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  React.useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "stokk://auth?token=demo_token";
  };

  return (
    <div className="min-h-screen bg-black text-white font-body flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-6 left-0 right-0 px-6 lg:px-12 z-50 flex items-center justify-between">
        <Link href="/" className="liquid-glass rounded-full w-12 h-12 flex items-center justify-center font-heading italic text-2xl">
          S
        </Link>
        <div className="liquid-glass rounded-full px-2 py-2 flex items-center gap-1">
          <Link href="/" className="px-4 py-2 text-sm font-medium text-white/90 font-body">Home</Link>
          <button
            onClick={() => setIsDark(!isDark)}
            className="liquid-glass rounded-full w-10 h-10 flex items-center justify-center text-white/90 hover:text-white transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
        <div className="w-12 h-12" />
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 pt-24">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="font-heading italic text-white text-5xl md:text-6xl tracking-[-2px]">
              Welcome Back
            </h1>
            <p className="mt-4 text-white/80 font-body">Sign in to continue your trading journey</p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-6">
            <div>
              <label className="text-sm font-medium text-white/80 font-body mb-2 block">Email Address</label>
              <div className="liquid-glass rounded-full px-4 py-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent text-white placeholder:text-white/40 font-body focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-white/80 font-body mb-2 block">Password</label>
              <div className="liquid-glass rounded-full px-4 py-3 flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="flex-1 bg-transparent text-white placeholder:text-white/40 font-body focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 liquid-glass rounded" />
                <span className="text-sm text-white/80 font-body">Remember me</span>
              </label>
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full liquid-glass-strong rounded-full py-4 font-medium font-body text-white hover:bg-white/10 transition-colors"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-white/60 font-body">
              Don't have an account?{" "}
              <a href="#" className="text-white hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}