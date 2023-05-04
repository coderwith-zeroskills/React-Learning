import { Button, Stack } from "@mui/material";
import React from "react";

function MuiResponsive() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      <Button>N1</Button>
      <Button>N1</Button>
      <Button>N1</Button>
    </Stack>
  );
}

export default MuiResponsive;
