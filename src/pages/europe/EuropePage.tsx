import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Globe, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function EuropePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
              🇪🇺 Europe Work & Migration Guide 2025
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Comprehensive guide to working in Europe: EU Blue Card, Job Seeker visas, Germany's Opportunity Card, and Schengen travel requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">29 Countries</h3>
              <p className="text-sm text-muted-foreground">Access to EU/EEA markets</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Multiple Pathways</h3>
              <p className="text-sm text-muted-foreground">Blue Card, Job Seeker, Work Permits</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Mobility Rights</h3>
              <p className="text-sm text-muted-foreground">Intra-EU movement opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Benefits of Working in Europe */}
          <Card className="p-8">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-foreground">Benefits of Working in Europe (EU/EEA)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p><strong>• Predictable legal pathways for skilled talent.</strong> The EU Blue Card offers enhanced rights and easier intra-EU mobility after time in the first Member State, plus fast-tracked family reunification where spouses can access the labour market.</p>
              <p><strong>• Country options & salary thresholds vary.</strong> Requirements differ by Member State and occupation (e.g., Germany adjusts thresholds by sector; IT routes have specific minimums). Always check the target country's rules.</p>
              <p><strong>• Pathways to permanence.</strong> Many countries offer a route to permanent residency; some (like the Netherlands) allow shorter qualifying periods for certain Blue Card holders, subject to conditions.</p>
            </CardContent>
          </Card>

          {/* Job Seeker Visas */}
          <Card className="p-8">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-foreground">Job Seeker Visas in Europe (Top Options)</CardTitle>
              <CardDescription className="text-lg">A Job Seeker Visa lets you enter a country first, then find work locally within a defined period.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-medium text-foreground mb-2">Germany — Job Seeker Visa (up to 6 months)</h3>
                <p className="text-muted-foreground mb-2"><strong>Who it's for:</strong> Degree/qualified professionals exploring roles aligned to their vocational/academic background.</p>
                <p className="text-muted-foreground"><strong>Stay & purpose:</strong> Up to 6 months to search for a job that matches your qualifications.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-medium text-foreground mb-2">Austria — Job Seeker Visa (Very Highly Qualified)</h3>
                <p className="text-muted-foreground mb-2"><strong>Who it's for:</strong> "Very highly qualified" candidates scoring ≥70/100 points (education, research, experience, language).</p>
                <p className="text-muted-foreground"><strong>Stay & next step:</strong> 6 months to secure an offer and switch to the Red-White-Red Card.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-medium text-foreground mb-2">Portugal — Job Seeker Visa (120 + 60 days)</h3>
                <p className="text-muted-foreground mb-2"><strong>Who it's for:</strong> Candidates seeking entry to find work in Portugal only.</p>
                <p className="text-muted-foreground"><strong>Stay & notes:</strong> 120 days, extendable 60 days (single entry). If no offer, you must depart.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-medium text-foreground mb-2">Sweden — Residence Permit to Look for Work or Start a Business</h3>
                <p className="text-muted-foreground"><strong>Who it's for:</strong> Graduates with second-cycle (Master's/Professional/PhD) level qualifications; valid 3–9 months.</p>
              </div>
            </CardContent>
          </Card>

          {/* Germany's Opportunity Card */}
          <Card className="p-8">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-foreground">Germany's Opportunity Card (Chancenkarte) — Points-Based Entry (2025)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p><strong>What it is:</strong> A residence permit to enter without a job offer and search locally; work part-time up to 20 hrs/week and do short trial jobs (≤2 weeks per employer). Initial validity up to 1 year; extendable if you meet conditions.</p>
              
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-medium text-foreground mb-4">Two routes:</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li><strong>Recognized qualification in Germany</strong> ⇒ standard job-seeker residence with more time (18 months) and broader part-time options; or</li>
                  <li><strong>Points system</strong> if your foreign qualification isn't fully recognized yet. Points for partial recognition, shortage occupation, experience, language (DE/EN), age, prior lawful stay, and partner's profile. Minimum language: German A1 or English B2. Proof of funds typically via blocked account (guide figure €1,091/month in 2025).</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* EU Blue Card */}
          <Card className="p-8">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-foreground">EU Blue Card — Snapshot for Skilled Professionals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p><strong>Who qualifies:</strong> Highly-qualified professionals with a job offer meeting each country's salary minimum and qualification criteria. Example: Germany's 2025 IT-experience route lists a €43,759.80 gross minimum (others vary).</p>
              <p><strong>Why it's strong:</strong> Simplified mobility to a second Member State after time in the first, faster family reunion, and favourable conditions compared to standard work permits.</p>
            </CardContent>
          </Card>

          {/* Schengen Visit Visa */}
          <Card className="p-8">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-foreground">Schengen Visit Visa (Short Stay, Type C)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p><strong>Where it works:</strong> A single visa allows travel across 29 Schengen countries for up to 90 days in any 180-day period. Apply to the country of main stay (or first entry if equal stays).</p>
              <p><strong>Core documents (typical):</strong> Valid passport, application form, compliant photo, medical insurance covering emergency care, hospitalisation & repatriation, proof of funds & accommodation, and intention to return. Biometrics (fingerprints) are usually collected.</p>
              <p><strong>Insurance minimum:</strong> Policies must cover at least €30,000 and be valid across the entire Schengen Area for your full stay.</p>
              <p><strong>Fees & timing:</strong> Standard €90 (adults) and €45 (age 6–12); typical processing ~15 days (can extend if further checks needed).</p>
            </CardContent>
          </Card>

          {/* What's Changing at the EU Border */}
          <Card className="p-8">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-foreground">What's Changing at the EU Border?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p><strong>EES (Entry/Exit System):</strong> Starts 12 October 2025 with a gradual rollout—replacing passport stamps with biometric entry/exit records for non-EU nationals on short stays. Plan for extra time on first entry.</p>
              <p><strong>ETIAS (Travel Authorisation for visa-exempt):</strong> Not yet in force. The EU indicates a launch in the last quarter of 2026.</p>
            </CardContent>
          </Card>

          {/* Quick Checklists */}
          <Card className="p-8">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-foreground">Quick Checklists</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-medium text-foreground mb-4">Work Permit/Blue Card (typical):</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Eligible job offer & salary threshold met (country-specific)</li>
                  <li>Degree/qualification (plus recognition, if required)</li>
                  <li>Employer sponsorship steps completed</li>
                  <li>Police clearance, health insurance, civil status docs (as applicable)</li>
                </ul>
              </div>
              
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-medium text-foreground mb-4">Job Seeker/Opportunity Card (examples):</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Qualification proof (+ recognition or points, as relevant)</li>
                  <li>Language proof (e.g., DE A1 or EN B2 for Chancenkarte)</li>
                  <li>Proof of funds (e.g., blocked account figure per current guidance)</li>
                  <li>Travel & health insurance for the stay</li>
                </ul>
              </div>
              
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-medium text-foreground mb-4">Schengen Visit Visa:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Application, passport, photos, itinerary & accommodation</li>
                  <li>Insurance ≥ €30,000 across Schengen for full stay</li>
                  <li>Proof of funds & ties to home country; biometrics appointment</li>
                  <li>Apply ≥15 days and ≤6 months before travel</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Professional Note */}
          <Card className="p-8">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-foreground">Professional Note (Compliance & Strategy)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Visa rules are country-specific and frequently updated. For best outcomes, we align your profile to the right Member State, cross-check qualification recognition and salary thresholds, and plan for EES procedures from 12 Oct 2025 while tracking ETIAS timing for visa-exempt travellers.
              </p>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Need tailored advice?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                If you'd like, I can map your/your client's profile to the best EU country and permit (Blue Card vs national permit vs Job Seeker/Opportunity Card), list the exact documents, and build a timeline to application.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact-us">Contact Us</Link>
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