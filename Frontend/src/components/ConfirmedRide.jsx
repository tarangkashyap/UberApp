import React from 'react';

const ConfirmedRide = ({ setConfirmRidePanel, setVehicleFound }) => {
  return (
    <div>
      {/* Arrow to close this panel */}
      <h5
        className="text-center absolute top-0 w-[93%] p-1 cursor-pointer"
        onClick={() => {
          setConfirmRidePanel(false); //  Close confirm panel only
        }}
      >
        <i className="text-3xl ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5">Confirm your Ride</h3>

      <div className="flex gap-2 justify-between items-center flex-col">
        <img
          className="h-22"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1714471451/assets/27/362eaf-3e88-4568-a460-29b0da41c285/original/UberX-%281%29.png"
          alt="UberGo"
        />
      </div>

      <div className="w-full mt-5">
        <div className="flex items-center gap-5 p-3 border-gray-200 border-b-2">
          <i className="text-lg ri-map-pin-2-fill"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-base -mt-1 text-gray-600 mb-2">
              Kankariya Talab, Ahemdabad
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 p-3 border-gray-200 border-b-2">
          <i className="text-lg ri-map-pin-2-fill"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-base -mt-1 text-gray-600 mb-2">
              Kankariya Talab, Ahemdabad
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

      {/* Confirm button */}
      <button
        onClick={() => {
          setVehicleFound(true); //  Open LookingForDriver panel
          setConfirmRidePanel(false); //  Close Confirm panel
        }}
        className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg"
      >
        Confirm
      </button>
    </div>
  );
};

export default ConfirmedRide;
