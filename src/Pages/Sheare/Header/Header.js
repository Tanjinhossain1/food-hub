import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../../images/logo2.png'
const Header = () => {
    return (
        <div>
            <nav>
                <div className='flex justify-between p-4'>
                    <div>
                        <img className='ml-32' width={200} src={headerLogo} alt="" />
                    </div>
                    <div>
                        <Link className='mr-12 font-semibold' to='/home'>home</Link>
                        <Link className='mr-12 font-semibold' to='/login'>Login</Link>
                        <Link className='font-semibold' to='/signup'>Sign Up</Link>
                    </div>
                </div>
            </nav>

           
         {/* <div className='mt-[600px]'>
             <Home></Home>
         </div> */}
        </div>
    );
};

export default Header;