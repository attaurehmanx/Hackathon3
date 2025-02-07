import Dhero from '@/components/Dhero'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Delivery_Pay from '@/components/Payment_delivery'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Clock, LocateFixed, Phone } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <div>
      
      <Navbar bgColor='bg-white'/>
      <Dhero title='Contact' subtitle='Home' subtitle2='Contact'/>

      <div className="p-3">

        <div className=" ">

          <h1 className="text-3xl text-center font-semibold mt-10">Get In Touch With Us</h1>
          <div className="flex justify-center">
            <p className="text-sm text-[#9F9F9F] mt-3 text-center  w-96">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>
          </div>

        </div>
        
        <div className="grid grid-cols-2 p10">
          {/* col1 */}

          <div className="md:ml-56">

            <div className="mt-7">
              <div className="flex gap-3">
                <LocateFixed className='w-[20px] md:w-[24px]'/>
                <h3 className="text-base md:text-xl font-medium">Address</h3>
              </div>
              <p className="text-start w-40 text-xs md:text-sm">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>

            <div className="mt-7">
              <div className="flex gap-3">
                <Phone className='w-[20px] md:w-[24px]'/>
                <h3 className="text-base md:text-xl font-medium">Phone</h3>
              </div>
              <p className="text-start w-40 text-xs md:text-sm">
                Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
              </p>
            </div>

            <div className="mt-7">
              <div className="flex gap-3">
                <Clock className='w-[20px] md:w-[24px]'/>
                <h3 className="text-base md:text-xl font-medium">Working Time</h3>
              </div>
              <p className="text-start w-40 text-xs md:text-sm ">
                Monday-Friday: 9:00 - 22:00
                <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>

          </div>
          {/* col2 */}
          <div>
            
              <div className="mt-5">

                <label className="text-sm">Your Name</label>
                <Input
                  placeholder="abc"
                  className="md:w-[323px] h-12 border border-[#9F9F9F] mt-4"
                />
              </div>

              <div className="mt-5">

                <label className="text-sm">Email address</label>
                <Input
                  placeholder="abc@defgmail.com"
                  className="md:w-[323px] h-12 border border-[#9F9F9F] mt-4"
                />
              </div>

              <div className="mt-5">

                <label className="text-sm">Subject</label>
                <Input
                  placeholder="This an optional"
                  className="md:w-[323px] h-12 border border-[#9F9F9F] mt-4"
                />
              </div>

              <div className="mt-5">

                <label className="text-sm">Message</label>
                <Input
                  placeholder="Message"
                  className="md:w-[323px] h-16 border border-[#9F9F9F] mt-4"
                />
              </div>

              <div className=" mt-8 ">
                
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="rounded-xl w-[100px] md:w-56 mr-10 h-8 md:h-12 border border-[#000000]"
                >
                  Submit
                </Button>
              </div>
            
          </div>
          {/* end col2 */}

        </div>
      </div>

      <Delivery_Pay/>
      <Footer/>

    </div>
  )
}

export default Contact
