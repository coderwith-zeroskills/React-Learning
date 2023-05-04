import {
  Button,
  ButtonGroup,
  ThemeProvider,
  createTheme,
  rgbToHex,
  styled,
} from "@mui/material";
import { blue, green, pink, purple, red } from "@mui/material/colors";
import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
// import styled from "styled-components";
// create theme object and pass it in ThemeProvider component as a theme prop
const MyButton = styled(Button)({
  backgroundColor: "yellow",
  padding: 5,
  "&:hover": {
    backgroundColor: "red",
    padding: "10px",
  },
});
const MyTheme = createTheme({
  palette: {
    primary: {
      main: green[500],
      light: purple[500],
    },
    secondary: {
      main: purple[500],
      light: red[500],
    },
    other: {
      main: blue[500],
    },
  },
});
function MuiCustomizing() {
  return (
    // <ThemeProvider theme={theme}>
    //   <Box sx={{ bgcolor: "secondary.main" }}>box</Box>
    // </ThemeProvider>
    <ThemeProvider theme={MyTheme}>
      <ButtonGroup orientation="vertical">
        <MyButton>nikhil</MyButton>
        <Button
          sx={{ backgroundColor: "other.main", color: "secondary.light" }}
        >
          nikhil
        </Button>
      </ButtonGroup>
    </ThemeProvider>
  );
}

export default MuiCustomizing;
