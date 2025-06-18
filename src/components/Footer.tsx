
import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Tanzania Explorer</span>
            </div>
            <p className="text-gray-300">
              Discover the breathtaking beauty of Tanzania with unforgettable safari adventures, 
              cultural experiences, and pristine beaches.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/destinations" className="text-gray-300 hover:text-primary transition-colors">Destinations</Link></li>
              <li><Link to="/safaris" className="text-gray-300 hover:text-primary transition-colors">Safari Tours</Link></li>
              <li><Link to="/culture" className="text-gray-300 hover:text-primary transition-colors">Culture</Link></li>
              <li><Link to="/hotels" className="text-gray-300 hover:text-primary transition-colors">Hotels</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-primary transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Top Destinations</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Serengeti National Park</span></li>
              <li><span className="text-gray-300">Mount Kilimanjaro</span></li>
              <li><span className="text-gray-300">Zanzibar Island</span></li>
              <li><span className="text-gray-300">Ngorongoro Crater</span></li>
              <li><span className="text-gray-300">Lake Manyara</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-gray-300">Dar es Salaam, Tanzania</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-300">+255 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-300">info@tanzaniaexplorer.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Tanzania Explorer. All rights reserved.  for Tanzania.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
