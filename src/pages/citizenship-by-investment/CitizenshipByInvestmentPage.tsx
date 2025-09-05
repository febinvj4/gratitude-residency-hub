import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Users, MapPin, DollarSign, Check } from "lucide-react";
import { Link } from "react-router-dom";
const programs = [{
  country: "Dominica",
  flag: "🇩🇲",
  investment: "$100,000",
  timeframe: "3-4 months",
  visaFree: "140+",
  highlights: ["No residency requirement", "Include family", "Lifetime citizenship", "Tax benefits"]
}, {
  country: "St. Kitts & Nevis",
  flag: "🇰🇳",
  investment: "$150,000",
  timeframe: "4-6 months",
  visaFree: "150+",
  highlights: ["Established program since 1984", "EU visa-free access", "No interview required", "Dual citizenship allowed"]
}, {
  country: "Antigua & Barbuda",
  flag: "🇦🇬",
  investment: "$100,000",
  timeframe: "3-4 months",
  visaFree: "150+",
  highlights: ["Lowest investment option", "5-day residency in 5 years", "Commonwealth citizenship", "Include parents"]
}, {
  country: "Grenada",
  flag: "🇬🇩",
  investment: "$150,000",
  timeframe: "4-6 months",
  visaFree: "140+",
  highlights: ["US E-2 visa eligibility", "Include siblings", "China visa-free", "University of West Indies access"]
}];
const benefits = [{
  icon: Shield,
  title: "Second Passport Security",
  description: "Enhanced global mobility and security with a second citizenship as your insurance policy"
}, {
  icon: Clock,
  title: "Fast Processing",
  description: "Obtain citizenship in as little as 3-6 months through streamlined government processes"
}, {
  icon: Users,
  title: "Family Inclusion",
  description: "Include spouse, children under 30, parents over 65, and sometimes siblings in your application"
}, {
  icon: MapPin,
  title: "Visa-Free Travel",
  description: "Access to 140+ countries including EU Schengen zone, UK, Singapore, and Hong Kong"
}];
const investmentOptions = [{
  type: "Government Fund Donation",
  description: "Non-refundable contribution to national development fund",
  pros: ["Lowest investment amount", "Simple process", "Fast approval"],
  cons: ["Non-refundable", "No return on investment"]
}, {
  type: "Real Estate Investment",
  description: "Purchase government-approved real estate properties",
  pros: ["Potential capital appreciation", "Rental income possible", "Can be sold after holding period"],
  cons: ["Higher investment amount", "Market risk", "Holding period requirements"]
}];
export default function CitizenshipByInvestmentPage() {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary-glow overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-glow/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Citizenship by Investment
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Fast-track to second citizenship through government-approved investment programs. 
            Secure your family's future with enhanced global mobility and tax optimization opportunities.
          </p>
          <div className="flex justify-center">
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
              Leading Citizenship Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compare our most popular citizenship by investment programs from established Caribbean nations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {programs.map((program, index) => <Card key={index} className="group hover:shadow-large transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">{program.flag}</div>
                    <h3 className="text-xl font-bold text-foreground">{program.country}</h3>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Investment from:</span>
                      <span className="font-semibold text-primary">{program.investment}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Timeframe:</span>
                      <span className="font-semibold">{program.timeframe}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Visa-free travel:</span>
                      <span className="font-semibold">{program.visaFree} countries</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {program.highlights.map((highlight, idx) => <div key={idx} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>)}
                  </div>
                  
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Benefits of Second Citizenship
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Why high-net-worth individuals choose citizenship by investment programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <benefit.icon className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>)}
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
              Choose the investment route that best fits your financial strategy and goals
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {investmentOptions.map((option, index) => <Card key={index}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <DollarSign className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-foreground">{option.type}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{option.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-success mb-3">Advantages</h4>
                      <div className="space-y-2">
                        {option.pros.map((pro, idx) => <div key={idx} className="flex items-center text-sm">
                            <Check className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{pro}</span>
                          </div>)}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-muted-foreground mb-3">Considerations</h4>
                      <div className="space-y-2">
                        {option.cons.map((con, idx) => <div key={idx} className="flex items-center text-sm">
                            <div className="w-4 h-4 rounded-full bg-muted mr-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{con}</span>
                          </div>)}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Application Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures efficient processing of your citizenship application
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Initial Assessment</h3>
                <p className="text-muted-foreground">Comprehensive evaluation of your eligibility and program selection based on your goals and budget.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary-foreground">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Due Diligence & Documentation</h3>
                <p className="text-muted-foreground">Complete background checks, document preparation, and investment structure setup.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary-foreground">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Application & Approval</h3>
                <p className="text-muted-foreground">Submit application, complete investment, and receive citizenship certificate and passport.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Secure Your Second Citizenship?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Our citizenship by investment experts will guide you through the entire process. 
            Book your confidential consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact-us">Book Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
}