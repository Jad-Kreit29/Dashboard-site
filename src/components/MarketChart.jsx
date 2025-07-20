"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export const description = "A multiple line chart"

const chartData = [
  { year: "2017", mobile: 55, console: 33, desktop: 29 },
  { year: "2018", mobile: 62, console: 34, desktop: 32 },
  { year: "2019", mobile: 68, console: 45, desktop: 35 },
  { year: "2020", mobile: 77, console: 45, desktop: 36 },
  { year: "2021", mobile: 93, console: 50, desktop: 36 },
  { year: "2022", mobile: 92, console: 51, desktop: 38 },
  { year: "2023", mobile: 90, console: 53, desktop: 38 },
  { year: "2024", mobile: 92, console: 51, desktop: 43 },
]

const chartConfig = {
  mobile: {
    label: "Mobile",
    color: "var(--chart-4)",
  },
  console: {
    label: "Console",
    color: "var(--chart-5)",
  },
  desktop: {
    label: "PC",
    color: "var(--chart-6)",
  },
}

export default function MarketChart() {

  return (

    <ChartContainer config={chartConfig} className="min-h-[200px] w-[800px]">

        <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
            left: 14,
            right: 14,
        }}
        >
        <CartesianGrid vertical={false} />

        <XAxis
            dataKey="year"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 4)}
        />

        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

        <Line
            dataKey="mobile"
            type="monotone"
            stroke="var(--color-mobile)"
            strokeWidth={2}
            dot={true}
            activeDot={{r: 6,}}
        />
        <Line
            dataKey="console"
            type="monotone"
            stroke="var(--color-console)"
            strokeWidth={2}
            dot={true}
            activeDot={{r: 6,}}
        />
        <Line
            dataKey="desktop"
            type="monotone"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={true}
            activeDot={{r: 6,}}
        />

        </LineChart>

    </ChartContainer>

  )

}