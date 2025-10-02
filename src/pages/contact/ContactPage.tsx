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
  { code: "+1", name: "United States", flag: "🇺🇸" },
  { code: "+1", name: "Canada", flag: "🇨🇦" },
  { code: "+7", name: "Russia", flag: "🇷🇺" },
  { code: "+7", name: "Kazakhstan", flag: "🇰🇿" },
  { code: "+20", name: "Egypt", flag: "🇪🇬" },
  { code: "+27", name: "South Africa", flag: "🇿🇦" },
  { code: "+30", name: "Greece", flag: "🇬🇷" },
  { code: "+31", name: "Netherlands", flag: "🇳🇱" },
  { code: "+32", name: "Belgium", flag: "🇧🇪" },
  { code: "+33", name: "France", flag: "🇫🇷" },
  { code: "+34", name: "Spain", flag: "🇪🇸" },
  { code: "+36", name: "Hungary", flag: "🇭🇺" },
  { code: "+39", name: "Italy", flag: "🇮🇹" },
  { code: "+40", name: "Romania", flag: "🇷🇴" },
  { code: "+41", name: "Switzerland", flag: "🇨🇭" },
  { code: "+43", name: "Austria", flag: "🇦🇹" },
  { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
  { code: "+45", name: "Denmark", flag: "🇩🇰" },
  { code: "+46", name: "Sweden", flag: "🇸🇪" },
  { code: "+47", name: "Norway", flag: "🇳🇴" },
  { code: "+48", name: "Poland", flag: "🇵🇱" },
  { code: "+49", name: "Germany", flag: "🇩🇪" },
  { code: "+51", name: "Peru", flag: "🇵🇪" },
  { code: "+52", name: "Mexico", flag: "🇲🇽" },
  { code: "+53", name: "Cuba", flag: "🇨🇺" },
  { code: "+54", name: "Argentina", flag: "🇦🇷" },
  { code: "+55", name: "Brazil", flag: "🇧🇷" },
  { code: "+56", name: "Chile", flag: "🇨🇱" },
  { code: "+57", name: "Colombia", flag: "🇨🇴" },
  { code: "+58", name: "Venezuela", flag: "🇻🇪" },
  { code: "+60", name: "Malaysia", flag: "🇲🇾" },
  { code: "+61", name: "Australia", flag: "🇦🇺" },
  { code: "+62", name: "Indonesia", flag: "🇮🇩" },
  { code: "+63", name: "Philippines", flag: "🇵🇭" },
  { code: "+64", name: "New Zealand", flag: "🇳🇿" },
  { code: "+65", name: "Singapore", flag: "🇸🇬" },
  { code: "+66", name: "Thailand", flag: "🇹🇭" },
  { code: "+81", name: "Japan", flag: "🇯🇵" },
  { code: "+82", name: "South Korea", flag: "🇰🇷" },
  { code: "+84", name: "Vietnam", flag: "🇻🇳" },
  { code: "+86", name: "China", flag: "🇨🇳" },
  { code: "+90", name: "Turkey", flag: "🇹🇷" },
  { code: "+91", name: "India", flag: "🇮🇳" },
  { code: "+92", name: "Pakistan", flag: "🇵🇰" },
  { code: "+93", name: "Afghanistan", flag: "🇦🇫" },
  { code: "+94", name: "Sri Lanka", flag: "🇱🇰" },
  { code: "+95", name: "Myanmar", flag: "🇲🇲" },
  { code: "+98", name: "Iran", flag: "🇮🇷" },
  { code: "+212", name: "Morocco", flag: "🇲🇦" },
  { code: "+213", name: "Algeria", flag: "🇩🇿" },
  { code: "+216", name: "Tunisia", flag: "🇹🇳" },
  { code: "+218", name: "Libya", flag: "🇱🇾" },
  { code: "+220", name: "Gambia", flag: "🇬🇲" },
  { code: "+221", name: "Senegal", flag: "🇸🇳" },
  { code: "+222", name: "Mauritania", flag: "🇲🇷" },
  { code: "+223", name: "Mali", flag: "🇲🇱" },
  { code: "+224", name: "Guinea", flag: "🇬🇳" },
  { code: "+225", name: "Ivory Coast", flag: "🇨🇮" },
  { code: "+226", name: "Burkina Faso", flag: "🇧🇫" },
  { code: "+227", name: "Niger", flag: "🇳🇪" },
  { code: "+228", name: "Togo", flag: "🇹🇬" },
  { code: "+229", name: "Benin", flag: "🇧🇯" },
  { code: "+230", name: "Mauritius", flag: "🇲🇺" },
  { code: "+231", name: "Liberia", flag: "🇱🇷" },
  { code: "+232", name: "Sierra Leone", flag: "🇸🇱" },
  { code: "+233", name: "Ghana", flag: "🇬🇭" },
  { code: "+234", name: "Nigeria", flag: "🇳🇬" },
  { code: "+235", name: "Chad", flag: "🇹🇩" },
  { code: "+236", name: "Central African Republic", flag: "🇨🇫" },
  { code: "+237", name: "Cameroon", flag: "🇨🇲" },
  { code: "+238", name: "Cape Verde", flag: "🇨🇻" },
  { code: "+239", name: "São Tomé and Príncipe", flag: "🇸🇹" },
  { code: "+240", name: "Equatorial Guinea", flag: "🇬🇶" },
  { code: "+241", name: "Gabon", flag: "🇬🇦" },
  { code: "+242", name: "Republic of the Congo", flag: "🇨🇬" },
  { code: "+243", name: "Democratic Republic of the Congo", flag: "🇨🇩" },
  { code: "+244", name: "Angola", flag: "🇦🇴" },
  { code: "+245", name: "Guinea-Bissau", flag: "🇬🇼" },
  { code: "+246", name: "British Indian Ocean Territory", flag: "🇮🇴" },
  { code: "+248", name: "Seychelles", flag: "🇸🇨" },
  { code: "+249", name: "Sudan", flag: "🇸🇩" },
  { code: "+250", name: "Rwanda", flag: "🇷🇼" },
  { code: "+251", name: "Ethiopia", flag: "🇪🇹" },
  { code: "+252", name: "Somalia", flag: "🇸🇴" },
  { code: "+253", name: "Djibouti", flag: "🇩🇯" },
  { code: "+254", name: "Kenya", flag: "🇰🇪" },
  { code: "+255", name: "Tanzania", flag: "🇹🇿" },
  { code: "+256", name: "Uganda", flag: "🇺🇬" },
  { code: "+257", name: "Burundi", flag: "🇧🇮" },
  { code: "+258", name: "Mozambique", flag: "🇲🇿" },
  { code: "+260", name: "Zambia", flag: "🇿🇲" },
  { code: "+261", name: "Madagascar", flag: "🇲🇬" },
  { code: "+262", name: "Réunion", flag: "🇷🇪" },
  { code: "+263", name: "Zimbabwe", flag: "🇿🇼" },
  { code: "+264", name: "Namibia", flag: "🇳🇦" },
  { code: "+265", name: "Malawi", flag: "🇲🇼" },
  { code: "+266", name: "Lesotho", flag: "🇱🇸" },
  { code: "+267", name: "Botswana", flag: "🇧🇼" },
  { code: "+268", name: "Eswatini", flag: "🇸🇿" },
  { code: "+269", name: "Comoros", flag: "🇰🇲" },
  { code: "+290", name: "Saint Helena", flag: "🇸🇭" },
  { code: "+291", name: "Eritrea", flag: "🇪🇷" },
  { code: "+297", name: "Aruba", flag: "🇦🇼" },
  { code: "+298", name: "Faroe Islands", flag: "🇫🇴" },
  { code: "+299", name: "Greenland", flag: "🇬🇱" },
  { code: "+350", name: "Gibraltar", flag: "🇬🇮" },
  { code: "+351", name: "Portugal", flag: "🇵🇹" },
  { code: "+352", name: "Luxembourg", flag: "🇱🇺" },
  { code: "+353", name: "Ireland", flag: "🇮🇪" },
  { code: "+354", name: "Iceland", flag: "🇮🇸" },
  { code: "+355", name: "Albania", flag: "🇦🇱" },
  { code: "+356", name: "Malta", flag: "🇲🇹" },
  { code: "+357", name: "Cyprus", flag: "🇨🇾" },
  { code: "+358", name: "Finland", flag: "🇫🇮" },
  { code: "+359", name: "Bulgaria", flag: "🇧🇬" },
  { code: "+370", name: "Lithuania", flag: "🇱🇹" },
  { code: "+371", name: "Latvia", flag: "🇱🇻" },
  { code: "+372", name: "Estonia", flag: "🇪🇪" },
  { code: "+373", name: "Moldova", flag: "🇲🇩" },
  { code: "+374", name: "Armenia", flag: "🇦🇲" },
  { code: "+375", name: "Belarus", flag: "🇧🇾" },
  { code: "+376", name: "Andorra", flag: "🇦🇩" },
  { code: "+377", name: "Monaco", flag: "🇲🇨" },
  { code: "+378", name: "San Marino", flag: "🇸🇲" },
  { code: "+380", name: "Ukraine", flag: "🇺🇦" },
  { code: "+381", name: "Serbia", flag: "🇷🇸" },
  { code: "+382", name: "Montenegro", flag: "🇲🇪" },
  { code: "+383", name: "Kosovo", flag: "🇽🇰" },
  { code: "+385", name: "Croatia", flag: "🇭🇷" },
  { code: "+386", name: "Slovenia", flag: "🇸🇮" },
  { code: "+387", name: "Bosnia and Herzegovina", flag: "🇧🇦" },
  { code: "+389", name: "North Macedonia", flag: "🇲🇰" },
  { code: "+420", name: "Czech Republic", flag: "🇨🇿" },
  { code: "+421", name: "Slovakia", flag: "🇸🇰" },
  { code: "+423", name: "Liechtenstein", flag: "🇱🇮" },
  { code: "+500", name: "Falkland Islands", flag: "🇫🇰" },
  { code: "+501", name: "Belize", flag: "🇧🇿" },
  { code: "+502", name: "Guatemala", flag: "🇬🇹" },
  { code: "+503", name: "El Salvador", flag: "🇸🇻" },
  { code: "+504", name: "Honduras", flag: "🇭🇳" },
  { code: "+505", name: "Nicaragua", flag: "🇳🇮" },
  { code: "+506", name: "Costa Rica", flag: "🇨🇷" },
  { code: "+507", name: "Panama", flag: "🇵🇦" },
  { code: "+508", name: "Saint Pierre and Miquelon", flag: "🇵🇲" },
  { code: "+509", name: "Haiti", flag: "🇭🇹" },
  { code: "+590", name: "Guadeloupe", flag: "🇬🇵" },
  { code: "+591", name: "Bolivia", flag: "🇧🇴" },
  { code: "+592", name: "Guyana", flag: "🇬🇾" },
  { code: "+593", name: "Ecuador", flag: "🇪🇨" },
  { code: "+594", name: "French Guiana", flag: "🇬🇫" },
  { code: "+595", name: "Paraguay", flag: "🇵🇾" },
  { code: "+596", name: "Martinique", flag: "🇲🇶" },
  { code: "+597", name: "Suriname", flag: "🇸🇷" },
  { code: "+598", name: "Uruguay", flag: "🇺🇾" },
  { code: "+599", name: "Curaçao", flag: "🇨🇼" },
  { code: "+670", name: "East Timor", flag: "🇹🇱" },
  { code: "+672", name: "Antarctica", flag: "🇦🇶" },
  { code: "+673", name: "Brunei", flag: "🇧🇳" },
  { code: "+674", name: "Nauru", flag: "🇳🇷" },
  { code: "+675", name: "Papua New Guinea", flag: "🇵🇬" },
  { code: "+676", name: "Tonga", flag: "🇹🇴" },
  { code: "+677", name: "Solomon Islands", flag: "🇸🇧" },
  { code: "+678", name: "Vanuatu", flag: "🇻🇺" },
  { code: "+679", name: "Fiji", flag: "🇫🇯" },
  { code: "+680", name: "Palau", flag: "🇵🇼" },
  { code: "+681", name: "Wallis and Futuna", flag: "🇼🇫" },
  { code: "+682", name: "Cook Islands", flag: "🇨🇰" },
  { code: "+683", name: "Niue", flag: "🇳🇺" },
  { code: "+684", name: "American Samoa", flag: "🇦🇸" },
  { code: "+685", name: "Samoa", flag: "🇼🇸" },
  { code: "+686", name: "Kiribati", flag: "🇰🇮" },
  { code: "+687", name: "New Caledonia", flag: "🇳🇨" },
  { code: "+688", name: "Tuvalu", flag: "🇹🇻" },
  { code: "+689", name: "French Polynesia", flag: "🇵🇫" },
  { code: "+690", name: "Tokelau", flag: "🇹🇰" },
  { code: "+691", name: "Micronesia", flag: "🇫🇲" },
  { code: "+692", name: "Marshall Islands", flag: "🇲🇭" },
  { code: "+850", name: "North Korea", flag: "🇰🇵" },
  { code: "+852", name: "Hong Kong", flag: "🇭🇰" },
  { code: "+853", name: "Macau", flag: "🇲🇴" },
  { code: "+855", name: "Cambodia", flag: "🇰🇭" },
  { code: "+856", name: "Laos", flag: "🇱🇦" },
  { code: "+880", name: "Bangladesh", flag: "🇧🇩" },
  { code: "+886", name: "Taiwan", flag: "🇹🇼" },
  { code: "+960", name: "Maldives", flag: "🇲🇻" },
  { code: "+961", name: "Lebanon", flag: "🇱🇧" },
  { code: "+962", name: "Jordan", flag: "🇯🇴" },
  { code: "+963", name: "Syria", flag: "🇸🇾" },
  { code: "+964", name: "Iraq", flag: "🇮🇶" },
  { code: "+965", name: "Kuwait", flag: "🇰🇼" },
  { code: "+966", name: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+967", name: "Yemen", flag: "🇾🇪" },
  { code: "+968", name: "Oman", flag: "🇴🇲" },
  { code: "+970", name: "Palestine", flag: "🇵🇸" },
  { code: "+971", name: "United Arab Emirates", flag: "🇦🇪" },
  { code: "+972", name: "Israel", flag: "🇮🇱" },
  { code: "+973", name: "Bahrain", flag: "🇧🇭" },
  { code: "+974", name: "Qatar", flag: "🇶🇦" },
  { code: "+975", name: "Bhutan", flag: "🇧🇹" },
  { code: "+976", name: "Mongolia", flag: "🇲🇳" },
  { code: "+977", name: "Nepal", flag: "🇳🇵" },
  { code: "+992", name: "Tajikistan", flag: "🇹🇯" },
  { code: "+993", name: "Turkmenistan", flag: "🇹🇲" },
  { code: "+994", name: "Azerbaijan", flag: "🇦🇿" },
  { code: "+995", name: "Georgia", flag: "🇬🇪" },
  { code: "+996", name: "Kyrgyzstan", flag: "🇰🇬" },
  { code: "+998", name: "Uzbekistan", flag: "🇺🇿" }
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
  "Canada - Express Entry",
  "Europe - Work Permits",
  "Europe - Job Seeker Visa",
  "Study Abroad",
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

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const { name, email, countryCode, phone, qualification, profession, experience, migrateTo } = formData;
  
  // Form data is captured but not stored in database yet
  console.log('Form submitted:', {
    full_name: name,
    email_address: email,
    phone_number: `${countryCode}${phone}`,
    highest_qualification: qualification,
    current_profession: profession,
    professional_experience: experience,
    migrate_to: migrateTo,
  });
  
  toast({
    title: "Form Submitted Successfully",
    description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
  });
  
  setFormData({
    name: "",
    email: "",
    countryCode: "+1",
    phone: "",
    qualification: "",
    profession: "",
    experience: "",
    migrateTo: ""
  });
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
