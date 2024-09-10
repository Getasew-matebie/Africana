import React from 'react'

function Category() {
  return (
    <>
    <div className='text-3xl flex flex-row font-bold justify-center = "true" mt-4 md:mt-12'>
    <p justify-center = "true">Online courses</p>
    </div>
    <div className='flex flex-col md:flex-row ml-4 mr-4 mt-4 md:mt-8 md:px-12 px-4'>
      <div className='w-1/2 md:w-1/4 ml-4 mr-4'>
       <ul className='mb-10'>
       <li className='font-bold'>Personal Development</li>
        <li className='cursor-pointer no-underline hover:underline text-sm mt-2'>Leadership</li>
        <li className='cursor-pointer no-underline hover:underline text-sm mt-2'>Time management</li>
        <li className='cursor-pointer no-underline hover:underline text-sm mt-2'>Unlocking your potential</li>
        <li className='cursor-pointer no-underline hover:underline text-sm mt-2'>Life purpose</li>
        <li className='cursor-pointer no-underline hover:underline text-sm mt-2'>Public speaking</li>
        <li className='cursor-pointer no-underline hover:underline text-sm mt-2'>Emotional intelligence</li>
       </ul>
      </div>
      <div className='w-1/2 md:w-1/4 ml-4 mr-4'>
       <ul className='mb-10'>
        <li className='font-bold'>Business</li>
       </ul>
      </div>
      <div className='w-1/2 md:w-1/4 ml-4 mr-4'>
       <ul>
        <li className='font-bold'>Technology</li>
       </ul>
      </div>
      <div className='w-1/2 md:w-1/4 ml-4 mr-4'>
       <ul className='mb-10'>
       <li className='font-bold'>Arts and Humanities</li>
        <li className='cursor-pointer no-underline hover:underline text-sm mt-2'>Leadership</li>
        <li className='cursor-pointer no-underline hover:underline text-sm mt-2'>Time management</li>
        <li className='cursor-pointer no-underline hover:underline text-sm mt-2'>Unlocking your potential</li>
        <li className='cursor-pointer no-underline hover:underline text-sm mt-2'>Life purpose</li>
        <li className='cursor-pointer no-underline hover:underline text-sm mt-2'>Public speaking</li>
        <li className='cursor-pointer no-underline hover:underline text-sm mt-2'>Emotional Intelligence</li>
       </ul>
      </div>
      <div className='w-1/2 md:w-1/4 ml-4 mr-4'>
       <ul className='mb-10'>
        <li className='font-bold'>Education</li>
        <li className='cursor-pointer no-underline hover:underline text-sm mt-2'>Junior</li>
        <li className='cursor-pointer no-underline hover:underline text-sm mt-2'>Senior</li>
        <li className='cursor-pointer no-underline hover:underline text-sm mt-2'>College & University</li>
       </ul>
      </div>
    </div>
    </>
  )
}

export default Category
