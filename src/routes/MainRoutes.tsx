import App from "../pages/app";
import Token from "../pages/auth/signin";

const MainRoutes = {
    path: "/",
    children: [
        {
            path: "/",
            element: <App />
        },
        {
            path: "/signin",
            element: <Token />
        },
    ],
}

export default MainRoutes;