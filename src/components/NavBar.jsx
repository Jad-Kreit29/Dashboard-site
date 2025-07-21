import React from 'react'
import Logo from '../assets/logo.svg'

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const NavBar = ({ translation, changeLanguage }) => {
  return (
    <nav className='bg-gradient-to-r from-0% from-[#0D1F2D] to-80% to-[#1A3D59] text-white py-4 px-8 shadow-md sticky top-0 z-50'>

        <div className='container mx-auto flex justify-between items-center'>

            <img src={Logo} alt="Dashboard Logo" className="w-25 h-25 tracking-tight flex items-center gap-3" />

            <div>

              <p className='flex justify-center items-center text-4xl font-bold'>GameStats</p>
              <p className='flex justify-center items-center text-sm font-medium mt-1.5'>{translation('pageSubtitle')}</p>

            </div>


            <div className='scale-130'>

              <Tabs defaultValue="en" onValueChange={changeLanguage}>

                <TabsList>

                  <TabsTrigger value="en" className='cursor-pointer'>EN</TabsTrigger>
                  <TabsTrigger value="fr" className='cursor-pointer'>FR</TabsTrigger>

                </TabsList>

              </Tabs>
            
            </div>


        </div>

    </nav>
  )
}

export default NavBar