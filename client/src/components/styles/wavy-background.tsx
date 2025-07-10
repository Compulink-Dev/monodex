"use client";

import React from "react";
import { motion } from "framer-motion";

export const WavyBackground = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 -z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: ["0%", "100%", "0%"],
              transition: {
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="absolute top-0 h-full w-[200px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            style={{ left: `${i * 20}%`, rotate: "10deg" }}
          />
        ))}
      </div>
      {children}
    </div>
  );
};
