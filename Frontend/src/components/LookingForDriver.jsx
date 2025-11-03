import React from 'react'

const LookingForDriver = ({setVehicleFound}) => {
  return (
     <div><h5
        className="text-center absolute top-0 w-[93%] p-1"
        onClick={() => {
          setVehicleFound(false);
        }}
      >
        <i className="text-3xl ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Looking for a Driver</h3>
        <div className='flex gap-2 justify-between items-center flex-col '>
            <img className=" h-22" src="data:image/jpeg;base64,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"
          alt="UberGo"/>
        </div>
        <div className="w-full mt-5">
        <div className="flex items-center gap-5 p-3 border-gray-200 border-b-2">
          <i className="text-lg ri-map-pin-2-fill"></i>
          <div>
            <h3 className='text-lg font-medium'>562/11-A</h3>
            <p className='text-base -mt-1 text-gray-600 mb-2'>Kankariya Talab, Ahemdabad</p>
          </div>
          
        </div>
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
            <p className='text-base -mt-1 text-gray-600 mb-2'>Cash</p>
          </div>
        </div>
        </div>
      </div>
  )
}

export default LookingForDriver;