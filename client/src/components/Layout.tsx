import { Outlet } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import ModeToggle from "@/components/mode-toggle";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background w-full overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b w-full">
        <div className=" flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/logo.png" />
              <AvatarFallback>Zen</AvatarFallback>
            </Avatar>
            <span className="font-bold">Zenvue</span>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className="px-4 py-2 hover:text-primary"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/projects"
                  className="px-4 py-2 hover:text-primary"
                >
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/designs"
                  className="px-4 py-2 hover:text-primary"
                >
                  Designs
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/contact"
                  className="px-4 py-2 hover:text-primary"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <ModeToggle />
            {/* Mobile Navigation */}
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t p-8 w-full">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/logo.png" />
              <AvatarFallback>Vue</AvatarFallback>
            </Avatar>
            <span className="font-bold">Zenvue</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Zenvue. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <MenuIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <SheetClose asChild>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <a href="/">Home</a>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <a href="/projects">Projects</a>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <a href="/designs">Designs</a>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <a href="/contact">Contact</a>
            </Button>
          </SheetClose>
        </div>
        <SheetFooter>
          <div className="flex justify-end w-full">
            <ModeToggle />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
