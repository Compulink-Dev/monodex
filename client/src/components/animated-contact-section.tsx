"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

export const AnimatedContactSection = () => {
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="px-8 py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={formVariants}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8">
            Interested in collaborating or have questions about my work? Fill
            out the form and I'll get back to you as soon as possible.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-primary" />
              <span>hello@example.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="p-6">
            <motion.form variants={formVariants} className="space-y-4">
              <motion.div variants={itemVariants}>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  className="min-h-[150px]"
                  placeholder="Your message"
                />
              </motion.div>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }}>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </motion.div>
            </motion.form>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};
