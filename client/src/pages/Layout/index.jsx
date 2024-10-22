import React,{useState} from 'react'
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import { useGetUserQuery } from 'store/api';
const Layout = () => {
  const isNonMobile = useMediaQuery('(min-width: 600px)');
  const [isSideBarOpen, setIsSideBarOpen]=useState(true);
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);

  return (
    <Box display={isNonMobile ? "flex" : "block"} height="100%" width="100%">
        <SideBar
        user= { data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
         />
        <Box flexGrow={1} >
            <NavBar 
            user= { data || {}}
            isSideBarOpen={isSideBarOpen}
            setIsSideBarOpen={setIsSideBarOpen}
            />
            <Outlet />
        </Box>
    </Box>
  )
}

export default Layout;