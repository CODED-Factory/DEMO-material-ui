import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

import { styled } from "@material-ui/core/styles";

const MyCardMedia = styled(CardMedia)({
  height: 30,
  paddingTop: "56.25%", // 16:9
});

const CardDemo = () => {
  return (
    <Card>
      <CardHeader title="Food" subheader="Everyone loves food" />
      <MyCardMedia
        image="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
        title="All types of food"
      />
      <CardContent>
        <Typography paragraph color="secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardDemo;
