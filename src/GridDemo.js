import React from "react";

//Components
import { Grid } from "@material-ui/core";
import CardDemo from "./CardDemo";

const GridDemo = () => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <CardDemo />
      </Grid>
      <Grid item xs={6}>
        <CardDemo />
      </Grid>
      <Grid item xs={6}>
        <CardDemo />
      </Grid>
      <Grid item md={4} xs={6}>
        <CardDemo />
      </Grid>
      <Grid item md={4} xs={6}>
        <CardDemo />
      </Grid>
      <Grid item md={4} xs={6}>
        <CardDemo />
      </Grid>
      <Grid item md={4} xs={6}>
        <CardDemo />
      </Grid>
    </Grid>
  );
};

export default GridDemo;
