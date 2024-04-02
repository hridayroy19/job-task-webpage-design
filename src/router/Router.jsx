import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../leaout/MainLaout";
import App from "../App";
import SubNavbar from "../dashboard/SubNavbar";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLaout></MainLaout>,
      children:[{
        path:"/",
        element:<App/>,     
    },
    {
        path:"/dashboard",
        element:<SubNavbar/>
    }


]
    },
  ]);

  export default router;