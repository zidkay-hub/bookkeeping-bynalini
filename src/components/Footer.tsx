import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t-4 border-gold shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-bold mb-2">Bookkeeping by Nalini</h3>
          <p className="text-gray-400 mb-6 max-w-xs">
            Helping small businesses save time, stay organized, and focus on growth with professional bookkeeping services.
          </p>
          <div className="flex space-x-4">
            <a href="https://web.facebook.com/profile.php?id=61583864663666" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-gold hover:text-navy transition-all">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/bookkeepingbynalini/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-gold hover:text-navy transition-all">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/bookkeepingbynalini" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-gold hover:text-navy transition-all">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6 text-gold">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/blog" className="text-gray-400 hover:text-gold transition-colors">Insights & Tips</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-gold transition-colors">Contact Us</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-gold transition-colors">Book Consultation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6 text-gold">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 text-gray-400">
              <Phone size={18} className="text-gold" />
              <span>775-560-9148</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-400">
              <Mail size={18} className="text-gold" />
              <span>bookkeepingbynalini@gmail.com</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-400">
              <MapPin size={18} className="text-gold" />
              <span>Sparks, Nevada, United States</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>© 2026 Bookkeeping by Nalini. All rights reserved.</p>
      </div>
    </footer>
  );
}
