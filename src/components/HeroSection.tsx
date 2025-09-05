import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-immigration.jpg";
export function HeroSection() {
  return <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-secondary/30">
      <div className="absolute inset-0 overflow-hidden">
        <img src={heroImage} alt="Immigration and citizenship services" className="w-full h-full object-cover opacity-10" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Gateway to 
                <span className="text-[#0e0e7e]"> Global Residency</span> & 
                <span className="text-[#14147d]"> Citizenship</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                With over 8 years of expertise and 4000+ successful cases, we guide you through 
                immigration processes for Australia, Canada, New Zealand, Europe, and Second Passport programs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">8+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">4000+ Success Cases</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">Licensed Consultants</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">End-to-End Support</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground" asChild>
                <Link to="/contact-us">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about-us">Learn About Us</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-large border">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Quick Assessment</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Preferred Destination
                  </label>
                  <select className="w-full p-3 border rounded-lg bg-background text-foreground">
                    <option>Select a country...</option>
                    <option>Australia</option>
                    <option>Canada</option>
                    <option>New Zealand</option>
                    <option>Germany</option>
                    <option>Portugal</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Immigration Category
                  </label>
                  <select className="w-full p-3 border rounded-lg bg-background text-foreground">
                    <option>Select category...</option>
                    <option>Skilled Migration</option>
                    <option>Work Visa</option>
                    <option>Study Visa</option>
                    <option>Family Visa</option>
                    <option>Business Visa</option>
                  </select>
                </div>
                <Button className="w-full" size="lg" asChild>
                  <Link to="/contact-us">Get Free Assessment</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}