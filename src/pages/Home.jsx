import React from "react";

import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Annouce from "../components/anoouce/Annouce";

const Home = () => {
  return (
    <div>


      <Annouce/>
      <Navbar />
      <Slider />
    
      <Categories />
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
