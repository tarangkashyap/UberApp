import React, { useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import  { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios';

const CaptainProtectWrapper = ({children}) => {
    const token = localStorage.getItem('token');
    const { captain, setCaptain } = useContext(CaptainDataContext);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() =>{
        if (!token) {
        navigate('/captainLogin');
    }
    }, [ token ])

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((response) => {
        if (response.status === 200) {
          setCaptain(response.data.captain);
          setIsLoading(false);
        }
      })
        .catch((error) => {
            console.error('Error fetching captain profile:', error);
            setIsLoading(false);
            localStorage.removeItem('token');
            navigate('/captainLogin');
        });
    
    if(isLoading) {
        return (
            <div>Loading...</div>
        )
    }


 
  return (
    <div>{children}</div>
  )
}

export default CaptainProtectWrapper