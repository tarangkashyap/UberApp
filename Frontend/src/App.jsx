import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/userLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/Captainlogin'
import { UserDataContext } from './context/userContext'


const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captainSignup" element={<CaptainSignup />} />
        <Route path="/captainLogin" element={<CaptainLogin />} />
      </Routes>
    </div>
  )
}

export default App