import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
    <div className="flex items-center justify-between ">
        <div className="flex items-center justify-start gap-3">
          <img className='h-12 w-12 rounded-full object-cover' src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" />
          <h4 className='text-lg font-medium'>Vibhor Chadha</h4>
        </div>
        <div>
         <h4 className='text-lg font-semibold'>₹192.38</h4>
        <p className='text-sm text-gray-600'>Earned</p>
       </div>
       </div>
       <div className="flex p-3 mt-6 bg-gray-100 rounded-xl justify-center gap-5 items-start">
       <div className="text-center"><i className="text-3xl mb-2 font-thin ri-time-line"></i>
       <h5 className='text-lg font-medium'>10.2</h5>
       <p className='text-sm text-gray-600'>Hours Online</p>
       </div>
       <div className="text-center"><i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
        <h5 className='text-lg font-medium'>10.2</h5>
       <p className='text-sm text-gray-600'>Hours Online</p>
       </div>
       <div className="text-center"><i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
        <h5 className='text-lg font-medium'>10.2</h5>
       <p className='text-sm text-gray-600'>Hours Online</p>
       </div>
    </div>
 </div>
  )
}

export default CaptainDetails;