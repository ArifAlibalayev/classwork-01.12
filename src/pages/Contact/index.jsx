import React from 'react'
// import Header from '../../layout/Header'
// import Footer from '../../layout/Footer'
import { Outlet } from 'react-router-dom'

function ContactPage() {
  return (
    <div><h1>ContactPage</h1>
    <Outlet></Outlet>
    </div>
  )
}

export default ContactPage