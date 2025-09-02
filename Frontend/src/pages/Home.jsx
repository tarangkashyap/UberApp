import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [selectedRide, setSelectedRide] = useState(null);
  const vehiclePanelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const whitePanelRef = useRef(null);
  const redPanelRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  // Animate search panel
  useGSAP(() => {
    if (panelOpen) {
      gsap.to(whitePanelRef.current, { bottom: '72%', duration: 0.5, ease: 'power2.out' });
      gsap.to(redPanelRef.current, { height: '72%', padding: 24, duration: 0.5, ease: 'power2.out' });
      gsap.to(panelCloseRef.current, { opacity: 1 });
    } else {
      gsap.to(whitePanelRef.current, { bottom: '0%', duration: 0.5, ease: 'power2.in' });
      gsap.to(redPanelRef.current, { height: '0%', padding: 0, duration: 0.5, ease: 'power2.in' });
      gsap.to(panelCloseRef.current, { opacity: 0, duration:0.1 });
    }
  }, [panelOpen]);

  // Animate vehicle panel
  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, { transform: 'translateY(0%)', duration: 0.5, ease: 'power2.out' });
    } else {
      gsap.to(vehiclePanelRef.current, { transform: 'translateY(100%)', duration: 0.5, ease: 'power2.in' });
    }
  }, [vehiclePanel]);

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Logo */}
      <Link to="/">
        <img
          className="w-16 absolute left-5 top-5 z-20"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber"
        />
      </Link>

      {/* Background image */}
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*gwMx05pqII5hbfmX.gif"
          alt="Background"
        />
      </div>

      {/* White panel */}
      <div ref={whitePanelRef} className="absolute bottom-0 left-0 w-full bg-white z-30">
        <div className="p-6 relative">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="absolute opacity-0 top-6 right-6 text-2xl cursor-pointer"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={submitHandler} className="relative">
            <div className="absolute h-16 top-[35px] w-1 left-3 bg-gray-900 rounded-full"></div>

            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              type="text"
              placeholder="Add a pick-up location"
              className="border-gray-400 bg-[#eee] text-lg px-8 py-2 mt-3 rounded-lg w-full mb-2"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              type="text"
              placeholder="Add a drop-off location"
              className="border-gray-300 bg-[#eee] text-lg px-8 py-2 mt-1 rounded-lg w-full"
            />
          </form>
        </div>
      </div>

      {/* Red panel */}
      <div ref={redPanelRef} className="absolute bottom-0 left-0 w-full h-0 bg-white z-20">
        <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
      </div>

      {/* Vehicle selection panel */}
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-40 bottom-0 translate-y-full bg-white py-10 px-3 shadow-xl pt-14"
      >
        <h5 className="text-center absolute top-0 w-[93%] p-1"onClick={()=>{
          setVehiclePanel(false);
        }}><i className="text-3xl ri-arrow-down-wide-line"></i></h5>

        <h3 className="text-2xl font-semibold mb-5">Choose Ride</h3>

        {/* UberGo */}
        <div
          onClick={() => setSelectedRide('ubergo')}
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
          <h2 className="text-lg font-semibold">₹192.38</h2>
        </div>

        {/* Bike */}
        <div
          onClick={() => setSelectedRide('bike')}
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
          <h2 className="text-lg font-semibold">₹65.38</h2>
        </div>

        {/* Auto */}
        <div
          onClick={() => setSelectedRide('auto')}
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
          <h2 className="text-lg font-semibold">₹99.38</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
