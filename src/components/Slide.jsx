import {React,useState} from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import {Link} from 'react-router-dom';
const Slide = () => {
    const [open,setOpen]=useState(false)
  return (
    <>
    {/* <div className={`bg-gray-900 min-h-screen ${open ? 'w-60' : 'w-5'} pt-8 relative  h-full overflow-hidden border-red-400 duration-300 mb-20 flex flex-col items-center `}>  */}
    <div className={`fixed top-0 left-0 bg-gray-900 h-screen ${open ? 'w-60' : 'w-5'} pt-8  duration-300 flex flex-col  items-center z-10`}>
        <BsArrowLeftShort 
          className={`bg-white text-gray-400 text-3xl rounded-full absolute mt-20 -right-3 top-9  border border-gray cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
  
        <div className={`${open ? 'flex flex-col gap-y-10 sm:gap-y-20 text-lg w-full ' : 'hidden'} py-20 text-white text-center`}> 
          <Link to='/admin' className='block p-2 hover:text-red-700  rounded'>Admin</Link>
          <Link to='/user' className='block p-2 hover:text-red-700  rounded'>User</Link>
          <Link to='/feedback' className='block p-2 hover:text-red-700  rounded'>Feedback</Link>
          <Link to='/signin' className='block p-2 hover:text-red-700  rounded'>Sign In</Link>
          <Link to='/signup' className='block p-2 hover:text-red-700  rounded'>Sign Up</Link>
          <Link to='/cart' className='block p-2 hover:text-red-700  rounded'>Cart</Link>
        </div>
      </div>
    </>
  )
}

export default Slide;