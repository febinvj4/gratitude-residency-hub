import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Briefcase, CheckCircle2 } from "lucide-react";

export default function AustriaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Study in <span className="text-primary">Austria</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover world-class education in the heart of Europe with excellent post-study opportunities
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
                Austria offers exceptional educational opportunities with strong industry connections and affordable living costs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">High-Quality Education</h3>
                  <p className="text-muted-foreground">
                    World-renowned universities with cutting-edge research facilities and industry partnerships
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Affordable Tuition</h3>
                  <p className="text-muted-foreground">
                    Low or no tuition fees for EU students, competitive rates for international students
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Central European Location</h3>
                  <p className="text-muted-foreground">
                    Strategic location providing easy access to major European cities and markets
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">English-Taught Programs</h3>
                  <p className="text-muted-foreground">
                    Wide range of programs taught in English across various disciplines
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Safe Environment</h3>
                  <p className="text-muted-foreground">
                    One of the safest countries in the world with excellent quality of life
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Work While Studying</h3>
                  <p className="text-muted-foreground">
                    Students can work part-time during studies to gain experience and support themselves
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
                Multiple routes to permanent residency and eventual Austrian citizenship
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Red-White-Red Card</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                      <span>Points-based immigration system</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                      <span>Graduate job search visa available</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                      <span>Pathway to permanent residence</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">EU Blue Card</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                      <span>For highly skilled professionals</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                      <span>EU-wide mobility rights</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                      <span>Accelerated citizenship path</span>
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
                Strong job market with opportunities across various industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Technology Sector</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Software Development</li>
                    <li>• Data Science</li>
                    <li>• Cybersecurity</li>
                    <li>• AI & Machine Learning</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Finance & Banking</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Investment Banking</li>
                    <li>• Risk Management</li>
                    <li>• Financial Analysis</li>
                    <li>• Fintech</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Healthcare</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Medical Research</li>
                    <li>• Pharmaceutical</li>
                    <li>• Biotech</li>
                    <li>• Healthcare Management</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/contact-us">Start Your Austrian Study Journey</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}