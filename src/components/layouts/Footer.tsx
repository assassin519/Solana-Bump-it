
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
const Footer = () => {
    return (
        <div className="fixed border rounded-sm z-50 bottom-0 gap-4 bg-cardBg flex w-full h-12 border-t px-2 items-center text-textWhiteColor justify-center ">
            <TelegramIcon fontSize='large'/>
            <TwitterIcon fontSize='large'/>
        </div>
    );
}

export default Footer;