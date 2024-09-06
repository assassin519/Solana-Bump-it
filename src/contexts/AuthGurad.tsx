import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, ReactNode } from "react";
import { useSelector } from "../store";

interface AuthGuardProps {
    children: ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {

    const isLoggedIn = useSelector((state) => state.userInfo.isLoggedIn);
    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/", { replace: true });
        }
    }, [isLoggedIn, navigate, location]);

    return <>{children}</>;
};

export default AuthGuard;