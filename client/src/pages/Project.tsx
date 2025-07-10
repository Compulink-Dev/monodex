import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MediaGallery from "@/components/MediaGallery";

export function ProjectsPage() {
  return (
    <div className="px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-lg text-muted-foreground">
          A collection of my recent work and case studies
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
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
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <MediaGallery />
    </div>
  );
}

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Modern online store with seamless checkout",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/project1.jpg",
  },
  // Add more projects...
];
