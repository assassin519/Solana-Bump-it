import React from "react";
import instance from "../utils/axios";
import { ModalProps } from "../types";
import Button from "@mui/material/Button";
import useAuth from "../hooks/useAuth";
import useNotification from "../hooks/useNotification";
import TextField from '@mui/material/TextField';

const SignInModal = ({ isOpen, onClose, title }: ModalProps) => {
    const { showNotification } = useNotification()
    const { login, register, isLoggedIn } = useAuth()

    const [userData, setUserData] = React.useState({
        username: "",
        email: "",
        password: ""
    })
    const [passwordError, setPasswordError] = React.useState(false);
    const [usernameError, setUsernameError] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);


    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value;
        setUserData({ ...userData, password });

        // Validate password
        if (password.length < 8) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value;
        setUserData({ ...userData, email });

        // Validate email format using a simple regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    };
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const username = e.target.value;
        setUserData({ ...userData, username });

        // Validate username
        if (username.trim() === '') {
            setUsernameError(true);
        } else {
            setUsernameError(false);
        }
    };

    const isFormValid = !passwordError && !usernameError && userData.username.trim() !== '' && userData.password.length >= 8;

    if (!isOpen) return null;
    const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
        // Prevent the onClose function from being called when clicking inside the modal content
        event.stopPropagation();
    };
    const handleClick = () => {
        if (title == "Sign In") {
            if (!isLoggedIn) {
                login(userData.email, userData.password)
                showNotification("Successfully logined!", "success")
            }
            alert(userData.username)
            onClose()
        } else {
            register(userData.email, userData.password, userData.username)
            showNotification("Successfully registered!", "success")
            onClose()
        }
    }

    return (
        <div
            onClick={onClose}
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
            <div onClick={handleModalClick}
                className="bg-bgColor"
                style={{
                    zIndex: 9999,
                    // background: "white",
                    width: 550,
                    margin: "auto",
                    padding: "2%",
                    borderRadius: "10px",
                    boxShadow: "2px solid black",
                }}
            >
                <div className="flex flex-col gap-2 ">
                    <p className="text-center text-2xl text-textColor font-bold">{title}</p>

                    {title === "Sign Up" ?
                        <div className="flex flex-col gap-6">
                            <TextField
                                required
                                id="outlined-required"
                                placeholder="User Name"
                                color="success"
                                error={usernameError} // Set error prop based on validation
                                helperText={usernameError ? 'Username is required' : ''} // Display error message
                                sx={{
                                    bgcolor: 'background.paper',
                                    borderRadius: 2,
                                    minWidth: 300,
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: 'green', // Change border color on hover
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'green', // Keep border green when focused
                                        },
                                    },
                                }}
                                onChange={handleUsernameChange} // Use the validation function
                            />

                            <TextField
                                required
                                id="outlined-required"
                                placeholder="Email"
                                color="success"
                                type="email" // Set type to email for better input handling
                                error={emailError} // Set error prop based on validation
                                helperText={emailError ? 'Please enter a valid email address' : ''} // Display error message
                                sx={{
                                    bgcolor: 'background.paper',
                                    borderRadius: 2,
                                    minWidth: 300,
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: 'green', // Change border color on hover
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'green', // Keep border green when focused
                                        },
                                    },
                                }}
                                onChange={handleEmailChange} // Use the validation function
                            />

                            <TextField
                                required
                                id="outlined-required"
                                placeholder="Password"
                                color="success"
                                type="password"
                                error={passwordError}
                                helperText={passwordError ? 'Password must be at least 8 characters long' : ''}
                                sx={{
                                    bgcolor: 'background.paper',
                                    borderRadius: 2,
                                    minWidth: 300,
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: 'green', // Change border color on hover
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'green', // Keep border green when focused
                                        },
                                    },
                                }}
                                onChange={handlePasswordChange}
                            />

                            <Button
                                style={{ textTransform: 'none' }}
                                onClick={handleClick}
                                className="w-full"
                                component="label"
                                color="success"
                                role={undefined}
                                variant="contained"
                                disabled={!isFormValid}
                            >
                                <p className="text-white text-lg font-semibold">Log In</p>
                            </Button>

                        </div>
                        :
                        <div className="flex flex-col gap-6">
                            <TextField
                                required
                                id="outlined-required"
                                placeholder="User Name"
                                color="success"
                                error={usernameError} // Set error prop based on validation
                                helperText={usernameError ? 'Username is required' : ''} // Display error message
                                sx={{
                                    bgcolor: 'background.paper',
                                    borderRadius: 2,
                                    minWidth: 300,
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: 'green', // Change border color on hover
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'green', // Keep border green when focused
                                        },
                                    },
                                }}
                                onChange={handleUsernameChange} // Use the validation function
                            />

                            <TextField
                                required
                                id="outlined-required"
                                placeholder="Password"
                                color="success"
                                type="password"
                                error={passwordError}
                                helperText={passwordError ? 'Password must be at least 8 characters long' : ''}
                                sx={{
                                    bgcolor: 'background.paper',
                                    borderRadius: 2,
                                    minWidth: 300,
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: 'green', // Change border color on hover
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'green', // Keep border green when focused
                                        },
                                    },
                                }}
                                onChange={handlePasswordChange}
                            />

                            <Button
                                style={{ textTransform: 'none' }}
                                onClick={handleClick}
                                className="w-full"
                                component="label"
                                color="success"
                                role={undefined}
                                variant="contained"
                                disabled={!isFormValid}
                            >
                                <p className="text-white text-lg font-semibold">Log In</p>
                            </Button>

                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default SignInModal;