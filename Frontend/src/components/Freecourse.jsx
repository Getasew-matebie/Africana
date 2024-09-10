import React from 'react'
import list from "../../public/courseList.json"
import Cards from './Cards'
import {Link} from 'react-router-dom'
function Freecourse() {
  const filterData = list.filter((data)=>data.payed==="Free").slice(0,3)
    // const one = list[0].id;
  return (
    <>
    <div className='dark:bg-red-100 dark:text-black max-w-screen-2x1 container mx-auto  bg-red-100 md:px-20 px-4'>
      <h1 className='text-2xl font-bold pt-4 md:pt-8'>Free courses</h1>
      <p className='pt-2'>Our free online courses provide you with an affordable and flexible way to learn new skills and study new and emerging topics. Equip yourself with today's most in-demand skills with our free online courses.</p>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
      {
      filterData.map((item)=>(
        <Cards key={item.id} item={item}/>
      ))
      }
    </div>
    <Link to="/free courses">
    <button className='bg-blue-700 text-white rounded-md px-4 py-3 mb-6'>More free courses...</button>
    </Link> 
    </div>
    </>
  )
}

export default Freecourse
