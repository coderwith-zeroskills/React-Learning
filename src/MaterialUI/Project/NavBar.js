import {
  AddIcCallTwoTone,
  Mail,
  NotificationAdd,
  Notifications,
} from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";

import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
// goto-surface and to AppBar and select one
//<ToolBar>gives some padding
//learn values of position(sticky,)
//seacr input in muidocumentation and goto input-base
//search badge instead of icon and paste and learn about badge
//goto avatar
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const SearchBar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: theme.shape.borderRadius,
  padding: "10px",
  width: "40%",
}));
const IconBarBox = styled(Box)(({ theme }) => ({
  display: "flex",
}));
function NavBar() {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          FAKEBOOK
        </Typography>
        <AppShortcutIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <SearchBar>
          <InputBase placeholder="Search" />
        </SearchBar>
        <IconBarBox>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ width: "50%" }} />
        </IconBarBox>
      </StyledToolbar>
    </AppBar>
  );
}

export default NavBar;
