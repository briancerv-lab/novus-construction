import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-novus-slate text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-novus-orange flex items-center justify-center text-white font-heading font-bold text-xl">
                N
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                NOVUS <span className="text-gray-400 font-normal">CONSTRUCTION INC.</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Precision Construction for Southern California’s Premium Properties. From custom ADUs to commercial build-outs, we deliver uncompromising quality.
            </p>
            <div className="inline-block border border-gray-600 px-4 py-2 rounded-sm text-xs font-mono text-gray-300">
              CSLB License #1133226
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-novus-orange transition-colors">ADU Construction</Link></li>
              <li><Link to="/services" className="hover:text-novus-orange transition-colors">Full Home Remodels</Link></li>
              <li><Link to="/services" className="hover:text-novus-orange transition-colors">Kitchen & Bath</Link></li>
              <li><Link to="/services" className="hover:text-novus-orange transition-colors">Commercial TI</Link></li>
              <li><Link to="/services" className="hover:text-novus-orange transition-colors">Structural Framing</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Service Areas</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Los Angeles County</li>
              <li>Orange County</li>
              <li>San Diego County</li>
              <li>Ventura County</li>
              <li>Riverside County</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-novus-orange shrink-0" />
                <span>9730 53rd St<br />Jurupa Valley, CA 92509</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-novus-orange shrink-0" />
                <a href="tel:+19519030824" className="hover:text-white transition-colors">(951) 903-0824</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-novus-orange shrink-0" />
                <a href="mailto:info@novusconstructioninc.com" className="hover:text-white transition-colors">info@novusconstructioninc.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-novus-orange shrink-0" />
                <span>Mon-Fri: 7am - 5pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Novus Construction Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
