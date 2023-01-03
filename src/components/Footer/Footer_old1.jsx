import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          {/* <h1>Products</h1> */}
          <img  className='rounded-xl h-[150px] w-[150px] ' src='/img/logo.jpg' alt="logo" />

          {/* <span><Link to='/products/1'>Park's Pectus System</Link></span>
          <span><Link to='/products/2'>Accessories</Link></span>
          <span><Link to='/blog'>Blog</Link></span>
          <span><Link to='/contact'>Contact</Link></span> */}
        </div>
        <div className="item">
        <h1>Links</h1>
          <span><Link to='/about'>About</Link></span>
          <span><Link to='/faqs'>FAQs</Link></span>
          <span><Link to='/store'>Store</Link></span>
          <span><Link to='/partners'>Partners</Link></span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dicta voluptatum fugit provident voluptate obcaecati illo est veritatis ipsa facere inventore, eligendi iure quisquam hic. Pariatur, natus! Nisi, obcaecati assumenda!</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore itaque nulla quaerat, quisquam ut tenetur autem aperiam unde ad consequatur est aut eaque, beatae error impedit aliquam earum illum eum!</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span>&copy; Copyright 2023. All rights reserved.</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="payments" />
        </div>
      </div>
    </div>
  )
}
