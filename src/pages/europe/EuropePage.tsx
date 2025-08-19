import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function EuropePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Europe Work & Migration Guide 2025
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive guide to working in Europe: EU Blue Card, Job Seeker visas, Germany's Opportunity Card, and Schengen travel requirements.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Benefits of Working in Europe (EU/EEA)</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>• <strong>Predictable legal pathways for skilled talent.</strong> The EU Blue Card offers enhanced rights and easier intra-EU mobility after time in the first Member State, plus fast-tracked family reunification where spouses can access the labour market.</p>
            <p>• <strong>Country options & salary thresholds vary.</strong> Requirements differ by Member State and occupation (e.g., Germany adjusts thresholds by sector; IT routes have specific minimums). Always check the target country's rules.</p>
            <p>• <strong>Pathways to permanence.</strong> Many countries offer a route to permanent residency; some (like the Netherlands) allow shorter qualifying periods for certain Blue Card holders, subject to conditions.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Job Seeker Visas in Europe (Top Options)</h2>
          <p className="text-muted-foreground mb-6">A Job Seeker Visa lets you enter a country first, then find work locally within a defined period.</p>
          
          <div className="space-y-8">
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
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Germany's Opportunity Card (Chancenkarte) — Points-Based Entry (2025)</h2>
          <div className="space-y-4 text-muted-foreground">
            <p><strong>What it is:</strong> A residence permit to enter without a job offer and search locally; work part-time up to 20 hrs/week and do short trial jobs (≤2 weeks per employer). Initial validity up to 1 year; extendable if you meet conditions.</p>
            
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-medium text-foreground mb-4">Two routes:</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li><strong>Recognized qualification in Germany</strong> ⇒ standard job-seeker residence with more time (18 months) and broader part-time options; or</li>
                <li><strong>Points system</strong> if your foreign qualification isn't fully recognized yet. Points for partial recognition, shortage occupation, experience, language (DE/EN), age, prior lawful stay, and partner's profile. Minimum language: German A1 or English B2. Proof of funds typically via blocked account (guide figure €1,091/month in 2025).</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">EU Blue Card — Snapshot for Skilled Professionals</h2>
          <div className="space-y-4 text-muted-foreground">
            <p><strong>Who qualifies:</strong> Highly-qualified professionals with a job offer meeting each country's salary minimum and qualification criteria. Example: Germany's 2025 IT-experience route lists a €43,759.80 gross minimum (others vary).</p>
            <p><strong>Why it's strong:</strong> Simplified mobility to a second Member State after time in the first, faster family reunion, and favourable conditions compared to standard work permits.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Schengen Visit Visa (Short Stay, Type C)</h2>
          <div className="space-y-4 text-muted-foreground">
            <p><strong>Where it works:</strong> A single visa allows travel across 29 Schengen countries for up to 90 days in any 180-day period. Apply to the country of main stay (or first entry if equal stays).</p>
            <p><strong>Core documents (typical):</strong> Valid passport, application form, compliant photo, medical insurance covering emergency care, hospitalisation & repatriation, proof of funds & accommodation, and intention to return. Biometrics (fingerprints) are usually collected.</p>
            <p><strong>Insurance minimum:</strong> Policies must cover at least €30,000 and be valid across the entire Schengen Area for your full stay.</p>
            <p><strong>Fees & timing:</strong> Standard €90 (adults) and €45 (age 6–12); typical processing ~15 days (can extend if further checks needed).</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">What's Changing at the EU Border?</h2>
          <div className="space-y-4 text-muted-foreground">
            <p><strong>EES (Entry/Exit System):</strong> Starts 12 October 2025 with a gradual rollout—replacing passport stamps with biometric entry/exit records for non-EU nationals on short stays. Plan for extra time on first entry.</p>
            <p><strong>ETIAS (Travel Authorisation for visa-exempt):</strong> Not yet in force. The EU indicates a launch in the last quarter of 2026.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Quick Checklists</h2>
          
          <div className="space-y-6">
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
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Professional Note (Compliance & Strategy)</h2>
          <p className="text-muted-foreground">
            Visa rules are country-specific and frequently updated. For best outcomes, we align your profile to the right Member State, cross-check qualification recognition and salary thresholds, and plan for EES procedures from 12 Oct 2025 while tracking ETIAS timing for visa-exempt travellers.
          </p>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Need tailored advice?</h2>
          <p className="text-muted-foreground">
            If you'd like, I can map your/your client's profile to the best EU country and permit (Blue Card vs national permit vs Job Seeker/Opportunity Card), list the exact documents, and build a timeline to application.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}