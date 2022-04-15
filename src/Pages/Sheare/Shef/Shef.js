import React from 'react';
import shefs from '../../../images/adult-blur-blurred-background-687824.png';
import chef from '../../../images/chef-cook-food-33614.png';
import arch from '../../../images/architecture-building-city-2047397.png';
import car from '../../../images/icons/Group 204.png';
import car1 from '../../../images/icons/Group 1133.png';
import car2 from '../../../images/icons/Group 245.png';

const Shef = () => {
    return (
        <div>
            <div>
                <div className='w-1/4 mx-44'>
                    <h1 className='text-4xl'>Why we Choose Us</h1>
                    <p>Barton waited twenty always repair in within we do. An delighted offending curiosity at. Boy prosperous increasing surrounded.</p>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-3 w-3/4 mx-auto'>
                    <div className='border p-2 m-6'>
                        <img src={shefs} alt="" />
                        <div className='flex mt-2' >
                            <div>
                                <div className='flex'>
                                    <img src={car} alt="" />
                                    <h2 className='text-2xl ml-4'>Fast Delevery</h2>
                                </div>
                                <div className='ml-4'>
                                    <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about out future.</p>
                                    <p className='text-blue-600 font-bold'>See more</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border p-2 m-6'>
                        <img src={chef} alt="" />
                        <div className='flex mt-2' >
                            <div>
                                <div className='flex'>
                                    <img src={car1} alt="" />
                                    <h2 className='text-2xl ml-4'>Fast Delevery</h2>
                                </div>
                                <div className='ml-4'>
                                    <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about out future.</p>
                                    <p className='text-blue-600 font-bold'>See more</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border p-2 m-6'>
                        <img src={arch} alt="" />
                        <div className='flex mt-2' >
                            <div>
                                <div className='flex'>
                                    <img src={car2} alt="" />
                                    <h2 className='text-2xl ml-4'>Fast Delevery</h2>
                                </div>
                                <div className='ml-4'>
                                    <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about out future.</p>
                                    <p className='text-blue-600 font-bold'>See more</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Shef;