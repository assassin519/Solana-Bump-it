import * as React from 'react';
import Button from '@mui/material/Button';
import { IconButton, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { MessageCircle } from "lucide-react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
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

export default function Credit() {
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
                style={{ textTransform: 'none' }} className="w-full gap-12 text-nowrap " variant="contained"
                onClick={handleClickOpen}>
                <div className="flex gap-2">
                    <MessageCircle />
                    <p>Comment Credits</p>
                </div>
                <div className="flex gap-2">
                    0 <AddIcon />
                </div>
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
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
                    <div className='w-[34rem]'>
                        <p>Select the number of credits you want to buy:</p>
                        <div className='flex flex-col py-2 gap-4'>
                            <div
                                onClick={() => { setSelected('five') }}
                                className={`${selected === 'five' ? 'bg-[#253935] border border-green-500' : 'bg-cardBg '} flex items-center rounded-md hover:shadow-lg p-4 justify-between cursor-pointer`}>
                                <div className=''>
                                    <p className='font-semibold text-xl text-textWhiteColor'>5 Credit</p>
                                    <p className='text-textColor'>0.0198 SOL/comment</p>
                                </div>
                                <div className=''>
                                    <p className='font-semibold text-lg text-textWhiteColor'>0.099 SOL</p>
                                </div>
                            </div>

                            <div
                                onClick={() => { setSelected('ten') }}
                                className={`${selected === 'ten' ? 'bg-[#253935] border border-green-500' : ' bg-cardBg'} flex items-center rounded-md hover:shadow-lg p-4 justify-between cursor-pointer`}>
                                <div className=''>
                                    <p className='font-semibold text-xl text-textWhiteColor'>10 Credit</p>
                                    <p className='text-textColor'>0.0149 SOL/comment</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <p className='font-semibold text-lg text-textWhiteColor'>0.149 SOL</p>
                                    <div className='px-2 py-1  bg-[#162312] rounded-md '>
                                        <p className='text-[#23862d]'>25% cheaper</p>
                                    </div>
                                </div>
                            </div>

                            <div
                                onClick={() => { setSelected('twofive') }}
                                className={`${selected === 'twofive' ? 'bg-[#253935] border border-green-500' : 'bg-cardBg'} flex items-center rounded-md hover:shadow-lg p-4 justify-between cursor-pointer`}>
                                <div className=''>
                                    <p className='font-semibold text-xl text-textWhiteColor'>25 Credit</p>
                                    <p className='text-textColor'>0.0100 SOL/comment</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <p className='font-semibold text-lg text-textWhiteColor'>0.249 SOL</p>
                                    <div className='px-2 py-1  bg-[#162312] rounded-md '>
                                        <p className='text-[#23862d]'>50% cheaper</p>
                                    </div>
                                </div>
                            </div>
                            <Button
                                style={{ textTransform: 'none' }}
                                className="w-full "
                                color="success"
                                component="label"
                                role={undefined}
                                variant="contained"
                            >
                                <p className='py-1 text-lg'>Buy 10 Credit for 0.149 SOL</p>
                            </Button>
                        </div>
                    </div>
                </DialogContent>

            </Dialog>
        </div>
    );
}