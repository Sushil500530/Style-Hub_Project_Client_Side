import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';
import useAuth from "./useAuth";

const useRole = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const { users, refetch,isLoading } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () =>{
            const res = await axiosSecure(`/users/${user?.email}`);
            return res.data;
        }
      })
    return [users,refetch,isLoading]
};

export default useRole;