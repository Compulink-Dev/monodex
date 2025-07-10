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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Code,
  Cpu,
  Expand,
  Layout,
  Mail,
  Paintbrush,
  Phone,
  Search,
  Server,
  TypeIcon,
} from "lucide-react";
import MediaGallery from "@/components/MediaGallery";

export function HomePage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="p-8">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Showcase Your Creative Work
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A stunning portfolio platform built with modern technologies to
              highlight your projects and designs.
            </p>
            <div className="flex gap-4 mt-8">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                View Portfolio
              </Button>
            </div>
          </div>
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden shadow-xl">
            <video
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

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
      <section className="py-20 mx-8 px-8 bg-muted rounded-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>

        <Tabs defaultValue="design" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="design">Design Skills</TabsTrigger>
            <TabsTrigger value="development">Development Skills</TabsTrigger>
          </TabsList>

          <TabsContent value="design" className="mt-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {designSkills.map((skill) => (
                <Card key={skill.name} className="text-center p-6">
                  <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                    <skill.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>{skill.name}</CardTitle>
                  <CardDescription className="mt-2">
                    {skill.level}/10
                  </CardDescription>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="development" className="mt-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {devSkills.map((skill) => (
                <Card key={skill.name} className="text-center p-6">
                  <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                    <skill.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>{skill.name}</CardTitle>
                  <CardDescription className="mt-2">
                    {skill.level}/10
                  </CardDescription>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Projects Section */}
      <section className="px-8 py-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Button variant="outline">View All Projects</Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden group">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
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
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-8 mx-8 py-20 bg-muted rounded-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Client Testimonials
        </h2>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <Card className="p-8 text-center">
                  <Avatar className="w-16 h-16 mx-auto mb-4">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <blockquote className="text-lg italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </section>

      {/* Media Gallery Section */}
      <MediaGallery />

      {/* Contact Section */}
      <section className="px-8 py-20">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
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
          </div>
          <Card className="p-6">
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  className="min-h-[150px]"
                  placeholder="Your message"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>
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
