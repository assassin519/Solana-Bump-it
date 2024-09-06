import React from "react";
import Avatar from '@mui/material/Avatar';

import useTheme from "../../hooks/useTheme"
import SignInModal from "../SignInModal";
import Button from "../Button/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { dispatch, useSelector } from "../../store";
import { getUserData } from "../../store/reducers/userInfo";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { Sun, Moon } from "lucide-react";

const TopNavbar = () => {

  const [anchorEl, setAnchorEl] = React.useState < null | HTMLElement > (null);
  const open = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert("dddd")
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const { darkTheme, toggleTheme } = useTheme()

  const [inOpen, setInOpen] = React.useState(false);
  const [upOpen, setUpOpen] = React.useState(false);

  // Getting Data
  const username = useSelector((state) => state.userInfo.user.username)
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
        <SignInModal isOpen={inOpen} onClose={handleInClick} title="Sign In" />
        <SignInModal isOpen={upOpen} onClose={handleUpClick} title="Sign Up" />
        <div className="flex md:gap-16 w-full items-center ">
          <Logo />
        </div>

        <div className="flex items-center gap-3  ">
          {!isLoggedIn ?
            <div className="flex items-center gap-2">
              <p className="">{username}</p>
              <Button
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick as () => void}
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div >
            :
            <div className=" flex gap-1 items-center">
              <Button onClick={handleInClick} className="w-full font-medium cursor-pointer flex gap-3 text-base py-2 hover:bg-selBtnHoverColor rounded-md  px-2 items-center text-nowrap" text="Log In" />
              <Button onClick={handleUpClick} className="w-full font-medium cursor-pointer flex gap-3 text-base py-2 hover:bg-selBtnHoverColor rounded-md  px-2 items-center text-nowrap" text="Sign Up" />
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

