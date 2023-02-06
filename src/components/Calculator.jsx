import { React, useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(15),
  },
  textField: {
    marginRight: theme.spacing(2),
  },
  button: {
    "&:hover": {
      background: "#3f5178",
      color: "white",
    },
  },
  Typography: {
    marginTop: theme.spacing(2),
  },
}));


export default function Calculator() {
  const [answer, setAnswer] = useState();
  const [str, setStr] = useState();

  const classes = useStyles();

  const handleCalculate = (str) => {
    setAnswer(eval(str));
  };

  return (
    <Container className={classes.root}>
        <Typography variant="body1" gutterTop>
        Note: use only <br></br><b>
            + Addition<br></br> 
            - substraction<br></br> 
            * Multiplication<br></br> 
            / Division
            </b>
      </Typography>
      <TextField
        id="standard-basic"
        label="Text Box"
        className={classes.textField}
        onChange={(e) => setStr(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => handleCalculate(str)}
      >
        Calculate
      </Button>
      <Typography variant="body1" gutterBottom>
        {answer}
      </Typography>
    </Container>
  );
}
