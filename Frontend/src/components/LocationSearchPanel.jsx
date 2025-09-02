import React from 'react'

const LocationSearchPanel = ({ setVehiclePanel,setPanelOpen }) => {
  // sample array for location
  const locations = [
    "H.No.-76, Nandni enclave, Nandgram, Ghaziabad",
    "H.No.-78, Nandni enclave, Ghukna, Ghaziabad",
    "H.No.-76, Nandni enclave, Anand Vihar, Delhi",
    "H.No.-86, Nandni enclave, Udaipur, Rajasthan",
  ];

  return (
    <div>
      {/* sample data list */}
      {locations.map((location, index) => (
        <div
          key={index}
          onClick={() => {
            setVehiclePanel(true);
            setPanelOpen(false);
          }}

          className="flex gap-4 border-2 border-gray-50 active:border-black p-2 rounded-xl items-center my-2 justify-start cursor-pointer"
        >
          <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
