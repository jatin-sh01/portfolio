// components/shared/section-header.tsx
"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`space-y-4 sm:space-y-6 ${centered ? 'text-center mx-auto' : ''} mb-8 sm:mb-12`}
    >
      <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl/relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}