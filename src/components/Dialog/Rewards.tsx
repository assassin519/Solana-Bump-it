import * as React from 'react';
import Button from '@mui/material/Button';
import { IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
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

export default function Rewards() {
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
                component="label"
                role={undefined}
                onClick={handleClickOpen}
                className='w-full'
                variant="contained"
                startIcon={<EmojiEventsIcon fontSize="small" />}
            >
                Royalty Rewards
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
                    <div className='flex items-center gap-3'>
                        <EmojiEventsIcon fontSize="small" />
                        <p>Royalty Rewards</p>
                    </div>
                    <IconButton>
                        <HighlightOffIcon onClick={handleClose} />
                    </IconButton>
                </DialogTitle>

                <DialogContent>
                    <div className='max-w-full flex flex-col gap-4'>
                    dd
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