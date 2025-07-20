import React from 'react'

// Components
import { TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import NavBar from '../components/NavBar'
import Combox from '../components/Combox'
import MarketSelect from '../components/MarketSelect'

// Graphs
import UsersChart from '../components/UsersChart'
import MarketChart from '../components/MarketChart'


const MainPage = () => {

  // States for game graph comparisons
  const [firstGame, setFirstGame] = React.useState()
  const [secondGame, setSecondGame] = React.useState()
  const [thirdGame, setThirdGame] = React.useState()

  const [currency, setCurrency] = React.useState("")

  return (

    <>

      <NavBar />

      <p className='flex justify-center text-[#546A7B] mt-4'>Track the growth of video games and the total activity of the top 10 games!</p>

      {/* FIRST GRAPH */}

      <div className='flex justify-center my-8'>

        <Card>

          <CardHeader>

            <CardTitle>Video Game Market Growth</CardTitle>
            <CardDescription>January 2017 - June 2024</CardDescription>

            <div className='flex justify-end'>

              <MarketSelect setCurrency={setCurrency} />

            </div>

          </CardHeader>

          <CardContent>

            <MarketChart currency={currency} />

          </CardContent>

          <CardFooter>

            <div className="flex w-full justify-center gap-2 text-sm">

              <div className="grid gap-2">

                <div className="flex justify-center items-center gap-2 leading-none font-medium">

                  <p>
                    Retrieved from <a href='https://www.blog.udonis.co/mobile-marketing/mobile-games/gaming-industry' className='duration-150 ease-in-out text-[#656B7B] hover:text-[#494E5A] hover:underline cursor-pointer'>
                    blog.udonis
                    </a>
                  </p>
                  
                </div>

                <div className="text-muted-foreground flex items-center gap-2 leading-none mt-1.5">
                  <p>Showing the market growth of different video game platforms over time. Expressed in <b>billions of dollars.</b></p>
                </div>
                
              </div>
              
            </div>

          </CardFooter>

        </Card>

      </div>

      {/* SECOND GRAPH */}

      <div className='flex justify-center my-8'>

        <Card>

          <CardHeader>

            <CardTitle>Most Played Video Games on Steam</CardTitle>
            <CardDescription>July 15th, 2025</CardDescription>

          </CardHeader>

          <CardContent>

            <div className='flex justify-center mb-8 space-x-4'>

              <div>

                <Combox onChangeId={setFirstGame} />
                <p className='flex justify-center mt-1.5 text-xs font-medium'>Game 1</p>

              </div>

              <div>

                <Combox onChangeId={setSecondGame} />
                <p className='flex justify-center mt-1.5 text-xs font-medium'>Game 2</p>

              </div>

              <div>
                
                <Combox onChangeId={setThirdGame} />
                <p className='flex justify-center mt-1.5 text-xs font-medium'>Game 3</p>

              </div>


            </div>

            <div className='flex justify-center'>

              <UsersChart firstGame={firstGame} secondGame={secondGame} thirdGame={thirdGame} />

            </div>

          </CardContent>

          <CardFooter>

            <div className="flex w-full justify-center gap-2 text-sm">

              <div className="grid gap-2">

                <div className="flex justify-center items-center gap-2 leading-none font-medium">

                  <p>
                    Retrieved from <a href='https://steamdb.info/charts/' className='duration-150 ease-in-out text-[#656B7B] hover:text-[#494E5A] hover:underline cursor-pointer'>
                    steam.db
                    </a>
                  </p>
                  
                </div>

                <div className="text-muted-foreground flex items-center gap-2 leading-none mt-1.5">
                  Showing the number of players in the last 24 hours, as well as the highest number reached throughout a game's lifetime
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