import TopNavbar from "../components/layouts/TopNavbar"
import WalletCard from "../components/walletCard";

import Button from "@mui/material/Button";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InfoIcon from '@mui/icons-material/Info';
import PaymentIcon from '@mui/icons-material/Payment';

import Stack from '@mui/material/Stack';
// import { useNavigate } from "react-router-dom";
import SideBar from "../components/layouts/SideBar";
import React from "react";

const Token = () => {
    // const navigator = useNavigate();
    const [wallet, setWallet] = React.useState < JSX.Element[] > ([]);
    const onAddBtnClick = () => {
        if (wallet.length < 4) {
            setWallet(wallet.concat(<WalletCard key={wallet.length} />));
        } else {
            alert("You can only add up to 4 inputs."); // Optional: Alert the user
        }
    };
    return (
        <div className="h-screen overflow-hidden-scrollbar overflow-y-auto bg-bgColor">
            <TopNavbar />
            <div className="flex mt-[98px]">
                <SideBar />
                <div className="w-full ">
                    <div className="lg:flex px-2 justify-between   ">
                        <div className="flex flex-col  w-full text-textColor text-center   gap-2 py-8 ">
                            <p className="text-3xl">Deposit SOL to your bump wallet to begin</p>
                            <p className="text-xl">You currently have 4 wallet/s out of a total of 4.</p>
                        </div>
                        <div className="text-textColor  flex flex-col gap-3 py-8  ">
                            <div className="flex justify-center items-center">
                                <Button
                                    style={{ textTransform: 'none' }}
                                    className="w-full"
                                    component="label"
                                    role={undefined}
                                    variant="contained"
                                    color="secondary"
                                    onClick={onAddBtnClick}
                                    disabled={wallet.length >= 4}
                                    startIcon={<AddCircleIcon fontSize="medium" />} // Assuming Trophy is also an icon component
                                >
                                    <p className="text-lg   px-py-1 text-nowrap">Add Wallet(Free) </p>
                                </Button>
                            </div>

                            <div className="flex justify-center gap-2 items-center">
                                <p className="text-center text-nowrap">{4 - wallet.length} Wallets remaining</p>
                                <InfoIcon fontSize="small" />
                            </div>

                            <Stack direction="row" spacing={2}>
                                <div className="flex w-full px-4  space-x-2 justify-center   gap-2">
                                    <div className="justify-center flex flex-col items-center">
                                        <div className="border bg-green-500 w-12 h-12 items-center rounded-full p-2">
                                            <PaymentIcon />
                                        </div>
                                        Withdraw
                                    </div>
                                    <div className="justify-center flex flex-col items-center">
                                        <div className="border bg-green-500 w-12 h-12 items-center rounded-full p-2">
                                            <PaymentIcon />
                                        </div>
                                        Distribute
                                    </div>
                                    <div className="justify-center flex flex-col items-center">
                                        <div className="border bg-green-500 w-12 h-12 items-center rounded-full p-2">
                                            <PaymentIcon />
                                        </div>
                                        Consolidate
                                    </div>
                                </div>
                            </Stack>
                        </div>
                    </div>
                    {/* <div className="grid"> */}
                    <div className="grid lg:grid-cols-2 grid-flow-row gap-4 lg:w-9/12 md:w-full w-full px-8">
                        {wallet}
                    </div>
                    <div className=" lg:w-9/12 w-full p-7 flex flex-col gap-4">
                        <div className="px-2 flex border rounded-md items-center bg-cardBg gap-4 py-2 border-blue-600">
                            <InfoIcon fontSize="small" color="primary" />
                            <div className="text-center text-textWhiteColor">Multi-wallets offers more visibility to your token! and they're completely free.</div>
                        </div>
                        <div className="px-2 flex border  rounded-md items-center bg-cardBg gap-4 py-2 border-blue-600">
                            <InfoIcon fontSize="small" color="primary" />
                            <div className="justify-center text-textWhiteColor">Multi-wallets are optional, they act as "multi-bots" for running bumps. You can still use one wallet (W1) for running bumps.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Token;