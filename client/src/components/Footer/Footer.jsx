import React from 'react'
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accesories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
        <span>FAQ</span>
        <span>Pages</span>
        <span>Stores</span>
        <span>Compare</span>
        <span>Cookies</span>
          
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Discover quality, variety, and unbeatable prices at [Your E-Commerce Website Name]. Shop top products, enjoy secure payments, and experience hassle-free delivery—all designed for your satisfaction</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>"Got questions, feedback, or need assistance? We're here to help! Reach out to us through [mention preferred contact method, e.g., email, phone number, or a contact form on your website]. Our support team is committed to providing quick and efficient responses to ensure your experience is seamless. Don’t hesitate to connect with us—we’d love to hear from you!</span>
        </div>

      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">UPMA STORE</span>
          <span className="copyright">
            © 2024 STORE. All rights reserved.
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>

      </div>
    </div>
  )
}

export default Footer