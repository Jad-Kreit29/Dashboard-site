import React from 'react'
import NavBar from '../components/NavBar'
import UsersChart from '../components/UsersChart'

const MainPage = () => {

  return (

    <>

      <NavBar />

      <p className='flex justify-center text-[#546A7B] mt-4'>Track the growth of video games and the total activity of the top 10 games!</p>

      <div className='flex justify-center mt-8'>

        <UsersChart />

      </div>

    </>

  )
}

export default MainPage