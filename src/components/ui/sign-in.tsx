"use client";

import React from "react";
import { motion } from "framer-motion";
import { Chrome } from "lucide-react";

interface SignInProps {
  onSignIn: (provider: "google" | "email") => void;
}

export const SignIn = ({ onSignIn }: SignInProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="liquid-glass-strong w-full max-w-md rounded-[2.5rem] p-10 text-center"
      >
        {/* Logo Section */}
        <div className="mb-10 flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 15 }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <span className="text-3xl font-black text-black">S</span>
          </motion.div>
          <h1 className="mt-6 font-heading text-4xl tracking-tighter">STOKK</h1>
          <p className="mt-2 text-xs font-medium tracking-[0.3em] text-white/40 uppercase">Play the market</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold tracking-tight">Welcome to the elite</h2>
            <p className="text-sm text-white/50">Experience the most cinematic trading simulator ever built.</p>
          </div>

          <div className="space-y-4 pt-4">
            {/* Google Sign In Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSignIn("google")}
              className="group relative flex h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-white text-black transition-all hover:bg-white/90"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:scale-110">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.11c-.22-.66-.35-1.36-.35-2.11s.13-1.45.35-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84c.87-2.6 3.3-4.51 6.16-4.51z" fill="#EA4335"/>
              </svg>
              <span className="font-semibold text-sm">Continue with Google</span>
            </motion.button>

            {/* Email Placeholder */}
            <button
              onClick={() => onSignIn("email")}
              className="h-14 w-full rounded-full border border-white/10 text-sm font-medium transition-colors hover:bg-white/5"
            >
              Email address
            </button>
          </div>
        </div>

        <p className="mt-10 text-[10px] text-white/30 px-6">
          By continuing, you agree to our <span className="text-white/60 underline cursor-pointer">Terms of Service</span> and <span className="text-white/60 underline cursor-pointer">Privacy Policy</span>.
        </p>
      </motion.div>
    </div>
  );
};
