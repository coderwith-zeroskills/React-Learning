import {
  Autocomplete,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { FormControl } from "react-bootstrap";

function BTabs() {
  return (
    // <>
    //   <FormControl>
    //     <InputLabel>Label</InputLabel>
    //     <Select label="Label">
    //       <MenuItem>Item1</MenuItem>
    //       <MenuItem>Item1</MenuItem>
    //     </Select>
    //   </FormControl>
    // </>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        // value={}
        label="Age"
        // onChange={}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}

export default BTabs;
