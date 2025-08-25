import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/userContext';

const UserSignup = () => {
  const { user, setUser } = useContext(UserDataContext); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const navigate = useNavigate();
  
  const submitHandler = async (e) => { 
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser
      );
      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/home');
      }
    } catch (error) {
      console.error(error); // add error handling
    }

    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');
  };

  return (
  <div className='p-7 flex h-screen flex-col justify-between'>     
      <div>
         <Link to="/"><img className='w-16 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt='Uber' /></Link>

        <form onSubmit={(e)=>{
          submitHandler(e);
        }}>

          <h3 className='text-lg font-medium mb-2'>Enter your name</h3>
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
            >Create account</button>
        </form>
           <p className='font-semibold text-center mb-2'>Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></p>

      </div>
      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>  )
}

export default UserSignup