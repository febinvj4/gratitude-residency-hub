import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GraduationCap, Globe, Users, Award, Briefcase, CheckCircle2 } from "lucide-react";

const studyDestinations = [
  {
    name: "Austria",
    href: "/study-abroad/austria",
    image: "/assets/austria-flag.jpg",
    description: "Quality education in the heart of Europe with excellent research opportunities."
  },
  {
    name: "Finland",
    href: "/study-abroad/finland", 
    image: "/assets/finland-flag.jpg",
    description: "Top-ranked education system with innovative teaching methods and no tuition fees."
  },
  {
    name: "Hungary",
    href: "/study-abroad/hungary",
    image: "/assets/hungary-flag.jpg", 
    description: "Affordable quality education with rich cultural heritage and EU benefits."
  },
  {
    name: "Sweden",
    href: "/study-abroad/sweden",
    image: "/assets/sweden-flag.jpg",
    description: "Innovation hub with world-class universities and strong work-life balance."
  },
  {
    name: "Netherlands",
    href: "/study-abroad/netherlands",
    image: "/assets/netherlands-flag.jpg",
    description: "International environment with top universities and excellent English programs."
  },
  {
    name: "Spain", 
    href: "/study-abroad/spain",
    image: "/assets/spain-flag.jpg",
    description: "Vibrant culture, quality education, and gateway to European opportunities."
  }
];

const benefits = [
  {
    icon: GraduationCap,
    title: "World-Class Education",
    description: "Access to top-ranked universities and cutting-edge research facilities across Europe."
  },
  {
    icon: Globe,
    title: "International Experience", 
    description: "Immerse yourself in diverse cultures while building a global network of connections."
  },
  {
    icon: Award,
    title: "Quality Recognition",
    description: "Degrees recognized worldwide, opening doors to international career opportunities."
  },
  {
    icon: Briefcase,
    title: "Career Opportunities",
    description: "Access to internships, work permits, and pathways to permanent residence."
  }
];

export default function StudyAbroadPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Study Abroad in Europe
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover world-class education opportunities in Europe's most prestigious universities. 
            Build your future with quality education, cultural immersion, and pathways to permanent residence.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/contact-us">Get Free Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Study in Europe?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Europe offers unparalleled educational excellence, cultural diversity, and career opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="p-6 text-center hover:shadow-lg transition-shadow">
                <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Study Destinations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Choose Your Study Destination
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our partnered countries and find the perfect match for your academic goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studyDestinations.map((destination) => (
              <Card key={destination.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <Users className="h-16 w-16 text-muted-foreground/50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{destination.name}</h3>
                  <p className="text-muted-foreground mb-4">{destination.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={destination.href}>Learn More</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Your European Study Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get personalized guidance from our education experts and take the first step toward your international education goals.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/contact-us">Schedule Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}