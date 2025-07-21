"use client"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

import { ChartLegend, ChartLegendContent } from "@/components/ui/chart"

import { ChartContainer } from "@/components/ui/chart"

const chartData = [
  { game: "Black Myth: Wukong", allPeak: 2415714, dayPeak: 39620 },
  { game: "Banana", allPeak: 917272, dayPeak: 113582 },
  { game: "Monster Hunter Wilds", allPeak: 1384608, dayPeak: 28350 },
  { game: "Counter-Srike 2", allPeak: 1862531, dayPeak: 1271662 },
  { game: "Lost Ark", allPeak: 1325305, dayPeak: 13784 },
  { game: "Palword", allPeak: 2101867, dayPeak: 67743 },
  { game: "PUBG: BATTLEGROUNDS", allPeak: 3257248, dayPeak: 957373 },
  { game: "Dota 2", allPeak: 1295114, dayPeak: 610301 },
  { game: "Elden Ring", allPeak: 953426, dayPeak: 54686 },
  { game: "Cyberpunk 2077", allPeak: 1054388, dayPeak: 64517 },
]

const chartConfig = {
  allPeak: {
    label: "All-Time Peak",
    color: "var(--chart-4)",
  },
  dayPeak: {
    label: "24 Hour Peak",
    color: "var(--chart-5)",
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
      tickFormatter={(value) => value.slice(0, 20)}
        />

        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />

        <Bar dataKey="allPeak" fill="var(--color-allPeak)" radius={4}>

          <LabelList position="top" formatter={(value) => value.toLocaleString()} className="font-bold"/>

        </Bar>

        <Bar dataKey="dayPeak" fill="var(--color-dayPeak)" radius={4}>

          <LabelList position="top" formatter={(value) => value.toLocaleString()} className="font-bold"/>

        </Bar>

        
      </BarChart>

    </ChartContainer>
  )
}
