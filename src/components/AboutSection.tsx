import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Clock, ThumbsUp, CheckCircle, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import teamImage from "@/assets/team-consultants.jpg";
import officeImage from "@/assets/office-building.jpg";
const stats = [{
  icon: Users,
  value: "4000+",
  label: "Successful Cases"
}, {
  icon: Clock,
  value: "8+",
  label: "Years Experience"
}, {
  icon: Globe,
  value: "15+",
  label: "Countries Served"
}, {
  icon: ThumbsUp,
  value: "98%",
  label: "Success Rate"
}];
const achievements = ["Licensed Immigration Consultants (RCIC, MARA)", "Member of Professional Immigration Bodies", "Specialized in Complex Cases", "Multi-lingual Support Team", "End-to-End Service Guarantee", "Post-Landing Support Services"];
export function AboutSection() {
  return <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Your Trusted Immigration Partners
              </h2>
              <p className="text-lg text-muted-foreground">
                For over 8 years, Gratitude Residency and Citizenship has been helping individuals 
                and families achieve their immigration dreams. With over 4000 successful cases, 
                we have the expertise and dedication to guide you through every step of your journey.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-3">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>)}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Why Choose Us?</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{achievement}</span>
                  </div>)}
              </div>
            </div>

            
          </div>

          <div className="space-y-6">
            <div className="relative">
              <img src={teamImage} alt="Our professional immigration consulting team" className="rounded-2xl shadow-large w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src={officeImage} alt="Our modern office" className="rounded-lg shadow-medium w-full h-32 object-cover" />
              <div className="bg-primary rounded-lg p-4 flex flex-col justify-center text-primary-foreground">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}