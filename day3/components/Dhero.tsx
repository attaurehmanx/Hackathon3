import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface Dheroprops{
    title: string,
    subtitle: string,
    subtitle2: string
    
}

const Dhero: React.FC<Dheroprops> = ({title, subtitle, subtitle2}) => {
  return (
    <div className='relative'>
      <Image src={"/d.png"} width={400} height={300} alt='Image' className='cover w-full h-[300px]' />
      {/* inner part */}
      <div className='absolute top-[55px] left-[130px] md:top-[80px] md:left-[550px] text-center'>
      <Image src={"/logo.png"} width={100} height={100} alt='Image' className='ml-4 md:ml-5' />
      <h1 className='text-xl md:text-2xl font-medium w-[120px] md:w-[140px] '>{title}</h1>
      <p className="mt-4 "><span>{subtitle}</span> <ArrowRight className="inline-block " /> <span>{subtitle2}</span></p>
      
      </div>
    </div>
  )
}

export default Dhero
