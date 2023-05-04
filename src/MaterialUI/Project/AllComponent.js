import React from "react";
import Feed from "./Feed";
import NavBar from "./NavBar";
import RightBar from "./RightBar";
import SideBar from "./SideBar";
import { Box, Stack } from "@mui/material";
//Inside Layout we have:Box(a div),Container(defalut margin,width-100%),grid(uses CSS Flex Box Module),Stack(1-D grid)
// All values of justifyContent
function AllComponent() {
  return (
    <Box>
      <NavBar />
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default AllComponent;
