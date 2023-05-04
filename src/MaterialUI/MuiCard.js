import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";

function MuiCard() {
  return (
    // height is not working and openai sayinh its doesnt have that prop do it in carccotent
    <Box
      //   sx={{
      //     color: "success.dark",
      //     display: "inline",
      //     fontWeight: "bold",
      //     mx: 0.5,
      //     fontSize: 14,
      //     width: 20,
      //   }}
      width={250}
      //   height={20} not working
    >
      <Card>
        {/* height={10} not working */}
        <CardMedia component="img" image="" alt="a image" />
        <CardContent>
          <Typography variant="h4" component="div">
            Heading
          </Typography>
          <Typography component="div">
            LJEWNFGjwebgkWRBGKWJRBGKwrhg
            lKWRHgrgergergergergergergergergergergergergGlkhgbwr
            ;kgH;KHR000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="sm">Share</Button>
          <Button size="sm">More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default MuiCard;
