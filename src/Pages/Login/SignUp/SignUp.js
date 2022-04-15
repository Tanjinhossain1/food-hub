import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

const SignUp = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    const [agree, setAgree] = useState(false);
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
    const [visible, setVisible] = useState(false);

    console.log(agree)
    return (
        <div>
            <div className='flex justify-center'>
                <div>
                    <h1 className='text-4xl'> Sign Up</h1>
                    <div className='w-50 mx-auto'>
                        <form onSubmit={handleSubmit}>
                            <input className='block border p-4 w-[400px] mt-2 rounded-sm ' placeholder='Name' type="text" name="name" id="" required/>
                            <input className='block border p-4 w-[400px] mt-2 rounded-sm ' type="email" name="email" placeholder='email' id="" required/>

                            <button onClick={()=>setVisible(!visible)} >show password</button>
                            <input className='block border p-4 w-[400px] mt-2 rounded-sm '  type= {visible ? "text" : "password"}  name='password' placeholder='Password' required/>


                            <input className='block border p-4 w-[400px] mt-2 rounded-sm ' type={visible ? "text" : "password"} name='confirm' placeholder='Confirm-Password' required/>

                            <p>Already Have an Account? <Link className='text-blue-600' to='/login '>Login</Link></p>
                           <div>
                           <input onClick={()=>setAgree(!agree)}  type="checkbox" name="terms" value='Accept All Conditions' id="" />
                           <label className={`ml-2 ${agree? 'text-green-800':'text-red-500'}`} htmlFor="terms">Accept All Conditions</label>
                           </div>
                            <input disabled={!agree} className={` bg-red-500 text-white font-semibold block border p-4 w-[400px] mt-2 rounded-sm'${agree?'bg-red-500 text-white':'bg-slate-400 text-gray-700'}`} type="submit" name='Sign Up' value='Sign Up' />
                        </form>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default SignUp;