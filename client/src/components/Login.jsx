import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Login = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        };
        
        try {
            const res = await axios.post('https://server-three-cyan.vercel.app/user/login', userInfo);
            if (res.data && res.data.user) {
                toast.success('Login Successfully!');
                localStorage.setItem("User", JSON.stringify(res.data.user));
                setTimeout(() => {
                    document.getElementById("my_modal_3").close();
                }, 1000);
                setTimeout(() => {
                    setIsLoggedIn(true); // Update login state
                    navigate('/');
                    reset()
                }, 2000);
            } else {
                toast.error("Invalid credentials. Please try again.");
            }
        } catch (err) {
            if (err.response) {
                console.log(err.response.data);
                toast.error("Error: " + err.response.data.message);
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        }
    };

    return (
        <div>
            <Toaster />
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>
                        <h3 className="font-bold text-lg">Login</h3>
                        <div className='mt-4 space-y-2'>
                            <span className='mx-2'>Email</span> <br />
                            <input
                                type="email"
                                className='outline-none px-3 py-3 w-80 justify-center border rounded-md'
                                placeholder='Type your email'
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && <span className='text-md text-red-600'>This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span className='mx-2'>Password</span> <br />
                            <input
                                type="password"
                                className='outline-none px-3 py-3 w-80 justify-center border rounded-md'
                                placeholder='Type your password'
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && <span className='text-md text-red-600'>This field is required</span>}
                        </div>
                        <div className='flex mt-6 justify-around'>
                            <button className="btn btn-secondary btn-sm">Login</button>
                            <p>No registered? <Link to={'/signup'} className='underline text-blue-700 cursor-pointer'>Signup</Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default Login;
