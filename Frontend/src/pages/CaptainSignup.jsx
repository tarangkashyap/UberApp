import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [userData, setUserData] = useState({});
  
    const submitHandler = (e) => {
      e.preventDefault();
      setUserData({ 
        fullName:{
        firstName:firstName,
        lastName:lastName
        }, 
        email:email,
        password:password,
        });
      setEmail('');
      setPassword('');
      setFirstname('');
      setLastname('');
      // Handle login logic here
    };
  return (
<div className='py-5 px-5 flex h-screen flex-col justify-between'>     
      <div>
         <Link to="/"><img className='w-20 mb-3' src='https://www.svgrepo.com/show/505031/uber-driver.svg' alt='Uber' /></Link>

        <form onSubmit={(e)=>{
          submitHandler(e);
        }}>

          <h3 className='text-lg w-full font-medium mb-2'>Enter your name</h3>
          <div className='flex gap-3 mb-6'>
            <input
             required 
             className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
             type="text" 
             placeholder="First name" 
             value={firstname}
             onChange={(e) => setFirstname(e.target.value)}
              />

              <input
               required 
               className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
               type="text" 
               placeholder="Last name" 
               value={lastname}
               onChange={(e) => setLastname(e.target.value)}
               />
            </div>
           <h3 className='text-lg font-medium mb-2'>Enter Email</h3>
            <input
             required
             className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
             type="email"
             placeholder="Enter Email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
            />
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input
             required
             className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
             type="password"
             placeholder="Enter Password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
            />

            <button 
             className='bg-[#111]  text-white font-semibold mb-3 rounded px-4 py-2 w-full text-base placeholder:text-sm'
            >Login</button>
        </form>
           <p className='font-semibold text-center mb-2'>Already have an account? <Link to="/captainLogin" className='text-blue-600'>Login</Link></p>

      </div>
      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div> )
}

export default CaptainSignup