import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    let location = useLocation();
    const [signInWithGoogle] = useSignInWithGoogle(auth);


    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div>
            <div>
                <div className='flex justify-center mt-12'>
                    <div>
                        <h1 className='text-4xl'>Login</h1>
                        <form onSubmit={handleSubmit}>
                            <div className='w-50 mx-auto'>
                                <input className='block border p-4 w-[400px] mt-2 rounded-sm ' type="email" name="email" placeholder='email' id="" required/>
                                <input className='block border p-4 w-[400px] mt-2 rounded-sm ' type="password" name='password' placeholder='Password' required/>
                                <p>Don't Have Account? <Link className='text-blue-600' to='/signup '>Creat New Account</Link></p>
                                {error?.message}
                                <input className=' bg-red-500 text-white font-semibold block border p-4 w-[400px] mt-2 rounded-sm ' type="submit" name='Login' value='Login' placeholder='Confirm-Password' />
                            </div>
                        </form>
                        <div>
                                <button onClick={()=>signInWithGoogle()} className=' text-xl border rounded-full py-2 px-6 w-[300px] mx-auto mt-4 bg-blue-500 text-white font-semibold'> <img width={60}className='rounded-full inline mr-4' src="https://e7.pngegg.com/pngimages/337/722/png-clipart-google-search-google-account-google-s-google-play-google-company-text.png" alt="" /> Google Sign In</button>
                            </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;