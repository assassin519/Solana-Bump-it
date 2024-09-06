import React from "react";
import useTheme from "../../hooks/useTheme"
import Button from "../Button/Button";
import { dispatch, useSelector } from "../../store";
import { getUserData } from "../../store/reducers/userInfo";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { Sun, Moon } from "lucide-react";

const TopNavbar = () => {
  const { darkTheme, toggleTheme } = useTheme()

  const [isMarketOpen, setIsMarketOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMarket = () => {
    setIsMarketOpen(!isMarketOpen);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Variables
  const [inOpen, setInOpen] = React.useState(false);
  const [upOpen, setUpOpen] = React.useState(false);

  // Getting Data
  // const username = useSelector((state) => state.userInfo.user.username)
  // const email = useSelector((state) => state.userInfo.user.email)
  // const userrole = useSelector((state) => state.userInfo.user.role)

  // Use hooks
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate()

  // Open SignInModal, Logout
  const handleInClick = () => {
    setInOpen(!inOpen);
  };
  const handleUpClick = () => {
    setUpOpen(!upOpen);
  };
  const handleLogout = () => {
    navigate('/');
    logout()
  }

  React.useEffect(() => {
    dispatch(getUserData())
  }, [])

  return (
    <div className="fixed w-full z-30 top-0 bg-cardBg border rounded-sm ">
      <div className=" flex w-full justify-between gap-2 items-center px-2 py-1">
        <div className="flex md:gap-16 w-full items-center ">
          <Logo />
        </div>

        <div className="flex items-center gap-3  ">
          {isLoggedIn ?
            <div className="flex items-center gap-2">
              <div className="lg:visible lg:flex sm:hidden items-center hidden  ">
                <Button text="Election" className="px-2 py-1 flex flex-col cursor-pointer  rounded-md items-center text-gray-500 hover:text-selBtnHoverTextColor hover:bg-selBtnHoverColor active:bg-red-600" onClick={() => { navigate('/elections') }} />
              </div>

              <Button text="Deposit" className="p-2 w-full lg:flex hidden flex-col cursor-pointer  rounded-md items-center bg-btnColor hover:bg-btnColor text-white" onClick={() => { }} />

              <div className="relative"
                onMouseEnter={toggleMenu}
                onMouseLeave={toggleMenu}>

                <Button className="w-14 hidden lg:flex border-gray-300 p-2 rounded-full  items-center text-gray-400"  >
                  <img className=" rounded-full" src="https://docs.material-tailwind.com/img/face-2.jpg" alt="" />
                </Button>
              </div >
            </div >
            :
            <div className=" flex gap-1 items-center">
              <Button onClick={()=>{navigate("/signin")}} className="w-full font-medium cursor-pointer rounded-md px-4 py-2 hover:bg-selBtnHoverColor items-centers flex tems-centertext-base text-btnColor text-nowrap" text="Log In" />
              <Button onClick={()=>{navigate("/signup")}}className="w-full font-medium cursor-pointer rounded-md px-4 py-2 hover:bg-btnHoverColor items-centers text-base bg-btnColor text-nowrap text-white" text="Sign Up" />
            </div>
          }
          <Button onClick={toggleTheme}>
              {
                darkTheme === true ? <Sun className="text-white" /> : <Moon />
              }
          </Button>
        </div >
      </div >

    </div >

  )
}

export default TopNavbar;

