import React from 'react'
import Navbar from '../Navbar'
import Catalog from '../Catalog'
import Footer from '../Footer'

function Catalogs() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Catalog/>
    </div>
    <Footer/>
    </>
  )
}

export default Catalogs
