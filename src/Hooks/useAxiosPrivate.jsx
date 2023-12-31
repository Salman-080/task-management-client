import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://task-management-server-chi-coral.vercel.app'
    // baseURL: 'http://localhost:5000'
})
const useAxiosPrivate = () => {
    return axiosSecure;
};

export default useAxiosPrivate;