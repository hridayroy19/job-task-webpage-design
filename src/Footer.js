
const Footer = () => {
  return (
    <div className="">
      <footer className=" bg-gray-100 border  py-1 lg:px-20  mt-10  ">
        <div className=" flex items-center lg:gap-12">
          <img
            src="https://i.ibb.co/26dPy52/kisspng-paypal-logo-payment-business-sales-5af84e85b30c26-5507677615262224697334-1.png"
            alt=""
            className="w-[90px] "
          />
          <div className=" flex gap-4 justify-center">
            <a href=""> Help</a>
            <a href="">Contact Us</a>
            <a href=""> Secourity</a>
            <a href=""> fees</a>
          </div>
        </div>
      </footer>
      <div className=" p-4 bg-base-300 w-full lg:px-[120px] md:px-11 px-3 bg-gray-200  mt-1">
        <div className=" flex  gap-14 items-center">
          <p className="text-gray-400">
            @1999-2024 payPall, inc,All right reserved.
          </p>
          <div className="grid md:grid-cols-3 grid-cols-2">
            <a href="">Privacy</a>
            <a href=""> Legal</a>
            <a href=""> Policy Updates</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
