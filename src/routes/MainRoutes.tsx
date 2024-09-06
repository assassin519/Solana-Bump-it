import App from "../pages/app";
import Token from "../pages/auth/signin";
// import SignUP from "../pages/auth/signup";

const MainRoutes = {
    path: "/",
    children: [
        {
            path: "/",
            element: <App />
        },
        {
            path: "/token",
            element: <Token />
        },
        // {
        //     path: "/signup",
        //     element: <SignUP />
        // },
    ],
}

export default MainRoutes;