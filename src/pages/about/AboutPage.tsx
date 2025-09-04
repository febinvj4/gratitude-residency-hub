import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Clock, ThumbsUp, CheckCircle, Globe, Target, Heart, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import teamImage from "@/assets/team-consultants.jpg";
import officeImage from "@/assets/office-building.jpg";

const stats = [
  {
    icon: Users,
    value: "4000+",
    label: "Successful Cases"
  },
  {
    icon: Clock,
    value: "8+",
    label: "Years Experience"
  },
  {
    icon: Globe,
    value: "15+",
    label: "Countries Served"
  },
  {
    icon: ThumbsUp,
    value: "98%",
    label: "Success Rate"
  }
];

const values = [
  {
    icon: Heart,
    title: "Client-Centered Approach",
    description: "Every immigration journey is unique. We provide personalized strategies tailored to your specific circumstances and goals."
  },
  {
    icon: Shield,
    title: "Integrity & Transparency",
    description: "We maintain the highest ethical standards, providing honest assessments and transparent communication throughout your journey."
  },
  {
    icon: Target,
    title: "Excellence in Service",
    description: "Our commitment to excellence drives us to continuously improve our services and stay ahead of changing immigration policies."
  }
];

const teamMembers = [
  {
    name: "Sarah Chen",
    position: "Managing Director & Senior Immigration Consultant",
    credentials: "RCIC, MARA",
    experience: "12+ years in immigration law"
  },
  {
    name: "Michael Thompson",
    position: "Senior Business Migration Specialist",
    credentials: "RCIC, CPA",
    experience: "10+ years in investment migration"
  },
  {
    name: "Dr. Priya Sharma",
    position: "Regional Manager - Asia Pacific",
    credentials: "PhD Immigration Law, MARA", 
    experience: "8+ years in skilled migration"
  }
];

const achievements = [
  "Licensed Immigration Consultants (RCIC, MARA)",
  "Member of Professional Immigration Bodies",
  "Specialized in Complex Cases",
  "Multi-lingual Support Team",
  "End-to-End Service Guarantee",
  "Post-Landing Support Services"
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary-glow overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-glow/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            About Gratitude Residency & Citizenship
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Your trusted partner in achieving global mobility and residency dreams. 
            With over 8 years of expertise, we've helped thousands secure their future abroad.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Who We Are
                </h2>
                <p className="text-lg text-muted-foreground">
                  Gratitude Residency and Citizenship is a leading immigration consultancy firm 
                  dedicated to helping individuals and families achieve their global mobility goals. 
                  Founded on the principles of excellence, integrity, and client satisfaction, we 
                  have built a reputation as one of the most trusted names in the immigration industry.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our team of licensed immigration consultants and legal experts brings together 
                  decades of combined experience in immigration law, policy analysis, and case 
                  management. We specialize in skilled migration, business immigration, and 
                  investment-based residency programs across multiple jurisdictions.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-3">
                        <stat.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <img 
                  src={teamImage} 
                  alt="Our professional immigration consulting team" 
                  className="rounded-2xl shadow-large w-full" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={officeImage} 
                  alt="Our modern office" 
                  className="rounded-lg shadow-medium w-full h-32 object-cover" 
                />
                <div className="bg-primary rounded-lg p-4 flex flex-col justify-center text-primary-foreground">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm">Customer Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These fundamental principles guide every interaction and decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <value.icon className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Why Choose Gratitude Residency & Citizenship?
                </h2>
                <p className="text-lg text-muted-foreground">
                  We understand that immigration is more than just paperwork – it's about 
                  building a new future for you and your family. Here's what sets us apart:
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link to="/contact-us">Book Free Consultation</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-8">
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Professional Recognition</h3>
                  <p className="text-muted-foreground mb-4">
                    Our consultants are licensed members of professional immigration bodies 
                    including RCIC and MARA, ensuring you receive advice from qualified experts.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <Globe className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Global Reach</h3>
                  <p className="text-muted-foreground mb-4">
                    With extensive knowledge of immigration policies across 15+ countries, 
                    we help you choose the best pathway for your unique circumstances.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}