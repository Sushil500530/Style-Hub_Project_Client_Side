import Logo from "../logo/Logo";
import Manulist from "./manulist/Manulist";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className=" bg-base-100">
            <div className="flex items-center justify-between px-3 bg-base-300">
                <div className="navbar-start ">
                    <div className="dropdown absolute right-0 top-0">
                        <button className="p-2 text-2xl lg:hidden" onClick={() => document.getElementById('my_modal_5').showModal()}><FaBars /></button>
                        <dialog id="my_modal_5" className="modal modal-top sm:modal-middle md:modal-top">
                            <div className="modal-box">
                                <ul className="flex flex-col items-center z-10 gap-2 md:flex-row md:gap-5 md:justify-center text-[16px] font-medium">
                                    <Manulist />
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
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;