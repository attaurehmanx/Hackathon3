"use client"
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Dhero from "@/components/Dhero";
import Footer from "@/components/Footer";
import Delivery_Pay from "@/components/Payment_delivery";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter


/* eslint-disable @typescript-eslint/no-explicit-any */
const Cart = () => {
  const router = useRouter(); // Initialize useRouter
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  const handleQuantityChange = (index: number, action: "increase" | "decrease") => {
    const updatedCart = [...cartItems];
    const currentItem = updatedCart[index];
    if (action === "increase") {
      currentItem.quantity += 1;
    } else if (action === "decrease" && currentItem.quantity > 1) {
      currentItem.quantity -= 1;
    }
    currentItem.totalPrice = currentItem.price * currentItem.quantity;
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  };

  const subtotal = getSubtotal();

  // Store the cart in localStorage when the user checks out
  const handleCheckOut = () => {
    localStorage.setItem("checkoutCart", JSON.stringify(cartItems)); // Save cart data for checkout
    router.push("/Checkout"); // Redirect to checkout page
  };

  return (
    <div>
      <Navbar bgColor="bg-white" />
      <Dhero title="Cart" subtitle="Home" subtitle2="Cart" />

      <div className="flex flex-col md:flex-row px-10 mt-5 md:mt-10 mb-6">
        <table className="w-full text-left text-sm md:text-base">
          <thead>
            <tr className="bg-yellow-100">
              <th className="p-3">Product</th>
              <th className="p-3">Price</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Subtotal</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={item.id}>
                <td>
                  <div className="flex items-center mt-5 md:mt-0">
                    <Image
                      src={item.image}
                      height={92}
                      width={100}
                      alt={item.name}
                      className="bg-[#FBEBB5]"
                    />
                    <p className="text-[#9F9F9F]">{item.name}</p>
                  </div>
                </td>
                <td>
                  <p className="text-[#9F9F9F]">Rs.{item.price}</p>
                </td>
                <td className="px-4">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuantityChange(index, "decrease")}
                    >
                      -
                    </Button>
                    <p className="border px-2 border-[#9F9F9F] rounded-md md:w-[30%]">
                      {item.quantity}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuantityChange(index, "increase")}
                    >
                      +
                    </Button>
                  </div>
                </td>
                <td>
                  <p>Rs.{item.totalPrice}</p>
                </td>
                <td>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-500"
                    onClick={() => handleRemoveItem(index)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="w-full md:w-[650px] bg-[#FFF9E5] md:ml-20 py-5 mt-10 md:mt-0">
          <h1 className="text-center font-semibold text-xl md:text-3xl">Cart Totals</h1>
          <div className="flex flex-row justify-center items-center text-center mt-10 space-x-10">
            <div>
              <h1 className="font-medium">Subtotal</h1>
              <h1 className="font-medium mt-5">Total</h1>
            </div>
            <div>
              <p className="text-[#9F9F9F]">Rs. {subtotal}</p>
              <p className="mt-5 text-[#B88E2F] text-xl">Rs. {subtotal}</p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-xl w-[130px] md:w-48 h-[30px] md:h-16 border text-xl border-[#000000]"
              onClick={handleCheckOut} // Ensure handleCheckOut triggers the redirect
            >
              Check Out
            </Button>
          </div>
        </div>
      </div>

      <Delivery_Pay />
      <Footer />
    </div>
  );
};
/* eslint-disable @typescript-eslint/no-explicit-any */

export default Cart;
