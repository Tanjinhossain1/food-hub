import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    
    return (
        <div>
            <div className='flex justify-center'>
                <div>
                    <h1> Sign Up</h1>
                    <div className='w-50 mx-auto'>
                        <input className='block border p-4 w-[400px] mt-2 rounded-sm ' placeholder='Name' type="text" name="name" id="" />
                        <input className='block border p-4 w-[400px] mt-2 rounded-sm ' type="email" name="email" placeholder='email' id="" />
                        <input className='block border p-4 w-[400px] mt-2 rounded-sm ' type="password" name='password' placeholder='Password' />
                        <input className='block border p-4 w-[400px] mt-2 rounded-sm ' type="password" name='confirm-password' placeholder='Confirm-Password' />
                        <p>Already Have an Account? <Link className='text-blue-600' to='/login '>Login</Link></p>
                        <input className=' bg-red-500 text-white font-semibold block border p-4 w-[400px] mt-2 rounded-sm ' type="submit" name='Sign Up' value='Sign Up' />
                
                    </div>

                </div>

            </div>
        </div>
    );
};

export default SignUp;