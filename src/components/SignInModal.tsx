import React from "react";
import { ModalProps } from "../types";
import useAuth from "../hooks/useAuth";
import useNotification from "../hooks/useNotification";
import { useNavigate } from "react-router-dom";
import Slide from '@mui/material/Slide';
import {  Fade } from '@mui/material';
const SignInModal: React.FC<ModalProps> = ({ isOpen, onClose, title }) => {
    const { showNotification } = useNotification();
    const { login, register, isLoggedIn } = useAuth();
    const navigate = useNavigate()
    const [userData, setUserData] = React.useState({
        username: "",
        email: "",
        password: ""
    });
    // React.useEffect(() => {
    //     handleClick()
    // })
    const [passwordError, setPasswordError] = React.useState < string | null > (null);
    const [usernameError, setUsernameError] = React.useState < string | null > (null);
    const [emailError, setEmailError] = React.useState < string | null > (null);

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value;
        setUserData({ ...userData, password });

        if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters long.");
        } else {
            setPasswordError(null);
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value;
        setUserData({ ...userData, email });

        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email)) {
            setEmailError("Invalid email address.");
        } else {
            setEmailError(null);
        }
    };

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const username = e.target.value;
        setUserData({ ...userData, username });

        if (username.trim() === '') {
            setUsernameError("Username is required.");
        } else {
            setUsernameError(null);
        }
    };

    if (!isOpen) return null;

    const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
        // Prevent the onClose function from being called when clicking inside the modal content
        event.stopPropagation();
    };

    const handleClick = () => {
        if (title === "Sign In") {
            console.log(userData.username)
            login(userData.username, userData.password);
            showNotification("Log In", "success");
            // if (isLoggedIn) {
            navigate("/token")
            // }
            onClose();
        } else {
            register(userData.email, userData.password, userData.username);
            showNotification("Sign Up!", "success");
            onClose();
        }
    };


    const isFormValid = !emailError && !passwordError && !usernameError && userData.username.trim() !== '' && userData.password.length >= 8;

    return (
        <div
            onClick={onClose}
            TransitionComponent={Transition}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
            }}
        >
            <div
                onClick={handleModalClick}
                style={{ animation: "slideInFromLeft 1s ease-out" }}
                className="max-w-md w-full bg-gradient-to-r from-blue-800 to-purple-600 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8"
            >
                <h2
                    style={{ animation: "appear 2s ease-out" }}
                    className="text-center text-4xl font-extrabold text-white"
                >
                    Welcome
                </h2>
                <p style={{ animation: "appear 3s ease-out" }} className="text-center text-gray-200">
                    {title} to your account
                </p>
                {title === "Sign Up" ?
                    <>
                        <div className="relative">
                            <input
                                placeholder="Alex"
                                className={`peer h-10 w-full border-b-2 ${usernameError ? 'border-red-500' : 'border-gray-300'} text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500`}
                                required
                                id="username"
                                name="username"
                                type="text"
                                onChange={handleUsernameChange}
                            />
                            <label
                                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                                htmlFor="username"
                            >User Name</label>
                            {usernameError && <p className="text-red-500 text-sm">{usernameError}</p>}
                        </div>
                        <div className="relative">
                            <input
                                placeholder="john@example.com"
                                className={`peer h-10 w-full border-b-2 ${emailError ? 'border-red-500' : 'border-gray-300'} text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500`}
                                required
                                id="email"
                                name="email"
                                type="email"
                                onChange={handleEmailChange}
                            />
                            <label
                                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                                htmlFor="email"
                            >Email address</label>
                            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                        </div>

                        <div className="relative">
                            <input
                                placeholder="Password"
                                className={`peer h-10 w-full border-b-2 ${passwordError ? 'border-red-500' : 'border-gray-300'} text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500`}
                                required
                                id="password"
                                name="password"
                                type="password"
                                onChange={handlePasswordChange}
                            />
                            <label
                                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                                htmlFor="password"
                            >Password</label>
                            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
                        </div>
                        <button
                            className="w-full py-2 px-4 cursor-pointer bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
                            type="button"
                            onClick={() => handleClick()}
                            disabled={!isFormValid} // Disable button if form is invalid
                        >
                            {title}
                        </button>
                    </>
                    :
                    <>
                        <div className="relative">
                            <input
                                placeholder="Alex"
                                className={`peer h-10 w-full border-b-2 ${usernameError ? 'border-red-500' : 'border-gray-300'} text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500`}
                                required
                                id="username"
                                name="username"
                                type="text"
                                onChange={handleUsernameChange}
                            />
                            <label
                                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                                htmlFor="username"
                            >User Name</label>
                            {usernameError && <p className="text-red-500 text-sm">{usernameError}</p>}
                        </div>
                        <div className="relative">
                            <input
                                placeholder="Password"
                                className={`peer h-10 w-full border-b-2 ${passwordError ? 'border-red-500' : 'border-gray-300'} text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500`}
                                required
                                id="password"
                                name="password"
                                type="password"
                                onChange={handlePasswordChange}
                            />
                            <label
                                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                                htmlFor="password"
                            >Password</label>
                            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
                        </div>
                        <button
                            className="w-full py-2 px-4 cursor-pointer bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
                            type="button"
                            onClick={() => handleClick()}
                        // disabled={!isFormValid} // Disable button if form is invalid
                        >
                            {title}
                        </button>
                    </>
                }
            </div>
        </div>)
};

export default SignInModal;