"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

export const SilkBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Dynamic ambient glow */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(23, 238, 134, 0.1) 0%, transparent 50%), 
                       radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.05) 0%, transparent 40%),
                       radial-gradient(circle at 20% 80%, rgba(255, 0, 229, 0.05) 0%, transparent 40%)`
        }}
      />
      
      {/* Moving silk lines */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.15]">
        <filter id="blur">
          <feGaussianBlur stdDeviation="40" />
        </filter>
        <motion.path
          d="M-100 100 Q 400 400 900 100 T 1900 400"
          stroke="white"
          strokeWidth="2"
          fill="none"
          filter="url(#blur)"
          animate={{
            d: [
              "M-100 100 Q 400 400 900 100 T 1900 400",
              "M-100 400 Q 400 100 900 400 T 1900 100",
              "M-100 100 Q 400 400 900 100 T 1900 400",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M-100 800 Q 500 500 1000 800 T 2000 500"
          stroke="white"
          strokeWidth="1"
          fill="none"
          filter="url(#blur)"
          animate={{
            d: [
              "M-100 800 Q 500 500 1000 800 T 2000 500",
              "M-100 500 Q 500 800 1000 500 T 2000 800",
              "M-100 800 Q 500 500 1000 800 T 2000 500",
            ],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3%3C/filter%3%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3%3C/svg%3E")` }}
      />
    </div>
  );
};
