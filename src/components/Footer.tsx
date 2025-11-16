import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-secondary" />
              <span className="font-bold text-xl">JLT Math Tutor</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Expert math tutoring in Jumeirah Lakes Towers, Dubai. Specializing in PYP, MYP, IBDP, IGCSE, AS & A Level.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-secondary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-secondary transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Curricula */}
          <div>
            <h3 className="font-semibold mb-4">Curricula Offered</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Primary Years Programme (PYP)</li>
              <li>Middle Years Programme (MYP)</li>
              <li>IB Diploma Programme (IBDP)</li>
              <li>IGCSE</li>
              <li>AS & A Level</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Jumeirah Lakes Towers, Dubai</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <a href="tel:+971501234567" className="hover:text-secondary transition-colors">
                  +971 50 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <a href="mailto:tutor@jltmath.com" className="hover:text-secondary transition-colors">
                  tutor@jltmath.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} JLT Math Tutor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
