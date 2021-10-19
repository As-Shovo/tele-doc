import { useContext } from "react";
import { AuthContaxt } from "../contaxt/AuthProvider";

const useAuth = () => {
    return useContext(AuthContaxt)
};

export default useAuth;