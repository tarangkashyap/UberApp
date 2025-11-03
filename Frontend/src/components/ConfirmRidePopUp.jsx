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
            src="data:image/jpeg;base64,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"
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
