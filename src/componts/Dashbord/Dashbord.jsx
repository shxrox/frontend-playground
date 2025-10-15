import React from 'react'
import Products from './Products'

function Dashbord() {
  return (

    <div>
      <div className="bg-[url('../src/assets/homepage.png')] min-h-screen bg-cover bg-center">
        <div className='flex justify-around'>
          <div data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aos-duration="1500" className='pr-100'>
            <h1 className='text-white text-5xl pt-60 font-extrabold font-serif'>TIMELESS <span className=' text-amber-300'> LUXURY.</span></h1>
            <p className='text-white text-[20px] pt-5 font-bold font-serif'> ELEGANCE IN EVERY SECOND
              <br />DISCOVER WATCHES THAT DEFINE YOUR STYLE.</p>
          </div>
          <div>
            <h1 className=' '></h1>
          </div>
        </div>

      </div>
      <div>
        <Products />
      </div>
    </div>
  )
}

export default Dashbord