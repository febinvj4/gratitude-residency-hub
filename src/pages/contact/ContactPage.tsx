import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const countries = [
  { code: "+1", name: "United States/Canada", flag: "🇺🇸" },
  { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
  { code: "+61", name: "Australia", flag: "🇦🇺" },
  { code: "+91", name: "India", flag: "🇮🇳" },
  { code: "+86", name: "China", flag: "🇨🇳" },
  { code: "+49", name: "Germany", flag: "🇩🇪" },
  { code: "+33", name: "France", flag: "🇫🇷" },
  { code: "+81", name: "Japan", flag: "🇯🇵" },
  { code: "+55", name: "Brazil", flag: "🇧🇷" },
  { code: "+27", name: "South Africa", flag: "🇿🇦" },
  { code: "+971", name: "UAE", flag: "🇦🇪" },
  { code: "+65", name: "Singapore", flag: "🇸🇬" },
  { code: "+852", name: "Hong Kong", flag: "🇭🇰" },
];

const qualifications = [
  "High School/Secondary Education",
  "Diploma/Certificate",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD/Doctorate",
  "Professional Certification"
];

const migrationOptions = [
  "Australia - Skilled Migration",
  "Canada - Express Entry",
  "Europe - Work Permits",
  "Europe - Job Seeker Visa",
  "Visit Visa Consultation"
];

export function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+1",
    phone: "",
    qualification: "",
    profession: "",
    experience: "",
    migrateTo: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted Successfully",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Contact <span className="text-primary">Gratitude Residency</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Start your immigration journey with expert guidance tailored to your unique situation
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Company Description */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Your Trusted Immigration Partner
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Gratitude Residency & Citizenship is a premier immigration consultancy specializing in 
                      skilled migration, business investment visas, and citizenship programs worldwide. With 
                      years of expertise in international immigration law, we guide professionals, entrepreneurs, 
                      and families through complex visa processes.
                    </p>
                    <p>
                      Our comprehensive services cover Australia's skilled migration programs, Canada's Express 
                      Entry system, European work permits, and investment-based residency options. We provide 
                      personalized consultation, document preparation, application tracking, and ongoing support 
                      throughout your immigration journey.
                    </p>
                    <p>
                      From initial eligibility assessment to final visa approval, our experienced team ensures 
                      maximum success rates while maintaining complete transparency. We understand that immigration 
                      is a life-changing decision, and we're committed to making your transition smooth and successful.
                    </p>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Why Choose Us?</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center"><span className="text-primary mr-2">✓</span>Expert immigration lawyers and consultants</li>
                    <li className="flex items-center"><span className="text-primary mr-2">✓</span>95% success rate in visa applications</li>
                    <li className="flex items-center"><span className="text-primary mr-2">✓</span>Personalized consultation and case management</li>
                    <li className="flex items-center"><span className="text-primary mr-2">✓</span>Comprehensive post-landing support services</li>
                    <li className="flex items-center"><span className="text-primary mr-2">✓</span>Transparent pricing with no hidden costs</li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Get Free Consultation</CardTitle>
                  <p className="text-center text-muted-foreground">
                    Fill out this form and our experts will contact you within 24 hours
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email address"
                        required
                      />
                    </div>

                    <div>
                      <Label>Phone Number *</Label>
                      <div className="flex gap-2">
                        <Select value={formData.countryCode} onValueChange={(value) => handleInputChange("countryCode", value)}>
                          <SelectTrigger className="w-[140px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="max-h-60">
                            {countries.map((country) => (
                              <SelectItem key={country.code} value={country.code}>
                                <span className="flex items-center gap-2">
                                  {country.flag} {country.code}
                                </span>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="Phone number"
                          className="flex-1"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label>Highest Qualification *</Label>
                      <Select value={formData.qualification} onValueChange={(value) => handleInputChange("qualification", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your highest qualification" />
                        </SelectTrigger>
                        <SelectContent>
                          {qualifications.map((qualification) => (
                            <SelectItem key={qualification} value={qualification}>
                              {qualification}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="profession">Current Profession *</Label>
                      <Input
                        id="profession"
                        type="text"
                        value={formData.profession}
                        onChange={(e) => handleInputChange("profession", e.target.value)}
                        placeholder="e.g., Software Engineer, Doctor, Teacher"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="experience">Professional Experience</Label>
                      <Textarea
                        id="experience"
                        value={formData.experience}
                        onChange={(e) => handleInputChange("experience", e.target.value)}
                        placeholder="Brief description of your work experience (years, key skills, achievements)"
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label>Migrate To *</Label>
                      <Select value={formData.migrateTo} onValueChange={(value) => handleInputChange("migrateTo", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your preferred destination" />
                        </SelectTrigger>
                        <SelectContent>
                          {migrationOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <Button type="submit" className="w-full">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}