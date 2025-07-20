import React from 'react'

// Components
import NavBar from '../components/NavBar'
import Combox from '../components/Combox'

// Graphs
import UsersChart from '../components/UsersChart'


const MainPage = () => {

  const [firstGame, setFirstGame] = React.useState()
  const [secondGame, setSecondGame] = React.useState()
  const [thirdGame, setThirdGame] = React.useState()

  return (

    <>

      <NavBar />

      <p className='flex justify-center text-[#546A7B] mt-4'>Track the growth of video games and the total activity of the top 10 games!</p>

      {/* FIRST GRAPH */}

      <div>

        <div className='flex justify-center mt-8 space-x-4'>

          <Combox onChangeId={setFirstGame} />
          <Combox onChangeId={setSecondGame} />
          <Combox onChangeId={setThirdGame} />

        </div>

        <div className='flex justify-center mt-8'>

          <UsersChart firstGame={firstGame} secondGame={secondGame} thirdGame={thirdGame} />

        </div>

      </div>


    </>

  )
}

export default MainPage