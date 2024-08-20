import React from 'react';
import './Footer.css';
import { FaTwitter, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-location">
          <FaMapMarkerAlt className="location-icon" />
          <p>
            Unit Office, 5 MAH EME COY,
            <br />
            NCC-VJTI, Matunga, Mumbai, 
            <br />
            Maharashtra-400019, India.
          </p>
        </div>
        <div className="footer-email">
          <MdEmail className="email-icon" />
          <p>ncc_vjti@vjti.ac.in
          </p>
        </div>
        <div className="footer-social">
          <p>Follow us:</p>
          <a href="https://x.com/TEAM5MAHEMECOY" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/ncc_vjti/?locale=%25E5%2588%25B6%25E4%25BD%259C%25E7%2588%25B1%25E6%25B2%2599%25E5%25B0%25BC%25E4%25BA%259A%25E8%2593%259D%25E5%258D%25A1%25E3%2580%2596%25E5%25AE%25A2%25E6%259C%258D%25E5%25A8%2581%25E4%25BF%25A1%252BTG%252F%25E9%25A3%259E%25E6%259C%25BA%253A%2540buth2788%25E3%2580%2597HY8pC%7B%3F%3F%3F%3F1%7D1%25E4%25BF%25A1%252BTG%252F%25E9%25A3%259E%25E6%259C%25BA%253A%2540buth2788%25E3%2580%2597J3W0U%7B%3F%3F%3F%3F1%7DUySwQ&hl=af" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
      <p className="footer-copyright">&copy; 2024 National Cadet Corps, VJTI. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

