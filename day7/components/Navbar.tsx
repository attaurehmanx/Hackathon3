import Link from 'next/link'
import React from 'react'
import { FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import SheetSide from './Sheet';
import { SheetSides } from '@/components/Sheetcart';

interface NavbarProps{
  bgColor: string
}

const Navbar: React.FC<NavbarProps> = ({bgColor}) => {
  return (
    <div className={`flex justify-evenly h-[80px] w-full ${bgColor} bg-[#FBEBB5] px-2.5`}>
        <div className='flex justify-self-start items-center '><SheetSide /></div>
        {/* letf */}
        
      <div className='flex items-center justify-center text-lg font-semibold  ml-[100px] '>
        
        <div className='hidden md:block space-x-20'>
            <Link href={"/"}>Home</Link>
            <Link href={"/Shopitems"}>Shop</Link>
            <Link href={"/Blogpost"}>About</Link>
            <Link href={"/Contact"}>Contact</Link>
        
        </div>
      </div>

      {/* right */}
      <div className='flex items-center text-lg font-semibold gap-12 '>
            <Link href={"/My_account"}><FaUser/></Link>
            <Link href={"#"}><IoSearch/></Link>
            <Link href={"/Cart"}><FaRegHeart /></Link>
            <SheetSides/>
      </div>
    </div>
  )
}

export default Navbar
