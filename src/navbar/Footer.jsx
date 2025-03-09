

import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram, FaFacebookMessenger, FaTwitter } from "react-icons/fa";



function Footer() {
  const socialLinks = [
    { href: "https://facebook.com", icon: <FaFacebook className="hover:text-red-600 text-2xl" /> },
    { href: "https://linkedin.com", icon: <FaLinkedin className="hover:text-red-700 text-2xl" /> },
    { href: "https://instagram.com", icon: <FaInstagram className="hover:text-red-600 text-2xl" /> },
    { href: "https://messenger.com", icon: <FaFacebookMessenger className="hover:text-red-500 text-2xl" /> },
    { href: "https://twitter.com", icon: <FaTwitter className="hover:text-red-400 text-2xl" /> },
  ];

  const menu = [
    { name: "Home", url: "/home" },
    { name: "About me", url: "/aboutme" },
    { name: "Services", url: "/service" },
    { name: "Testimonial", url: "/testmonial" },
    { name: "Address", url: "/address" },
  ];

  const navigate = useNavigate();

  return (
    <footer className="p-5 bg-gray-400 flex flex-col space-y-10 justify-center mt-5 text-center">
      {/* Navigation Links */}
      <nav className="flex justify-center flex-wrap gap-6 font-medium">
        {menu.map((item, index) => (
          <a key={index} className="hover:text-red-600 cursor-pointer" onClick={() => navigate(item.url)}>
            {item.name}
          </a>
        ))}
      </nav>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-5">
        {socialLinks.map((social, index) => (
          <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
            {social.icon}
          </a>
        ))}
      </div>

      {/* Copyright Text */}
      <p className="text-center font-medium">
        &copy; {new Date().getFullYear()} Company Ltd. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
