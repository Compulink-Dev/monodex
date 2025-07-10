import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MediaGallery from "@/components/MediaGallery";

export function DesignsPage() {
  return (
    <div className="px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Design Portfolio</h1>
        <p className="text-lg text-muted-foreground">
          Explore my UI/UX and graphic design work
        </p>
      </div>

      <Tabs defaultValue="ui" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="ui">UI Designs</TabsTrigger>
          <TabsTrigger value="ux">UX Process</TabsTrigger>
          <TabsTrigger value="graphic">Graphic Design</TabsTrigger>
        </TabsList>

        <TabsContent value="ui">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
            {uiDesigns.map((design) => (
              <Card key={design.id} className="overflow-hidden">
                <div className="aspect-square bg-muted relative">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <h3 className="font-semibold">{design.title}</h3>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm">
                    View Case Study
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Other tabs content... */}
      </Tabs>

      <MediaGallery />
    </div>
  );
}

const uiDesigns = [
  {
    id: 1,
    title: "Mobile Banking App",
    image: "/design1.jpg",
  },
  // Add more designs...
];
