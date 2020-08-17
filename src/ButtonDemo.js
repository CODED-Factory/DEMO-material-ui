import React from "react";

//Components
import { Button } from "@material-ui/core";

//Utils
import { styled } from "@material-ui/core/styles";

const MyButton = styled(Button)({
  background: (props) =>
    props.customcolor ?? "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
});
const ButtonDemo = () => {
  return (
    <>
      <MyButton customcolor={"#CCB647"}>Outlined</MyButton>
      <Button variant="contained" color="secondary">
        Contained
      </Button>
      <Button variant="text" color="secondary">
        Text
      </Button>
    </>
  );
};

export default ButtonDemo;
