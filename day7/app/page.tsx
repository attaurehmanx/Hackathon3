
      import Hero from "@/components/Hero";

import Navbar from "@/components/Navbar";
import Twoproduct from "@/components/Twoproduct";
import Product from "@/components/Top Picks For You";
import New_Arrival from "../components/Newarrival";
import Our_blog from "../components/Our_blog";
import Instagram from "@/components/Instagarm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <div>
    <Navbar bgColor=""/>
    <Hero/>
    <Twoproduct/>
    <Product/>
    <New_Arrival/>
    <Our_blog/>
    <Instagram/>
    <Footer/>
   </div>
  );
}
   