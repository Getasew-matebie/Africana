import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <>
    <div>
    <div className="flex h-screen items-center justify-center">
  <div className="border-[2px] shadow-md p-5 rounded-2xl w-[600px]">
    <form onSubmit={handleSubmit(onSubmit)} method="div">
      {/* if there is a button in form, it will close the modal */}
    
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-4 space-y-2'>
      <span>Fullname</span>
      <br/>
      <input type='text' placeholder='Enter your full name'
      className='w-80 px-3 py-1 border rounded-md outline-none'
      {...register("fullname", { required: true })}
      />
      <br/>
      {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='mt-4 space-y-2'>
      <span>Email</span>
      <br/>
      <input type='email' placeholder='Enter your email'
      className='w-80 px-3 py-1 border rounded-md outline-none'
      {...register("email", { required: true })}
      />
      <br/>
      {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='mt-4 space-y-2'>
      <span>Password</span>
      <br/>
      <input type='password' placeholder='Enter your password'
      className='w-80 px-3 py-1 border rounded-md outline-none'
      {...register("password", { required: true })}
      />
      <br/>
      {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='flex justify-around mt-4'>
      <button className='bg-blue-700 text-white px-3 py-1 rounded-md hover:bg-blue-900 duration 300 '>Signup</button>
      <p>Already have an account?{" "} <Link to="/" className='underline text-blue-700'>Login</Link>{""}</p>
    </div>
    </form>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup
