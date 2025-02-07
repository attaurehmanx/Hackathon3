import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'


const Hero = () => {
  return (
    <main className='flex  justify-center md:items-center w-full  h-full mx-auto bg-[#FBEBB5]'>
      <div className='flex flex-col justify-star items-center '>
        <h1 className="mt-16 md:mt-0 ml-10  md:text-5xl text-xl font-medium md:w-[400px] w-[150px] md:ml-28 " >Rocket single <br />seater</h1>
        <Link href={"/Product/Shopitems"}>
        <Button variant={"link"} className=" mt-1 text-sm  md:mt-3 md:text-lg md:-ml-[155px] ">Shop Now</Button>
        </Link>
      </div>
      <div >
        <Image src={"/Rocket single seater 1.png"} className='mx-auto  ' height={800} width={800} alt='image'></Image>
      </div>
    </main>
  )
}

export default Hero
