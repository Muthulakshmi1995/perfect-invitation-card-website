import React, {useEffect, useMemo, useState} from 'react';
import {Link, useLocation, useNavigate, useParams, Navigate} from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import ProductCard from '../components/ProductCard.jsx';
import Empty from '../components/Empty.jsx';
import {img, products, categoryCards, collectionCards, weddingFilters} from '../data/products.js';

export default function Wishlist({wish,toggleWish,add}){const items=products.filter(p=>wish.includes(p.id)); return <main className="page"><h1>Wishlist</h1><p>Save your favourite invitation designs here.</p>{items.length?<div className="product-grid">{items.map(p=><ProductCard key={p.id} p={p} add={add} wish={wish} toggleWish={toggleWish}/>)}</div>:<Empty text="Your wishlist is empty" action="Browse Invitations" to="/category/Wedding Cards"/>}</main>}
