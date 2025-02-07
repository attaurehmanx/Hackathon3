import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const New_Arrival = () => {
  return (
    <div className='w-full bg-[#FFF9E5]'>
      <div className='flex flex-row justify-center items-center '>
        <Image src={"/sofa 1.png"} height={600} width={600} alt='image' className='mx-auto w-[200px] h-[200px] md:w-[600px] md:h-[600px]'></Image>
        <div className='flex flex-col justify-start mx-auto md:ml-8 '>
        <h5 className='text-lg font-medium'>New Arrival</h5>
        <h1 className='text-xl md:text-4xl text-center font-bold'>Asgaard sofa</h1>
        <Link href={``}> <Button variant={"outline"} className='mt-4 w-[120px] h-[40px]'>Order Now</Button> </Link>
        </div>
      </div>
    </div>
  )
}

export default New_Arrival
