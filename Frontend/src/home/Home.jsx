import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Goal from '../components/Goal'
import Inperson from '../components/Inperson'
import Category from '../components/Category'
import Footer from '../components/Footer'
import Addcourse from '../components/Addcourse'
import Freecourse from '../components/Freecourse'

function Home() {
  return (
    <>
    <Navbar/>
   <Banner/>
   <Goal/>
   <Inperson/>
   <Category/>
   <Freecourse/>
   <Addcourse/>
   <Footer/>
    </>
  )
}

export default Home
