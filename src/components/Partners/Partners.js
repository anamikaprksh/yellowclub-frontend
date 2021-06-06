import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import handleOpen from "./Partnersopen"
import Dialogs from "./Partnersopen";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
export default function Partners() {
  const classes = useStyles();

  return (
    <div>
      <Dialogs></Dialogs>
    </div>
  );
}
