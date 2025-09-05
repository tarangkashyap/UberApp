import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className="h-screen w-screen">
        <Link to="/home">
          <div className="fixed h-10 w-10 bg-white top-5 right-5 z-20 flex items-center justify-center rounded-full shadow-lg">
            <i className="text-lg font-medium ri-home-5-line"></i>
        </div>
      </Link>
      {/* Background image */}
      <div className='h-1/2'>
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*gwMx05pqII5hbfmX.gif"
          alt="Background"
        />
      </div>
      <div className='h-1/2 p-4 '>
       <div className="flex items-center justify-between">
         <img className=" h-16" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1714471451/assets/27/362eaf-3e88-4568-a460-29b0da41c285/original/UberX-%281%29.png"
          alt="UberGo"/>
          <div className="text-right">
            <h2 className='text-lg font-medium'>Tarang kashyap</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>UP14 PT 1634</h4>
            <p className='text-base -mt-1 text-gray-600 mb-2'>Maruti Suzuki Fronx</p>
          </div>
      </div>
        <div className='flex gap-2 justify-between items-center flex-col '>
           
        </div>
        <div className="w-full mt-5">
        
      <div className="flex items-center gap-5 p-3 border-gray-200 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
          <div>
            <h3 className='text-lg font-medium'>562/11-A</h3>
            <p className='text-base -mt-1 text-gray-600 mb-2'>Kankariya Talab, Ahemdabad</p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3 ">
             <i className="ri-currency-line"></i>
          <div>
            <h3 className='text-lg font-medium'>₹192.38</h3>
            <p className='text-base -mt-1 text-gray-600 '>Cash</p>
          </div>
        </div>
        </div>
        <button className="w-full mt-1 bg-green-600 text-white font-semibold p-2 rounded-lg">
            Make a Payment</button>
      </div>
    </div>
  )
}

export default Riding;