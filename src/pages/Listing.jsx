import React, {useEffect, useMemo, useState} from 'react';
import {Link, useLocation, useNavigate, useParams, Navigate} from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import ProductCard from '../components/ProductCard.jsx';
import Empty from '../components/Empty.jsx';
import {img, products, categoryCards, collectionCards, weddingFilters} from '../data/products.js';
import {getRouteInfo} from '../data/routeInfo.js';

export default function Listing({add,wish,toggleWish}){
 const {category}=useParams(); const title=decodeURIComponent(category); const location=useLocation(); const [sort,setSort]=useState('default');
 const routeInfo=useMemo(()=>getRouteInfo(title),[title]);
 const params=new URLSearchParams(location.search); const urlFilter=params.get('filter');
 const initialFilter=urlFilter||routeInfo.defaultFilter||'All'; const [filter,setFilter]=useState(initialFilter);
 useEffect(()=>setFilter(urlFilter||routeInfo.defaultFilter||'All'),[title,urlFilter,routeInfo.defaultFilter]);
 let list=products.filter(p=>routeInfo.matcher(p));
 const filtered=filter==='All'?list:list.filter(p=>p.type===filter);
 const visible=filtered.length?filtered:list;
 const sorted=[...visible]; if(sort==='low')sorted.sort((a,b)=>a.price-b.price); if(sort==='high')sorted.sort((a,b)=>b.price-a.price);
 const isFilterPage=routeInfo.showFilters;
 return <main className="page"><div className="page-head"><div><p className="eyebrow">Collections</p><h1>{routeInfo.heading}</h1><p>{routeInfo.description}</p></div><select value={sort} onChange={e=>setSort(e.target.value)}><option value="default">Sort: Featured</option><option value="low">Price: Low to High</option><option value="high">Price: High to Low</option></select></div>
 {isFilterPage&&<><div className="filter-note"><strong>Quick category filters:</strong> Click any button below — you do not need to return to the navbar.</div><div className="chips"><button className={filter==='All'?'selected':''} onClick={()=>setFilter('All')}>All</button>{weddingFilters.map(x=><button key={x} className={filter===x?'selected':''} onClick={()=>setFilter(x)}>{x}</button>)}</div></>}
 <div className="product-grid">{sorted.map(p=><ProductCard key={p.id} p={p} add={add} wish={wish} toggleWish={toggleWish}/>)}</div>{!sorted.length&&<Empty text="No invitations found for this category" action="Browse All Wedding Cards" to="/category/Wedding Cards"/>}</main>
}
