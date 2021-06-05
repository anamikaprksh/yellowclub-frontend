import React, { useEffect, useState } from "react";
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
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";
import { Input } from "@material-ui/core";
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
    padding: "1% 15%",
    // backgroundColor:"grey",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  appBar: {
    // position: "relative",
    backgroundColor:"#606364",
    // color:"black",
    position:"sticky",
    // opacity:"95%"
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
  page:{
    backgroundColor:"#3A3B41"
  },
}));

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",
        "+",
        9,
        1,
        ")",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}
TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Dialogs() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [correctpno, setCorrectpno] = useState(false);
  const [gender, setGender] = useState("");
  const [ispremiumfocused, setispremiumFocused] = useState(0);
  const [isverifiedfocused, setisverifiedFocused] = useState(0);
  const [firstnamefocused, setfirstnameFocused] = useState(0);
  const [middlenamefocused, setmiddlenameFocused] = useState(0);
  const [lastnamefocused, setlastnameFocused] = useState(0);
  const [phonenumberfocused, setphonenumberFocused] = useState(0);
  const [emailfocused, setemailFocused] = useState(0);
  const [genderfocused, setgenderFocused] = useState(0);
  const [aboutfocused, setaboutFocused] = useState(0);
  const [languagesfocused, setlanguagesFocused] = useState(0);
  const [cityfocused, setcityFocused] = useState(0);
  const [agefocused, setageFocused] = useState(0);
  const [experiencefocused, setexperienceFocused] = useState(0);
  const [educationfocused, seteducationFocused] = useState(0);
  const [expertisefocused, setexpertiseFocused] = useState(0);
  const [fpsfocused, setfpsFocused] = useState(0);
  const [designationfocused, setdesignationFocused] = useState(0);
  const [piurlfocused, setpiurlFocused] = useState(0);

  // console.log(focused)
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
  });
  const [values, setValues] = React.useState({
    textmask: "(+91)0000-000-000",
    name: " ",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function handlePhoneNo(ev) {
    setValues({
      ...values,
      [ev.target.name]: ev.target.value,
    });
    // console.log((ev.target.value.replace(/\s+/g, '')).replace(/-/g, "").length)
    setCorrectpno(ev.target.value.replace(/\s+/g, "").length != 17);
  }
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
              ADD PARTNERS
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List className={classes.page}>
          <form className={classes.root} noValidate autoComplete="off">
            <Paper className={classes.paper}  elevation={24}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4} sm={6}>
                  <Paper
                    className={classes.paper}
                    onFocus={(e) => setfirstnameFocused(6)}
                    onBlur={(e) => setfirstnameFocused(0)}
                    elevation={firstnamefocused}
                  >
                    {" "}
                    <TextField
                      id="standard-basic"
                      label="First Name"
                      variant="standard"
                      fullWidth
                      required
                      autoFocus
                    ></TextField>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                  {" "}
                  <Paper
                    className={classes.paper}
                    onFocus={(e) => setmiddlenameFocused(6)}
                    onBlur={(e) => setmiddlenameFocused(0)}
                    elevation={middlenamefocused}
                  >
                    <TextField
                      id="standard-basic"
                      label="Middle Name"
                      variant="standard"
                      fullWidth
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                  {" "}
                  <Paper
                    className={classes.paper}
                    onFocus={(e) => setlastnameFocused(6)}
                    onBlur={(e) => setlastnameFocused(0)}
                    elevation={lastnamefocused}
                  >
                    <TextField
                      id="standard-basic"
                      label="Last Name"
                      variant="standard"
                      fullWidth
                      required
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                  {" "}
                  <Paper
                    className={classes.paper}
                    onFocus={(e) => setphonenumberFocused(6)}
                    onBlur={(e) => setphonenumberFocused(0)}
                    elevation={phonenumberfocused}
                  >
                    <InputLabel
                      align="left"
                      htmlFor="formatted-text-mask-input"
                    >
                      Phone Number
                    </InputLabel>
                    <Input
                      // id="standard-basic"
                      // label="Phone Number"
                      // variant="standard"
                      // fullWidth
                      // type="number"
                      // onChange={(e) => setCorrectpno(e.target.value.length != 10)}
                      error={correctpno}
                      // required
                      value={values.textmask}
                      onChange={(ev) => handlePhoneNo(ev)}
                      name="textmask"
                      id="formatted-text-mask-input"
                      inputComponent={TextMaskCustom}
                      fullWidth
                    ></Input>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                  {" "}
                  <Paper
                    className={classes.paper}
                    onFocus={(e) => setemailFocused(6)}
                    onBlur={(e) => setemailFocused(0)}
                    elevation={emailfocused}
                  >
                    <TextField
                      id="standard-basic"
                      label="Email"
                      variant="standard"
                      fullWidth
                      type="email"
                      required
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                  {" "}
                  <Paper
                    className={classes.paper}
                    onFocus={(e) => setgenderFocused(6)}
                    onBlur={(e) => setgenderFocused(0)}
                    elevation={genderfocused}
                  >
                    <TextField
                      id="standard-basic"
                      label="Gender"
                      variant="standard"
                      fullWidth
                      onChange={(e) => setGender(e.target.value)}
                      value={gender}
                      align="left"
                      select
                      required
                    >
                      {gendr.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6} sm={12}>
                  {" "}
                  <Paper
                    className={classes.paper}
                    onFocus={(e) => setaboutFocused(6)}
                    onBlur={(e) => setaboutFocused(0)}
                    elevation={aboutfocused}
                  >
                    <TextField
                      id="outlined-basic"
                      label="About"
                      variant="outlined"
                      fullWidth
                      multiline={true}
                      rows={3}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6} sm={12}>
                  {" "}
                  <Paper
                    className={classes.paper}
                    onFocus={(e) => setlanguagesFocused(6)}
                    onBlur={(e) => setlanguagesFocused(0)}
                    elevation={languagesfocused}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Languages"
                      variant="outlined"
                      fullWidth
                      multiline={true}
                      rows={3}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                  {" "}
                  <Paper
                    className={classes.paper}
                    onFocus={(e) => setcityFocused(6)}
                    onBlur={(e) => setcityFocused(0)}
                    elevation={cityfocused}
                  >
                    <TextField
                      id="standard-basic"
                      label="City"
                      variant="standard"
                      fullWidth
                      required
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                  {" "}
                  <Paper
                    className={classes.paper}
                    onFocus={(e) => setageFocused(6)}
                    onBlur={(e) => setageFocused(0)}
                    elevation={agefocused}
                  >
                    <TextField
                      id="standard-basic"
                      label="Age"
                      variant="standard"
                      fullWidth
                      required
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                  {" "}
                  <Paper
                    className={classes.paper}
                    onFocus={(e) => setdesignationFocused(6)}
                    onBlur={(e) => setdesignationFocused(0)}
                    elevation={designationfocused}
                  >
                    <TextField
                      id="standard-basic"
                      label="Designation"
                      variant="standard"
                      fullWidth
                      required
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                  {" "}
                  <Paper
                    className={classes.paper}
                    onFocus={(e) => setexperienceFocused(6)}
                    onBlur={(e) => setexperienceFocused(0)}
                    elevation={experiencefocused}
                  >
                    <TextField
                      id="standard-basic"
                      label="Experience"
                      variant="standard"
                      fullWidth
                      required
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                  {" "}
                  <Paper
                    className={classes.paper}
                    onFocus={(e) => seteducationFocused(6)}
                    onBlur={(e) => seteducationFocused(0)}
                    elevation={educationfocused}
                  >
                    <TextField
                      id="standard-basic"
                      label="Education"
                      variant="standard"
                      fullWidth
                      required
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                  {" "}
                  <Paper
                    className={classes.paper}
                    onFocus={(e) => setexpertiseFocused(6)}
                    onBlur={(e) => setexpertiseFocused(0)}
                    elevation={expertisefocused}
                  >
                    <TextField
                      id="outlined-basic"
                      label="expertise"
                      variant="outlined"
                      fullWidth
                      multiline={true}
                      rows={3}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                  {" "}
                  <Paper
                    className={classes.paper}
                    onFocus={(e) => setfpsFocused(6)}
                    onBlur={(e) => setfpsFocused(0)}
                    elevation={fpsfocused}
                  >
                    <TextField
                      id="standard-basic"
                      label="Fee per Session"
                      variant="standard"
                      fullWidth
                      required
                    ></TextField>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                  <Paper className={classes.paper} variant="outlined">
                    <div className={classes.flexing}>
                      <div>
                        {/* <Paper className={classes.paper} onFocus={(e)=>setFocused({...focused,[e.target.ID]:1,[e.target.foc]:1})} onBlur={(e)=>setFocused(1,0)} elevation={focused.ID==1 && focused.foc}> */}
                        <Paper
                          className={classes.paper}
                          onFocus={(e) => setispremiumFocused(6)}
                          onBlur={(e) => setispremiumFocused(0)}
                          elevation={ispremiumfocused}
                        >
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
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                            />
                          </div>
                        </Paper>
                      </div>
                     <div style={{width:"1%"}}></div>
                      <div>
                        <Paper
                          className={classes.paper}
                          onFocus={(e) => setisverifiedFocused(6)}
                          onBlur={(e) => setisverifiedFocused(0)}
                          elevation={isverifiedfocused}
                        >
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
                              inputProps={{
                                "aria-label": "secondary checkbox",
                              }}
                            />
                          </div>
                        </Paper>
                      </div>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                  {" "}
                  <Paper
                    className={classes.paper}
                    onFocus={(e) => setpiurlFocused(6)}
                    onBlur={(e) => setpiurlFocused(0)}
                    elevation={piurlfocused}
                  >
                    <TextField
                      id="standard-basic"
                      label="Profile image URL"
                      variant="standard"
                      fullWidth
                      required
                    ></TextField>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </form>
        </List>
      </Dialog>
    </div>
  );
}
