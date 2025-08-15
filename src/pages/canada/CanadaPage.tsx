import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, MapPin, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const canadaPrograms = [
  {
    title: "Express Entry",
    description: "Federal skilled worker program for skilled professionals",
    requirements: ["Skilled occupation", "Language proficiency", "Work experience", "Education"],
    processingTime: "6-8 months",
    href: "/canada/express-entry"
  },
  {
    title: "Provincial Nominee Program (PNP)",
    description: "Provincial nomination for skilled workers and entrepreneurs",
    requirements: ["Provincial nomination", "Skills assessment", "Language test", "Job offer (some)"],
    processingTime: "12-18 months",
    href: "/canada/pnp"
  },
  {
    title: "Atlantic Immigration",
    description: "Immigration program for Atlantic provinces",
    requirements: ["Job offer", "Designation letter", "Work experience", "Education"],
    processingTime: "12-18 months",
    href: "/canada/atlantic"
  },
  {
    title: "Rural and Northern Immigration (RNIP)",
    description: "Immigration to smaller communities in rural areas",
    requirements: ["Community recommendation", "Job offer", "Language proficiency", "Education"],
    processingTime: "18-24 months",
    href: "/canada/rnip"
  },
  {
    title: "LMIA Work Permit",
    description: "Labour Market Impact Assessment for foreign workers",
    requirements: ["Job offer", "LMIA approval", "Work experience", "Language proficiency"],
    processingTime: "4-16 weeks",
    href: "/canada/lmia"
  },
  {
    title: "Visitor Visa",
    description: "Temporary resident visa for tourism and business",
    requirements: ["Purpose of visit", "Financial support", "Ties to home country"],
    processingTime: "2-8 weeks",
    href: "/canada/visitor-visa"
  },
  {
    title: "Study Visa",
    description: "Study permit for international students",
    requirements: ["Letter of acceptance", "Financial proof", "Language proficiency", "Health exam"],
    processingTime: "4-12 weeks",
    href: "/canada/study-visa"
  }
];

export default function CanadaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Canada Immigration Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Canada welcomes over 400,000 new immigrants annually through various federal and provincial programs. 
              Our RCIC-licensed consultants will guide you through the best pathway for your profile.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">RCIC Licensed</h3>
              <p className="text-sm text-muted-foreground">Regulated Canadian Immigration Consultants</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">All Provinces</h3>
              <p className="text-sm text-muted-foreground">Coverage across all Canadian provinces</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Complete Support</h3>
              <p className="text-sm text-muted-foreground">From application to landing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Canada Immigration Programs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {canadaPrograms.map((program, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {program.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="text-sm">
                        <span className="text-muted-foreground">Processing: </span>
                        <span className="font-medium text-foreground">{program.processingTime}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full" variant="outline" asChild>
                      <Link to={program.href}>Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Start Your Canada Immigration Journey
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Book a consultation with our RCIC-licensed consultants and explore your best options for Canada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/consultation">Free Assessment</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">Contact Expert</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}