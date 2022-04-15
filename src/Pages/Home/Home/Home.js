import React from 'react';
import { NavLink } from 'react-router-dom';
import banner from '../../../images/bannerbackground.png';
import Shef from '../../Sheare/Shef/Shef';

const Home = () => {
    return (
        <div className=''>
             <div>
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

            <div  className=' text-center mt-[600px]' >
                <NavLink className={({isActive})=>isActive?'text-orange-500 text-3xl mr-12 ':'text-3xl mr-12'} to='/breakfast'>BreakFast</NavLink>

                <NavLink className={({isActive})=>isActive?'text-orange-500 text-3xl mr-12 ':'text-3xl mr-12'} to='/lunch'>Lunch</NavLink>

                <NavLink className={({isActive})=>isActive?'text-orange-500 text-3xl mr-12 ':'text-3xl mr-12'} to='/Dinner'>Dinner</NavLink>

            </div>
           
        </div>
    );
};

export default Home;