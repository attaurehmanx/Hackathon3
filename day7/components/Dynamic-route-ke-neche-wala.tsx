import React from 'react'
import Image from "next/image"

const Description_of_dynamic = () => {
  return (
    <div>
      

<div className="border border-gray-400 w-full md:w-[90%]  ml-0 md:ml-16 mt-10"></div>
{/* Description */}

<div className="h-full mt-10">
<div className="flex justify-center space-x-10 md:space-x-20 text-sm md:text-2xl">
      <h1 className="">Description</h1>
      <h1 className=" text-[#9F9F9F]">Additional Information</h1>
      <h1 className=" text-[#9F9F9F]">Reviews [5]</h1>
    </div>

    {/* paragraph */}
    <div className="max-w-4xl   mx-auto  space-y-8 mt-14 md:mt-5 text-balance px-6">
      <p className="text-[#9F9F9F]">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
      <p className="text-[#9F9F9F]">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
  </div>
    {/* Images */}
  <div className="flex flex-col md:flex-row justify-center gap-5 mx-auto mt-5">
    <Image
        src={"/Cloud sofa three seater + ottoman_2 1.png"}
        height={348}
        width={550}
        alt="image"
        className="bg-[#FFF9E5]"
      />
    <Image
        src={"/Cloud sofa three seater + ottoman_1 1.png"}
        height={348}
        width={550}
        alt="image"
        className="bg-[#FFF9E5]"
      />
  </div>
  </div>
{/* border */}
<div className="border border-gray-400 mt-10"></div>
    </div>
  )
}

export default Description_of_dynamic
