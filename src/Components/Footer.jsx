import React from 'react'
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Henry Young & Co<span className="text-[#0a8a43]">.</span>
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Professional accounting, bookkeeping, and tax advisory services
              designed to give your business financial clarity and a strong
              foundation for growth.
            </p>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Our Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-blue-500 cursor-pointer">About Us</li>
              <li className="hover:text-blue-500 cursor-pointer">Careers</li>
              <li className="hover:text-blue-500 cursor-pointer">Our Team</li>
              <li className="hover:text-blue-500 cursor-pointer">Blog</li>
              <li className="hover:text-blue-500 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-blue-500 cursor-pointer">
                Bookkeeping & Records
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Tax Filing & Compliance
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Payroll Management
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Audit Support
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Business Advisory
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li>123 Business Drive, Victoria Island, Lagos, NG</li>
              <li>+234 700 123 4567</li>
              <li>info@Henry Young & Co..com</li>
            </ul>

            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-blue-500">
                <FiFacebook />
              </a>
              <a href="#" className="hover:text-blue-500">
                <FiLinkedin />
              </a>
              <a href="#" className="hover:text-blue-500">
                <FiInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-16 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Henry Young & Co. Accounting Services. All
          rights reserved.
        </div>
      </footer>
  )
}

export default Footer
