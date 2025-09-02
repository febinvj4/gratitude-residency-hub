import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
const socialLinks = [{
  icon: Facebook,
  href: "#",
  label: "Facebook"
}, {
  icon: Twitter,
  href: "#",
  label: "Twitter"
}, {
  icon: Linkedin,
  href: "#",
  label: "LinkedIn"
}, {
  icon: Instagram,
  href: "#",
  label: "Instagram"
}];
export function Footer() {
  return <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-center">
          {/* Company Info */}
          <div className="max-w-md space-y-6 text-center">
            <div>
              
              <h3 className="text-xl font-semibold mb-2 my-0 py-0">Gratitude Residency & Citizenship</h3>
              <p className="text-primary-foreground/80 text-sm">
                Your trusted partner in global immigration and citizenship services. 
                Making dreams come true for over 8 years.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span className="text-sm">info@grcs.world</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span className="text-sm">+971 58 512 5113</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5" />
                <span className="text-sm">SPC Sharjah, United Arab Emirates</span>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => <a key={index} href={social.href} className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors" aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </a>)}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="text-center">
            <p className="text-primary-foreground/60 text-sm">© 2025 Gratitude Residency and Citizenship. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>;
}