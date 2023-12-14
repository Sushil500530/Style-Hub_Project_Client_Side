import useAxiosSecure from "../../hooks/useAxiosSecure";
import useRole from "../../hooks/useRole";

const Home = () => {
    const [user,refetch,] = useRole();
    console.log(user);
    // const axiosSecure = useAxiosSecure();
    // console.log(axiosSecure);
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-3">This is Home Section</h1>
        </div>
    );
};

export default Home;