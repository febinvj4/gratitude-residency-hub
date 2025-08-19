import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function NewZealandPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            New Zealand Migration (Offshore) — 2025
          </h1>
          <p className="text-lg text-muted-foreground">
            Offshore migration to New Zealand made simple: SMC points, Green List residence, AEWV work visas, steps, documents, and expert guidance.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Why New Zealand?</h2>
          <p className="text-muted-foreground mb-6">
            Safe, innovative, and skill-hungry. New Zealand welcomes qualified professionals to fill priority shortages and build long-term careers.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Main Pathways</h2>
          
          <div className="space-y-6">
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
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Who's a Good Fit?</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Skilled professionals with a job/offer from an accredited employer</li>
            <li>Strong English, solid experience/qualifications, and clear health/character history</li>
            <li>Applicants planning family settlement (partner/children options available)</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">How We Help (End-to-End)</h2>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Eligibility & points check (SMC/Green List/AEWV)</li>
            <li>ANZSCO role mapping & employer targeting</li>
            <li>Evidence build (qualifications, English, police/medical)</li>
            <li>Application filing & case management</li>
            <li>Landing & settlement guidance</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Documents to Prepare</h2>
          <p className="text-muted-foreground">
            Passport • CV • Qualification proofs/assessments • Employment offer/contract • English test (if required) • Police & medicals • Civil status/family docs
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">FAQs</h2>
          
          <div className="space-y-6">
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
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Call to Action</h2>
          <h3 className="text-xl font-medium text-foreground mb-4">Ready to move to New Zealand?</h3>
          <p className="text-muted-foreground">
            Get your free pre-assessment today. We'll confirm your best pathway, fix the evidence gaps, and manage your case from offer to grant.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}