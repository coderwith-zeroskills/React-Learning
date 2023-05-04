import { Box } from "@mui/material";
import React from "react";
// something done with flex={1} in each three component
function SideBar() {
  return (
    <Box
      sx={{ bgcolor: "red", display: { xs: "none", sm: "block" } }}
      flex={1}
      p={2}
    >
      SideBar
    </Box>
  );
}

export default SideBar;
