import React from "react";
import Recommended from "../components/home/Recommended";
import Category from "../components/home/Category";
import Footer from "../components/Footer";

import { Helmet } from "react-helmet";
import Header from "../components/Header";
import ForYou from "../components/home/ForYou";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
      className="lg:w-app w-full bg-white mx-auto pb-14"
      style={{ backgroundColor: "rgb(249,248,253)" }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <Header />
      <Recommended />
      <Category />

      <ForYou />
      <Footer />
    </motion.div>
  );
};

export default Home;
