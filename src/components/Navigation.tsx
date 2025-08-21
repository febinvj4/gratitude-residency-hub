import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationData = {
  skilledMigration: {
    title: "Skilled Migration",
    countries: [
      {
        name: "Australia",
        href: "/australia"
      },
      {
        name: "Canada",
        href: "/canada"
      },
      {
        name: "New Zealand",
        href: "/newzealand"
      },
      {
        name: "Europe",
        href: "/europe"
      }
    ]
  },
  businessMigration: {
    title: "Business Migration",
    programs: [
      {
        name: "Citizenship by Investment",
        href: "/citizenship-by-investment"
      },
      {
        name: "Residency by Investment", 
        href: "/residency-by-investment"
      }
    ]
  }
};

const simpleMenuItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" }
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Fixed to left corner */}
          <Link to="/" className="flex items-center justify-start flex-shrink-0">
            <img 
              src="/lovable-uploads/8e7c39f0-ed56-4618-9880-e05c2d6a5038.png" 
              alt="Gratitude Residency & Citizenship" 
              className="h-64 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {/* Simple menu items */}
              {simpleMenuItems.slice(0, 1).map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.href}
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      )}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              
              {/* Skilled Migration Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-muted transition-colors">
                  Skilled Migration
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                    {navigationData.skilledMigration.countries.map((country) => (
                      <NavigationMenuLink key={country.href} asChild>
                        <Link
                          to={country.href}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium">{country.name}</div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Business Migration Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-muted transition-colors">
                  Business Migration
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[300px] gap-3 p-4">
                    {navigationData.businessMigration.programs.map((program) => (
                      <NavigationMenuLink key={program.href} asChild>
                        <Link
                          to={program.href}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium">{program.name}</div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Other simple menu items */}
              {simpleMenuItems.slice(1).map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.href}
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      )}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild>
              <Link to="/contact-us">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Simple menu items */}
              {simpleMenuItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
               {/* Skilled Migration Section */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-foreground border-b">
                  Skilled Migration
                </div>
                {navigationData.skilledMigration.countries.map((country) => (
                  <Link
                    key={country.href}
                    to={country.href}
                    className="block px-6 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {country.name}
                  </Link>
                ))}
              </div>
              
              {/* Business Migration Section */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-foreground border-b">
                  Business Migration
                </div>
                {navigationData.businessMigration.programs.map((program) => (
                  <Link
                    key={program.href}
                    to={program.href}
                    className="block px-6 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {program.name}
                  </Link>
                ))}
              </div>
              
              <div className="pt-4 space-y-2">
                <Link to="/contact-us" className="block w-full">
                  <Button className="w-full">Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}