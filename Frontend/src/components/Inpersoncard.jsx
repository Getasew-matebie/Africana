import React from 'react'

function Inpersoncard({item}) {
  return (
    <>
    <div className='mt-2 my-3 p-3'>
      <div className="dark:text-black card bg-blue-100 w-92 shadow-xl transform transition duration-500 
                                hover:scale-110 cursor-pointer">
  <figure className='h-32'>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="text-sm">
      Shoes!
      <div className="badge badge-secondary">Free</div>
    </h2>
    <p className='text-sm'>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline text-sm">Fashion</div>
      <div className="badge badge-outline text-sm">Products</div>
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Inpersoncard
