
import TwitterIcon from '@mui/icons-material/Twitter';
import Button from "@mui/material/Button";
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import avatar from "../assets/avatar.png"
import Tooltip from '@mui/material/Tooltip';

import Alert from '@mui/material/Alert';

const WalletCard = () => {
    return (
        <div className="  flex  flex-col gap-4  border text-textWhiteColor rounded-md px-2 py-5">
            <div className="flex w-full px-2 items-center justify-between">
                <div className="flex items-center gap-2">
                    <p>W1</p>
                    <img src={avatar} alt="" />
                    <p>0.07683</p>
                    <CachedOutlinedIcon fontSize="small" />
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        style={{ textTransform: 'none' }}
                        component="label"
                        role={undefined}
                        variant="contained"
                        startIcon={<TwitterIcon fontSize="small" />} // Assuming Trophy is also an icon component
                    >
                        bumpit2ukK
                    </Button>
                    <div className="border p-1 rounded-md">
                        <Tooltip placement='top' className="" 
                        title="This will give you a brand new wallet and BumpIt username on PumpFun. 
                        Any existing funds will be transferred from your old wallet to your new one.">
                            <RefreshOutlinedIcon fontSize="medium" />
                        </Tooltip>
                    </div>
                </div>
            </div>

            <div className="bg-cardBg w-full rounded-md px-4 gap-1 flex flex-col py-2">
                <p>Public Key:</p>
                <div className="flex justify-between gap-2 ">
                    <p className=''>www</p>
                    <ContentCopyOutlinedIcon />
                </div>
            </div>
            <div className="w-full">
                <Alert severity="info" >
                    <p className="">Main fee wallet</p>
                </Alert>
            </div>
        </div>
    )
}

export default WalletCard