"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function BlackHoleVideo() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (!mounted) return null;
  if (currentTheme !== "dark") return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 overflow-hidden z-[-2] pointer-events-none"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute rotate-180 top-[-340px] left-0 w-[700px] h-[670px] lg:w-full lg:h-[700px] object-cover overflow-hidden opacity-70"
      >
        <source src="/blackhole.webm" type="video/webm" />
        <source src="/blackhole.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
}
