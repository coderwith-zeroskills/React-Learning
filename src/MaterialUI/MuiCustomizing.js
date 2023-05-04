import { Box, ThemeProvider, colors, createTheme } from "@mui/material";
import { pink, red } from "@mui/material/colors";
import React from "react";
// create theme object and pass it in ThemeProvider component as a theme prop
const theme = createTheme({
  palette: {
    secondary: {
      main: colors.blue[500],
    },
  },
});
function MuiCustomizing() {
  return (
    // <ThemeProvider theme={theme}>
    //   <Box sx={{ bgcolor: "secondary.main" }}>box</Box>
    // </ThemeProvider>
    <>
      <Box sx={{ bgcolor: "secondary.light" }}>box</Box>
    </>
  );
}

export default MuiCustomizing;
