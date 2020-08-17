import React from "react";

//Components
import { Container } from "@material-ui/core";
import GridDemo from "./GridDemo";

const ContainerDemo = () => {
  return (
    <Container maxWidth="xl">
      <GridDemo />
    </Container>
  );
};

export default ContainerDemo;
