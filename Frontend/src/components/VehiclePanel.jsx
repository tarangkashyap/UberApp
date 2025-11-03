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
          // createRide('ubergo');
          setConfirmRidePanel(true);
        }}
        className={`w-full border-2 flex p-3 mb-2 rounded-xl items-center justify-between cursor-pointer 
          ${selectedRide === 'ubergo' ? 'border-black' : 'border-gray-300'}`}
      >
        <img
          className="h-12"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
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
          // createRide('bike');
          setConfirmRidePanel(true);
        }}
        className={`w-full border-2 flex p-3 mb-2 rounded-xl items-center justify-between cursor-pointer 
          ${selectedRide === 'bike' ? 'border-black' : 'border-gray-300'}`}
      >
        <img
          className="h-12"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yYzdmYTE5NC1jOTU0LTQ5YjItOWM2ZC1hM2I4NjAxMzcwZjUucG5n"
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
          // createRide('auto');
          setConfirmRidePanel(true);
        }}
        className={`w-full border-2 flex p-3 mb-2 rounded-xl items-center justify-between cursor-pointer 
          ${selectedRide === 'auto' ? 'border-black' : 'border-gray-300'}`}
      >
        <img
          className="h-12"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n"
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
