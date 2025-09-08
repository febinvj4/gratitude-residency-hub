import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Briefcase, CheckCircle2 } from "lucide-react";

export default function NetherlandsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Study in <span className="text-primary">Netherlands</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                World-class education in an international environment with excellent career opportunities
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
                Netherlands offers world-renowned education with international perspective and innovative teaching
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Top Universities</h3>
                  <p className="text-muted-foreground">
                    13 universities in global top 200 with excellent international reputation
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">English Programs</h3>
                  <p className="text-muted-foreground">
                    Over 2,100 English-taught programs across all academic levels
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">International Environment</h3>
                  <p className="text-muted-foreground">
                    Highly international atmosphere with students from over 160 countries
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Gateway to Europe</h3>
                  <p className="text-muted-foreground">
                    Strategic location with easy access to major European cities and markets
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">High English Proficiency</h3>
                  <p className="text-muted-foreground">
                    95% of Dutch speak English, making daily life and studies comfortable
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Innovative Teaching</h3>
                  <p className="text-muted-foreground">
                    Problem-based learning approach with emphasis on critical thinking
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
                Multiple pathways to Dutch residence and EU citizenship
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Orientation Year</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                      <span>12-month job search period</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                      <span>Work permit with employment</span>
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
                  <h3 className="text-2xl font-semibold mb-4">Dutch Citizenship</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                      <span>5 years of continuous residence</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                      <span>Dutch language proficiency</span>
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
                Strong economy with high demand for international talent across sectors
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Technology</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Software Development</li>
                    <li>• Data Science</li>
                    <li>• Cybersecurity</li>
                    <li>• Digital Innovation</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Business & Finance</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• International Business</li>
                    <li>• Banking & Finance</li>
                    <li>• Management Consulting</li>
                    <li>• Trading & Logistics</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Engineering</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Civil Engineering</li>
                    <li>• Water Management</li>
                    <li>• Renewable Energy</li>
                    <li>• Chemical Engineering</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/contact-us">Start Your Dutch Study Journey</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}