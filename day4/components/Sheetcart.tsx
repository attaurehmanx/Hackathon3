"use client"

import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const SHEET_SIDES = ["right"] as const

type SheetSides = (typeof SHEET_SIDES)[number]

export function SheetSides() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="ghost"><ShoppingCart className="text-black"/></Button>
          </SheetTrigger>
          <SheetContent side={side} className="flex flex-col h-full">
            <SheetHeader>
              <SheetTitle >Shopping Cart </SheetTitle>
            
            </SheetHeader>
            <div className="flex items-center gap-4 py-4">
              
              <Image src={"/Asgaard sofa 4.png"} alt="image" width={100} height={100} className="w-[100px] "/>
              <p className="text-sm">Asgaard sofa <br/>
              <span className="">1 X <span className="text-[#B88E2F]">Rs. 250,000.00</span></span></p>

              
                
            </div>

            <div className="flex items-end h-full gap-5 md:gap-10">
                  <h1>Subtotal</h1>
                  <h3 className="text-[#B88E2F]">RS. 250,000.00</h3>
                </div>

            <SheetFooter className=" mt-auto ">
                
                <div className="w-full space-x-4">
                  <Link href={"/Cart"}>
                <Button type="submit" variant={"outline"} className="rounded-xl">View Cart</Button>
                </Link>
                <Link href={"/Checkout"}>
                <Button type="submit" variant={"outline"} className="rounded-xl">Checkout</Button>
                </Link>
                </div>
              
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
