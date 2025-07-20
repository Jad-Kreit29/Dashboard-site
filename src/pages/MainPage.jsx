import React from 'react'

// Components
import { TrendingUp } from "lucide-react"
import NavBar from '../components/NavBar'
import Combox from '../components/Combox'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Graphs
import UsersChart from '../components/UsersChart'
import MarketChart from '../components/MarketChart'


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

      <div className='flex justify-center my-8'>

        <Card>

          <CardHeader>

            <CardTitle>Line Chart - Multiple</CardTitle>
            <CardDescription>January - June 2024</CardDescription>

          </CardHeader>

          <CardContent>

            <MarketChart />

          </CardContent>

          <CardFooter>

            <div className="flex w-full items-start gap-2 text-sm">
              <div className="grid gap-2">
                <div className="flex items-center gap-2 leading-none font-medium">
                  Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground flex items-center gap-2 leading-none">
                  Showing total visitors for the last 6 months
                </div>
              </div>
            </div>

          </CardFooter>

        </Card>

      </div>


    </>

  )
}

export default MainPage