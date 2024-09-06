
import logo from "../../assets/logo.png"

const Logo = () => {
    return (
        <div className="flex flex-col w-full cursor-pointer"   >
            <div className="flex  items-center">
                <img src={logo} className="md:w-16 md:h-16 w-12 h-12 " alt="logo" />
                <p className="w-full font-bold md:text-3xl text-lg text-textWhiteColor">Bump It</p>
            </div >
            <div className="text-textColor">
                Solana Blockchain Bump & Volume Bots
            </div>
        </div >
    )
}
export default Logo;
