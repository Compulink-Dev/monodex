import { Button } from "./ui/button";
import { Expand } from "lucide-react";

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

function MediaGallery() {
  return (
    <section className="px-8 py-20 w-full">
      <h2 className="text-3xl font-bold text-center mb-12">Media Gallery</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="group relative aspect-square overflow-hidden rounded-lg"
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
              <Button variant="ghost" size="icon">
                <Expand className="w-6 h-6 text-white" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MediaGallery;
