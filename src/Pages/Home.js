import React from "react";
import Footer from "../Components/Generics/Layout/Footer";
import Header from "../Components/Generics/Layout/Header";
import Banner from "../Components/home/Banner";
import Gallery from "../Components/home/Gallery";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Banner />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;