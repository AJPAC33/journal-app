import { Box, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { NavBar, SideBar } from "../components";

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth} onMenuClick={handleDrawerToggle} />
      <SideBar
        drawerWidth={drawerWidth}
        open={mobileOpen}
        onClose={handleDrawerToggle}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
