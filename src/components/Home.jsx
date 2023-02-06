import React from 'react'
import Cardo from './Cardo'
import { Container, Grid } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import background from '../components/TicTacToe/website-background.gif'

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor:theme.palette.grey[100],
        paddingTop: theme.spacing(10),
        backgroundImage: `url(${background})`
    },
    cardGrid:{
        justifyContent:"center"
    }
}))

export default function Home() {
    const classes = useStyles();
    let navigate = useNavigate();
    const gamesObj = [{ "game": 'Flames', "img": "flames.png" },
    { "game": 'TicTacToe', "img": "tictactoe.png" },
    { "game": 'Memory-Game', "img": "memory-game.png" },
    { "game": 'Ask-Me', "img": "ask-me.png" },
    { "game": 'Calender', "img": "calender.png" },
    { "game": 'Task Manager', "img": "task-manager.jpg" },
    { "game": 'News Today', "img": "news-today.jpg" },
    { "game": 'Calculator', "img": "calculator.png" },
    { "game": 'Math-Challenger', "img": "calculator.png" },
    ]

    function NavigateToGamePage(game) {
        let gameValue = game.toLowerCase();
        navigate(`/${gameValue}`);
    }

    return (
        <Container className={classes.root}>
            <Grid className={classes.cardGrid} container spacing={3} item xs={13}>
                {
                    gamesObj.map((games) => <Cardo gamesObj={games} NavigateToGamePage={NavigateToGamePage} />)
                }
            </Grid>

        </Container>
    )
}


