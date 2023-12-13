import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../hooks/useAxiosPublic";



const Register = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile, googleSignIn } = useAuth();
    const navigate = useNavigate();
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleResister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        setPasswordError('');
        console.log(name, email, password,);

        if (password.length < 6) {
            return setPasswordError("password should be at least 6 character or longer")
        }
        else if (!/[A-Z]/.test(password)) {
            return setPasswordError('your password should have at least one uppercase characters.')
        }
        // eslint-disable-next-line no-useless-escape
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\-]/.test(password)) {
            return setPasswordError("you should be at least one special character")
        }
        createUser(email, password)
            .then(result => {
                updateUserProfile(name, "https://i.ibb.co/Jt0tPSh/user.png")
                    .then(() => {
                        const userDetails = {
                            name: name,
                            email: email,
                            role: "guest",
                            status: 'verified'
                        }
                        axiosPublic.post('/users', userDetails)
                            .then(res => {
                                console.log(res.data);
                            })

                    })
                    .catch(error => console.error(error))

                if (result?.user) {
                    navigate(location?.state ? location.state : "/")
                    toast.success('resister successfully....!');
                }
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((res) => {
                const userDetails = {
                    name: res?.user?.displayName,
                    email: res?.user?.email,
                    role: "guest",
                    status: 'verified'
                }
                axiosPublic.post('/users', userDetails)
                    .then(res => {
                        console.log(res.data);
                    })
                if (res.user) {
                    navigate(location?.state ? location.state : "/")
                    toast.success('resister successfully....!');
                }
            })
            .catch(error => toast.error(error.message))
    }

    return (
        <div className="w-full h-auto lg:h-screen bg-cover bg-no-repeat object-contain text-black pb-12 ">
            <h1 className="text-black text-2xl py-8 font-bold text-center">Gaine To New Experience From Here🎉</h1>
            <div className='container mx-auto flex flex-col lg:flex-row gap-5 items-center justify-center text-white'>
                <div className="w-full lg:w-1/2 h-auto lg:h-[780px]">
                    <img src="https://i.ibb.co/ncZSDCN/data-1084-gambar-login-png-37.jpg" className="w-full h-full rounded-md" alt="register-photo" />
                </div>
                <div className="w-full lg:w-1/2 h-auto bg-gradient-to-b from-[#344281] to-[#512a6b] border pb-5 rounded-md">
                    <form onSubmit={handleResister} className="space-y-8 p-5">
                        <h3 className="text-2xl font-semibold mb-10 mt-5 text-center">Please Resister Now</h3>
                        <label className="text-xl font-bold my-5">Name
                            <input type="text" name="name" className="px-3 input-bordered py-2 input block w-full text-[18px]  my-3 text-base font-normal text-black" placeholder="Enter your name" />
                        </label>
                        <label className="text-xl font-bold my-5">Email
                            <input type="email" name="email" required className="px-3 input-bordered py-2 input block w-full text-[18px]  my-3 text-base font-normal text-black" placeholder="Enter your email" />
                        </label>
                        <label className="text-xl font-bold ">Password</label>
                        <div className="flex relative w-full my-3 ">
                            <input type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                name="password" required
                                className="input input-bordered text-[18px] block w-full text-black" />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-0 right-0 p-3 text-xl font-medium cursor-pointer text-black">
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                        </div>
                        <p className='text-red-500 font-medium'>{passwordError}</p>
                        <button className="btn bg-gradient-to-r from-[#344281] to-[#9b04ff] text-white hover:text-black text-[18px] w-full capitalize font-semibold">Resister</button>
                        <h2 className="font-bold text-center">Already Have an Account? <Link to='/login' className="text-blue-600 hover:underline ">Please Login</Link></h2>
                    </form>
                    <div className='w-full md:w-[466px] lg:w-full mx-auto p-5'>
                        <div onClick={handleGoogleSignIn} className="border-2 mx-auto w-full lg:w-[400px] lg:h-[60px] hover:bg-gray-200 cursor-pointer hover:text-blue-500 transition ease-in rounded-full my-5 flex items-center justify-center gap-3">
                            <p className="text-[38px] p-2"><FcGoogle></FcGoogle></p>
                            <h2 className="text-[18px] font-semibold">Continue With Google</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
