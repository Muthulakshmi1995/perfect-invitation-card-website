import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

export default function ProductCard({p,add,wish,toggleWish}){return <article className="product-card"><Link to={'/product/'+p.id} className="product-img"><img src={p.img} alt={p.name} onError={(e)=>{e.currentTarget.onerror=null;e.currentTarget.src="/assets/image-fallback.png";}}/></Link><div className="product-body"><Link to={'/product/'+p.id}><h3>{p.name}</h3></Link><div className="card-bottom"><span>Rs.{p.price.toFixed(2)}</span><div><button type="button" onClick={()=>toggleWish(p.id)} className={wish.includes(p.id)?'liked':''} aria-label="Wishlist"><Icon name="heart" size={20}/></button><button type="button" onClick={()=>add(p.id)} aria-label="Add to cart"><Icon name="cart" size={20}/></button></div></div></div></article>}
