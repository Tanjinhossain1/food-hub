import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';

const SignUp = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);

    const navigate = useNavigate();
    if (user) {
        navigate('/home')
    }
console.log(user)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirm.value;
        console.log(email, password)
        if (password !== confirmPassword) {
            return;
        }
       await createUserWithEmailAndPassword(email, password);
       await updateProfile({ displayName: name });

    }
    return (
        <div>
            <div className='flex justify-center'>
                <div>
                    <h1> Sign Up</h1>
                    <div className='w-50 mx-auto'>
                        <form onSubmit={handleSubmit}>
                            <input className='block border p-4 w-[400px] mt-2 rounded-sm ' placeholder='Name' type="text" name="name" id="" />
                            <input className='block border p-4 w-[400px] mt-2 rounded-sm ' type="email" name="email" placeholder='email' id="" required/>
                            <input className='block border p-4 w-[400px] mt-2 rounded-sm ' type="password" name='password' placeholder='Password' required/>
                            <input className='block border p-4 w-[400px] mt-2 rounded-sm ' type="password" name='confirm' placeholder='Confirm-Password' required/>
                            <p>Already Have an Account? <Link className='text-blue-600' to='/login '>Login</Link></p>
                            <input className=' bg-red-500 text-white font-semibold block border p-4 w-[400px] mt-2 rounded-sm ' type="submit" name='Sign Up' value='Sign Up' />
                        </form>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default SignUp;