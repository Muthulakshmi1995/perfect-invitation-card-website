import React, {useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import Icon from './Icon.jsx';
import {img} from '../data/products.js';

export default function Header({cart,wish}){
 const nav=useNavigate(); const [q,setQ]=useState(''); const [open,setOpen]=useState(null); const location=useLocation();
 const submit=e=>{e.preventDefault(); if(q.trim()) nav('/search?q='+encodeURIComponent(q.trim()));};
 const go=path=>{setOpen(null);nav(path)};
 return <header className="site-header">
  <div className="topbar">
   <Link to="/" className="brand-logo" aria-label="Cherish Buy Well Knot Craft"><span className="logo-ring"><img src={img('logo')} /><strong>Cherish<br/>Buy</strong></span><span className="brand-name">Well<br/>Knot<br/>Craft</span></Link>
   <form className="searchbox" onSubmit={submit}><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search invitations..." aria-label="Search invitations"/><button type="submit" aria-label="Search"><Icon name="search" size={18}/></button></form>
   <div className="head-actions"><button title="Login" onClick={()=>go('/login')}><Icon name="user"/></button><button title="Wishlist" onClick={()=>go('/wishlist')} className="relative"><Icon name="heart"/>{wish.length>0&&<b>{wish.length}</b>}</button><button title="Cart" onClick={()=>go('/cart')} className="relative"><Icon name="cart"/>{cart.reduce((s,x)=>s+x.qty,0)>0&&<b>{cart.reduce((s,x)=>s+x.qty,0)}</b>}</button></div>
  </div>
  <nav className="nav">
   <Link className={location.pathname==='/'?'active':''} to="/">Home</Link>
   <div className="navdrop" onMouseEnter={()=>setOpen('wedding')} onMouseLeave={()=>setOpen(null)}><span>Wedding Invitation</span>{open==='wedding'&&<Drop items={['Hindu Wedding Cards','Luxury Cards','Floral Wedding Cards','Christian Wedding Cards','Muslim Wedding Cards']} onClick={go}/>}</div>
   <div className="navdrop" onMouseEnter={()=>setOpen('special')} onMouseLeave={()=>setOpen(null)}><span>Special occasions</span>{open==='special'&&<Drop items={['Birthday Invitations','Puperty Cards','Luxury Invitations','Ear Boring Cards','Engagement Cards','House Warming','Anniversary Cards']} onClick={go}/>}</div>
   <div className="navdrop" onMouseEnter={()=>setOpen('theme')} onMouseLeave={()=>setOpen(null)}><span>Theme Cards</span>{open==='theme'&&<Drop items={['Beach Theme Cards','Bride Theme Cards','Box Cards','Single Sheet Cards']} onClick={go}/>}</div>
   <Link className={location.pathname.includes('Scroll')?'active':''} to="/category/Scroll Invitation">Scroll Invitation</Link>
   <Link className={location.pathname.includes('Digital')?'active':''} to="/category/Digital Invitation">Digital Invitation</Link>
  </nav>
 </header>
}

function Drop({items,onClick}){return <div className="dropdown">{items.map(x=><button type="button" key={x} onClick={()=>onClick('/category/'+encodeURIComponent(x))}>{x}</button>)}</div>}
