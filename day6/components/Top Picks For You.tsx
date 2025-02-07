
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



interface Iproduct{
    title: string,
    price: string,
    id: number,
    imag_url: string
}

const products:Iproduct[] = [
    {
        title: "Trenton modular sofa_3",
        price: "Rs. 25,000.00",
        id: 1,
        imag_url: "/p1.png"
    },
    {
        title: "Granite dining table with dining chair",
        price: "Rs. 25,000.00",
        id: 2,
        imag_url: "/p2.png"
    },
    {
        title: "Outdoor bar table and stool",
        price: "Rs. 25,000.00",
        id: 3,
        imag_url: "/p3.png"
    },
    {
        title: "Plain console with teak mirror",
        price: "Rs. 25,000.00",
        id: 4,
        imag_url: "/p4.png"
    }
]


const Product = () => {
  return (
    <div className='mt-20 md:h-[500px] w-full h-full'>
      <h1 className='text-center text-2xl '>Top Picks For You</h1>
      <p className='text-center'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
      <div className='flex justify-between md:flex-row flex-col items-center px-10 ga-10'>
        {products.map((data) => {
            return(
                
                <div className='' key={data.id}>
                    <Link href={`/Product/${data.id}`}>
                    <Image src={data.imag_url} alt={data.title} height={200} width={200} className='w-[200px] h-[200px]'></Image>
                    <p className='w-[200px]'>{data.title}</p>
                    <p>{data.price}</p>
                     <button className='text-center w-full mt-10'>View more</button>
                     </Link>
                </div>
            )
        })}
        </div>
        <Link href={"/Product/Shopitems"}> <button className='text-center w-full mt-10'>View more</button> </Link>

    </div>
  )
}

export default Product