import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function NewZealandPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
              🥝 New Zealand Migration (Offshore) — 2025
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Offshore migration to New Zealand made simple: SMC points, Green List residence, AEWV work visas, steps, documents, and expert guidance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Expert Guidance</h3>
              <p className="text-sm text-muted-foreground">Licensed immigration advisors</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Complete Documentation</h3>
              <p className="text-sm text-muted-foreground">End-to-end application support</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Family Settlement</h3>
              <p className="text-sm text-muted-foreground">Support for partners and children</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Why New Zealand */}
          <Card className="p-8">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-foreground">Why New Zealand?</CardTitle>
              <CardDescription className="text-lg">
                Safe, innovative, and skill-hungry. New Zealand welcomes qualified professionals to fill priority shortages and build long-term careers.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Main Pathways */}
          <Card className="p-8">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-foreground">Main Pathways</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-medium text-foreground mb-2">Skilled Migrant Category (SMC) Residence</h3>
                <p className="text-muted-foreground">Points-based residence for skilled roles with accredited employers.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-medium text-foreground mb-2">Green List Residence</h3>
                <p className="text-muted-foreground">Straight to Residence (Tier 1) or Work to Residence (Tier 2 after qualifying work).</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-medium text-foreground mb-2">Accredited Employer Work Visa (AEWV)</h3>
                <p className="text-muted-foreground">Work in NZ for an accredited employer—often the fastest entry step toward residence.</p>
              </div>
            </CardContent>
          </Card>

          {/* Who's a Good Fit */}
          <Card className="p-8">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-foreground">Who's a Good Fit?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Skilled professionals with a job/offer from an accredited employer
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Strong English, solid experience/qualifications, and clear health/character history
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Applicants planning family settlement (partner/children options available)
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* How We Help */}
          <Card className="p-8">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-foreground">How We Help (End-to-End)</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">1.</span>
                  Eligibility & points check (SMC/Green List/AEWV)
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">2.</span>
                  ANZSCO role mapping & employer targeting
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">3.</span>
                  Evidence build (qualifications, English, police/medical)
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">4.</span>
                  Application filing & case management
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">5.</span>
                  Landing & settlement guidance
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Documents to Prepare */}
          <Card className="p-8">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-foreground">Documents to Prepare</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Passport • CV • Qualification proofs/assessments • Employment offer/contract • English test (if required) • Police & medicals • Civil status/family docs
              </p>
            </CardContent>
          </Card>

          {/* FAQs */}
          <Card className="p-8">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-foreground">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">How do I start from offshore?</h3>
                <p className="text-muted-foreground">Secure a compliant job offer first (or confirm Green List fit), then lodge the correct visa pathway.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Is a job offer mandatory for residence?</h3>
                <p className="text-muted-foreground">For SMC and Green List Straight to Residence, a NZ job/offer with an accredited employer is typically required.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Can my family come with me?</h3>
                <p className="text-muted-foreground">Yes—partners and dependent children may qualify under linked visas (conditions apply).</p>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Ready to move to New Zealand?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get your free pre-assessment today. We'll confirm your best pathway, fix the evidence gaps, and manage your case from offer to grant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/consultation">Book Free Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}