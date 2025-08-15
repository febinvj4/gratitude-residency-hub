import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, DollarSign, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const australiaPrograms = [
  {
    title: "Skilled Migration 189",
    description: "Independent skilled visa for skilled workers without state nomination",
    requirements: ["Age under 45", "Skilled occupation", "English proficiency", "65+ points"],
    processingTime: "8-12 months",
    href: "/australia/skilled-189"
  },
  {
    title: "Skilled Migration 190",
    description: "State-nominated skilled visa for skilled workers with state nomination",
    requirements: ["Age under 45", "State nomination", "English proficiency", "65+ points"],
    processingTime: "10-14 months",
    href: "/australia/skilled-190"
  },
  {
    title: "Skilled Migration 491",
    description: "Regional skilled visa for skilled workers in regional areas",
    requirements: ["Age under 45", "Regional nomination", "English proficiency", "65+ points"],
    processingTime: "10-16 months",
    href: "/australia/skilled-491"
  },
  {
    title: "Partner Visa",
    description: "For partners/spouses of Australian citizens or permanent residents",
    requirements: ["Genuine relationship", "Health requirements", "Character requirements"],
    processingTime: "12-24 months",
    href: "/australia/partner-visa"
  },
  {
    title: "Visit Visa",
    description: "Tourist and business visitor visa for temporary stays",
    requirements: ["Genuine visitor", "Financial capacity", "Health insurance"],
    processingTime: "15-30 days",
    href: "/australia/visit-visa"
  },
  {
    title: "Business Visa",
    description: "For business owners and investors wanting to establish business",
    requirements: ["Business plan", "Investment funds", "Business experience"],
    processingTime: "8-18 months",
    href: "/australia/business-visa"
  },
  {
    title: "Study Visa",
    description: "For international students enrolled in Australian institutions",
    requirements: ["Educational qualifications", "English proficiency", "Financial capacity"],
    processingTime: "4-8 weeks",
    href: "/australia/study-visa"
  }
];

export default function AustraliaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Australia Immigration Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Australia offers diverse immigration pathways for skilled workers, families, students, and business investors. 
              With our expertise, navigate through the points-based system and achieve your Australian dream.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">High Success Rate</h3>
              <p className="text-sm text-muted-foreground">98% success rate for Australia visas</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Fast Processing</h3>
              <p className="text-sm text-muted-foreground">Streamlined application process</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Expert Guidance</h3>
              <p className="text-sm text-muted-foreground">MARA registered consultants</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Australia Immigration Programs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {australiaPrograms.map((program, index) => (
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
            Ready to Start Your Australia Journey?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Get a free assessment and discover which Australia immigration program is right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/consultation">Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}