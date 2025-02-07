"use client"

import { Button } from "@/components/ui/button"
import { IoMenu } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";


const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export default function SheetSide() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" className="bg-[#FED341]">
                <IoMenu className=""/>
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              
            </SheetHeader>
            
            <div className='flex flex-col space-y-10 mt-5'>
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>Shop</Link>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Contact</Link>
        
        </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
