import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// eslint-disable-next-line
const useStyles = makeStyles((theme) => ({
  root: {},
}));


const Answer = (props) => {
  return (
  <Button variant="contained">
    {props.content}
  </Button>
  );
};

export default Answer;