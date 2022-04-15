import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import headerLogo from '../../../images/logo2.png'
import Shef from '../Shef/Shef';
const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };
    return (
        <div>
            <nav>
                <div className='flex justify-between p-4'>
                    <div>
                        <img className='ml-32' width={200} src={headerLogo} alt="" />
                    </div>
                    <div>
                        <NavLink  className={({isActive})=>isActive?'text-orange-500 font-semibold text-2xl mr-12 ':'text-2xl mr-12 font-semibold'} to='/home'>Home</NavLink>

                        {user ? <button onClick={logout} className='mr-12 text-2xl font-semibold'>Log Out</button> :
                            <NavLink  className={({isActive})=>isActive?'text-orange-500 font-semibold text-2xl mr-12 ':'text-2xl mr-12 font-semibold'} to='/login'>Login</NavLink>}
                        <NavLink  className={({isActive})=>isActive?'text-orange-500 font-semibold text-2xl mr-12 ':'text-2xl mr-12 font-semibold'} to='/signup'>Sign Up</NavLink>
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