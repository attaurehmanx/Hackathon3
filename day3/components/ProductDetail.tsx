/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FacebookIcon, LinkedinIcon, Minus, Plus, Star, XIcon } from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Description_of_dynamic from "./Dynamic-route-ke-neche-wala";
import Navbar from "./Navbar";
import { useRouter } from "next/navigation";

const star = (
  <div className="flex">
    <Star className="text-yellow-300" />
    <Star />
    <Star />
    <Star />
    <Star />
  </div>
);

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    image: string | null;
    category: string;
    price: number;
    description: string;
    stockLevel: number;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { id, name, image, category, price, description,  } = product;
  const [quantity, setQuantity] = useState(1);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  // Set client-side flag once mounted
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const totalPrice = quantity * price;

  // Handle Add to Cart
  
  const handleAddToCart = () => {
    const cartItem = {
      id,
      name,
      image,
      price,
      quantity,
      totalPrice,
    };
    
    // Save to localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Navigate to Cart page (only after client-side mount)
    if (isClient) {
      router.push('/Cart');
    }
  };

  if (!isClient) {
    return null; // This prevents the component from rendering until it's on the client side
  }

  return (
    <div>
      <Navbar bgColor="bg-white" />
      <div key={id} className="flex flex-col md:flex-row justify-evenly gap-2 md:gap-5 mt-10 px-2">
        {/* left */}
        <div className="flex flex-row md:flex-col justify-center md:justify-start gap-9 order-2 md:order-1 mt-4 md:mt-0">
          {image ? (
            <Image
              src={urlFor(image).url()}
              alt={name}
              width={120}
              height={120}
              className="w-[100px] md:w-[120px] bg-[#FFF9E5] "
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">No Image Available</span>
            </div>
          )}
        </div>

        {/* mid */}
        <div className="w-full md:w-[500px] h-[300px] md:h-[450px] bg-[#FFF9E5] order-1 md:order-2">
          {image ? (
            <Image
              src={urlFor(image).url()}
              alt={name}
              width={500}
              height={500}
              className="w-[100px] md:w-full h-full bg-[#FFF9E5] bg-cover"
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">No Image Available</span>
            </div>
          )}
        </div>

        {/* right */}
        <div className="w-full md:w-[600px] h-full order-3">
          <h1 className="text-2xl md:text-4xl font-medium">{name}</h1>
          <p className="text-xl md:text-2xl mt-2">{price}</p>
          <div className="flex mt-4">
            {star} <span className="text-sm ml-3"> | 5 Customer Review </span>
          </div>
          {/* description */}
          <p className="mt-4 text-balance">{description}</p>
          
          <h5 className="mt-6">Size</h5>
          <div className="flex gap-5 mt-3">
            <div className="bg-yellow-200 rounded-md w-[30px] h-[30px] text-center">L</div>
            <div className="bg-yellow-100 rounded-md w-[30px] h-[30px] text-center">XL</div>
            <div className="bg-yellow-100 rounded-md w-[30px] h-[30px] text-center">XS</div>
          </div>

          <h5 className="mt-3">Color</h5>
          <div className="flex gap-5 mt-3">
            <div className="bg-[#816DFA] rounded-full w-[30px] h-[30px] "></div>
            <div className="bg-[#000000] rounded-full w-[30px] h-[30px] "></div>
            <div className="bg-[#CDBA7B] rounded-full w-[30px] h-[30px] "></div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center mt-5 gap-5">
            <div className="w-[125px] h-[60px] border border-[#9F9F9F] rounded-md flex justify-between items-center ">
              <Minus onClick={handleDecrease} />
              <p>{quantity}</p>
              <Plus onClick={handleIncrease} />
            </div>
            <Button variant="outline" className="w-[150px] h-[45px]" onClick={handleAddToCart}>
              Add To Cart
            </Button>
          </div>

          <p className="border border-gray-400 mt-10"></p>

          <div className="grid grid-cols-2 mt-8">
            <div className="text-[#9F9F9F]">
              <p>SKU</p>
              <p>Category</p>
              <p>Tags</p>
              <p>Share</p>
            </div>
            <div className="text-[#9F9F9F]">
              <p>: SS001</p>
              <p>: {category}</p>
              <p>: Sofa, Chair, Home, Shop</p>
              <p className="flex text-black">
                : <FacebookIcon /> <LinkedinIcon /> <XIcon />
              </p>
            </div>
          </div>
        </div>
      </div>

      <Description_of_dynamic />
    </div>
  );
};

export default ProductDetail;
