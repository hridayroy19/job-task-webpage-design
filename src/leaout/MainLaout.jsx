import { Outlet } from "react-router-dom";
// import SubNavbar from "../dashboard/SubNavbar";
import Navbar from "../Navbar";
import Footer from "../Footer";


const MainLaout = () => {
    return (
        <div className="">
            <Navbar></Navbar>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default MainLaout;