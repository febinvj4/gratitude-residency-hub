import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
const footerSections = [{
  title: "Services",
  links: [{
    name: "Australia Immigration",
    href: "/australia"
  }, {
    name: "Canada Immigration",
    href: "/canada"
  }, {
    name: "New Zealand",
    href: "/new-zealand"
  }, {
    name: "Europe Programs",
    href: "/europe"
  }, {
    name: "Second Passport",
    href: "/second-passport"
  }]
}, {
  title: "Resources",
  links: [{
    name: "Immigration Calculator",
    href: "/calculator"
  }, {
    name: "Document Checklist",
    href: "/documents"
  }, {
    name: "Success Stories",
    href: "/success-stories"
  }, {
    name: "Blog",
    href: "/blog"
  }, {
    name: "FAQ",
    href: "/faq"
  }]
}, {
  title: "Company",
  links: [{
    name: "About Us",
    href: "/about"
  }, {
    name: "Our Team",
    href: "/team"
  }, {
    name: "Career",
    href: "/career"
  }, {
    name: "Contact",
    href: "/contact"
  }, {
    name: "Privacy Policy",
    href: "/privacy"
  }]
}];
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
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
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

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => <a key={index} href={social.href} className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors" aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </a>)}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">© 2025 Gratitude Residency and Citizenship. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}