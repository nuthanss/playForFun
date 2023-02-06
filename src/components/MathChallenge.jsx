import { React, useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { spacing } from "@mui/system";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(15),
    },
    TextField: {
        marginTop: theme.spacing(5),
    },
    button: {
        marginLeft: theme.spacing(2),
        "&:hover": {
            background: "#3f5178",
            color: "white",
        },
    },
    Typography: {
        marginLeft: theme.spacing(2),
    },
    GridBox: {
        marginTop: theme.spacing(2),
        justifyContent: "center",
        alignItems: "center",
    },
}));

export default function MathChallenge() {
    const [systemAnswer, setSystemAnswer] = useState();
    const [score, setscore] = useState(0);
    const [isReset, setisReset] = useState(false);

    const [userAnswer, setUserAnswer] = useState();
    const [time, setTime] = useState(10);
    const [isStarted, setIsStarted] = useState(false);

    const [firstNum, setfirstNum] = useState("?");
    const [secNum, setSecNum] = useState("?");
    const [isDisabled, setisDisabled] = useState(false);

    const classes = useStyles();

    const Timer = () => {
        let count = 10;
        const interval = setInterval(function () {
            count--;
            setTime(count);
            if (count === 0) {
                setisDisabled(true);
                clearInterval(interval);
                setTimeout(function () {
                    setisReset(true);
                    setisDisabled(false);
                }, 3000);
            }
        }, 1000);
    };

    const handleCalculate = (e) => {
        if (e.target.innerHTML == "Start") {
            Timer()
            setIsStarted(true);
        }
        else if (e.target.innerHTML == "Next") {
            let sysAnswer = firstNum + secNum;
            console.log(`sysAnswer:  ${firstNum} + ${secNum} = ${sysAnswer}`);
            console.log(`userAnswer: ${firstNum} + ${secNum} = ${userAnswer}`);

            if (sysAnswer == userAnswer) {
                setscore((score) => {
                    return score + 1;
                }
                );
            }
        } else if (e.target.innerHTML == "Reset") {
            setisReset(false);
            setIsStarted(false);
            setscore("");
            setfirstNum("?");
            setSecNum("?");
        }
        if (!isStarted || (e.target.innerHTML == "Next")) {
            setUserAnswer("");
            setfirstNum(Math.floor(Math.random() * 10));
            setSecNum(Math.floor(Math.random() * 10));

        }



    };

    const handleNext = () => {

    }


    return (
        <Container className={classes.root}>
            <Typography variant="body1" className={classes.Typography}>
                {time} secs left!
            </Typography>
            <Typography>
                score: {score}
            </Typography>

            <Grid className={classes.GridBox} container spacing={5} item xs={13}>
                <Typography variant="body1" className={classes.Typography}>
                    {firstNum}
                </Typography>
                <Typography variant="body1" className={classes.Typography}>
                    +
                </Typography>

                <Typography variant="body1" className={classes.Typography}>
                    {secNum}
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={(e) => handleCalculate(e)}
                    disabled={isDisabled}
                >

                    {isReset ? "Reset" : isStarted ? "Next" : "Start"}
                </Button>
            </Grid>
            <TextField
                className={classes.TextField}
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Type answer here..."
                disabled={isReset || !isStarted || isDisabled}
            >

            </TextField>

            <Typography variant="body1" gutterBottom></Typography>
        </Container >
    );
}
