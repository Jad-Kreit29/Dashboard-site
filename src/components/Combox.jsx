import React from 'react'
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const games = [
  {
    value: "pubg",
    label: "PUBG: BATTLEGROUNDS",
  },
  {
    value: "blackMyth",
    label: "Black Myth: Wukong",
  },
  {
    value: "palworld",
    label: "Palworld",
  },
  {
    value: "cs2",
    label: "Counter-Strike 2",
  },
  {
    value: "monsterHunter",
    label: "Monster Hunter Wilds",
  },
  {
    value: "lostark",
    label: "Lost Ark",
  },
  {
    value: "dota",
    label: "Dota 2",
  },
  {
    value: "cyberpunk",
    label: "Cyberpunk 2077",
  },
  {
    value: "elden",
    label: "Elden Ring",
  },
  {
    value: "banana",
    label: "Banana",
  },
]

const Combox = () => {

    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
    
        <Popover open={open} onOpenChange={setOpen}>

            <PopoverTrigger asChild>

                <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[200px] justify-between"
                >
                {value
                    ? games.find((games) => games.value === value)?.label
                    : "Select Game..."}
                <ChevronsUpDown className="opacity-50" />
                </Button>

            </PopoverTrigger>

            <PopoverContent className="w-[200px] p-0">

                <Command>

                    <CommandInput placeholder="Search Game..." className="h-9" />

                    <CommandList>

                        <CommandEmpty>No game found!</CommandEmpty>

                        <CommandGroup>
                        {games.map((game) => (
                            <CommandItem
                            key={game.value}
                            value={game.value}
                            onSelect={(currentValue) => {
                                setValue(currentValue === value ? "" : currentValue)
                                setOpen(false)
                            }}
                            >
                            {game.label}
                            <Check
                                className={cn(
                                "ml-auto",
                                value === game.value ? "opacity-100" : "opacity-0"
                                )}
                            />
                            </CommandItem>
                        ))}
                        </CommandGroup>

                    </CommandList>

                </Command>

            </PopoverContent>

        </Popover>

    )

}

export default Combox