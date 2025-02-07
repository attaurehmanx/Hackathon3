import Dhero from '@/components/Dhero'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Delivery_Pay from '@/components/Payment_delivery'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import React from 'react'

const My_account = () => {
  return (
    <div>
        <Navbar bgColor='bg-white'/>
        <Dhero title='My Account' subtitle='Home' subtitle2='My account'/>

      {/* form */}
      
      <div className="flex flex-col md:flex-row justify-center mt-20 py-14">
          
          <div className="px-8 md:ml-[200px] ">
            <h1 className="text-4xl font-semibold">Login</h1>

            {/* user */}
            <div className="mt-5">
              <label className="text-sm">Username or email address</label>
              <Input className="w-[323px] h-12 border border-[#9F9F9F] mt-4" />
            </div>

            <div className="mt-5">
              <label className="text-sm">Password</label>
              <Input
                type="password "
                className="w-[323px] h-12 border border-[#9F9F9F] mt-4"
              />
            </div>

            <div className="flex mt-5 gap-3">
              <Checkbox className="" />
              <label htmlFor="" className="text-sm">
                Remember me
              </label>
            </div>

            <div className="flex gap-5 mt-10">
              <Button
                variant={"outline"}
                size={"icon"}
                className="rounded-xl w-40 h-12 border border-[#000000]"
              >
                Log In
              </Button>
              <p className="pt-4 text-sm text-[#9F9F9F]">Lost Your Password?</p>
            </div>

          </div>

          {/* col2 */}

          
            <div className="px-8 md:px-0 md:ml-[100px] mt-4 md:mt-0">

              <h1 className="text-4xl font-semibold">Register</h1>

              <div className="mt-5">
                <label className="text-sm ">Email address</label>
                <Input
                  type="email"
                  className="w-[323px] h-12 border border-[#9F9F9F] mt-4"
                />
              </div>

              <div className="mt-5">
                <p>
                  A link to set a new password will be sent to your email
                  address.
                </p>
              </div>

              <div className=" mt-5 gap-3 ">
                <p className="text-balance">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <span className="font-bold">privacy policy.</span>
                </p>
              </div>

              <div className="flex gap-5 mt-12">
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="rounded-xl w-40 h-12 border border-[#000000]"
                >
                  Register
                </Button>
              </div>

            </div>
          
        </div>
        <Delivery_Pay/>
        <Footer/>
    </div>
  )
}

export default My_account
