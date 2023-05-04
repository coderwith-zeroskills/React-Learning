import { Box, Divider, Grid, Stack } from "@mui/material";
import { Button } from "bootstrap";
import React from "react";

function MuiBox() {
  return (
    //Simply <Box> means div else give component="" prop and can do custom styling by sx={{}} prop which tske object
    <>
      {/* <Stack by default flex and flex-direction column
       */}
      {/* <Stack
        sx={{ border: "1px solid", height: "100px" }}
        direction="row"
        //multiply by 2
        spacing={2}
        divider={<Divider flexItem />}
      > */}
      <Box
        sx={{
          backgroundColor: "primary.main",
          // padding: "10px",
          //here heigth is working but with content it is not workinh
          height: "1050px",
          // width: "100px",
          // "&.hover": {
          //   backgroundColor: "primary.light",
          // },
        }}
      >
        The box component
      </Box>
      {/* othr prop:display,width,height */}
      {/* p for paddiing or p={2} is 16px */}
      {/* under system to property */}
      {/* <Box bgcolor="success.light" p={2}>
          Neew
        </Box> */}
      {/* </Stack>{" "} */}
      {/* this is parent having 4 children */}
      {/* add contaienr prop on parent */}
      {/* item on childrem */}
      {/* 12column and 5 breakpoint in grid,each item can take one/more colum depend on width
       */}
      {/* xs={6} takes 6 of the width */}
      {/* sm={} sm or larger */}
      {/* spacing={2} gives 16px */}
      {/* rowSpacing={}
      columnSpacing={} */}
      {/* <Grid container marginTop={4} rowGap={2} columnGap={11}></Grid> */}
      {/* <Grid container rowSpacing={2}> */}
      {/* xs='auto' */}
      {/* <Grid item bgcolor="red" xs={12} sm={3}>
          <Box>1</Box>
        </Grid>
        <Grid item bgcolor="yellow" xs={12} sm={3}>
          <Box>2</Box>
        </Grid>
        <Grid item bgcolor="green" xs={12} sm={3}>
          <Box>3</Box>
        </Grid>
        <Grid item bgcolor="brown" xs={12} sm={3}>
          <Box>4</Box>
        </Grid> */}
      {/* </Grid> */}
    </>
  );
}

export default MuiBox;
