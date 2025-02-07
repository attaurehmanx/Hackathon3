import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Our_blog = () => {
  return (
    <div className="  mx-auto mt-10">
      <h1 className="text-center text-3xl font-medium ">Our Blog</h1>
      <p className="text-center">
        Find a bright ideal to suit your taste with our great selection
      </p>
      <div className="flex md:flex-row flex-col justify-center mt-16  gap-12  ">

        {/* image1 */}

        <div>
          <Image src={"/ob1.png"} height={300} width={300} alt="table" className="mx-auto" />
          <div>
            <p className=" text-lg mt-3 text-center">
              Going all-in with millennial design
            </p>
            <div className="flex justify-center">
              <Link href={"/Blogpost"}>
              <Button
                variant={"link"}
                size={"icon"}
                className=" font-medium mt-2 text-xl"
              >
                Read More
              </Button>
              </Link>
            </div>
            <div className="flex justify-center space-x-2 mt-2">
              <span>
                <Clock />
              </span>
              <span>5 min</span>
              <span>
                <Calendar />
              </span>
              <span>
                12<sup>th</sup> Oct 2022
              </span>
            </div>
          </div>
          </div>
        

        {/* image2 */}

        <div className="">
          <Image src={"/ob2.png"} height={300} width={300} alt="table" className="mx-auto"/>
          <div>
            <p className=" text-lg mt-3 text-center">
              Going all-in with millennial design
            </p>
            <div className="flex justify-center">
            <Link href={"/Blogpost"}>
              <Button
                variant={"link"}
                size={"icon"}
                className=" font-medium mt-2 text-xl"
              >
                Read More
              </Button>
              </Link>
            </div>
            <div className="flex justify-center space-x-2 mt-2">
              <span>
                <Clock />
              </span>
              <span>5 min</span>
              <span>
                <Calendar />
              </span>
              <span>
                12<sup>th</sup> Oct 2022
              </span>
            </div>
          </div>
        </div>

        {/* image3 */}

        <div>
          <Image src={"/ob3.png"} height={300} width={300} alt="table" className="mx-auto"/>
          <div>
            <p className=" text-lg mt-3 text-center">
              Going all-in with millennial design
            </p>
            <div className="flex justify-center">
            <Link href={"/Blogpost"}>
              <Button
                variant={"link"}
                size={"icon"}
                className=" font-medium mt-2 text-xl"
              >
                Read More
              </Button>
              </Link>
            </div>
            <div className="flex justify-center space-x-2 mt-2">
              <span>
                <Clock />
              </span>
              <span>5 min</span>
              <span>
                <Calendar />
              </span>
              <span>
                12<sup>th</sup> Oct 2022
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
      <Link href={"/Blogpost"}>
    <Button className=" mt-7" variant={"link"}>View All Post</Button>
    </Link>
    </div>
    </div>
  );
};

export default Our_blog;
