import TopNavbar from "../components/layouts/TopNavbar"
import WalletCard from "../components/walletCard";

import Button from "@mui/material/Button";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InfoIcon from '@mui/icons-material/Info';
import PaymentIcon from '@mui/icons-material/Payment';

import Stack from '@mui/material/Stack';
// import { useNavigate } from "react-router-dom";
import SideBar from "../components/layouts/SideBar";

const Token = () => {
    // const navigator = useNavigate();

    return (
        <div className="h-screen overflow-hidden-scrollbar overflow-y-auto bg-bgColor">
            <TopNavbar />
            <div className="flex mt-[98px]">
                <SideBar />
                <div className="w-full ">
                    <div className="w-full lg:flex ">
                        <div className="w-9/12 text-textColor text-center py-8 ">
                            <p className="text-2xl">Deposit SOL to your bump wallet to begin</p>
                            <p className="text-xl">You currently have 4 wallet/s out of a total of 4.</p>
                        </div>
                        <div className="text-textColor lg:w-3/12 w-full px-8 py-4  ">
                            <Button
                                style={{ textTransform: 'none' }}
                                className="w-full"
                                component="label"
                                role={undefined}
                                variant="contained"
                                startIcon={<AddCircleIcon fontSize="medium" />} // Assuming Trophy is also an icon component
                            >
                                <p className="text-lg py-1 text-nowrap">Add Wallet(Free) </p>
                            </Button>

                            <div className="flex justify-center items-center">
                                <p className="text-center ">0 Wallets remaining</p>
                                <InfoIcon fontSize="small" />
                            </div>


                            <Stack direction="row" spacing={2}>
                                <div className="flex justify-between  py-4 gap-2">
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
                    <div className="grid lg:grid-cols-2 gap-4 lg:w-9/12 md:w-full px-8">
                        <WalletCard />
                        <WalletCard />
                        <WalletCard />
                        <WalletCard />
                    </div>
                    <div className=" w-9/12 p-7 flex flex-col gap-4">
                        <div className="px-2 flex border rounded-md items-center bg-cardBg gap-12 py-2 border-blue-600">
                            <InfoIcon fontSize="small" color="primary" />
                            <div className="text-center text-textWhiteColor">Multi-wallets offers more visibility to your token! and they're completely free.</div>
                        </div>
                        <div className="px-2 flex border rounded-md items-center bg-cardBg gap-12 py-2 border-blue-600">
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