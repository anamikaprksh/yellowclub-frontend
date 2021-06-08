import React, { useState } from "react";
import clsx from "clsx";
import "./Partners.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import handleOpen from "./Partnersopen";
import Dialogs from "./Partnersopen";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { FlareSharp, Height } from "@material-ui/icons";
import "./Partners.css";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
      paddingTop: 120,
      paddingRight: 30,
      paddingLeft: 100,
      // width: "100%",
      textAlign: "center",
      // backgroundColor: "grey",
      // height:"100vh",
      position:"absolute",
      top: 0,
      bottom: 0,
      right:0,
      // minHeight:"99%",
    },
  },
  // mainpaper: {
  //   padding: theme.spacing(5),
  //   textAlign: "center",
  //   marginTop:20,
  //   // width:"70%",
  //   margin:"1% 10%",
  //   color: theme.palette.text.secondary,
  //   '&:hover': {
  //     boxShadow: " 0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07),0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)"
  // },
  // },

  // ShiftLeft: {
  //   transition: theme.transitions.create(["width", "margin"], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  //   marginLeft: "5%",
  // },
  // ShiftRight: {
  //   marginLeft: 240,
  //   transition: theme.transitions.create(["width", "margin"], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
}));
export default function Partners(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <div  className={clsx( {
          // eslint-disable-next-line no-restricted-globals
          // [classes.ShiftLeft]:!open,
          [classes.ShiftRight]: true,
        })}> */}
        <div className="bgpic">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6}>
              {" "}
              <Dialogs></Dialogs>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              {" "}
              <Dialogs></Dialogs>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              {" "}
              <Dialogs></Dialogs>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              {" "}
              <Dialogs></Dialogs>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              {" "}
              <Dialogs></Dialogs>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              {" "}
              <Dialogs></Dialogs>
            </Grid>
          </Grid>
        </div>
       </div>
  );
}
