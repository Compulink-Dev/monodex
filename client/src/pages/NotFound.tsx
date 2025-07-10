import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="px-8 flex h-screen w-screen flex-col items-center justify-center py-20">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="text-4xl font-bold">Page Not Found</h2>
        <p className="text-lg text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button onClick={() => navigate("/")} className="mt-6">
          Go Back Home
        </Button>
      </div>
    </div>
  );
}
