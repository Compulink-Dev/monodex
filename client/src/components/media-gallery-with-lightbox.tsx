"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Expand } from "lucide-react";

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  type: "image" | "video";
};

export const MediaGalleryWithLightbox = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section className="px-8 py-20 w-full">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Media Gallery
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryItems.map((item: any) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedItem(item)}
            className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            ) : (
              <video autoPlay loop muted className="w-full h-full object-cover">
                <source src={item.src} type="video/mp4" />
              </video>
            )}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Expand className="w-6 h-6 text-white" />
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedItem?.type === "image" ? (
            <img
              src={selectedItem?.src}
              alt={selectedItem?.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          ) : (
            <video
              autoPlay
              loop
              controls
              className="w-full h-auto max-h-[80vh]"
            >
              <source src={selectedItem?.src} type="video/mp4" />
            </video>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

const galleryItems = [
  { id: 1, src: "/gallery-1.jpg", alt: "Project screenshot", type: "image" },
  { id: 2, src: "/gallery-2.mp4", alt: "App demo", type: "video" },
  { id: 3, src: "/gallery-3.jpg", alt: "Design mockup", type: "image" },
  { id: 4, src: "/gallery-4.mp4", alt: "Website animation", type: "video" },
  { id: 5, src: "/gallery-5.jpg", alt: "UI components", type: "image" },
  { id: 6, src: "/gallery-6.jpg", alt: "Brand assets", type: "image" },
  { id: 7, src: "/gallery-7.mp4", alt: "Mobile app flow", type: "video" },
  { id: 8, src: "/gallery-8.jpg", alt: "Design system", type: "image" },
];
