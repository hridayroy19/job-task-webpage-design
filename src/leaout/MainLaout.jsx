import { Outlet } from "react-router-dom";
// import SubNavbar from "../dashboard/SubNavbar";
import Navbar from "../Navbar";
import Footer from "../Footer";


const MainLaout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet> 
           <Footer></Footer>
           {/* <SubNavbar></SubNavbar> */}
        </div>
    );
};

export default MainLaout;