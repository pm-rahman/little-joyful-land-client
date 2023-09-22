import Footer from "../../Components/Footer/Footer";
import NavMenu from "../../Components/NavMenu/NavMenu";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-[#fcfeff]">
      <NavMenu />
      <div className="mt-3 mb-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
