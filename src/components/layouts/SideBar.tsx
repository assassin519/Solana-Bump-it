import Button from "@mui/material/Button";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Credit from "../Dialog/Credit";

import Rewards from "../Dialog/Rewards";
import AddToken from "../Dialog/AddToken";

const SideBar = () => {
    return (
        <div className="sm:flex hidden  flex-col border-r-2 w-96 px-4 pt-4 text-textWhiteColor ">
            <Credit />

            <div className="py-4 flex flex-col gap-4 ">
                <p className="text-center text-2xl py-2">Bump History</p>

                <AddToken />
                <Rewards />
                <hr />
            </div>

            <div className="flex flex-col py-4 gap-4">
                <Button
                    style={{ textTransform: 'none' }}
                    className="w-full"
                    component="label"
                    role={undefined}
                    variant="contained"
                    startIcon={<AccountBalanceWalletIcon fontSize="small" />}
                >
                    Wallet Manager
                </Button>
                <Button
                    style={{ textTransform: 'none' }}
                    className="w-full"
                    component="label"
                    role={undefined}
                    variant="contained"
                    startIcon={<AccountBalanceWalletIcon fontSize="small" />} // Assuming Trophy is also an icon component
                >
                    Usage Guide
                </Button>
                <div className=" flex gap-2" >
                    <Button
                        style={{ textTransform: 'none' }}
                        className="w-full"
                        component="label"
                        role={undefined}
                        variant="contained"
                        startIcon={<TelegramIcon fontSize="small" />} // Assuming Trophy is also an icon component
                    >
                        Telegram
                    </Button>
                    <Button
                        style={{ textTransform: 'none' }}
                        className="w-full"
                        component="label"
                        role={undefined}
                        variant="contained"
                        startIcon={<TwitterIcon fontSize="small" />} // Assuming Trophy is also an icon component
                    >
                        Twitter/X
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default SideBar