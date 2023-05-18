import Title from "../../../Components/Title/Title";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Gallery from "../Gallery/Gallery";
import Testimonial from "../Testimonial/Testimonial";
import HighlightProduct from "../highlightProduct/HighlightProduct";

const Home = () => {
    Title('Home')
    return (
        <div className="space-y-20">
            <Banner/>
            <Gallery/>
            <Category/>
            <HighlightProduct/>
            <Testimonial/>
        </div>
    );
};

export default Home;