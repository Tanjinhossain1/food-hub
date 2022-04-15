import React from 'react';
import headerLogo from '../../../images/logo2.png'

const Footer = () => {
    return (
        <div className='mt-32'>
            <div>
                <div className='bg-black pt-4 grid grid-cols-2'>
                    <div>
                        <div className='mb-12 ml-32'>
                            <img src={headerLogo} alt="" />
                        </div>
                        <div className='flex justify-around'>
                            <div >
                                <p className='text-white text-xl pb-6 ml-32'>Copyright @ 2022 online Food</p>
                            </div>
                            <div className='flex text-white'>
                                <p className='ml-12'>Privacy Policy</p>
                                <p className='ml-12'>Terms of Use</p>
                                <p className='ml-12'>Pricing</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='grid text-white grid-cols-2'>
                            <div>
                                <p>About Online food</p>
                                <p>Read out blog</p>
                                <p>Sign up to delever</p>
                                <p>Add your restaurant</p>
                            </div>
                            <div>
                                <p>Get help</p>
                                <p>Read FAQs</p>
                                <p>View all cities</p>
                                <p>Restaurants near me</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;