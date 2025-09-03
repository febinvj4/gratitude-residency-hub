import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Users, Clock, MapPin, DollarSign, Check, Home } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    country: "Portugal",
    flag: "🇵🇹",
    program: "Golden Visa",
    investment: "€280,000",
    residency: "5 years to citizenship",
    highlights: ["EU residence", "Schengen access", "Real estate/fund options", "Path to citizenship"]
  },
  {
    country: "Spain",
    flag: "🇪🇸", 
    program: "Golden Visa",
    investment: "€500,000",
    residency: "10 years to citizenship",
    highlights: ["EU residence", "Include family", "No residency requirement", "Renewable visa"]
  },
  {
    country: "Greece",
    flag: "🇬🇷",
    program: "Golden Visa",
    investment: "€250,000",
    residency: "Permanent residence",
    highlights: ["Lowest EU investment", "No residency requirement", "Include 3 generations", "EU access"]
  },
  {
    country: "Cyprus",
    flag: "🇨🇾",
    program: "Permanent Residency",
    investment: "€300,000",
    residency: "Immediate PR",
    highlights: ["Fast approval", "EU benefits", "Low tax rate", "Strategic location"]
  }
];

const benefits = [
  {
    icon: Building,
    title: "EU Residence Rights",
    description: "Live, work, and study anywhere in the European Union with full residence rights"
  },
  {
    icon: Users,
    title: "Family Inclusion",
    description: "Include spouse, children, and sometimes parents and grandparents in your application"
  },
  {
    icon: Clock,
    title: "Path to Citizenship",
    description: "Most programs offer a clear pathway to full citizenship after maintaining residency"
  },
  {
    icon: MapPin,
    title: "Global Mobility",
    description: "Enhanced travel freedom and eventual access to EU passport benefits"
  }
];

const investmentTypes = [
  {
    type: "Real Estate Investment",
    description: "Purchase residential or commercial property in designated areas",
    minInvestment: "€250,000+",
    features: [
      "Tangible asset ownership",
      "Potential rental income",
      "Capital appreciation prospects", 
      "Can be sold after holding period"
    ]
  },
  {
    type: "Investment Funds",
    description: "Invest in government-approved venture capital or private equity funds",
    minInvestment: "€350,000+",
    features: [
      "Professional fund management",
      "Diversified investment portfolio",
      "Lower minimum amounts",
      "Supports local economy"
    ]
  },
  {
    type: "Business Investment",
    description: "Create jobs through business investment or company formation",
    minInvestment: "€500,000+",
    features: [
      "Active business involvement",
      "Job creation requirements",
      "Higher investment control",
      "Potential business growth"
    ]
  }
];

const comparisonData = [
  {
    country: "Portugal",
    minInvestment: "€280,000",
    residencyDays: "7 days/year",
    citizenshipPath: "5 years",
    taxBenefits: "NHR program available"
  },
  {
    country: "Spain", 
    minInvestment: "€500,000",
    residencyDays: "1 day/2 years",
    citizenshipPath: "10 years",
    taxBenefits: "Beckham Law available"
  },
  {
    country: "Greece",
    minInvestment: "€250,000",
    residencyDays: "0 days required",
    citizenshipPath: "7 years",
    taxBenefits: "Standard EU tax"
  }
];

export default function ResidencyByInvestmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary-glow overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-glow/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Residency by Investment
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Secure permanent residency and a path to citizenship through strategic real estate, 
            business, or fund investments in Europe's most desirable destinations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact-us">Book Free Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Leading Residency Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compare Europe's most popular Golden Visa and investment residency programs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="group hover:shadow-large transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">{program.flag}</div>
                    <h3 className="text-xl font-bold text-foreground">{program.country}</h3>
                    <p className="text-sm text-primary font-medium">{program.program}</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Investment from:</span>
                      <span className="font-semibold text-primary">{program.investment}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Citizenship path:</span>
                      <span className="font-semibold">{program.residency}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {program.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full">
                    <Link to="/consultation">
                      Learn More
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
              Benefits of EU Residency
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Why investors choose European residency by investment programs
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

      {/* Investment Options */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Investment Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from various investment routes to secure your European residency
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {investmentTypes.map((option, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Home className="h-8 w-8 text-primary mr-3" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{option.type}</h3>
                      <p className="text-sm text-primary font-medium">{option.minInvestment}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{option.description}</p>
                  
                  <div className="space-y-3">
                    {option.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Program Comparison
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compare key requirements and benefits across popular programs
            </p>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Country</th>
                      <th className="text-left p-4 font-semibold">Min. Investment</th>
                      <th className="text-left p-4 font-semibold">Residency Days</th>
                      <th className="text-left p-4 font-semibold">Citizenship Path</th>
                      <th className="text-left p-4 font-semibold">Tax Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-4 font-medium">{row.country}</td>
                        <td className="p-4 text-primary font-semibold">{row.minInvestment}</td>
                        <td className="p-4">{row.residencyDays}</td>
                        <td className="p-4">{row.citizenshipPath}</td>
                        <td className="p-4">{row.taxBenefits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Application Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures efficient processing of your residency application
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Assessment</h3>
                <p className="text-sm text-muted-foreground">Evaluate your eligibility and select the optimal program and investment option.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary-foreground">2</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Investment</h3>
                <p className="text-sm text-muted-foreground">Complete your qualifying investment in real estate, funds, or business.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary-foreground">3</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Application</h3>
                <p className="text-sm text-muted-foreground">Submit comprehensive application with all required documentation.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary-foreground">4</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Approval</h3>
                <p className="text-sm text-muted-foreground">Receive residency permit and begin your journey to European citizenship.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Secure Your European Residency?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Our residency by investment experts will guide you through the entire process. 
            Book your confidential consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/consultation">Book Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <Link to="/contact">Download Program Guide</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}