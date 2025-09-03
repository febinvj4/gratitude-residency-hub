import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, FileText, MapPin, Heart, Plane } from "lucide-react";
import { Link } from "react-router-dom";

export default function AustraliaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
              🦘 Australian Visa Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Subclass 189, 190, 491, Visitor Visa & Partner Visa
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Australia offers multiple migration pathways for skilled professionals, families, and visitors. Understanding the eligibility criteria, benefits, and application process for each visa subclass is essential for a successful outcome. Below is a comprehensive guide to the most popular visas.
            </p>
          </div>
        </div>
      </section>

      {/* Visa Sections */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Subclass 189 */}
          <Card className="p-8">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-foreground flex items-center gap-3">
                🇦🇺 Subclass 189 – Skilled Independent Visa
              </CardTitle>
              <CardDescription className="text-lg">
                The Subclass 189 Visa is one of the most sought-after Australia PR visas. It allows skilled workers to live and work anywhere in Australia as a permanent resident, without needing sponsorship from a State/Territory or an employer.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  ✅ Key Features:
                </h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Permanent residency from the date of grant.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Freedom to live and work in any state or territory in Australia.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Access to Medicare, study rights, and eligibility for citizenship after fulfilling residency requirements.
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  📌 Eligibility Criteria:
                </h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Must receive an invitation through SkillSelect.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Be under 45 years old at the time of invitation.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Nominate an occupation on the Skilled Occupation List.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Obtain a positive skills assessment from the relevant authority.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Meet the points test (minimum 65 points; higher scores improve chances).
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Demonstrate competent English (IELTS 6 or equivalent minimum).
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Satisfy health and character requirements.
                  </li>
                </ul>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  💡 Why Choose 189?
                </h4>
                <p className="text-muted-foreground">
                  This is the best pathway for highly skilled professionals with strong points scores who want maximum flexibility and independence in settling anywhere in Australia.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Subclass 190 */}
          <Card className="p-8">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-foreground flex items-center gap-3">
                🌏 Subclass 190 – Skilled Nominated Visa
              </CardTitle>
              <CardDescription className="text-lg">
                The Subclass 190 Visa is a state-sponsored permanent residency visa. It suits applicants whose occupations are in demand in specific Australian states or territories.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  ✅ Key Features:
                </h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Permanent residency with all associated benefits.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Nomination by a State or Territory adds 5 extra points to your points test.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Commitment to live and work in the nominating State/Territory for at least 2 years.
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  📌 Eligibility Criteria:
                </h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Must receive an invitation to apply.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Under 45 years at the time of invitation.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Nominate an occupation from the State/Territory Skilled Occupation List.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Secure a positive skills assessment.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Meet the 65-point minimum, with additional points for state nomination.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Have competent English.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Meet health and character requirements.
                  </li>
                </ul>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  💡 Why Choose 190?
                </h4>
                <p className="text-muted-foreground">
                  Perfect for applicants with strong profiles who may not score high enough for Subclass 189 but can secure state nomination support.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Subclass 491 */}
          <Card className="p-8">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-foreground flex items-center gap-3">
                🏡 Subclass 491 – Skilled Work Regional (Provisional) Visa
              </CardTitle>
              <CardDescription className="text-lg">
                The Subclass 491 Visa is a provisional visa designed to encourage migration to regional Australia. It is one of the most common stepping stones to permanent residency through Subclass 191.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  ✅ Key Features:
                </h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    5-year provisional visa.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Pathway to permanent residency (Subclass 191) after 3 years of living and working in regional Australia.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Extra 15 points awarded for state/territory nomination or family sponsorship.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Must live, work, and study in a designated regional area.
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  📌 Eligibility Criteria:
                </h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Must receive an invitation.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Under 45 years of age.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Nominate an occupation on the relevant skilled occupation list.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Positive skills assessment required.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Sponsored by either a State or Territory government, OR an eligible relative living in a designated regional area.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Meet the points test and English requirements.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Health and character requirements must be satisfied.
                  </li>
                </ul>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  💡 Why Choose 491?
                </h4>
                <p className="text-muted-foreground">
                  Ideal for those who are open to living in regional Australia and want a faster pathway to PR compared to waiting indefinitely for Subclass 189.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Visitor Visa */}
          <Card className="p-8">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-foreground flex items-center gap-3">
                ✈️ Subclass 600 – Visitor Visa
              </CardTitle>
              <CardDescription className="text-lg">
                The Visitor Visa (Subclass 600) allows short-term travel to Australia for tourism, family visits, or business visitor activities.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  ✅ Streams Available:
                </h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Tourist Stream – visit family, friends, or holiday in Australia.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Sponsored Family Stream – requires sponsorship by an Australian family member.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Business Visitor Stream – attend business meetings, conferences, or negotiations.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Approved Destination Status Stream – for group tours from specific countries.
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  📌 Eligibility Criteria:
                </h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Genuine temporary entrant requirement (must show strong ties to home country).
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Demonstrate financial capacity to cover stay and travel.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Meet health and character requirements.
                  </li>
                </ul>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  ⏳ Duration:
                </h4>
                <p className="text-muted-foreground">
                  Stay is usually 3, 6, or 12 months, depending on the visa grant.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Partner Visa */}
          <Card className="p-8">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-foreground flex items-center gap-3">
                ❤️ Partner Visas – Subclass 820/801 (Onshore) & Subclass 309/100 (Offshore)
              </CardTitle>
              <CardDescription className="text-lg">
                The Partner Visa allows the spouse or de facto partner of an Australian citizen, permanent resident, or eligible New Zealand citizen to live in Australia.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  ✅ Key Features:
                </h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Temporary visa (Subclass 820 or 309) → leads to permanent visa (Subclass 801 or 100).
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Grants full work and study rights.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Access to Medicare upon temporary visa grant.
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  📌 Eligibility Criteria:
                </h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Must be in a genuine and continuing relationship (married or de facto).
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Partner must be an eligible sponsor.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Provide relationship evidence: Joint finances, shared household, social recognition, commitment.
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Meet health and character requirements.
                  </li>
                </ul>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  💡 Why Choose Partner Visa?
                </h4>
                <p className="text-muted-foreground">
                  This is the pathway to family reunification in Australia, offering a clear route to permanent residency and eventually citizenship.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Final Thoughts */}
          <Card className="p-8 bg-primary/5">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-foreground flex items-center gap-3">
                🔑 Final Thoughts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-lg">
                Choosing the right visa depends on your profile, occupation, family situation, and future goals.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">189</span>
                    <div>
                      <h4 className="font-semibold text-foreground">189 Visa:</h4>
                      <p className="text-sm text-muted-foreground">Best for high-scoring skilled applicants wanting flexibility.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">190</span>
                    <div>
                      <h4 className="font-semibold text-foreground">190 Visa:</h4>
                      <p className="text-sm text-muted-foreground">Suitable for skilled workers seeking state support.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">491</span>
                    <div>
                      <h4 className="font-semibold text-foreground">491 Visa:</h4>
                      <p className="text-sm text-muted-foreground">Great for those open to regional Australia with a faster PR pathway.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">600</span>
                    <div>
                      <h4 className="font-semibold text-foreground">600 Visitor Visa:</h4>
                      <p className="text-sm text-muted-foreground">Perfect for short-term tourism, family, or business visits.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">❤️</span>
                    <div>
                      <h4 className="font-semibold text-foreground">Partner Visa:</h4>
                      <p className="text-sm text-muted-foreground">For spouses and partners of Australians seeking permanent settlement.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg mt-8">
                <p className="text-muted-foreground text-center">
                  At <strong>Gratitude Residency and Citizenship</strong>, we provide expert guidance on skills assessments, points calculation, state nominations, and visa lodgement to ensure the highest chance of success.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Ready to Start Your Australia Journey?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get a free assessment and discover which Australia immigration program is right for you.
              </p>
              <div className="flex justify-center">
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