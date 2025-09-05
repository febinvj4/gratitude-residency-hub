import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Shield, Globe, DollarSign, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "Citizenship by Investment",
    description: "Fast-track to citizenship through strategic investments in approved government programs",
    icon: Shield,
    href: "/citizenship-by-investment",
    features: [
      "Citizenship in 3-6 months",
      "No residency requirements",
      "Global mobility & visa-free travel",
      "Tax optimization opportunities"
    ]
  },
  {
    title: "Residency by Investment",
    description: "Secure permanent residency through real estate, business, or government fund investments",
    icon: Building,
    href: "/residency-by-investment",
    features: [
      "Path to permanent residence",
      "Flexible investment options",
      "Family inclusion programs",
      "Business opportunities"
    ]
  }
];

const benefits = [
  {
    icon: Globe,
    title: "Global Mobility",
    description: "Access to visa-free travel to 150+ countries with enhanced passport strength"
  },
  {
    icon: Shield,
    title: "Security & Stability",
    description: "Secure your family's future with alternative citizenship or residency options"
  },
  {
    icon: DollarSign,
    title: "Tax Optimization",
    description: "Strategic tax planning opportunities through different jurisdictions"
  },
  {
    icon: Users,
    title: "Family Benefits",
    description: "Include spouse, children, and sometimes parents in your application"
  }
];

const steps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "Comprehensive assessment of your goals, budget, and preferred jurisdictions"
  },
  {
    step: "02", 
    title: "Program Selection",
    description: "Expert guidance to choose the optimal investment migration program"
  },
  {
    step: "03",
    title: "Due Diligence",
    description: "Complete background checks and document preparation for application"
  },
  {
    step: "04",
    title: "Investment & Application",
    description: "Secure investment placement and submit government application"
  },
  {
    step: "05",
    title: "Approval & Benefits",
    description: "Receive citizenship/residency and enjoy all program benefits"
  }
];

export default function BusinessMigrationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary-glow overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-glow/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Business Migration Programs
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Secure citizenship or residency through strategic investments. Fast-track your global mobility 
            with government-approved investment migration programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact-us">Book Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Investment Programs */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Investment Migration Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive range of citizenship and residency investment programs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="group hover:shadow-large transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4">
                      <program.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{program.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <ArrowRight className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full group-hover:bg-primary/90 transition-colors">
                    <Link to={program.href}>
                      Explore Program
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Investment Migration?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Investment migration offers unique advantages for high-net-worth individuals and families
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <benefit.icon className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined 5-step process to secure your investment migration goals
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-foreground">{step.step}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Secure Your Global Future?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Our investment migration experts are ready to guide you through the process. 
            Book your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact-us">Book Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}