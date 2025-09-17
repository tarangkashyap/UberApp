import React from 'react'
import { Link } from 'react-router-dom';

const FinishRide = (props) => {
  return (
    <div>
      {/* Arrow to close this panel */}
      <h5
        className="text-center absolute top-0 w-[93%] p-1 cursor-pointer"
        onClick={() => props.setfinishRidePanel(false)}
      >
        <i className="text-3xl ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5">Finish this ride.</h3>

      {/* Rider details */}
      <div className="flex items-center justify-between p-4 border-2 border-yellow-300 rounded-lg mt-4">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60"
            alt="/"
          />
          <h2 className="text-lg font-medium">Tarang Kashyap</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>

      {/* Route + fare */}
      <div className="w-full mt-5">
        <div className="flex items-center gap-5 p-3 border-gray-200 border-b-2">
          <i className="text-lg ri-map-pin-2-fill"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-base -mt-1 text-gray-600 mb-2">
              Kankariya Talab, Ahmedabad
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 p-3 border-gray-200 border-b-2">
          <i className="text-lg ri-map-pin-2-fill"></i>
          <div>
            <h3 className="text-lg font-medium">19 MG Road</h3>
            <p className="text-base -mt-1 text-gray-600 mb-2">
              Paldi, Ahmedabad
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 p-3">
          <i className="ri-currency-line"></i>
          <div>
            <h3 className="text-lg font-medium">₹192.38</h3>
            <p className="text-base -mt-1 text-gray-600 mb-2">Cash</p>
          </div>
        </div>
      </div>
    
      <div className="mt-10 ">
       
      <Link to="/captain-home" className="w-full flex text-lg justify-center mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg">
        Finish Ride
      </Link>
      <p className='mt-10 text-xs px-2'>click on finish ride button if you have completed the payment.</p>
      </div>
    </div>
  )
}

export default FinishRide