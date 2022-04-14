import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../../images/logo2.png'
import banner from '../../../images/bannerbackground.png'
import Home from '../../Home/Home/Home';
const Header = () => {
    return (
        <div>
            <nav>
                <div className='flex justify-between p-4'>
                    <div>
                        <img className='ml-32' width={200} src={headerLogo} alt="" />
                    </div>
                    <div >
                        <Link className='mr-12 font-semibold' to='/login'>Login</Link>
                        <Link className='font-semibold' to='/signup'>Sign Up</Link>
                    </div>
                </div>
            </nav>
            <div >
             <div  className='relative' >
             <img className='absolute' src={banner} alt="" />
             </div>
                <div className='flex relative justify-center'>
                    <div>
                    <h1 className='relative text-4xl mt-12 mb-6'>Best Food Waiting for your belly</h1>
                    <input className='relative pl-32 pb-1 pt-1 ml-24' type="search" name="" placeholder='Search' id="" />
                    </div>
                </div>
            </div>
         <div className='mt-[600px]'>
             <Home></Home>
         </div>
        </div>
    );
};

export default Header;