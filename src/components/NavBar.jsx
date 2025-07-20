import React from 'react'
import Logo2 from '../assets/logo2.svg'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const NavBar = () => {
  return (
    <nav className='bg-gradient-to-r from-0% from-[#0D1F2D] to-80% to-[#1A3D59] text-white py-4 px-8 shadow-md sticky top-0 z-50'>

        <div className='container mx-auto flex justify-between items-center'>

            <img src={Logo2} alt="Dashboard Logo" className="w-25 h-25 tracking-tight flex items-center gap-3" />

            <div>

              <p className='flex justify-center items-center text-4xl font-bold'>GameStats</p>
              <p className='flex justify-center items-center text-sm font-medium mt-1.5'>Gaming at Glance</p>

            </div>


            <div className='scale-130'>

              <Tabs>

                <TabsList>

                  <TabsTrigger value="account">EN</TabsTrigger>
                  <TabsTrigger value="password">FR</TabsTrigger>
                  
                </TabsList>

              </Tabs>
            
            </div>


        </div>

    </nav>
  )
}

export default NavBar