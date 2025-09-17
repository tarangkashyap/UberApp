import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const ConfirmRidePopUp = ({ setConfirmRidePopupPanel, setridePopupPanel }) => {
    const [OTP, setOTP] = useState('')
    const submitHandler = (e) => {
        e.preventDefault();
    }
  return (
    <div>
      {/* Arrow to close this panel */}
      <h5
        className="text-center absolute top-0 w-[93%] p-1 cursor-pointer"
        onClick={() => setConfirmRidePopupPanel(false)}
      >
        <i className="text-3xl ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5">Confirm this ride to start.</h3>

      {/* Rider details */}
      <div className="flex items-center justify-between p-3 bg-gray-200 rounded-lg mt-4">
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
    
      <div className="mt-2  ">
       <form onSubmit={(e)=>{
        submitHandler(e);
       }}>
        <input value={OTP} onChange={(e) => setOTP(e.target.value)} type="text" placeholder='Enter OTP' className='w-full border bg-[#eee] px-6 py-4 font-mono rounded-lg text-lg mt-3' />
       {/* Buttons */}
      <Link to="/captain-riding" className="w-full flex text-lg justify-center mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg">
        Confirm
      </Link>

      <button
        onClick={() => {
          setConfirmRidePopupPanel(false);
          setridePopupPanel(false);
        }} 
        className="w-full mt-2 bg-red-500 text-lg text-white font-semibold p-3 rounded-lg mb-2"
      >
        Cancel
      </button>  
    </form>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
