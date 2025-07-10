"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export const StickyScroll = ({ content }: { content: any[] }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="h-[100vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ y }} className="h-full w-full">
          {content.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="h-screen w-full flex items-center justify-center"
            >
              <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <Badge>{item.category}</Badge>
                </CardHeader>
                <CardContent>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto rounded-lg"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
