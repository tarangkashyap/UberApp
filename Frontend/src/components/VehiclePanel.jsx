import React from 'react';

const VehiclePanel = ({ setVehiclePanel, selectedRide, setConfirmRidePanel, setSelectedRide, fare }) => {
  return (
    <div>
      <h5
        className="text-center absolute top-0 w-[93%] p-1"
        onClick={() => {
          setVehiclePanel(false);
        }}
      >
        <i className="text-3xl ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5">Choose Ride</h3>

      {/* UberGo */}
      <div
        onClick={() => {
          setSelectedRide('ubergo');
          setConfirmRidePanel(true);
        }}
        className={`w-full border-2 flex p-3 mb-2 rounded-xl items-center justify-between cursor-pointer 
          ${selectedRide === 'ubergo' ? 'border-black' : 'border-gray-300'}`}
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1714471451/assets/27/362eaf-3e88-4568-a460-29b0da41c285/original/UberX-%281%29.png"
          alt="UberGo"
        />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            UberGo <span><i className="ri-user-3-fill"></i>4</span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-sm text-gray-600">Affordable, compact rides</p>
        </div>
        <h2 className="text-lg font-semibold">₹ {fare.car}</h2>
      </div>

      {/* Bike */}
      <div
        onClick={() => {
          setSelectedRide('bike');
          setConfirmRidePanel(true);
        }}
        className={`w-full border-2 flex p-3 mb-2 rounded-xl items-center justify-between cursor-pointer 
          ${selectedRide === 'bike' ? 'border-black' : 'border-gray-300'}`}
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt="Bike"
        />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            Bike <span><i className="ri-user-3-fill"></i>1</span>
          </h4>
          <h5 className="font-medium text-sm">4 mins away</h5>
          <p className="font-normal text-xs text-gray-600">Affordable motorcycle rides</p>
        </div>
        <h2 className="text-lg font-semibold">₹ {fare.bike}</h2>
      </div>

      {/* Auto */}
      <div
        onClick={() => {
          setSelectedRide('auto');
          setConfirmRidePanel(true);
        }}
        className={`w-full border-2 flex p-3 mb-2 rounded-xl items-center justify-between cursor-pointer 
          ${selectedRide === 'auto' ? 'border-black' : 'border-gray-300'}`}
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt="UberAuto"
        />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            UberAuto <span><i className="ri-user-3-fill"></i>3</span>
          </h4>
          <h5 className="font-medium text-sm">8 mins away</h5>
          <p className="font-normal text-sm text-gray-600">Affordable Auto rides</p>
        </div>
        <h2 className="text-lg font-semibold">₹ {fare.auto}</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
