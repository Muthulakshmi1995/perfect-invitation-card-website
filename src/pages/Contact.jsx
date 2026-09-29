import React, {useEffect, useMemo, useState} from 'react';
import {Link, useLocation, useNavigate, useParams, Navigate} from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import ProductCard from '../components/ProductCard.jsx';
import Empty from '../components/Empty.jsx';
import {img, products, categoryCards, collectionCards, weddingFilters} from '../data/products.js';

export default function Contact(){return <main className="page info"><p className="eyebrow">We would love to hear from you</p><h1>Contact Us</h1><div className="contact-grid"><div><h2>Plan your perfect invitation</h2><p>Use the form to send a demo enquiry.</p></div><form className="contact-form" onSubmit={e=>{e.preventDefault();alert('Thank you! Your message has been submitted.')}}><input required placeholder="Your name"/><input required type="email" placeholder="Email"/><textarea required placeholder="Message" rows="6"></textarea><button className="btn">Send Message</button></form></div></main>}
