import { faBell, faBook, faCarSide } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Gatingpaid = () => {
    return (
        <div className=" mt-9">
            <div className="flex mt-6
         lg:w-[95%] w-[95%] xl:w-[68%] border-2 p-2 gap-4">
          <div className="text-3xl text-sky-600 rounded-2xl w-12 h-10   px-2 py-1 ">
            <FontAwesomeIcon icon={faBook} />
          </div>
          <div className=" lg:flex md:flex   gap-2 items-center justify-between">
            <div>
              <h3 className=" lg:text-xl font-medium mb-1">invoices</h3>
              <p>
                Create and manage secure buttons for you customers to add iterms
                to their cart buy donate or subscribe
              </p>
            </div>
            <p className=" text-blue-600">Messange</p>
          </div>
        </div>
        {/*  more sell tools */}
        <div className=" mt-7 mb-10">
        <div className="flex mt-6
         lg:w-[95%] w-[95%] xl:w-[68%] border-2 p-2 gap-4">
          <div className="text-3xl text-blue-600 rounded-2xl w-12 h-10   px-2 py-1 ">
            <FontAwesomeIcon icon={faCarSide} />
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

export default Gatingpaid;