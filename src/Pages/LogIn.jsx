/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import toast from "react-hot-toast";
import { HashLoader } from "react-spinners";
import Lottie from "lottie-react";
import login from '../assets/login.json'



const LogIn = () => {
    const { logInUser, signInWithPop, setLoading, loading } = useContext(AuthContext)
    const { register, handleSubmit, } = useForm()
    const [keyValue, setKeyValue] = useState('')
    const [toggleEye, setToggleEye] = useState(false)
    const location = useLocation()
    const Navigate = useNavigate()
    console.log(location.state)

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();
    const onSubmit = (data) => {
        logInUser(data.email, data.password)
            .then(result => {
                Navigate(location.state || "/")
                setLoading(false)
                console.log(result.user)
                toast.success('You have successfully registered.')
            })
            .catch(error => {
                setLoading(false)
                console.error(error)
                toast.error(error.message)
            })
    }

    const handleGoogle = () => {
        signInWithPop(googleProvider)
            .then(result => {
                setLoading(false)
                Navigate(location.state || "/")
                console.log(result)
                toast.success('You have successfully registered.')
            })
            .catch(error => {
                setLoading(false)
                console.error(error)
                toast.error(error.message)
            })
    }

    const handleGithub = () => {
        signInWithPop(githubProvider)
            .then(result => {
                Navigate(location.state || "/")
                setLoading(false)
                console.log(result)
                toast.success('You have successfully registered.')
            })
            .catch(error => {
                setLoading(false)
                console.log(error)
                toast.error(error.message)
            })
    }
    return (
        <div className="grid items-center min-h-[calc(100vh-200px)]">
            {loading && <div className="absolute inset-0  h-screen max-w-[1920px] flex justify-center items-center p-5 "><HashLoader className="" size={200} color="#ff681a" /></div>}

            <section className="p-6  mt-10  ">
                <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5 items-center ">

                    {/* <img src="https://i.ibb.co/PTcVq8K/Career-in-Travel-and-Tourism.jpg" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" /> */}
                    <div className=" w-3/4  rounded-md xl:col-span-3 " >
                        <Lottie animationData={login} />
                    </div>
                    <div className="w-full px-6 py-12 rounded-md sm:px-12 md:px-16 xl:col-span-2  space-y-4" >

                        <div>
                            <h1 className="text-3xl font-extrabold text-start pb-2   font-days">Sign in to Tourism Vision </h1>
                            <p className="text-start pt-2 font-semibold opacity-60 pl-2">Enter your details below</p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="self-stretch space-y-4 ">
                            <div>
                                <label className="label">
                                    <span className="label-text pl-1">Email</span>
                                </label>
                                <input {...register("email")} type="email" placeholder="Email address" className="w-full rounded-md focus:ring focus:dark:ring-violet-600  h-14 px-4 border" />
                            </div>
                            <div className="relative">
                                <label className="label">
                                    <span className="label-text pl-1">Password</span>
                                </label>
                                <input {...register("password",)} onChange={e => { setKeyValue(e.target.value) }} type={toggleEye ? 'text' : "password"} placeholder="Password" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" />
                                {
                                    keyValue && <> {toggleEye ? <VscEyeClosed onClick={() => setToggleEye(false)} className="text-2xl absolute top-12 right-5" /> : <VscEye onClick={() => setToggleEye(true)} className="text-2xl absolute top-12 right-5" />}  </>
                                }
                            </div>
                            <button type="submit" className="w-full py-2 font-semibold rounded dark:bg-primary dark:text-gray-50 btn">Login</button>
                        </form>
                        <div className="flex items-center pt-4 space-x-1">
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                            <p className="px-3 text-sm ">Login with social accounts</p>
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        </div>

                        <div className="flex justify-center space-x-4">
                            <button onClick={handleGoogle} aria-label="Log in with Google" className="p-3 rounded-sm ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                            </button>

                            <button onClick={handleGithub} aria-label="Log in with GitHub" className="p-3 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                </svg>
                            </button>
                        </div>
                        <p className="text-base text-center sm:px-6 ">Don't have an account?
                            <Link to={'/register'} rel="noopener noreferrer" href="#" className="underline ">Sign up</Link>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LogIn;