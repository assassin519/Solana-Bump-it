import React, { useState } from 'react';
import Footer from "../../components/layouts/Footer";
import TopNavbar from "../../components/layouts/TopNavbar";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigator = useNavigate();
    const newLocal = "flex w-full px-8 py-4 flex-col ";

    // State for form fields and errors
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});

    // Validation function
    const validateForm = () => {
        const newErrors = {};
        if (!username) newErrors.username = 'Username is required';
        if (!password) newErrors.password = 'Password is required';
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email address is invalid';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            // Proceed with form submission or API call
            console.log("Form submitted:", { username, password, email });
            // Redirect or perform other actions
            navigator('/success'); // Example redirect
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="h-screen overflow-hidden-scrollbar overflow-y-auto bg-bgColor">
            <TopNavbar />
            <div className="flex mt-40 justify-center ">
                <div className="mt-12 items-center justify-center flex">
                    <div className="flex h-96 flex-col rounded-lg border w-96 bg-blue-300 py-4 ">
                        <p className="text-center text-2xl">Register</p>
                        <form onSubmit={handleSubmit}>
                            <div className={newLocal}>
                                <label htmlFor="name" className='py-2'>* Username</label>
                                <input
                                    type="text"
                                    className={`w-full border px-2 rounded-md py-1 ${errors.username ? 'border-red-500' : 'border-red-200'}`}
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                {errors.username && <span className="text-red-500 text-sm">{errors.username}</span>}
                            </div>
                            <div className={newLocal}>
                                <label htmlFor="password">* Password</label>
                                <input
                                    type="password"
                                    className={`w-full border px-2 rounded-md py-1 ${errors.password ? 'border-red-500' : 'border-red-200'}`}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                            </div>
                            <div className={newLocal}>
                                <label htmlFor="email">* Email</label>
                                <input
                                    type="email"
                                    className={`w-full border px-2 rounded-md py-1 ${errors.email ? 'border-red-500' : 'border-red-200'}`}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                            </div>
                            <div className="flex justify-center ">
                                <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SignUp;