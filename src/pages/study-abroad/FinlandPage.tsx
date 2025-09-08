import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Briefcase, CheckCircle2 } from "lucide-react";

export default function FinlandPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Study in <span className="text-primary">Finland</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Experience world-class education in the happiest country with innovative teaching methods
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
                Finland offers exceptional education quality with innovative teaching methods and strong support systems
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Top-Ranked Education</h3>
                  <p className="text-muted-foreground">
                    Finland consistently ranks #1 in global education quality and student satisfaction
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">No Tuition Fees</h3>
                  <p className="text-muted-foreground">
                    Free education for EU students, competitive fees for international students
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Innovation Hub</h3>
                  <p className="text-muted-foreground">
                    Leading in technology, sustainability, and social innovation
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Work-Life Balance</h3>
                  <p className="text-muted-foreground">
                    Excellent quality of life with strong emphasis on wellbeing and happiness
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">English Programs</h3>
                  <p className="text-muted-foreground">
                    Extensive range of bachelor's and master's programs taught in English
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Student Support</h3>
                  <p className="text-muted-foreground">
                    Comprehensive support services including housing, counseling, and career guidance
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
                Clear pathways to permanent residence and Finnish citizenship
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Residence Permit Type A</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                      <span>Job search period after graduation</span>
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
                  <h3 className="text-2xl font-semibold mb-4">Finnish Citizenship</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                      <span>5 years of continuous residence</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                      <span>Language proficiency required</span>
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
                Strong job market with high demand for skilled professionals
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Technology</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Mobile Development</li>
                    <li>• Game Development</li>
                    <li>• Cleantech Solutions</li>
                    <li>• AI & Robotics</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Engineering</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Mechanical Engineering</li>
                    <li>• Environmental Engineering</li>
                    <li>• Forest Technology</li>
                    <li>• Renewable Energy</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Business</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• International Business</li>
                    <li>• Supply Chain</li>
                    <li>• Consulting</li>
                    <li>• Entrepreneurship</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/contact-us">Start Your Finnish Study Journey</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}