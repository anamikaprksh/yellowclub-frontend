import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
const gendr = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
  {
    value: "Others",
    label: "Others",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    padding: "1% 5%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  flexing: {
    display: "flex",
    justifyContent: "space-around",
  },
  boxed: {
    border: "solid black 1px",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Dialogs() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [correctpno, setCorrectpno] = useState(false);
  const [gender, setGender] = useState("");
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Partners
      </Button>
      <br></br>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Remove Partners
      </Button>
      <br></br>

      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Deactivate Partners
      </Button>
      <br></br>

      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        List all Partners
      </Button>
      <br></br>

      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Pending Partners
      </Button>
      <br></br>

      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit Partners
      </Button>
      <br></br>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid container spacing={3}>
              <Grid item xs={12} md={4} sm={6}>
                {" "}
                <TextField
                  id="standard-basic"
                  label="First Name"
                  variant="standard"
                  fullWidth="true"
                  required
                />
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                {" "}
                <TextField
                  id="standard-basic"
                  label="Middle Name"
                  variant="standard"
                  fullWidth="true"
                />
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                {" "}
                <TextField
                  id="standard-basic"
                  label="Last Name"
                  variant="standard"
                  fullWidth="true"
                  required
                />
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                {" "}
                <TextField
                  id="standard-basic"
                  label="Phone Number"
                  variant="standard"
                  fullWidth="true"
                  type="number"
                  onChange={(e) => setCorrectpno(e.target.value.length != 10)}
                  error={correctpno}
                  required
                />
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                {" "}
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  fullWidth="true"
                  type="email"
                  required
                />
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                {" "}
                <TextField
                  id="standard-basic"
                  label="Gender"
                  variant="standard"
                  fullWidth="true"
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}
                  select
                  required
                >
                  {gendr.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={6} sm={12}>
                {" "}
                <TextField
                  id="outlined-basic"
                  label="About"
                  variant="outlined"
                  fullWidth="true"
                  size="large"
                />
              </Grid>
              <Grid item xs={12} md={6} sm={12}>
                {" "}
                <TextField
                  id="standard-basic"
                  label="Languages"
                  variant="standard"
                  fullWidth="true"
                  size="large"
                />
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                {" "}
                <TextField
                  id="standard-basic"
                  label="City"
                  variant="standard"
                  fullWidth="true"
                  required
                />
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                {" "}
                <TextField
                  id="standard-basic"
                  label="Age"
                  variant="standard"
                  fullWidth="true"
                  required
                />
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                {" "}
                <TextField
                  id="standard-basic"
                  label="Designation"
                  variant="standard"
                  fullWidth="true"
                  required
                />
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                {" "}
                <TextField
                  id="standard-basic"
                  label="Experience"
                  variant="standard"
                  fullWidth="true"
                  required
                />
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                {" "}
                <TextField
                  id="standard-basic"
                  label="Education"
                  variant="standard"
                  fullWidth="true"
                  required
                />
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                {" "}
                <TextField
                  id="outlined-basic"
                  label="expertise"
                  variant="outlined"
                  fullWidth="true"
                  size="large"
                />
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                {" "}
                <TextField
                  id="standard-basic"
                  label="Fee per Session"
                  variant="standard"
                  fullWidth="true"
                  required
                ></TextField>
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                <div className={classes.flexing}>
                  <div>
                    <Paper className={classes.paper}>
                      <div>
                        Is Premium
                        <Switch
                          label="Is Premium"
                          checked={state.checkedA}
                          onChange={(event) =>
                            setState({
                              ...state,
                              [event.target.name]: event.target.checked,
                            })
                          }
                          name="checkedA"
                          inputProps={{ "aria-label": "secondary checkbox" }}
                        />
                      </div>
                    </Paper>
                  </div>
                  <div>
                    <Paper className={classes.paper}>
                      <div>
                        Is Verified
                        <Switch
                          label="Is Verified"
                          checked={state.checkedB}
                          onChange={(e) =>
                            setState({
                              ...state,
                              [e.target.name]: e.target.checked,
                            })
                          }
                          name="checkedB"
                          inputProps={{ "aria-label": "secondary checkbox" }}
                        />
                      </div>
                    </Paper>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                {" "}
                <TextField
                  id="standard-basic"
                  label="Profile image URL"
                  variant="standard"
                  fullWidth="true"
                  required
                ></TextField>
              </Grid>
            </Grid>
          </form>
        </List>
      </Dialog>
    </div>
  );
}
