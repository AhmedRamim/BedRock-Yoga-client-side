import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { FcGoogle } from 'react-icons/fc'
import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { saveUser } from '../api/auth';


const image_hosting_token = import.meta.env.VITE_image_upload_token;

const SignUp = () => {
    const navigate = useNavigate()
    const { createUser, signInWithGoogle, updateUserProfile, loading } = useContext(AuthContext)
    const imgUrl = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit =  data => {
        if (data.password !== data.confirmPassword) {
            toast('Password not matched')

        }
        else {
            createUser(data.email, data.password)
                .then(result => {
                    // navigate('/')
                    console.log('User created');
                    const formData = new FormData()
                    formData.append('image', data.image[0])
                    fetch(imgUrl, {
                        method: "POST",
                        body: formData
                    })
                        .then(res => res.json())
                        .then(imgResponse => {

                            const imgURL = imgResponse.data.display_url;
                            updateUserProfile(data.name, imgURL)
                                .then(() => {})
                                .catch(err => console.log(err))

                        })
                    toast('SignUp Successful')
                    // saveUser(result.user)

                    navigate('/')
                    const loggedUser = result.user;
                    console.log(loggedUser);
                })
                .catch(err => {
                    toast(err)
                })
        }

    };
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                // saveUser(result.user)
                navigate('/')
                console.log(result.user);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className='flex justify-center pt-28 items-center min-h-screen'>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                    <p className='text-sm text-gray-400'>Welcome to Yoga Master</p>
                    <ToastContainer />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Name
                            </label>
                            <input {...register("name", { required: true })}
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Enter Your Name Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='image' className='block mb-2 text-sm'>
                                Select Image:
                            </label>
                            <input {...register("image", { required: true })}
                                required
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input {...register("email", { required: true })}
                                type='email'
                                name='email'
                                id='email'
                                required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input
                                {...register("password", { pattern: /(?=.*[A-Z])(?=.*[!@#$&*]).{1,6}/ })}
                                type="password"
                                name="password"
                                id="password"
                                required
                                placeholder="*******"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                            />

                        </div>
                        <div className='text-red-400 text-center'>{errors.password && <span>This Password required at least one Capital letter one Special character and length will be 6</span>}</div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Confirm Password
                                </label>
                            </div>
                            <input {...register("confirmPassword", { required: true })}
                                type='password'
                                name='confirmPassword'
                                id='confirmPassword'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                            />
                        </div>
                    </div>

                    <div>
                        <button disabled={loading ? true : false}
                            type='submit'
                            className='bg-rose-500 w-full rounded-md py-3 text-white'
                        >
                            Continue
                        </button>
                    </div>
                </form>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Signup with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                    <FcGoogle size={32} />

                    <p>Continue with Google</p>
                </div>

                <p className='px-6 text-sm text-center text-gray-400'>
                    Already have an account?
                    <Link
                        to='/login'
                        className='hover:underline hover:text-rose-500 text-gray-600'
                    >
                        Login
                    </Link>
                    .
                </p>
            </div>
        </div>
    )
}

export default SignUp