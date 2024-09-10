import React from 'react'
import certificate from "../../public/Certificate.jpg"
import time from "../../public/Time.jpg"
import money from "../../public/Money.jpg"
import course from "../../public/Course.jpg"
function Goal() {
  return (
    <>
    <div className='w-full'>
        <h1 className='text-2xl font-bold mt-8 md:px-20 px-4'>Advance your career with Africana</h1>
        <h2 className='mt-4 md:px-20 px-4'>Get access to videos in over 90% of courses, Specializations, and Professional Certificates taught by top instructors from leading universities and companies.</h2>
    </div>
    <div className="flex flex-col md:flex-row">
    <div className="dark:bg-slate-900 dark:text-white card bg-base-100 w-96 ml-4 mr-4 mt-4">
  <figure className="px-10 pt-10">
    <img
      src={certificate}
      alt="Certificate"
      className="rounded-xl h-28" />
  </figure>
  <div className="card-body items-center text-center">
    <h2>Professional Certicates</h2>
    <p className='text-sm'>Explore any interest or trending topic, take prerequisites, and advance your skills</p>
  </div>
</div>
<div className="dark:bg-slate-900 dark:text-white card bg-base-100 w-96 ml-4 mr-4 mt-4">
  <figure className="px-10 pt-10">
    <img
      src={time}
      alt="Self paced"
      className="rounded-xl h-32" />
  </figure>
  <div className="card-body items-center text-center">
    <h2>Self-paced learning</h2>
    <p className='text-sm'>Explore any interest or trending topic, take prerequisites, and advance your skills</p>
  </div>
</div>
<div className="dark:bg-slate-900 dark:text-white card bg-base-100 w-96 ml-4 mr-4 mt-4">
  <figure className="px-10 pt-10">
    <img
      src={money}
      alt="Save money"
      className="rounded-xl h-32" />
  </figure>
  <div className="card-body items-center text-center">
    <h2>Save money</h2>
    <p className='text-sm'>Explore any interest or trending topic, take prerequisites, and advance your skills</p>
  </div>
</div>
<div className="dark:bg-slate-900 dark:text-white card bg-base-100 w-96 ml-4 mr-4 mt-4">
  <figure className="px-10 pt-10">
    <img
      src={course}
      alt="Variety of courses"
      className="rounded-xl h-32" />
  </figure>
  <div className="card-body items-center text-center">
    <h2>Variety of courses</h2>
    <p className='text-sm'>Explore any interest or trending topic, take prerequisites, and advance your skills</p>
  </div>
</div>
</div>
    </>
  )
}

export default Goal
