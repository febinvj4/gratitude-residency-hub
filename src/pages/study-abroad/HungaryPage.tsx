import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Briefcase, CheckCircle2 } from "lucide-react";

export default function HungaryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Study in <span className="text-primary">Hungary</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Affordable European education with rich cultural heritage and excellent academic standards
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
                Hungary offers high-quality education at affordable costs with strong international recognition
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Affordable Education</h3>
                  <p className="text-muted-foreground">
                    One of the most cost-effective study destinations in Europe with excellent value
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">EU Recognition</h3>
                  <p className="text-muted-foreground">
                    Degrees recognized across EU and globally with strong academic standards
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Medical Excellence</h3>
                  <p className="text-muted-foreground">
                    World-renowned medical and dental programs with practical training
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Central Location</h3>
                  <p className="text-muted-foreground">
                    Perfect gateway to explore Europe with excellent transport connections
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Cultural Heritage</h3>
                  <p className="text-muted-foreground">
                    Rich history and culture with vibrant student life and festivals
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">English Programs</h3>
                  <p className="text-muted-foreground">
                    Wide variety of English-taught programs across multiple disciplines
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
                Multiple routes to Hungarian residence and EU citizenship
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Work Permit</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                      <span>Graduate job search period</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                      <span>EU Blue Card eligibility</span>
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
                  <h3 className="text-2xl font-semibold mb-4">Hungarian Citizenship</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                      <span>8 years of continuous residence</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                      <span>Language proficiency required</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                      <span>Full EU citizenship rights</span>
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
                Growing economy with opportunities in traditional and emerging sectors
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Healthcare</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Medical Practice</li>
                    <li>• Dental Care</li>
                    <li>• Pharmaceutical</li>
                    <li>• Medical Tourism</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Manufacturing</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Automotive Industry</li>
                    <li>• Electronics</li>
                    <li>• Machinery</li>
                    <li>• Chemical Industry</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Services</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• IT & Software</li>
                    <li>• Business Process Outsourcing</li>
                    <li>• Tourism & Hospitality</li>
                    <li>• Financial Services</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/contact-us">Start Your Hungarian Study Journey</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}