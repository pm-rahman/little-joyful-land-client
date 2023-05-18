import Title from "../../../Components/Title/Title";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Gallery from "../Gallery/Gallery";
import HighlightProduct from "../highlightProduct/HighlightProduct";
import Articles from "../Articles/Articles";

const Home = () => {
    Title('Home')
    return (
        <div className="space-y-20">
            <Banner/>
            <Gallery/>
            <Category/>
            <HighlightProduct/>
            <Articles/>
        </div>
    );
};

export default Home;