import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const axiosSecure = axios.create({
    baseURL:"http://localhost:5000",
     withCredentials:true,
})
const useAxiosSecure = () => {
    const {userLogout} = useAuth();
    const navigate = useNavigate();
   useEffect(() => {
    axiosSecure?.interceptors?.response?.use(res => {
        return res;
    }, error => {
        if(error?.response?.status === 401 || error?.response?.status === 403){
            userLogout()
            .then(() => {
                toast.error("cannot find your token! logout the user")
                return navigate('/login')
            })
            .catch(error => toast.error(error.message))
        }
    })
   },[navigate , userLogout])
   return axiosSecure
};

export default useAxiosSecure;