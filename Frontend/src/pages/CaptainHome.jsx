import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CaptainHome = () => {
  const [ridePopupPanel, setridePopupPanel] = useState(true);
  const ridePopupPanelRef = useRef(null);

  const [ConfirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);
  const ConfirmRidePopupPanelRef = useRef(null);

  // Animate Ride Popup
  useGSAP(() => {
    if (ridePopupPanelRef.current) {
      gsap.to(ridePopupPanelRef.current, {
        y: ridePopupPanel ? 0 : "100%",
        duration: 0.5,
        ease: 'power2.inOut',
      });
    }
  }, [ridePopupPanel]);

  // Animate Confirm Ride Popup
  useGSAP(() => {
    if (ConfirmRidePopupPanelRef.current) {
      gsap.to(ConfirmRidePopupPanelRef.current, {
        y: ConfirmRidePopupPanel ? 0 : "100%",
        duration: 0.5,
        ease: 'power2.inOut',
      });
    }
  }, [ConfirmRidePopupPanel]);

  return (
    <div className="h-screen">
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
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*gwMx05pqII5hbfmX.gif"
          alt="Background"
        />
      </div>

      {/* Captain details */}
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>

      {/* Ride Popup */}
      <div
        ref={ridePopupPanelRef}
        className="fixed w-full z-50 bottom-0 bg-white py-6 px-3 shadow-xl pt-12"
        style={{ transform: 'translateY(100%)' }}
      >
        <RidePopUp
          setridePopupPanel={setridePopupPanel}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
        />
      </div>

      {/* Confirm Ride Popup */}
      <div
        ref={ConfirmRidePopupPanelRef}
        className="fixed w-full z-50 bottom-0 bg-white py-6 px-3 h-screen shadow-xl pt-12"
        style={{ transform: 'translateY(100%)' }}
      >
        <ConfirmRidePopUp
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          setridePopupPanel={setridePopupPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
