import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
      <div>
            <div className='flex justify-center mt-12'>
                <div>
                    <h1 className='text-4xl'>Login</h1>
                    <div className='w-50 mx-auto'>
                        <input className='block border p-4 w-[400px] mt-2 rounded-sm ' type="email" name="email" placeholder='email' id="" />
                        <input className='block border p-4 w-[400px] mt-2 rounded-sm ' type="password" name='password' placeholder='Password' />
                        <p>Don't Have Account? <Link className='text-blue-600' to='/signup '>Creat New Account</Link></p>
                        <input className=' bg-red-500 text-white font-semibold block border p-4 w-[400px] mt-2 rounded-sm ' type="submit" name='Login' value='Login' placeholder='Confirm-Password' />
                    </div>

                </div>

            </div>
        </div>
        </div>
    );
};

export default Login;