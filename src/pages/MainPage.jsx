import React from 'react'

// Components
import NavBar from '../components/NavBar'
import Combox from '../components/Combox'

// Graphs
import UsersChart from '../components/UsersChart'

const MainPage = () => {

  return (

    <>

      <NavBar />

      <p className='flex justify-center text-[#546A7B] mt-4'>Track the growth of video games and the total activity of the top 10 games!</p>

      {/* FIRST GRAPH */}

      <div>

        <div className='flex justify-center mt-8 space-x-4'>

          <Combox/>
          <Combox/>
          <Combox/>

        </div>

        <div className='flex justify-center mt-8'>

          <UsersChart />

        </div>

      </div>


    </>

  )
}

export default MainPage