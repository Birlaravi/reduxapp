import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import './nav.css'
export  const Nav = () => {
  const item=useSelector((state)=>state.cart);
  return (
    <div className='Navbar'>
        <span className='reduxHead'>React-Router</span>
      <Link className='navlink' to='./'>Home</Link>
      <Link className='navlink' to='./cart'>Cart</Link>
        <div className='productCount'>
        <p>Product Count :<span> {item.length} </span> </p>
        </div> 
    </div>
  )
}
