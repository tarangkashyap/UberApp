import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelCloseRef = useRef(null);

  const whitePanelRef = useRef(null);
  const redPanelRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  // Animate panels
  useGSAP(() => {
    if (panelOpen) {
      // White panel goes to top
      gsap.to(whitePanelRef.current, { bottom: "70%",padding:18, duration: 0.5, ease: "power2.out" });
      // Red panel expands under white panel
      gsap.to(redPanelRef.current, { height: "70%",padding:18, duration: 0.5, ease: "power2.out" });
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    } else {
      // Reset to initial state
      gsap.to(whitePanelRef.current, { bottom: "0%",padding:0, duration: 0.5, ease: "power2.in" });
      gsap.to(redPanelRef.current, { height: "0%", padding:0, duration: 0.5, ease: "power2.in" });
       gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  }, [panelOpen]);

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

      {/* White panel (slides up with title + inputs + line) */}
      <div
        ref={whitePanelRef}
        className="absolute bottom-0 left-0 w-full bg-white z-30 shadow-lg"
      >
        <div className="p-6 relative">
          <h5 ref={panelCloseRef}
          onClick={() => setPanelOpen(false)} className=' absolute opacity-0 top-6 right-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={submitHandler} className="relative">
            {/* Line sticks with inputs */}
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

      {/* Red panel (hidden initially, expands upward on click) */}
      <div
        ref={redPanelRef}
        className="absolute bottom-0  left-0 w-full h-0 bg-white"
      >
        <LocationSearchPanel></LocationSearchPanel>
      </div>
    </div>
  );
};

export default Home;
