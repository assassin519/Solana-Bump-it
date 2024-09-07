import React from "react";
import Avatar from '@mui/material/Avatar';

import useTheme from "../../hooks/useTheme"
import SignInModal from "../SignInModal";
import useNotification from "../../hooks/useNotification";
// import Button from "../Button/Button";
import { Button, IconButton } from "@mui/material";
import { Cached, Logout } from '@mui/icons-material';
import { dispatch, useSelector } from "../../store";
import { getUserData } from "../../store/reducers/userInfo";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { Sun, Moon, Axe } from "lucide-react";

const TopNavbar = () => {
  const { showNotification } = useNotification();
  const { darkTheme, toggleTheme } = useTheme()

  const [inOpen, setInOpen] = React.useState(false);
  const [upOpen, setUpOpen] = React.useState(false);

  // Getting Data
  const username = useSelector((state) => state.userInfo.user.username)
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
    showNotification("Successfully Logout!", "success");
    navigate('/');
    logout()
  }

  React.useEffect(() => {
    dispatch(getUserData())
  }, [])

  return (
    <div className="fixed w-full z-30 top-0 bg-cardBg border rounded-sm ">
      <div className=" flex w-full justify-between gap-2 items-center px-2 py-1">
        <SignInModal isOpen={inOpen} onClose={handleInClick} title="Sign In" />
        <SignInModal isOpen={upOpen} onClose={handleUpClick} title="Sign Up" />
        <div className="flex md:gap-16 w-full items-center ">
          <Logo />
        </div>

        <div className="flex items-center gap-3  ">
          {isLoggedIn ?
            <div className="flex items-center gap-4">
              <Button
                style={{ textTransform: 'none' }}
                component="label"
                className='w-full'
                role={undefined}
                variant="outlined"
                startIcon={<Axe fontSize="large" />}
              >
                <p className="text-lg">Tools</p>
              </Button>
              <div onClick={() => { }}
                className="rounded-md p-1.5 cursor-pointer hover:bg-gray-400">
                <Cached />
              </div>

              <p className="text-black">{username}</p>
              <div className="cursor-pointer group relative flex gap-1.5 bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">

                <Avatar className="cursor-pointer" src="/static/images/avatar/1.jpg" />
                <div
                  onClick={handleLogout}
                  className="absolute flex items-center gap-2  opacity-0 -bottom-full rounded-md mt-8 py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                  <Logout fontSize="small" />
                  <p className="text-nowrap">Log out</p>
                </div>
              </div>
            </div >
            :
            <div className=" flex gap-4 items-center">
              <button
                onClick={handleInClick}
                className="cursor-pointer text-nowrap  bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#06B6D4] h-9  px-3"
              >
                Sign In
              </button>
              <button
                onClick={handleUpClick}
                className="cursor-pointer text-nowrap  bg-blue-300 relative inline-flex items-center justify-center gap-2 rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#06B6D4] h-9 px-3"
              >
                Sign Up
              </button>
            </div>
          }
          <IconButton onClick={toggleTheme} className="cursor-pointer">
            {
              darkTheme === true ? <Sun className="text-white" /> : <Moon />
            }
          </IconButton>
        </div >
      </div >
    </div >

  )
}

export default TopNavbar;

