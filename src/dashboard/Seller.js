import React from 'react';
import SubNavbar from './SubNavbar';
import { Outlet } from 'react-router-dom';


const Seller = () => {
    return (
        <div className='w-full mx-auto overflow-hidden'>
            <SubNavbar/>
            <div className='lg:px-24 px-5'>
            <Outlet></Outlet>
            </div>
           
     
        </div>
    );
};

export default Seller;