import React from 'react'
import list from "../../public/courseList.json"
import Cards from './Cards'
import {Link} from 'react-router-dom'
import Inpersoncard from './Inpersoncard'
function Inperson() {
  const filterData = list.filter((data)=>data.category==="In person").slice(0,4)
    // const one = list[0].id;
  return (
    <>
    <div className='max-w-screen-2x1 container mx-auto  bg-blue-100 md:px-20 px-4'>
      <h1 className='dark:text-black text-2xl font-bold pt-4 md:pt-8'>In person courses you can take now</h1>
      <p className='dark:text-black pt-2'>Our free online courses provide you with an affordable and flexible way to learn new skills and study new and emerging topics. Equip yourself with today's most in-demand skills with our free online courses.</p>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
      {
      filterData.map((item)=>(
        <Inpersoncard key={item.id} item={item}/>
      ))
      }
    </div>
    <Link to="/In person courses">
     <button className='mb-6 text-white rounded bg-blue-700 ml-4 md:ml-12 mt-4 px-4 py-3 onclick="myFunction()"'>Show more...</button>
     </Link> 
    </div>
    </>
  )
}

export default Inperson
