import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Listing from './pages/Listing.jsx';
import Product from './pages/Product.jsx';
import Search from './pages/Search.jsx';
import Wishlist from './pages/Wishlist.jsx';
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';
import Success from './pages/Success.jsx';
import Login from './pages/Login.jsx';
import InfoPage from './pages/InfoPage.jsx';
import Contact from './pages/Contact.jsx';
import FAQ from './pages/FAQ.jsx';

export default function App(){
  const [cart,setCart]=useState(()=>JSON.parse(localStorage.getItem('cw-cart')||'[]'));
  const [wish,setWish]=useState(()=>JSON.parse(localStorage.getItem('cw-wish')||'[]'));
  const [user,setUser]=useState(()=>JSON.parse(localStorage.getItem('cw-user')||'null'));
  useEffect(()=>localStorage.setItem('cw-cart',JSON.stringify(cart)),[cart]);
  useEffect(()=>localStorage.setItem('cw-wish',JSON.stringify(wish)),[wish]);
  useEffect(()=>localStorage.setItem('cw-user',JSON.stringify(user)),[user]);
  const add=(id,qty=1)=>setCart(c=>c.some(x=>x.id===id)?c.map(x=>x.id===id?{...x,qty:x.qty+qty}:x):[...c,{id,qty}]);
  const remove=(id)=>setCart(c=>c.filter(x=>x.id!==id));
  const change=(id,delta)=>setCart(c=>c.map(x=>x.id===id?{...x,qty:Math.max(1,x.qty+delta)}:x));
  const toggleWish=(id)=>setWish(w=>w.includes(id)?w.filter(x=>x!==id):[...w,id]);
  const ctx={cart,wish,user,add,remove,change,toggleWish,setUser};
  return <BrowserRouter><AppShell ctx={ctx}/></BrowserRouter>;
}

function AppShell({ctx}){
  return <>
    <Header {...ctx}/>
    <Routes>
      <Route path="/" element={<Home {...ctx}/>}/>
      <Route path="/category/:category" element={<Listing {...ctx}/>}/>
      <Route path="/product/:id" element={<Product {...ctx}/>}/>
      <Route path="/search" element={<Search {...ctx}/>}/>
      <Route path="/wishlist" element={<Wishlist {...ctx}/>}/>
      <Route path="/cart" element={<Cart {...ctx}/>}/>
      <Route path="/checkout" element={<Checkout {...ctx}/>}/>
      <Route path="/success" element={<Success {...ctx}/>}/>
      <Route path="/login" element={<Login {...ctx}/>}/>
      <Route path="/about" element={<InfoPage title="About Us" text="Cherish By Well Knot Craft brings elegant, memorable invitation designs together in one easy-to-use experience."/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/faq" element={<FAQ/>}/>
      <Route path="*" element={<Navigate to="/" replace/>}/>
    </Routes>
    <Footer/>
  </>;
}
