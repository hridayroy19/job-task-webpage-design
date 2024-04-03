import Gatingpaid from "./Gatingpaid";
import SellingOnline from "./SellingOnline";

const SellerTools = () => {
  return (
    <>
      <div>
        <h1 className="text-xl text-black font-medium"> Seller tools </h1>
        <p>
          sell online easily and grow your business with seller Tools create
          paypal <br /> buttons, get instant payment notifications and do much
          more .
        </p>
      </div>
      <div>
        <div className=" xl:px-24 lg:px-10 px-3 md:px-10">
          <SellingOnline></SellingOnline>
          <Gatingpaid></Gatingpaid>
        </div>
      </div>
    </>
  );
};

export default SellerTools;
