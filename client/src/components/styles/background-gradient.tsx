"use client";

import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative p-[2px] rounded-[22px] bg-gradient-to-br from-primary via-secondary to-accent ${className}`}
    >
      <div className="bg-background rounded-[20px] p-6">{children}</div>
    </motion.div>
  );
};
