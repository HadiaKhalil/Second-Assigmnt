import Hero from "./Hero";
import Second from "./Second";
import Cards from "./Cards";
import Skills from "./Skills";
import Project from "./Project";

import Lastsection from "./Lastsection";

import Layout from "@/components/Layout";
import Work from "./Work";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Second />
      <Cards />
      <Skills />
      <Project />
    
      <Lastsection />

      <Work />
    </Layout>
  );
};

export default Home;
