"use client";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { CustomDialog, dialogOpenSubject$ } from "..";
import FavoriteTable from "./FavoriteTable/FavoriteTable";
import FavoriteIcon from "@mui/icons-material/Favorite";

export type NavbarProps = {
  // types...
};

const Navbar: React.FC<NavbarProps> = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };

  return (
    <div>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ShermanSystems TEST
          </Typography>
          {/* <Button variant="contained" onClick={handleClick}>
            Open Favorites
          </Button> */}
          <IconButton className="" size="small" onClick={handleClick}>
            <FavoriteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
