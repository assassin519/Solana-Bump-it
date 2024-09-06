import React from "react";
import { ModalProps } from "../types";
import Button from "@mui/material/Button";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useNotification from "../hooks/useNotification";
import TextField from '@mui/material/TextField';

import { Dialog, DialogContent, DialogTitle } from '@mui/material';

const SignInModal = ({ isOpen, onClose, title }: ModalProps) => {
    const { showNotification } = useNotification()
    const { login, register, isLoggedIn } = useAuth()
    const navigator = useNavigate();

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

        if (password.length < 8) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value;
        setUserData({ ...userData, email });

        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    };
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const username = e.target.value;
        setUserData({ ...userData, username });

        if (username.trim() === '') {
            setUsernameError(true);
        } else {
            setUsernameError(false);
        }
    };

    const isFormValid = !emailError && !passwordError && !usernameError && userData.username.trim() !== '' && userData.password.length >= 8;

    const handleClick = () => {
        if (title == "Sign In") {
            if (!isLoggedIn) {
                login(userData.email, userData.password)
                navigator('/token')
                showNotification("Successfully logined!", "success")
            }
        } else {
            register(userData.email, userData.password, userData.username)
            showNotification("Successfully registered!", "success")
        }
    }

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            maxWidth="sm"
            fullWidth={true}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle className=''>
                <p className="w-full text-center">{title}</p>
            </DialogTitle>

            <DialogContent>
                {title === "Sign Up" ?
                    <div className="flex flex-col gap-6">
                        <TextField
                            required
                            id="outlined-required"
                            placeholder="User Name"
                            color="success"
                            error={usernameError}
                            helperText={usernameError ? 'Username is required' : ''}
                            sx={{
                                bgcolor: 'background.paper',
                                borderRadius: 2,
                                minWidth: 300,
                                '& .MuiOutlinedInput-root': {
                                    '&:hover fieldset': {
                                        borderColor: 'green',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'green',
                                    },
                                },
                            }}
                            onChange={handleUsernameChange}
                        />

                        <TextField
                            required
                            id="outlined-required"
                            placeholder="Email"
                            color="success"
                            type="email"
                            error={emailError}
                            helperText={emailError ? 'Please enter a valid email address' : ''}
                            sx={{
                                bgcolor: 'background.paper',
                                borderRadius: 2,
                                minWidth: 300,
                                '& .MuiOutlinedInput-root': {
                                    '&:hover fieldset': {
                                        borderColor: 'green',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'green',
                                    },
                                },
                            }}
                            onChange={handleEmailChange}
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
                                        borderColor: 'green',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'green',
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
                            <p className="text-white text-lg font-semibold">Sign Up</p>
                        </Button>

                    </div>
                    :
                    <div className="flex flex-col gap-6">
                        <TextField
                            required
                            id="outlined-required"
                            placeholder="User Name"
                            color="success"
                            error={usernameError}
                            helperText={usernameError ? 'Username is required' : ''}
                            sx={{
                                bgcolor: 'background.paper',
                                borderRadius: 2,
                                minWidth: 300,
                                '& .MuiOutlinedInput-root': {
                                    '&:hover fieldset': {
                                        borderColor: 'green',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'green',
                                    },
                                },
                            }}
                            onChange={handleUsernameChange}
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
                                        borderColor: 'green',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'green',
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
            </DialogContent>
        </Dialog>
    );
};

export default SignInModal;