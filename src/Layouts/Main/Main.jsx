import Footer from "../../Components/Footer/Footer";
import NavMenu from "../../Components/NavMenu/NavMenu";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-[#f8fafa]">
      <NavMenu />
      <div className="mt-3 mb-4 container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
