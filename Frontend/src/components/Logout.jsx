import React from 'react'
import { useauth } from './context/Authprovider';
import toast from 'react-hot-toast';

function Logout() {
  const [authuser, setauthuser] = useauth();
  const handlelogout=()=>{
    try {
      setauthuser({
        ...authuser,
        Users:null
      })
      localStorage.removeItem("Users");
      toast.success("Logout successfully")
      window.location.reload();
    } catch (error) {
      toast.error("Error : " + error.message )
    }
  }
  return (
    <div>
      <button className='px-3 py-2 bg-red-700 text-white rounded-md cursor-pointer'
       onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Logout
