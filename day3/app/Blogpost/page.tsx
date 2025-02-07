import Dhero from "@/components/Dhero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Delivery_Pay from "@/components/Payment_delivery";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Search, Tag, User } from "lucide-react";
import Image from "next/image";
import React from "react";

const Blogpost = () => {
  return (
    <div>
      <Navbar bgColor="bg-white" />
      <Dhero title="Blog" subtitle="Home" subtitle2="Blog" />

      {/* blog */}
      <div className="px-2 md:px-5 md:p-14 mt-10 md-mt-0">
        <div className="grid grid-cols-2">
          {/* col1 */}
          <div className="flex flex-col gap-1">
            <Image
              src={"/Rectangle 68.png"}
              height={500}
              width={870}
              alt="image"
              className="w-[170px] md:w-[800px]"
            />

            <div className="flex gap-0.5 mt-3 text-[#9F9F9F] text-xs md:space-x-2">
              <div className="flex mt-2 ">
                <User className="w-[20px]" />
                <h5>Admin</h5>
              </div>

              <div className="flex mt-2 ">
                <span>
                  <Calendar className="w-[20px]" />
                </span>
                <span className="w-[80px]">
                  12<sup>th</sup> Oct 2022
                </span>
              </div>

              <div className="hidden md:block">
                <div className="flex mt-2">
                  <Tag className="w-[20px]" />
                  <h5>Wood</h5>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h1 className="md:text-3xl">
                Going all-in with millennial design
              </h1>
              <p className="mt-4 text-[#9F9F9F] text-pretty ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>

              <Button
                variant={"link"}
                size={"icon"}
                className=" ml-6 font-semi text-lg shadow-2xl shadow-black"
              >
                Read more
              </Button>
            </div>

            <Image
              src={"/Rectangle 68 (1).png"}
              height={500}
              width={870}
              alt="image"
              className="w-[170px] md:w-[800px]"
            />

            <div className="flex gap-0.5 mt-3 text-[#9F9F9F] text-xs md:space-x-2">
              <div className="flex mt-2 ">
                <User className="w-[20px]" />
                <h5>Admin</h5>
              </div>

              <div className="flex  mt-2 ">
                <span>
                  <Calendar className="w-[20px]" />
                </span>
                <span className="w-[80px]">
                  12<sup>th</sup> Oct 2022
                </span>
              </div>

              <div className="hidden md:block">
                <div className="flex mt-2 ">
                  <Tag className="w-[20px]" />
                  <h5>Wood</h5>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h1 className="md:text-3xl">Exploring new ways of decorating</h1>
              <p className="mt-4 text-[#9F9F9F] text-pretty w-[370px] md:w-full ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>

              <Button
                variant={"link"}
                size={"icon"}
                className=" ml-6 font-semi text-lg shadow-2xl shadow-black"
              >
                Read more
              </Button>
            </div>

            <Image
              src={"/Rectangle 68 (2).png"}
              height={500}
              width={870}
              alt="image"
              className="w-[170px] md:w-[800px]"
            />
            <div className="flex gap-0.5 mt-3 text-[#9F9F9F] text-xs md:space-x-2">
              <div className="flex mt-2 ">
                <User className="w-[20px]" />
                <h5>Admin</h5>
              </div>

              <div className="flex mt-2 ">
                <span>
                  <Calendar className="w-[20px]" />
                </span>
                <span className="w-[80px]">
                  12<sup>th</sup> Oct 2022
                </span>
              </div>

              <div className="hidden md:block">
                <div className="flex mt-2">
                  <Tag className="w-[20px]" />
                  <h5>Wood</h5>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h1 className="md:text-3xl">
                Handmade pieces that took time to make
              </h1>
              <p className="mt-4 text-[#9F9F9F] text-pretty w-[370px] md:w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>

              <Button
                variant={"link"}
                size={"icon"}
                className=" ml-6 font-semi text-lg shadow-2xl shadow-black"
              >
                Read more
              </Button>
            </div>
          </div>

          {/* col2 */}
          <div className="md:ml-[150px]">
            <div className="flex relative ">
              <Input className="md:w-[300px] h-12 border border-[#9F9F9F] " />
              <Search className="mt-3 ml-2 absolute justify-self-end" />
            </div>

            <h1 className="md:text-2xl font-medium mt-7 ml-5 md:ml-0">
              Categories
            </h1>

            <div className="grid grid-cols-2 mt-7 ml-5 md:ml-0 ">
              <div>
                <ul className="space-y-4 text-[#9F9F9F]">
                  <li>Crafts</li>
                  <li>Design</li>
                  <li>Handmade</li>
                  <li>Interior</li>
                  <li>wood</li>
                </ul>
              </div>

              <div>
                <ul className="space-y-4 text-[#9F9F9F]">
                  <li>2</li>
                  <li>8</li>
                  <li>7</li>
                  <li>1</li>
                  <li>6</li>
                </ul>
              </div>
            </div>

            {/* Recent post */}
            <div className="mt-24 ml-2">
              <h1 className="md:text-2xl font-medium">Recent Post</h1>

              {/* 1st */}
              <div className="flex gap-1 mt-7 ">
                <Image
                  src={"/Rectangle 69 (4).png"}
                  height={80}
                  width={80}
                  alt="image"
                  className="rounded-sm w-[50px] h-[50px]"
                />
                <p className="w-40">
                  Going all-in with millennial design <br />{" "}
                  <span className="text-[#9F9F9F] text-sm"> 03 Aug 2022</span>
                </p>
              </div>

              {/* 2nd */}
              <div className="flex gap-1 mt-7 ">
                <Image
                  src={"/Rectangle 69 (3).png"}
                  height={80}
                  width={80}
                  alt="image"
                  className="rounded-sm w-[50px] h-[50px]"
                />
                <p className="w-40">
                  Exploring new ways of decorating
                  <br />{" "}
                  <span className="text-[#9F9F9F] text-sm"> 03 Aug 2022</span>
                </p>
              </div>

              {/* 3rd */}
              <div className="flex gap-1 mt-7 ">
                <Image
                  src={"/Rectangle 69 (2).png"}
                  height={80}
                  width={80}
                  alt="image"
                  className="rounded-sm w-[50px] h-[50px]"
                />
                <p className="w-40">
                  Handmade pieces that took time to make
                  <br />{" "}
                  <span className="text-[#9F9F9F] text-sm"> 03 Aug 2022</span>
                </p>
              </div>

              {/* 4th */}
              <div className="flex gap-1 mt-7 ">
                <Image
                  src={"/Rectangle 69 (1).png"}
                  height={80}
                  width={80}
                  alt="image"
                  className="rounded-sm w-[50px] h-[50px]"
                />
                <p className="w-32">
                  Modern home in Milan
                  <br />{" "}
                  <span className="text-[#9F9F9F] text-sm"> 03 Aug 2022</span>
                </p>
              </div>

              {/* 5th */}
              <div className="flex gap-1 mt-7 ">
                <Image
                  src={"/Rectangle 69.png"}
                  height={80}
                  width={80}
                  alt="image"
                  className="rounded-sm w-[50px] h-[50px]"
                />
                <p className="w-40">
                  Colorful office redesign
                  <br />{" "}
                  <span className="text-[#9F9F9F] text-sm"> 03 Aug 2022</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" p-10">
          <div className="flex  justify-center gap-7 text-center ">
            <h1 className="bg-[#FBEBB5] w-10 md:w-16 h-10 md:h-16 rounded-md pt-2 md:pt-5">
              1
            </h1>
            <h1 className="bg-[#FFF9E5] w-10 md:w-16 h-10 md:h-16 rounded-md pt-2 md:pt-5">
              2
            </h1>
            <h1 className="bg-[#FFF9E5] w-10 md:w-16 h-10 md:h-16 rounded-md pt-2 md:pt-5">
              3
            </h1>
            <h1 className="bg-[#FFF9E5] w-10 md:w-16 h-10 md:h-16 rounded-md pt-2 md:pt-5">
              Next
            </h1>
          </div>
        </div>
      </div>

      <Delivery_Pay/>
      <Footer/>
    </div>
  );
};

export default Blogpost;
