"use client";
import Dhero from "@/components/Dhero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Delivery_Pay from "@/components/Payment_delivery";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";

const Checkout = () => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("checkoutCart") || "[]");
    setCartItems(storedCart);
  }, []);

  const getSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  };

  const subtotal = getSubtotal();

  const handlePlaceOrder = async () => {
    if (!cartItems.length) {
      alert("Your cart is empty!");
      return;
    }

    const orderData = {
      _type: "order",
      firstName,
      lastName,
      address,
      city,
      zipcode: zipCode,
      phone: parseInt(phone),
      email,
      cartItems: cartItems.map((item) => ({
        _type: "reference",
        _ref: item._id, // Ensure product ID matches Sanity schema
      })),
      total: subtotal,
    };

    try {
      await client.create(orderData);
      alert("Order submitted successfully!");
      localStorage.removeItem("checkoutCart");
    } catch (error) {
      console.error("Error submitting order: ", error);
      alert("Failed to submit order. Please try again.");
    }
  };

  return (
    <div>
      <Navbar bgColor="bg-white" />
      <Dhero title="Checkout" subtitle="Home" subtitle2="Checkout" />

      <div className="flex flex-col md:flex-row mt-20 py-14 px-5">
        {/* Billing details */}
        <div className="md:ml-[200px]">
          <h1 className="text-4xl font-semibold">Billing details</h1>

          <div className="mt-5 flex">
            <label className="text-sm">First Name</label>
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-[120px] h-12 border border-[#9F9F9F] mt-5 -ml-16"
            />
            <label className="text-sm ml-10">Last Name</label>
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-[120px] h-12 border border-[#9F9F9F] mt-5 -ml-16"
            />
          </div>

          <div className="mt-5">
            <label className="text-sm">Street address</label>
            <Input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-[323px] h-12 border border-[#9F9F9F] mt-4"
            />
          </div>

          <div className="mt-5">
            <label className="text-sm">Town / City</label>
            <Input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-[323px] h-12 border border-[#9F9F9F] mt-4"
            />
          </div>

          <div className="mt-5">
            <label className="text-sm">ZIP code</label>
            <Input
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="w-[323px] h-12 border border-[#9F9F9F] mt-4"
            />
          </div>

          <div className="mt-5">
            <label className="text-sm">Phone</label>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-[323px] h-12 border border-[#9F9F9F] mt-4"
            />
          </div>

          <div className="mt-5">
            <label className="text-sm">Email address</label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[323px] h-12 border border-[#9F9F9F] mt-4"
            />
          </div>
        </div>

        {/* Cart Items and Payment Summary */}
        <div className="md:ml-[100px] mt-10 md:mt-0">
          {/* Cart Items */}
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-2xl font-semibold">Product</h1>
              {cartItems.map((item) => (
                <div key={item.id} className="mt-5">
                  <p className="text-[#9F9F9F]">
                    {item.name} <span className="text-[#000000]">X {item.quantity}</span>
                  </p>
                </div>
              ))}
              <p className="text-sm mt-5">Subtotal</p>
              <p className="text-sm mt-5">Total</p>
            </div>

            {/* Total Price */}
            <div>
              <h1 className="text-2xl font-semibold">Subtotal</h1>
              <p className="text-sm mt-5">Rs. {subtotal}</p>
              <p className="text-sm mt-5">Rs. {subtotal}</p>
              <p className="text-2xl mt-5 font-semibold text-[#B88E2F]">Rs. {subtotal}</p>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="w-full md:w-[80%] border border-[#9F9F9F] mt-8"></div>

          <div className="mt-5">
            <div className="flex gap-2">
              <p className="bg-black rounded-full w-3 h-3 mt-1.5"></p>
              <h1>Direct Bank Transfer</h1>
            </div>

            <div className="mt-5">
              <p className="text-[#9F9F9F]">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
              </p>
            </div>

            <div className="flex gap-2 mt-5 text-[#9F9F9F]">
              <Checkbox className="rounded-full mt-1" />
              <h1>Direct Bank Transfer</h1>
            </div>

            <div className="flex gap-2 mt-3 text-[#9F9F9F]">
              <Checkbox className="rounded-full mt-1" />
              <h1>Cash On Delivery</h1>
            </div>

            <div className="mt-5">
              <p className="text-[#9F9F9F]">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-bold">privacy policy.</span>
              </p>
            </div>

            {/* Place Order Button */}
            <div className="flex justify-center mt-8 w-2/3">
              <Button
                variant={"outline"}
                size={"icon"}
                className="rounded-xl w-56 h-12 border border-[#000000]"
                onClick={handlePlaceOrder}
              >
                Place order
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Delivery_Pay />
      <Footer />
    </div>
  );
};
/* eslint-disable @typescript-eslint/no-explicit-any */
export default Checkout;
