import React, {useEffect, useMemo, useState} from 'react';
import {Link, useLocation, useNavigate, useParams, Navigate} from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import ProductCard from '../components/ProductCard.jsx';
import Empty from '../components/Empty.jsx';
import {img, products, categoryCards, collectionCards, weddingFilters} from '../data/products.js';

export default function FAQ(){const qs=[['How do I order a wedding invitation?','Choose a card, add it to the cart, checkout, enter your details and complete the demo payment.'],['Can I save cards for later?','Yes. Use the heart button to add or remove an invitation from Wishlist.'],['Does payment charge real money?','No. This React project uses a demo payment flow for academic/project demonstration.'],['Can I search cards?','Yes. Use the search box in the header or the Search page.'],['Can I switch wedding styles without returning to the menu?','Yes. On Wedding Cards and Birthday Invitations pages, use the All, Hindu, Christian, Muslim, Floral and Luxury buttons.']]; return <main className="page info"><p className="eyebrow">Help Center</p><h1>Frequently Asked Questions</h1><div className="faq">{qs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></main>}
