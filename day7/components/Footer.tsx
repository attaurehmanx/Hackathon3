import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer>
      <div className="grid grid-cols grid-cols-4 w-full h-full md:h-[200px] mt-20 p-5 ">
        {/* 1st */}
        <div className="mt-10 text-sm md:text-base text-[#9F9F9F]">
          <p>400 University Drive Suite 200 Coral</p>
          <p className="">Gables,</p>
          <p>FL 33134 USA</p>
        </div>

        {/* 2nd */}
        <div className="text-center text-xs md:text-base">
          <h3 className="text-[#9F9F9F]">Link</h3>
          <ul>
            <li className=" pt-5 font-medium ">Home</li>
            <li className=" pt-5 font-medium ">Shop</li>
            <li className=" pt-5 font-medium ">About</li>
            <li className=" pt-5 font-medium ">Contact</li>
          </ul>
        </div>

        {/* 3rd */}
        <div className="text-center text-xs md:text-base">
          <h3 className="text-[#9F9F9F]">Help</h3>
          <ul>
            <li className=" pt-5 font-medium ">Payment Option</li>
            <li className=" pt-5 font-medium ">Return</li>
            <li className=" pt-5 font-medium ">Privacy Policies</li>
          </ul>
        </div>

        {/* 4th */}
        <div className="ml-3 md:ml-0">
          <h3 className="text-[#9F9F9F] text-xs md:text-base ">Newsletter</h3>
          <div className="flex flex-col md:flex-row md:space-x-2 mt-4 w-full">
            <Input type="email" placeholder="Email" />
            <Button className="hover:bg-red-600 hover:text-white bg-white text-black border-b-2  text-xs w-[70px] mt-2 md:mt-0">
              Subscribe
            </Button>
          </div>
        </div>

        {/* bottom */}
      </div>
      <div className="ml-9 mt-20 text-gray-600 border-t-2 mr-9 border-gray-500 my-4">
        <p className="mt-5">© 2022 Meubel House. All rights reserved.</p>
      </div>
    </footer>
  );
}
