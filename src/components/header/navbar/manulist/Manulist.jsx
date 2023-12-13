import { NavLink } from "react-router-dom";

const Manulist = () => {
    return (
        <>
            <NavLink
                to='/'
                className={({ isActive }) =>
                    isActive
                        ? "btn bg-gradient-to-r from-[#344281] hover:text-black to-[#9b04ff] text-white px-10"
                         : "text-black btn bg-transparent border-none"
                } >
               Home
            </NavLink>
            <NavLink
                to='my-cart'
                className={({ isActive }) =>
                    isActive
                    ? "btn bg-gradient-to-r from-[#344281] to-[#9b04ff] hover:text-black text-white px-10"
                    : "text-black btn bg-transparent border-0 outline-none"
                } >
               My Cart
            </NavLink>
            <NavLink
                to='add-product'
                className={({ isActive }) =>
                    isActive
                    ? "btn bg-gradient-to-r from-[#344281] to-[#9b04ff] hover:text-black text-white px-10"
                    : "text-black btn bg-transparent border-0 outline-none"
                } >
               Add Product
            </NavLink>
            <NavLink
                to='adviser'
                className={({ isActive }) =>
                    isActive
                    ? "btn bg-gradient-to-r from-[#344281] to-[#9b04ff] hover:text-black text-white px-10"
                    : "text-black btn bg-transparent border-0 outline-none"
                } >
               Adviser
            </NavLink>
        </>
    );
};

export default Manulist;