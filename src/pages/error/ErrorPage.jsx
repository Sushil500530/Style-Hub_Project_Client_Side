import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full ">
            <div className="w-full h-screen">
                <img src='https://i.ibb.co/xfH1mfS/5b270123bd7f65a53d4f889baa8609d7.gif' className="w-full h-full" alt="" />
            </div>
            <div className="absolute top-[80%] text-black text-center">
                <h2 className="text-3xl font-bold">Sorry,</h2>
                <p className="text-3xl font-bold">Page Not Found</p>
               <Link to='/'>
              <button className="btn bg-gradient-to-r from-[#344281] to-[#9b04ff] hover:text-white flex items-center ml-12 border-none mt-3 gap-3 text-[18px] font-medium"><span><FaHome /></span>Go Home</button>
               </Link>
             
            </div>
        </div>
    );
};

export default ErrorPage;