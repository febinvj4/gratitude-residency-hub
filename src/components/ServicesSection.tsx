import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, MapPin, Plane, Building, GraduationCap, Heart, Briefcase, FileText } from "lucide-react";
import { Link } from "react-router-dom";
const services = [{
  icon: Globe,
  title: "Australia",
  description: "Skilled Migration (189/190/491), Partner Visa, Study & Business Visas",
  features: ["Points-based system", "State nomination", "Regional opportunities"],
  href: "/australia",
  color: "text-green-600"
}, {
  icon: MapPin,
  title: "Canada",
  description: "Express Entry, PNP, Atlantic Immigration, LMIA, Study & Visitor Visas",
  features: ["Express Entry", "Provincial nomination", "Work permits"],
  href: "/canada",
  color: "text-red-600"
}, {
  icon: Plane,
  title: "New Zealand",
  description: "Skilled Migrant Category, Work Visa, Student & Visitor Visas",
  features: ["Skills shortage list", "Work to residence", "Quality of life"],
  href: "/new-zealand",
  color: "text-blue-600"
}, {
  icon: Building,
  title: "Europe",
  description: "Germany, Portugal, Slovakia, Serbia, Bulgaria - Work & Investment Visas",
  features: ["EU access", "Work permits", "Investment programs"],
  href: "/europe",
  color: "text-purple-600"
}, {
  icon: FileText,
  title: "Second Passport",
  description: "Investment Programs, Citizenship by Descent, Naturalization",
  features: ["Dual citizenship", "Investment routes", "Heritage programs"],
  href: "/second-passport",
  color: "text-amber-600"
}];
export function ServicesSection() {
  return <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Immigration Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive immigration solutions tailored to your unique needs. 
            From skilled migration to second citizenship, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-border hover:border-primary/20">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors`}>
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>)}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                  <Link to={service.href}>Explore Options</Link>
                </Button>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            
          </Button>
        </div>
      </div>
    </section>;
}