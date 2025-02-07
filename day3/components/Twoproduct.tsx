import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'


const Twoproduct = () => {
  return (
    <div className='flex flex-col justify-center md:flex-row md:flex md:relative  bg-[#FAF4F4] md:h-[300px]'>

      {/* left */}

      <div className='md:ml-[200px] '>
        <Image src={"/Granite square side table 1.png"} height={300} width={300} alt='image' className='mx-auto'></Image>
        <h3 className=" text-2xl text-center font-medium  md:absolute top-[200px]">Side Table</h3>
        <Link href={"/Product/Shopitems"} className='md:absolute top-[235px] '><Button variant={"link"} className='text-lg text-center w-full '>View more</Button></Link>
      </div>

      {/* right */}

      <div className='md:ml-[200px]'> 
      <Image src={"/Cloud sofa three seater + ottoman_3 1.png"} height={320} width={320} alt='image' className='mx-auto'></Image>
      <h3 className=" text-2xl text-center font-medium  md:absolute  top-[200px]">Side Table</h3>
      <Link href={"/Product/Shopitems"} className='md:absolute top-[235px] '><Button variant={"link"} className='text-lg text-center w-full '>View more</Button></Link>
      </div>
    </div>
  )
}

export default Twoproduct
