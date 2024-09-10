import React from 'react'
import list from '../../public/courseList.json'
import Inpersoncard from './Inpersoncard'
function Inpersoncourseslist() {
    const filterData = list.filter((data)=>data.category==="In person")
    // const one = list[0].id;
  return (
    <>
    <div className='max-w-screen-2x1 container mx-auto  bg-blue-100 md:px-20 px-4'>
      <h1 className='dark:text-black text-2xl font-bold pt-4 md:pt-8'>In person courses</h1>
      <p className='dark:text-black pt-2'>Our free online courses provide you with an affordable and flexible way to learn new skills and study new and emerging topics. Equip yourself with today's most in-demand skills with our free online courses.</p>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
      {
      filterData.map((item)=>(
        <Inpersoncard key={item.id} item={item}/>
      ))
      }
    </div>
    <button className='bg-blue-700 text-white rounded-md px-4 py-3 mb-6'>Back</button>
    </div>
    </>
  )
}

export default Inpersoncourseslist
