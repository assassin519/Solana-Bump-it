import App from "../pages/app";
// import AuthGuard from "../contexts/AuthGurad";
import Token from "../pages/token"

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
            element: (
                // <AuthGuard>
                    <Token />
                // </AuthGuard>
            )
        },
        // {
        //     path: "/signup",
        //     element: <SignUP />
        // },
    ],
}

export default MainRoutes;