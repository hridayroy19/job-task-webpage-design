
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { QrCodeIcon } from '@heroicons/react/24/outline';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';



const Card = () => {
    return (
        <div className='mt-10  flex justify-center'>
        <div className="card w-[400px] border-2 bg-white shadow-xl">
  <div className=" flex justify-center">
    <img src="https://i.ibb.co/rQ35nKP/istockphoto-1354893114-612x612.jpg" alt="Shoes" className="rounded-xl w-[170px] " />
  </div>
  <div className="card-body px-3 items-center text-center">
    <h2 className=" text-xl mb-5">Your Product link is Ready</h2>
    <p>If a dog chews shoes whose shoes does he 
    og chews shoes whose shoes does he choose?
    </p>
    <div className=' text-[28px] flex text-blue-600 justify-center gap-6 mt-5 '>
    <FontAwesomeIcon icon={faTwitter} />
    <FontAwesomeIcon icon={faFacebook}/>
    <FontAwesomeIcon icon={faQrcode}/>

    </div>
    <div className='mt-6'>
      <button className=" bg-blue-700 border rounded-full w-full p-2  ">Buy Now</button>
      <button className=" mt-4 mb-6  border-2 border-blue-300 rounded-full w-full p-2  ">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;