import Title from "../../../Components/Title/Title";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Gallery from "../Gallery/Gallery";
import Articles from "../Articles/Articles";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AboutUs from "../AboutUs/AboutUs";
import GetNews from "../GetNews/GetNews";

const Home = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 200,
    });
  }, []);

  Title("Home");
  return (
    <>
      <Banner />
      <Category />
      <Gallery />
      <AboutUs/>
      <Articles />
      <GetNews/>
    </>
  );
};

export default Home;
