"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  FacebookIcon,
  LinkedinIcon,
  Minus,
  Plus,
  Star,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import Relatedpro from "@/components/RelatedProduct";
import Footer from "@/components/Footer";
import Description_of_dynamic from "@/components/Dynamic-route-ke-neche-wala";
import { productList } from "@/components/16product-ka-interface-&-object";
import { useParams } from "next/navigation";

const star = (
  <div className="flex">
    {" "}
    <Star className="text-yellow-300" />
    <Star />
    <Star />
    <Star />
    <Star />{" "}
  </div>
);

export default function Detail() {
  const params = useParams();
  const details = params.details;
  const item = productList.find((item) => item.id === Number(details));
  if (!item) {
    return <h1>product not found</h1>;
  }

  return (
    <div>
      <Navbar bgColor=" bg-white" />
      <div
        key={item.id}
        className="flex flex-col md:flex-row justify-evenly gap-2 md:gap-5 mt-10 px-2"
      >
        {/* left */}
        <div className="flex flex-row md:flex-col justify-center md:justify-start gap-1  order-2 md:order-1 mt-4 md:mt-0">
          <Image
            src={item.imag_url1}
            alt={item.title}
            width={100}
            height={100}
            className="w-[100px] md:w-[120px] bg-[#FFF9E5] "
          />
          <Image
            src={item.imag_url2}
            alt={item.title}
            width={100}
            height={100}
            className="w-[100px] md:w-[120px] bg-[#FFF9E5] "
          />
          <Image
            src={item.imag_url3}
            alt={item.title}
            width={100}
            height={100}
            className="w-[100px] md:w-[120px] bg-[#FFF9E5] "
          />
        </div>
        {/* mid */}
        <div className="w-full md:w-[500px] h-[300px]  md:h-[450px]  bg-[#FFF9E5] order-1 md:order-2 ">
          <Image
            src={item.imag_url}
            alt={item.title}
            width={300}
            height={300}
            className=" mx-auto w-[400px] h-[300px] "
          />
        </div>

        {/* right */}

        <div className="w-full md:w-[600px] h-full order-3">
          <h1 className="text-2xl md:text-4xl font-medium">{item.title}</h1>
          <p className="text-xl md:text-2xl mt-2">{item.price}</p>
          <div className="flex mt-4">
            {star} <span className="text-sm ml-3"> | 5 Customer Review </span>
          </div>
          {/* description */}
          <p className="mt-4 text-balance">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          {/* size */}
          <h5 className="mt-6">Size</h5>
          <div className="flex gap-5 mt-3">
            <div className="bg-yellow-200 rounded-md w-[30px] h-[30px] text-center">
              L
            </div>
            <div className="bg-yellow-100 rounded-md w-[30px] h-[30px] text-center">
              XL
            </div>
            <div className="bg-yellow-100 rounded-md w-[30px] h-[30px] text-center">
              XS
            </div>
          </div>
          {/* color */}
          <h5 className="mt-3">Color</h5>
          <div className="flex gap-5 mt-3">
            <div className="bg-[#816DFA] rounded-full w-[30px] h-[30px] "></div>
            <div className="bg-[#000000] rounded-full w-[30px] h-[30px] "></div>
            <div className="bg-[#CDBA7B] rounded-full w-[30px] h-[30px] "></div>
          </div>
          {/* Add to cart */}
          <div className="flex items-center mt-5 gap-5">
            <div className="w-[125px] h-[60px] border border-[#9F9F9F] rounded-md flex justify-between items-center ">
              <Minus /> 1 <Plus />
            </div>
            <Button variant={"outline"} className="w-[150px] h-[45px]">
              Add To Cart
            </Button>
          </div>
          <p className="border border-gray-400 mt-10"></p>
          {/* tags, share and category */}
          <div className="grid grid-cols-2 mt-8">
            {/* 1st */}
            <div className=" text-[#9F9F9F]">
              <p>SKU</p>
              <p>Category</p>
              <p>Tags</p>
              <p>Share</p>
            </div>
            {/* 2nd */}
            <div className=" text-[#9F9F9F]">
              <p>: SS001</p>
              <p>: Sofas</p>
              <p>: Sofa, Chair, Home, Shop</p>
              <p className="flex text-black">
                : <FacebookIcon /> <LinkedinIcon /> <XIcon />
              </p>
            </div>
          </div>
        </div>
      </div>

      <Description_of_dynamic />
      <Relatedpro />
      <Footer />
    </div>
  );
}
