import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiGlobe, FiFacebook, FiTwitter, FiInstagram, FiMail, FiPhone, FiMapPin } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiGlobe} className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold">Sky Travels</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted travel companion for discovering amazing destinations around the world.
            </p>
            <div className="flex space-x-4">
              <SafeIcon icon={FiFacebook} className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <SafeIcon icon={FiTwitter} className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <SafeIcon icon={FiInstagram} className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Home</Link></li>
              <li><Link to="/destinations" className="text-gray-400 hover:text-white text-sm">Destinations</Link></li>
              <li><Link to="/bookings" className="text-gray-400 hover:text-white text-sm">Bookings</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMail} className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm">info@skytravels.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiPhone} className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMapPin} className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm">123 Travel St, Adventure City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Sky Travels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;