import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { Label } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(15)
    },
    textField: {
        marginRight: theme.spacing(2),
    },
    button: {
        '&:hover': {
            background: '#3f5178',
            color: 'white'
        }
    },
    Typography: {
        marginTop: theme.spacing(2),
    },
}));

export default function AskMe() {
    const classes = useStyles();

    const [answer, setanswer] = useState('');

    function handleAskMe() {
        fetch('http://localhost:5000/answers')
            .then(res => res.json())
            .then(data => {
                const i = Math.floor(Math.random() * 10);
                setanswer(data[i]);
            });
    }

    return (
        <Container className={classes.root}>
            <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Text Box" className={classes.textField} />
                <Button variant="contained" color="primary" className={classes.button} onClick={handleAskMe}>Ask</Button>
            </form><br></br>
            <Typography variant="body1" gutterBottom>{answer}</Typography>
        </Container>
    );

}
