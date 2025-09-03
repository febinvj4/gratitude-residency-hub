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
              🍁 Canada Immigration Pathways: Express Entry, PNP & Atlantic Immigration Program (AIP)
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Canada offers multiple immigration programs to attract skilled workers, international graduates, and families who want to settle permanently. The three most popular routes to Canada PR (Permanent Residency) are Express Entry System, Provincial Nominee Program (PNP), and Atlantic Immigration Program (AIP).
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

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          
          {/* Express Entry Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
              🚀 Express Entry – Canada's Fastest PR Pathway
            </h2>
            <p className="text-muted-foreground mb-6">
              The Express Entry system is a points-based immigration system managed by Immigration, Refugees and Citizenship Canada (IRCC). It is designed to select highly skilled workers for permanent residency and manages applications under three federal programs: Federal Skilled Worker Program (FSW), Federal Skilled Trades Program (FSTP), and Canadian Experience Class (CEC).
            </p>
            
            <div className="bg-secondary/30 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">✅ Key Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Entirely online profile creation and PR application.</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Candidates are ranked using the Comprehensive Ranking System (CRS).</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Regular draws invite the highest-ranking candidates to apply for PR.</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Average PR processing time: 6–12 months (after receiving ITA).</li>
              </ul>
            </div>

            <div className="bg-primary/10 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">📌 Eligibility Criteria</h3>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground">Age:</h4>
                  <p>No official maximum age limit. However, candidates aged 20–29 score the highest CRS points. After 30, points decrease and applicants aged 45+ receive zero CRS points for age.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Education:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>FSW: Bachelor Degree is Prefer.</li>
                    <li>CEC & FSTP: No minimum education requirement, but higher education boosts CRS points.</li>
                    <li>Foreign education requires an ECA (Educational Credential Assessment).</li>
                    <li>Canadian education credentials earn extra CRS points.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Work Experience:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>FSW: At least 1 year of continuous full-time work experience in a skilled occupation.</li>
                    <li>CEC: At least 1 year of skilled Canadian work experience within the last 3 years.</li>
                    <li>FSTP: Minimum 2 years full-time experience in a skilled trade within the last 5 years.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Language Proficiency:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>FSW & CEC: CLB 7 minimum (IELTS 6.0 in each band).</li>
                    <li>FSTP: CLB 5 for speaking/listening and CLB 4 for reading/writing.</li>
                    <li>Higher CLB scores significantly improve CRS ranking.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-accent/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">💡 Why Choose Express Entry?</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Fastest PR processing of all Canadian programs.</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>No need for a job offer (though it adds CRS points).</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Best suited for skilled professionals with strong qualifications and language skills.</li>
              </ul>
            </div>
          </div>

          {/* PNP Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
              🏙️ Provincial Nominee Program (PNP) – Regional PR Pathway
            </h2>
            <p className="text-muted-foreground mb-6">
              The Provincial Nominee Program (PNP) allows Canadian provinces and territories to nominate immigrants based on their labour market needs. It is an excellent option for candidates who may not score enough points under Express Entry.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-secondary/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">✅ Key Features</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Provides 600 CRS points if aligned with Express Entry.</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Provinces run their own occupation lists and nomination streams.</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Some PNP streams are Express Entry-aligned, others are direct applications.</li>
                </ul>
              </div>

              <div className="bg-primary/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">📌 Popular Provincial Programs</h3>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Ontario Immigrant Nominee Program (OINP)</li>
                  <li>• British Columbia PNP (BC PNP)</li>
                  <li>• Alberta Advantage Immigration Program (AAIP)</li>
                  <li>• Saskatchewan Immigrant Nominee Program (SINP)</li>
                  <li>• Manitoba PNP (MPNP)</li>
                  <li>• Nova Scotia Nominee Program (NSNP)</li>
                  <li>• New Brunswick PNP (NBPNP)</li>
                </ul>
              </div>
            </div>

            <div className="bg-accent/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">💡 Why Choose PNP?</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Best for applicants with lower CRS scores who still qualify through regional demand.</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Many PNPs target healthcare, trades, IT, and other shortage occupations.</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Provides a direct PR pathway even without Express Entry.</li>
              </ul>
            </div>
          </div>

          {/* AIP Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
              ⚓ Atlantic Immigration Program (AIP) – Employer-Driven PR Pathway
            </h2>
            <p className="text-muted-foreground mb-6">
              The Atlantic Immigration Program (AIP) is a permanent residency program created to attract skilled workers and international graduates to Atlantic Canada: Nova Scotia, New Brunswick, Newfoundland and Labrador, and Prince Edward Island.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-secondary/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">✅ Key Features</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Employer-driven program (must have a job offer from a designated Atlantic employer).</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>No CRS points system – easier for mid-level skilled workers.</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Lower language and education requirements compared to Express Entry.</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span>Pathway for both skilled workers and international graduates.</li>
                </ul>
              </div>

              <div className="bg-primary/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">📌 Eligibility Criteria</h3>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Job Offer: Must secure a valid full-time job offer from a designated employer</li>
                  <li>• Work Experience: At least 1 year of relevant work experience in the last 5 years</li>
                  <li>• Education: Minimum high school diploma (foreign education requires ECA)</li>
                  <li>• Language Proficiency: Minimum CLB 4 in English or French</li>
                  <li>• Proof of Funds: Must show sufficient funds unless already working in Canada</li>
                  <li>• Settlement Plan: Mandatory settlement plan prepared with designated organizations</li>
                </ul>
              </div>
            </div>

            <div className="bg-accent/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">💡 Why Choose AIP?</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Accessible for applicants with lower education and language scores.</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>No CRS competition – eligibility is mainly job-offer based.</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Designed for long-term settlement in Atlantic provinces with high demand for workers.</li>
              </ul>
            </div>
          </div>

          {/* Which Program Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">🔑 Which Program Should You Choose?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-primary/10 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Express Entry:</h3>
                <p className="text-muted-foreground text-sm">Best for skilled professionals with strong English/French, higher CRS, and global work experience.</p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">PNP:</h3>
                <p className="text-muted-foreground text-sm">Perfect for those with lower CRS scores but whose occupations are in demand in specific provinces.</p>
              </div>
              <div className="bg-accent/20 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">AIP:</h3>
                <p className="text-muted-foreground text-sm">Ideal for applicants with a valid job offer in Atlantic Canada, including mid-level skilled workers.</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">❓ Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-secondary/20 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">1. What is the minimum CRS score for Express Entry in 2025?</h3>
                <p className="text-muted-foreground text-sm">The minimum CRS score changes with each draw. In 2025, general draws usually require around 480–500 CRS points, but category-based draws (such as healthcare, trades, and STEM) may invite candidates with lower CRS scores. Provincial nomination adds 600 CRS points, guaranteeing an ITA.</p>
              </div>
              
              <div className="bg-secondary/20 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">2. Is there an age limit for Express Entry Canada?</h3>
                <p className="text-muted-foreground text-sm">No, there is no maximum age limit to apply for Express Entry. However, candidates aged 20–29 receive the highest CRS points for age. After 30, points decrease, and applicants aged 45+ receive zero age points, but they can still qualify through work experience, education, or provincial nomination.</p>
              </div>

              <div className="bg-secondary/20 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">3. Which PNP is the easiest to get Canada PR?</h3>
                <p className="text-muted-foreground text-sm">There is no single "easy" PNP, as eligibility depends on your profile and occupation. However, provinces like Saskatchewan, Alberta, Ontario, and Nova Scotia often open streams targeting international applicants in healthcare, trades, and IT sectors. A PNP nomination guarantees 600 CRS points under Express Entry.</p>
              </div>

              <div className="bg-secondary/20 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">4. Can I apply for the Atlantic Immigration Program (AIP) without a job offer?</h3>
                <p className="text-muted-foreground text-sm">No. The AIP is employer-driven, meaning you must have a job offer from a designated employer in Nova Scotia, New Brunswick, Newfoundland and Labrador, or Prince Edward Island. Without a job offer, you cannot apply through AIP, but you may qualify under Express Entry or PNP.</p>
              </div>

              <div className="bg-secondary/20 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">5. How long does it take to get Canada PR through Express Entry or PNP?</h3>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• <strong>Express Entry:</strong> After receiving an ITA, PR applications are usually processed in 6–12 months.</li>
                  <li>• <strong>PNP:</strong> Provincial nomination timelines vary, but once nominated, the PR process through Express Entry is also around 6–12 months.</li>
                  <li>• <strong>AIP:</strong> PR processing typically takes 12 months or less, depending on the case.</li>
                </ul>
              </div>

              <div className="bg-secondary/20 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">6. What is the difference between Express Entry and PNP?</h3>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• <strong>Express Entry</strong> is a federal immigration system that ranks candidates using CRS points.</li>
                  <li>• <strong>PNP</strong> is managed by provinces and targets specific labor shortages.</li>
                  <li>• Many PNP streams are linked to Express Entry, giving nominees an extra 600 CRS points, which guarantees PR.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final Thoughts */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">📢 Final Thoughts</h2>
            <p className="text-muted-foreground mb-6">
              Canada's immigration system is flexible and opportunity-rich, with pathways for every profile. Whether you qualify through Express Entry, PNP, or AIP, each program leads to Canada PR and eventually citizenship.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>At Gratitude Residency and Citizenship, we provide:</strong>
            </p>
            <ul className="text-muted-foreground text-sm space-y-1 max-w-md mx-auto">
              <li>• CRS points calculation & Express Entry profile setup</li>
              <li>• Skills and occupation matching for PNP</li>
              <li>• Employer connections under AIP</li>
              <li>• Step-by-step guidance until PR approval</li>
            </ul>
          </div>

          {/* Call to Action */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Start Your Canada Immigration Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Book a consultation with our RCIC-licensed consultants and explore your best options for Canada.
              </p>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  <strong>At Gratitude Residency and Citizenship, we provide:</strong>
                </p>
                <ul className="text-muted-foreground text-sm space-y-1 max-w-md mx-auto text-left">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    CRS points calculation & Express Entry profile setup
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Skills and occupation matching for PNP
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Employer connections under AIP
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Step-by-step guidance until PR approval
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact-us">Contact Expert</Link>
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