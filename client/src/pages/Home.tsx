import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Cpu,
  Layout,
  Paintbrush,
  Search,
  Server,
  TypeIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BackgroundGradient } from "@/components/styles/background-gradient";
import { WavyBackground } from "@/components/styles/wavy-background";
import { StickyScroll } from "@/components/styles/sticky-scroll-reveal";
import { ParallaxSection } from "@/components/parallax-section";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { MediaGalleryWithLightbox } from "@/components/media-gallery-with-lightbox";
import { AnimatedContactSection } from "@/components/animated-contact-section";

export function HomePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-20 overflow-hidden">
      {/* Animated Hero Section */}

      <WavyBackground className=" pb-40">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="p-8"
        >
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              >
                Showcase Your Creative Work
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-4 text-lg text-muted-foreground"
              >
                A stunning portfolio platform built with modern technologies to
                highlight your projects and designs.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex gap-4 mt-8"
              >
                <Button size="lg">Get Started</Button>
                <Button size="lg" variant="outline">
                  View Portfolio
                </Button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative aspect-video bg-muted rounded-lg overflow-hidden shadow-xl"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </div>
        </motion.section>
      </WavyBackground>

      {/* Featured Designs with Sticky Scroll */}
      <StickyScroll content={featuredDesigns} />

      {/* Featured Designs Section */}
      <section className="py-8 px-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">Featured Designs</h2>
          <Button variant="outline">View All Designs</Button>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {featuredDesigns.map((design) => (
              <CarouselItem
                key={design.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card className="overflow-hidden">
                  <div className="aspect-square relative">
                    <img
                      src={design.image}
                      alt={design.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{design.title}</CardTitle>
                    <Badge variant="secondary">{design.category}</Badge>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Case Study
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Skills Section */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="py-20 mx-8 px-8 bg-muted rounded-3xl"
      >
        <motion.h2
          variants={fadeIn}
          className="text-3xl font-bold text-center mb-12"
        >
          My Skills
        </motion.h2>

        <Tabs defaultValue="design" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="design">Design Skills</TabsTrigger>
            <TabsTrigger value="development">Development Skills</TabsTrigger>
          </TabsList>

          <TabsContent value="design" className="mt-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {designSkills.map((skill) => (
                <motion.div key={skill.name} variants={fadeIn}>
                  <BackgroundGradient className="rounded-[22px] p-4 bg-background">
                    <Card className="text-center p-6 border-none">
                      <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                        <skill.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle>{skill.name}</CardTitle>
                      <div className="mt-4 h-2 bg-secondary/20 rounded-full">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level * 10}%` }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                      <CardDescription className="mt-2">
                        {skill.level}/10
                      </CardDescription>
                    </Card>
                  </BackgroundGradient>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="development" className="mt-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {devSkills.map((skill) => (
                <motion.div key={skill.name} variants={fadeIn}>
                  <BackgroundGradient className="rounded-[22px] p-4 bg-background">
                    <Card className="text-center p-6 border-none">
                      <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                        <skill.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle>{skill.name}</CardTitle>
                      <div className="mt-4 h-2 bg-secondary/20 rounded-full">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level * 10}%` }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                      <CardDescription className="mt-2">
                        {skill.level}/10
                      </CardDescription>
                    </Card>
                  </BackgroundGradient>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.section>

      {/* Projects Section with 3D Tilt Effect */}
      <section className="px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-12"
        >
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Button variant="outline">View All Projects</Button>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card className="overflow-hidden group h-full">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="secondary">Quick View</Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section with Parallax Effect */}
      <ParallaxSection className="px-8 mx-8 py-20 bg-muted rounded-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Client Testimonials
        </h2>
        <TestimonialCarousel testimonials={testimonials} />
      </ParallaxSection>

      {/* Media Gallery with Lightbox */}
      <MediaGalleryWithLightbox />

      {/* Contact Section with Animated Form */}
      <AnimatedContactSection />
    </div>
  );
}

// Data for sections
const featuredDesigns = [
  {
    id: 1,
    title: "Mobile App UI",
    category: "UI/UX",
    image: "/design-1.jpg",
  },
  {
    id: 2,
    title: "Brand Identity",
    category: "Graphic Design",
    image: "/design-2.jpg",
  },
  {
    id: 3,
    title: "Website Redesign",
    category: "Web Design",
    image: "/design-3.jpg",
  },
  {
    id: 4,
    title: "Dashboard UI",
    category: "UI/UX",
    image: "/design-4.jpg",
  },
];

const designSkills = [
  { name: "UI Design", level: 9, icon: Layout },
  { name: "UX Research", level: 8, icon: Search },
  { name: "Prototyping", level: 9, icon: Cpu },
  { name: "Typography", level: 8, icon: TypeIcon },
];

const devSkills = [
  { name: "React", level: 9, icon: Code },
  { name: "TypeScript", level: 8, icon: TypeIcon },
  { name: "Node.js", level: 7, icon: Server },
  { name: "CSS/SCSS", level: 9, icon: Paintbrush },
];

const projects = [
  {
    title: "E-commerce Platform",
    description: "Modern online store with seamless checkout experience",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/project-1.jpg",
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio site for creative professionals",
    technologies: ["Next.js", "Tailwind CSS"],
    image: "/project-2.jpg",
  },
  {
    title: "Mobile Banking App",
    description: "Secure banking application with biometric authentication",
    technologies: ["React Native", "Firebase"],
    image: "/project-3.jpg",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO at TechCorp",
    quote:
      "Working with this designer was an absolute pleasure. They delivered beyond our expectations and helped us create a stunning brand identity.",
    avatar: "/avatar-1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager at StartupX",
    quote:
      "The attention to detail and user-centered approach resulted in a product that our customers love. Highly recommended!",
    avatar: "/avatar-2.jpg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director at BrandCo",
    quote:
      "We've seen a 40% increase in engagement since launching the new website design. Fantastic work!",
    avatar: "/avatar-3.jpg",
  },
];
