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
  australia: {
    title: "Australia",
    items: [
      { name: "Skilled Migration 189", href: "/australia/skilled-189" },
      { name: "Skilled Migration 190", href: "/australia/skilled-190" },
      { name: "Skilled Migration 491", href: "/australia/skilled-491" },
      { name: "Partner Visa", href: "/australia/partner-visa" },
      { name: "Visit Visa", href: "/australia/visit-visa" },
      { name: "Business Visa", href: "/australia/business-visa" },
      { name: "Study Visa", href: "/australia/study-visa" },
    ]
  },
  canada: {
    title: "Canada",
    items: [
      { name: "Express Entry", href: "/canada/express-entry" },
      { name: "PNP", href: "/canada/pnp" },
      { name: "Atlantic Immigration", href: "/canada/atlantic" },
      { name: "RNIP", href: "/canada/rnip" },
      { name: "LMIA", href: "/canada/lmia" },
      { name: "Visitor Visa", href: "/canada/visitor-visa" },
      { name: "Study Visa", href: "/canada/study-visa" },
    ]
  },
  newZealand: {
    title: "New Zealand",
    items: [
      { name: "Skilled Migrant Category", href: "/new-zealand/skilled-migrant" },
      { name: "Work Visa", href: "/new-zealand/work-visa" },
      { name: "Visitor Visa", href: "/new-zealand/visitor-visa" },
      { name: "Student Visa", href: "/new-zealand/student-visa" },
    ]
  },
  europe: {
    title: "Europe",
    items: [
      { name: "Germany - Work Permits", href: "/europe/germany-work" },
      { name: "Germany - Visit Visa", href: "/europe/germany-visit" },
      { name: "Germany - Opportunity Card", href: "/europe/germany-opportunity" },
      { name: "Portugal - Work Permits", href: "/europe/portugal-work" },
      { name: "Portugal - D2 Visa", href: "/europe/portugal-d2" },
      { name: "Portugal - D7 Visa", href: "/europe/portugal-d7" },
      { name: "Portugal - Job Seeker", href: "/europe/portugal-jobseeker" },
      { name: "Slovakia", href: "/europe/slovakia" },
      { name: "Serbia", href: "/europe/serbia" },
      { name: "Bulgaria", href: "/europe/bulgaria" },
    ]
  },
  secondPassport: {
    title: "Second Passport",
    items: [
      { name: "Investment Programs", href: "/second-passport/investment" },
      { name: "Citizenship by Descent", href: "/second-passport/descent" },
      { name: "Naturalization", href: "/second-passport/naturalization" },
    ]
  }
};

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/8e7c39f0-ed56-4618-9880-e05c2d6a5038.png" 
              alt="Gratitude Residency & Citizenship" 
              className="h-40 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {Object.entries(navigationData).map(([key, category]) => (
                <NavigationMenuItem key={key}>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-muted transition-colors">
                    {category.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {category.items.map((item) => (
                        <NavigationMenuLink key={item.href} asChild>
                          <Link
                            to={item.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">{item.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild>
              <Link to="/consultation">Free Consultation</Link>
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
              {Object.entries(navigationData).map(([key, category]) => (
                <div key={key} className="space-y-1">
                  <div className="px-3 py-2 text-sm font-medium text-foreground border-b">
                    {category.title}
                  </div>
                  {category.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block px-6 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <Link to="/contact" className="block w-full">
                  <Button variant="outline" className="w-full">Contact Us</Button>
                </Link>
                <Link to="/consultation" className="block w-full">
                  <Button className="w-full">Free Consultation</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}