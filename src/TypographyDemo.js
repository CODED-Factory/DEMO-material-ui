import React from "react";
import { Typography } from "@material-ui/core";

const TypographyDemo = () => {
  return (
    <div>
      <Typography align="center">Any text here</Typography>
      <Typography align="left" variant="h1">
        Any text here
      </Typography>
      <Typography align="right" variant="h3" gutterBottom color="primary">
        Any text here
      </Typography>
    </div>
  );
};

export default TypographyDemo;
