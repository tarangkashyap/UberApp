import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CaptainRiding = () => {
const [finishRidePanel, setfinishRidePanel] = useState(false)
const finishRidePanelRef = useRef(null);

  // Animate Ride Popup
useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        y: finishRidePanel ? 0 : "100%",
        duration: 0.5,
        ease: 'power2.inOut',
      });
    }
  }, [finishRidePanel]);

  return (
   <div className="h-screen ">
      {/* Header */}
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber"
        />
        <Link
          to="/home"
          className="h-10 w-10 bg-white z-20 flex items-center justify-center rounded-full shadow-lg"
        >
          <i className="text-lg font-medium text-2xl font-thin ri-logout-box-r-line"></i>
        </Link>
      </div>

      {/* Background image */}
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*gwMx05pqII5hbfmX.gif"
          alt="Background"
        />
      </div>
      <div className="h-1/5 p-6 bg-yellow-400 relative flex items-center justify-between"
      onClick={() => setfinishRidePanel(true) }
      >
       <h5
        className="text-center absolute top-0 w-[90%] p-1 cursor-pointer"
      >
        <i className="text-3xl ri-arrow-down-wide-line"></i>
      </h5>
      <h4 className='text-xl font-semibold'>4 KM Away</h4>
      <button className="mt-2 bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">Complete ride</button>

      </div>
    <div
        ref={finishRidePanelRef}
        className="fixed w-full z-50 bottom-0 bg-white py-6 px-3 h-screen shadow-xl pt-12"
        style={{ transform: 'translateY(100%)' }}
      >
        <FinishRide setfinishRidePanel={setfinishRidePanel} />
      </div>
     
      </div>
    
  )
}

export default CaptainRiding