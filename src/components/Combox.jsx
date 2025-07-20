import React from 'react'
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const games = [
  {
    value: "blackMyth",
    label: "Black Myth: Wukong",
    id: 0,
  },
  {
    value: "banana",
    label: "Banana",
    id: 1,
  },
  {
    value: "monsterHunter",
    label: "Monster Hunter Wilds",
    id: 2,
  },
  {
    value: "cs2",
    label: "Counter-Strike 2",
    id: 3,
  },
  {
    value: "lostark",
    label: "Lost Ark",
    id: 4,
  },
  {
    value: "palworld",
    label: "Palworld",
    id: 5,
  },
  {
    value: "pubg",
    label: "PUBG: BATTLEGROUNDS",
    id: 6,
  },
  {
    value: "dota",
    label: "Dota 2",
    id: 7,
  },
  {
    value: "elden",
    label: "Elden Ring",
    id: 8,
  },
  {
    value: "cyberpunk",
    label: "Cyberpunk 2077",
    id: 9,
  },
]

const Combox = ({ onChangeId }) => {

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
                                onChangeId(game.id);
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