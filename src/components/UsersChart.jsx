"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { ChartContainer } from "@/components/ui/chart"

const chartData = [
  { game: "Black Myth: Wukong", allPeak: 2415714, dayPeak: 39620 },
  { game: "Banana", allPeak: 917272, dayPeak: 113582 },
  { game: "Monster Hunter Wilds", allPeak: 1384608, dayPeak: 28350 },
  { game: "CS2", allPeak: 1862531, dayPeak: 1271662 },
  { game: "Lost Ark", allPeak: 1325305, dayPeak: 13784 },
  { game: "Palword", allPeak: 2101867, dayPeak: 67743 },
  { game: "PUBG: BATTLEGROUNDS", allPeak: 3257248, dayPeak: 957373 },
  { game: "Dota 2", allPeak: 1295114, dayPeak: 610301 },
  { game: "Elden Ring", allPeak: 953426, dayPeak: 54686 },
  { game: "Cyberpunk 2077", allPeak: 1054388, dayPeak: 64517 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
}

export default function UsersChart( { firstGame, secondGame, thirdGame } ) {
  
  const filteredGames = [firstGame, secondGame, thirdGame]

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-[800px]">

      <BarChart accessibilityLayer data={chartData.filter((_, index) => filteredGames.includes(index))}>

        <CartesianGrid vertical={false} />

        <XAxis
      dataKey="game"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 10)}
        />

        <Bar dataKey="allPeak" fill="var(--color-mobile)" radius={4} />
        <Bar dataKey="dayPeak" fill="var(--color-desktop)" radius={4} />
        
      </BarChart>

    </ChartContainer>
  )
}
