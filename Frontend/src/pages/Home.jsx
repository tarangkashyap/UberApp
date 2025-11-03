import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';

import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(null); // 'pickup' or 'destination'
  const [searchPanelActive, setSearchPanelActive] = useState(false);
  const [selectedRide, setSelectedRide] = useState(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false); //  lowercase "v"
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const [fare, setFare] = useState({});

  // refs
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const panelCloseRef = useRef(null);
  const whitePanelRef = useRef(null);
  const redPanelRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const submitHandler = (e) => e.preventDefault();

  // Fetch suggestions from backend
  const fetchSuggestions = async (input, type) => {
    if (!input) return;
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
        params: { input },
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      if (type === 'pickup') setPickupSuggestions(res.data.suggestions || []);
      if (type === 'destination') setDestinationSuggestions(res.data.suggestions || []);
    } catch (err) {
      // handle error or set empty suggestions
      if (type === 'pickup') setPickupSuggestions([]);
      if (type === 'destination') setDestinationSuggestions([]);
    }
  };

  // Animate search panel
  useGSAP(() => {
    if (searchPanelActive) {
      gsap.to(whitePanelRef.current, { bottom: '62%', duration: 0.5, ease: 'power2.out' });
      gsap.to(redPanelRef.current, { height: '66%', padding: 24, duration: 0.5, ease: 'power2.out' });
      gsap.to(panelCloseRef.current, { opacity: 1 });
    } else {
      gsap.to(whitePanelRef.current, { bottom: '0%', duration: 0.5, ease: 'power2.in' });
      gsap.to(redPanelRef.current, { height: '0%', padding: 0, duration: 0.5, ease: 'power2.in' });
      gsap.to(panelCloseRef.current, { opacity: 0, duration: 0.1 });
    }
  }, [searchPanelActive]);

  // Animate vehicle panel
  useGSAP(() => {
    gsap.to(vehiclePanelRef.current, {
      transform: vehiclePanel ? 'translateY(0%)' : 'translateY(100%)',
      duration: 0.5,
      ease: 'power2.inOut',
    });
  }, [vehiclePanel]);

  // Animate confirm ride panel
  useGSAP(() => {
    gsap.to(confirmRidePanelRef.current, {
      transform: confirmRidePanel ? 'translateY(0%)' : 'translateY(100%)',
      duration: 0.5,
      ease: 'power2.inOut',
    });
  }, [confirmRidePanel]);

  // Animate vehicle found panel
  useGSAP(() => {
    gsap.to(vehicleFoundRef.current, {
      transform: vehicleFound ? 'translateY(0%)' : 'translateY(100%)',
      duration: 0.5,
      ease: 'power2.inOut',
    });
  }, [vehicleFound]);

    // Animate waiting for driver panel
  useGSAP(() => {
    gsap.to(waitingForDriverRef.current, {
      transform: waitingForDriver ? 'translateY(0%)' : 'translateY(100%)',
      duration: 0.5,
      ease: 'power2.inOut',
    });
  }, [waitingForDriver]);

  async function findTrip(){
    setVehiclePanel(true);
    setSearchPanelActive(false);
    const res= await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
      params: { pickup, destination },
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    setFare(res.data.fare);
  };

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
      <div ref={whitePanelRef} className="absolute bottom-0 left-0 w-full bg-white z-30" >
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
              onClick={() => { setSearchPanelActive(true); setActiveField('pickup'); }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
                setActiveField('pickup');
                setSearchPanelActive(true);
                fetchSuggestions(e.target.value, 'pickup');
              }}
              type="text"
              placeholder="Add a pick-up location"
              className="border-gray-400 bg-[#eee] text-lg px-8 py-2 mt-3 rounded-lg w-full mb-2"
            />
            <input
              onClick={() => { setSearchPanelActive(true); setActiveField('destination'); }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
                setActiveField('destination');
                setSearchPanelActive(true);
                fetchSuggestions(e.target.value, 'destination');
              }}
              type="text"
              placeholder="Add a drop-off location"
              className="border-gray-300 bg-[#eee] text-lg px-8 py-2 mt-1 rounded-lg w-full"
            />
              </form>
              <button 
              onClick={async () => {
                await findTrip();
                setSearchPanelActive(false);
              }}
              className="bg-black text-white px-6 py-3 rounded-lg mt-4 w-full font-semibold hover:bg-gray-900 transition">
              Find Trip
              </button>
            </div>
            </div>

            {/* Red panel (search results) */}
      <div ref={redPanelRef} className="absolute bottom-0 left-0 w-full h-0 bg-white z-20">
        <LocationSearchPanel
          setVehiclePanel={setVehiclePanel}
          suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
          onSuggestionClick={(suggestion) => {
            const value = suggestion.description || suggestion;
            if (activeField === 'pickup') setPickup(value);
            if (activeField === 'destination') setDestination(value);
            // Do NOT close the search panel here
          }}
        />
      </div>

      {/* Vehicle selection panel */}
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-40 bottom-0 translate-y-full bg-white py-10 px-3 shadow-xl pt-12"
      >
        <VehiclePanel 
        
          setVehiclePanel={setVehiclePanel}
          selectedRide={selectedRide}
          fare={fare}
          setConfirmRidePanel={setConfirmRidePanel}
          setSelectedRide={setSelectedRide}
        />
      </div>

      {/* Confirm ride panel */}
      <div
        ref={confirmRidePanelRef}
        className="fixed w-full z-50 bottom-0 translate-y-full bg-white py-6 px-3 shadow-xl pt-12"
      >
        <ConfirmedRide
          setConfirmRidePanel={setConfirmRidePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>

      {/* Vehicle found panel */}
      <div
        ref={vehicleFoundRef}
        className="fixed w-full z-50 bottom-0 translate-y-full bg-white py-6 px-3 shadow-xl pt-12"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div ref={waitingForDriverRef} className="fixed w-full z-50 bottom-0 bg-white py-6 px-3 shadow-xl pt-12">
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
