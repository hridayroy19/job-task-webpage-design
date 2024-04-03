import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faBell, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SellingOnline = () => {
  return (
    <div className=" mt-10">
      <div>
        <h3 className="text-xl font-semibold">selling online</h3>
        <p>
          Grow your business by making it easier for your customers to pay you
        </p>
      </div>
      {/* card section  */}

      <div className=" mt-8">
        {/* card one */}
        <div className="flex 
         lg:w-[95%] w-[95%] xl:w-[68%] border-2 p-2 gap-4">
          <div className="text-3xl text-blue-700 rounded-2xl w-12 h-10   px-2 py-1 ">
            <FontAwesomeIcon icon={faPaypal} />
          </div>
          <div className=" lg:flex md:flex   gap-2 items-center justify-between">
            <div>
              <h3 className=" lg:text-xl font-medium mb-1">PayPal buttons</h3>
              <p>
                Create and manage secure buttons for you customers to add iterms
                to their cart buy donate or subscribe
              </p>
            </div>
            <p className=" text-blue-600">Messange</p>
          </div>
        </div>
        {/* card two */}
        <div className="flex mt-6
         lg:w-[95%] w-[95%] xl:w-[68%] border-2 p-2 gap-4">
          <div className="text-3xl text-gray-400 rounded-2xl w-12 h-10   px-2 py-1 ">
            <FontAwesomeIcon icon={faLaptop} />
          </div>
          <div className=" lg:flex md:flex   gap-2 items-center justify-between">
            <div>
              <h3 className=" lg:text-xl font-medium mb-1"> instant payment notifications</h3>
              <p>
                Create and manage secure buttons for you customers to add iterms
                to their cart buy donate or subscribe
              </p>
            </div>
            <p className=" text-blue-600">Messange</p>
          </div>
        </div>
        {/* card three */}
        <div className="flex mt-6
         lg:w-[95%] w-[95%] xl:w-[68%] border-2 p-2 gap-4">
          <div className="text-3xl text-sky-600 rounded-2xl w-12 h-10   px-2 py-1 ">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className=" lg:flex md:flex   gap-2 items-center justify-between">
            <div>
              <h3 className=" lg:text-xl font-medium mb-1">Website prefernces</h3>
              <p>
                Create and manage secure buttons for you customers to add iterms
                to their cart buy donate or subscribe
              </p>
            </div>
            <p className=" text-blue-600">Messange</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingOnline;
