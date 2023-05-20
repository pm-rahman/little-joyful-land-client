import Title from "../../../Components/Title/Title";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Gallery from "../Gallery/Gallery";
import HighlightProduct from "../highlightProduct/HighlightProduct";
import Articles from "../Articles/Articles";
import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 200,
        });
    }, [])

    Title('Home')
    return (
        <div className="space-y-20">

            <Banner />
            <Gallery />
            <div data-aos="fade-right">
                <Category />
            </div>
            <HighlightProduct />
            <Articles />
        </div>
    );
};

export default Home;