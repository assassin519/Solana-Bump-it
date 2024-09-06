import * as React from 'react';
import Button from '@mui/material/Button';
import { IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import InfoIcon from '@mui/icons-material/Info';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import AddIcon from '@mui/icons-material/Add';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="right" ref={ref} {...props} />;
});

export default function AddToken() {
    const [open, setOpen] = React.useState < boolean > (false);
    const [selected, setSelected] = React.useState < string > ();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                style={{ textTransform: 'none' }}
                onClick={handleClickOpen}
                component="label"
                className='w-full'
                role={undefined}
                variant="contained"
                startIcon={<AddIcon fontSize="small" />}
            >
                Add Token (0.19 SOL)
            </Button>

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                maxWidth="md"
                fullWidth={true}
            // PaperProps={{
            //     style: {
            //         backgroundColor: backgroundColor, // Your desired background color
            //     },
            // }}
            >
                <DialogTitle className='flex justify-between items-center gap-3'>
                    <p>Buy Comment Credits</p>
                    <IconButton>
                        <HighlightOffIcon onClick={handleClose} />
                    </IconButton>
                </DialogTitle>

                <DialogContent>
                    <div className='max-w-full flex flex-col gap-4'>
                        <div className='border rounded-md py-2'>
                            <input type="text" className='w-full px-2' placeholder='Enter Token Address or pump link' />
                        </div>
                        <div className="px-2 flex border rounded-md items-center bg-cardBg gap-4 py-2 border-blue-600">
                            <InfoIcon fontSize="small" color="primary" />
                            <p className="text-center text-textWhiteColor">
                                Note: 0.199 SOL is only used for adding a token, you will need an extra 0.1 SOL or more to cover Solana trx fees
                            </p>
                        </div>
                        <div className="px-2 flex border rounded-md items-center bg-cardBg gap-4 py-2 border-orange-600">
                            <InfoIcon fontSize="small" color="warning" />
                            <p className="text-center text-textWhiteColor">
                                Main fee wallet will be used for one-time service fee
                            </p>
                        </div>
                        <div className="px-2 flex border rounded-md items-center bg-cardBg gap-4 py-2 border-orange-600">
                            <InfoIcon fontSize="small" color="warning" />
                            <p className="text-center text-textWhiteColor">
                                You cannot add the same token twice on the same account.
                            </p>
                        </div>
                    </div>

                    <div className='text-right pt-4'>
                        <Button
                            style={{ textTransform: 'none' }}
                            color="success"
                            component="label"
                            role={undefined}
                            variant="contained"
                        >
                            <p className='  text-lg'>Add</p>
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div >
    );
}