import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import Manulist from "./manulist/Manulist";
import { FaBars } from "react-icons/fa";
import Login from "../../../pages/login/Login";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, userLogout } = useAuth();

    const handleLogout = () => {
        userLogout()
            .then(() => {
                return toast.success('logout successful')
            })
            .catch(err => toast.error(err.message))
    }
    return (
        <div>
            <div className="flex items-center justify-between px-3">
                <div className="navbar-start ">
                    <div className="dropdown absolute right-0 top-0">
                        <button className="p-2 text-2xl lg:hidden" onClick={() => document.getElementById('my_modal_5').showModal()}><FaBars /></button>
                        <dialog id="my_modal_5" className="modal modal-top sm:modal-middle md:modal-top">
                            <div className="modal-box">
                                <ul className="flex flex-col items-center z-10 gap-2 md:flex-row md:gap-5 md:justify-center text-[16px] font-medium">
                                    <Manulist />
                                    {
                                        user ? <>
                                            <div className="dropdown dropdown-end">
                                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                                    <div className="w-10 rounded-full">
                                                        <img alt="profile" src={user?.photoURL} />
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn bg-gradient-to-r from-[#f24810] to-[#f36913] text-white px-10 hover:text-black" onClick={handleLogout}>Logout</button>
                                        </> :
                                            <>
                                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                                <button className="btn bg-gradient-to-r from-[#344281] to-[#9b04ff] text-white px-10 hover:text-black" onClick={() => document.getElementById('my_modal_3').showModal()}>Login</button>
                                                <dialog id="my_modal_3" className="modal">
                                                    <div className="modal-box w-[92%] md:w-2/3 ">
                                                        <form method="dialog">
                                                            {/* if there is a button in form, it will close the modal */}
                                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-500 text-white">✕</button>
                                                        </form>
                                                        <Login />
                                                    </div>
                                                </dialog>
                                            </>

                                    }

                                </ul>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle bg-red-500 text-white btn-ghost absolute right-2 top-2 hover:text-black">✕</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                    <Logo />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex flex-row gap-5 text-[17px] font-medium">
                        <Manulist />
                        {
                            user ? <>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="profile" src={user?.photoURL} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <Link to="setting">
                                            <li className="w-full btn btn-sm">
                                                    Profile
                                            </li>
                                        </Link>
                                        <Link to='setting'>
                                            <li className="w-full btn btn-sm my-1">Settings</li>
                                        </Link>
                                        <li onClick={handleLogout} className="w-full btn btn-sm">Logout</li>
                                    </ul>
                                </div>
                                <button className="btn bg-gradient-to-r from-[#f24810] to-[#f36913] text-white px-10 hover:text-black" onClick={handleLogout}>Logout</button>
                            </> :
                                <>
                                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="btn bg-gradient-to-r from-[#344281] to-[#9b04ff] text-white px-10 hover:text-black" onClick={() => document.getElementById('my_modal_2').showModal()}>Login</button>
                                    <dialog id="my_modal_2" className="modal">
                                        <div className="modal-box w-[33%] max-w-5xl ">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-500 text-white">✕</button>
                                            </form>
                                            <Login />
                                        </div>
                                    </dialog>
                                </>
                        }
                        {/* <Link to="login">
                        <button className="btn bg-gradient-to-r from-[#344281] to-[#9b04ff] text-white px-10">Login</button>
                        </Link> */}
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Navbar;