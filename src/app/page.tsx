"use client";

import { SilkBackground } from "@/components/ui/silk-background";
import { SignIn } from "@/components/ui/sign-in";
import { signIn } from "next-auth/react";

export default function Home() {
  const handleSignIn = async (provider: "google" | "email") => {
    if (provider === "google") {
      await signIn("google", { callbackUrl: "/" });
    } else {
      // Email auth logic would go here
      console.log("Email auth requested");
    }
  };

  return (
    <main className="relative min-h-screen">
      <SilkBackground />
      <SignIn onSignIn={handleSignIn} />
    </main>
  );
}
