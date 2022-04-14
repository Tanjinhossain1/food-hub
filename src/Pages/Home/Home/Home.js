import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className=''>
            <div  className=' text-center' >
                <Link className='text-3xl mr-12' to='/breakfast'>BreakFast</Link>
                <Link className='text-3xl' to='/lunch'>Lunch</Link>
                <Link className='text-3xl ml-12' to='/dinner'>Dinner</Link>
            </div>
        </div>
    );
};

export default Home;