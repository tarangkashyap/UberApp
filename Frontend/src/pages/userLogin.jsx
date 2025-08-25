import React, { useState, useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { UserDataContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const userLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

   const { user, setUser } = useContext(UserDataContext);
   const navigate = useNavigate();

  const submitHandler = async(e) => {
    e.preventDefault();
     const userData ={ email:email,
      password:password } 

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

      if (response.status ===200){
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/home');
      }
    setEmail('');
    setPassword('');
    // Handle login logic here
  };

  return (
    <div className='p-7 flex h-screen flex-col justify-between'>     
      <div>
         <Link to="/"><img className='w-16 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt='Uber' /></Link>

        <form onSubmit={(e)=>{
          submitHandler(e);
        }}>
            <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
            <input
             required 
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
             type="email" 
             placeholder="email@example.com" />

            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input
             required 
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
             type="password" 
             placeholder="Enter Password" />
            <button 
             className='bg-[#111]  text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            >Login</button>
        </form>
                   <p className='text-center mb-2'>New here? <Link to="/signup" className='text-blue-600'>Create new Account</Link></p>
      </div>
      <div>
        <Link to="/captainLogin" className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
            Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default userLogin
        // <p className='text-[10px] leading-tight'>This Site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
