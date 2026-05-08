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
              <Chrome size={20} className="transition-transform group-hover:scale-110" />
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
