import React from 'react'
import Logo2 from '../assets/logo2.svg'

const NavBar = () => {
  return (
    <nav className='bg-gradient-to-r from-0% from-[#0D1F2D] to-80% to-[#1A3D59] text-white py-4 px-8 shadow-md sticky top-0 z-50'>

        <div className='container mx-auto flex justify-between items-center'>

            <img src={Logo2} alt="Dashboard Logo" className="w-25 h-25 tracking-tight flex items-center gap-3" />

            <p className='text-2xl font-bold'>Welcome to the zone!</p>

            <div className='flex items-center space-x-3'>
                <p>English</p>
                <p>French</p>
            </div>


        </div>

    </nav>
  )
}

export default NavBar