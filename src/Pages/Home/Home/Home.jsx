import Title from "../../../Components/Title/Title";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    Title('Home')
    return (
        <div className="space-y-12">
            <Banner/>
            <Gallery/>
            <Category/>
        </div>
    );
};

export default Home;