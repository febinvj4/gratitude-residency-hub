import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Briefcase, CheckCircle2 } from "lucide-react";

export default function SwedenPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Study in <span className="text-primary">Sweden</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Experience innovative education in a progressive society with excellent career prospects
              </p>
              <Button asChild size="lg">
                <Link to="/contact-us">Get Free Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Study Benefits Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <GraduationCap className="mx-auto h-12 w-12 text-primary mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Study Benefits & Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Sweden offers cutting-edge education with innovative teaching methods and strong industry connections
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Innovation Excellence</h3>
                  <p className="text-muted-foreground">
                    Home to global brands like Spotify, Skype, and IKEA with strong entrepreneurial culture
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Progressive Society</h3>
                  <p className="text-muted-foreground">
                    Forward-thinking society with strong values of equality and sustainability
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">High Living Standards</h3>
                  <p className="text-muted-foreground">
                    Excellent quality of life with comprehensive social benefits and safety
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">English Proficiency</h3>
                  <p className="text-muted-foreground">
                    High English proficiency nationwide with many English-taught programs
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Research Focus</h3>
                  <p className="text-muted-foreground">
                    Strong emphasis on research and development with state-of-the-art facilities
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Work Opportunities</h3>
                  <p className="text-muted-foreground">
                    Students can work part-time and stay for job search after graduation
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* PR Pathways Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <MapPin className="mx-auto h-12 w-12 text-primary mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">PR Pathways</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Clear pathways to Swedish permanent residence and citizenship
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Work Permit</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                      <span>6-month job search visa after graduation</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                      <span>Work permit with job offer</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                      <span>Path to permanent residence</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Swedish Citizenship</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                      <span>5 years of continuous residence</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                      <span>Swedish language proficiency</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                      <span>EU citizenship benefits</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Job Opportunities Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Briefcase className="mx-auto h-12 w-12 text-primary mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Job Opportunities</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Strong job market with high demand for skilled professionals across sectors
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Technology</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Software Development</li>
                    <li>• Fintech</li>
                    <li>• Gaming Industry</li>
                    <li>• Telecommunications</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Engineering</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Automotive Engineering</li>
                    <li>• Renewable Energy</li>
                    <li>• Aerospace</li>
                    <li>• Industrial Design</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Life Sciences</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Pharmaceutical Research</li>
                    <li>• Biotechnology</li>
                    <li>• Medical Technology</li>
                    <li>• Healthcare Innovation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/contact-us">Start Your Swedish Study Journey</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}