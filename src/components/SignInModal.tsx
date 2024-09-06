import React from "react";
import instance from "../utils/axios";
import { ModalProps } from "../types";
import useAuth from "../hooks/useAuth";
import useNotification from "../hooks/useNotification";

const SignInModal = ({ isOpen, onClose, title, connect }: ModalProps) => {
    const { showNotification } = useNotification()
    const { login, register, isLoggedIn } = useAuth()

    const [userData, setUserData] = React.useState({
        username: "",
        email: "",
        password: ""
    })

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
            onClose()
        } else {
            console.log(userData)
            register(userData.email, userData.password, userData.username)
            showNotification("Successfully registered!", "success")
            onClose()
        }
    }

    const googleSignIn = () => {
        instance.get("/auth/google")
        onClose()
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
                    <div className="cursor-pointer flex flex-row bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg w-[100%] h-[80px]" onClick={() => googleSignIn()}>
                         
                        <div className="flex flex-col my-auto ml-5">
                            <p className="text-white text-1xl font-bold ">Continue with Google</p>
                            <p className="text-white text-sm">Quick Sign-in</p>
                        </div>
                    </div>
                    {title === "Sign Up" ?
                        <div className=" flex flex-col gap-3 justify-between">
                            <div className="flex flex-row mt-2">
                                <input type="text" name="text" className="py-2 pl-3 bg-bgColor border border-gray-300 rounded-lg w-[70%] hover:bg-selBtnHoverColor text-textColor " autoComplete='email' placeholder="User Name" onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
                                <div className="ml-2 font-bold w-[30%] rounded-lg  text-1xl flex items-center justify-center cursor-pointer  bg-gray-400 text-textColor" onClick={() => handleClick()}>Continue</div>
                            </div>
                            <div className="flex  gap-2 flex-row justify-between ">
                                <input type="email" name="email" className="w-full  bg-bgColor text-textColor hover:bg-selBtnHoverColo  pl-3 border rounded-lg py-2" placeholder="Email Name" onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                            </div>
                            <input type="password" className="pl-3 border border-gray-300 rounded-lg bg-bgColortext-textColor hover:bg-selBtnHoverColor py-2" placeholder="Password" onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                        </div>
                        :
                        <div>
                            <div className="flex gap-2 flex-row justify-between">
                                <input type="text" className="w-full pl-3 border bg-bgColor border-gray-300 rounded-lg hover:bg-selBtnHoverColor py-2" placeholder="Email Name" onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                                <div className="ml-2 font-bold w-[30%] rounded-lg text-1xl flex items-center justify-center  cursor-pointer bg-gray-400 text-textColor" onClick={() => handleClick()}>Continue</div>
                            </div>
                            <input type="password" className="w-full mt-2 pl-3 border border-gray-300 rounded-lg bg-selBtnHoverColor py-2" placeholder="Password" onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                        </div>}
                    <hr />
                    <div className="text-textColor bg-cardBg flex gap-5 items-center w-full px-2 cursor-pointer font-bold py-1 rounded-md shadow-md" onClick={connect}>
                        <img src="https://img.freepik.com/premium-vector/metamask-logo-crypto-wallet-defi-web3-dapps-nfts-isolated-white-background_337410-1911.jpg?w=826" width={36} height={36} alt="" />Metamask
                    </div>

                    <div className="text-textColor bg-cardBg flex gap-5 items-center w-full px-2 cursor-pointer font-bold py-3 rounded-md shadow-md">
                        <img src="https://1000logos.net/wp-content/uploads/2022/05/WalletConnect-Logo-500x281.png" width={36} height={48} alt="" className="my-1" /> Wallet Connect
                    </div>
                    <p className="border-b-2  text-textColor text-center text-1xl mt-5"> Privacy Terms</p>
                </div>
            </div>
        </div>
    );
};

export default SignInModal;