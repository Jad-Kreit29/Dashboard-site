import React from 'react'

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MarketSelect({ translation, setCurrency }) {

  return (

    <Select defaultValue="usd" onValueChange={setCurrency}>

      <SelectTrigger className="w-[180px]">

        <SelectValue placeholder="Select currency" />

      </SelectTrigger>

      <SelectContent>

        <SelectGroup>

          <SelectLabel>{translation('lineGraphSelectTitle')}</SelectLabel>
          <SelectItem value="usd">USD</SelectItem>
          <SelectItem value="cad">CAD</SelectItem>
          <SelectItem value="eur">EUR</SelectItem>

        </SelectGroup>

      </SelectContent>
      
    </Select>

  )

}