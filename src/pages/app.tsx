import React from "react";
import SignInModal from "../components/SignInModal";

import Button from "@mui/material/Button";
import Footer from "../components/layouts/Footer";
import TopNavbar from "../components/layouts/TopNavbar";
import Dexlog from "../assets/dex.png"
import Card from "../components/card";

// import { useNavigate } from "react-router-dom";

const App = () => {
    // const navigator = useNavigate();
    const [upOpen, setUpOpen] = React.useState(false);
    const handleUpClick = () => {
        setUpOpen(!upOpen);
    };
    return (
        <div className="h-screen overflow-hidden-scrollbar overflow-y-auto bg-bgColor">
            <TopNavbar />
            <div className="flex mt-40 justify-center ">
                <div className="lg:flex gap-4 lg:w-[70rem] w-full px-4 ">
                    {/* <div className=" lg:flex lg:w-[20rem] w-full px-2 mt-40 justify-center gap-4 "> */}
                    <div className="border text-center rounded-md bg-cardBg px-8 lg:w-[28rem] w-full">
                        <p className=" text-center text-textColor py-4 text-2xl font-semibold">Dex Checker</p>
                        <p className=" text-center text-textColor">Version 1.0</p>

                        <div className="pt-2 justify-center items-center flex flex-col gap-2">
                            <p className=" text-center text-textColor text-2xl text-wrap font-semibold">Check Pump.fun or Raydium tokens for Dexscreener payments.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-4  pt-6 ">
                            <Card img={Dexlog} cardname="Check if dex has been paid!" desc="Not every dev tells the truth!" />

                        </div>
                        <div className=" py-10 flex flex-col gap-8 ">

                            <input type="text" placeholder="Enter Pump.fun link or token ..." className="w-full bg-cardBg rounded-md text-textColor px-4 py-2 border hover:border-green-300 focus-within:border-green-500" />
                            <Button
                                style={{ textTransform: 'none' }}
                                className="w-full "
                                color="success"
                                component="label"
                                role={undefined}
                                variant="contained"
                            >
                                <p className="py-1 text-lg">Check</p>
                            </Button>
                        </div>
                    </div>



                    <div className="border text-center rounded-md bg-cardBg px-8 lg:w-2/3 w-full">
                        <p className=" text-center text-textColor py-4 text-2xl font-semibold">BumpIt</p>
                        <p className=" text-center text-textColor">Version 2.5.5: Pump.fun</p>

                        <div className="pt-2 justify-center items-center flex flex-col gap-2">
                            <p className=" text-center text-textColor pt-1 text-2xl text-wrap font-semibold">The Fastest Way to Get More Buyers for your Token!</p>
                            <p className="rounded-lg w-96 text-center  text-2xl font-semibold text-green-600 bg-green-50">Trusted by 10958 users! </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4  justify-center w-full pt-12 px-2">
                            <Card img={Dexlog} cardname="First Page - All of the time." desc="Appear at the top of Pump.fun token list and always on the first page." />
                            <Card img={Dexlog} cardname="Dominate Photon Trending." desc="Trends your token on Photon across all time spans. Leave your competition in the dust." />
                        </div>

                        <div className="px-12 py-9 flex flex-col gap-8 ">
                            <p className=" text-center text-textColor py-1 text-2xl text-wrap font-semibold">Sign up now and start bumping!</p>
                            <Button
                                style={{ textTransform: 'none' }}
                                className="w-full "
                                color="success"
                                component="label"
                                onClick={handleUpClick}
                                role={undefined}
                                variant="contained"
                            >
                                <p className="py-1 text-lg">Register</p>
                            </Button>
                        </div>
                    </div>
                </div>
                <Footer />
                <SignInModal isOpen={upOpen} onClose={handleUpClick} title="Sign Up" />
            </div>
        </div >
    )
}

export default App;