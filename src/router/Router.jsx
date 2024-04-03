import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../leaout/MainLaout";
import App from "../App";
import Seller from "../dashboard/Seller";
import SellerTools from "../dashboard/SellerTools"


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLaout></MainLaout>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/dashboard",
        element: <Seller />,
        children:[{
            path: "sellTols",
            element: <SellerTools/>
        }]
      },    
    ],
  },
]);

export default router;
