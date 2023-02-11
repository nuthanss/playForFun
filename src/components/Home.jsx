import React, { useMemo } from "react";
import Cardo from "./Cardo";
import { Container, Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor:theme.palette.grey[100],
        paddingTop: theme.spacing(10)
    },
    cardGrid: {
        justifyContent: "center",
    },
}));

export default function Home() {
    const classes = useStyles();
    let navigate = useNavigate();

    const searchMessage = useSelector(({ searchFilter }) => searchFilter.search);

    const gamesObj = [
        { game: "Flames", img: "flames.png" },
        { game: "TicTacToe", img: "tictactoe.png" },
        { game: "Memory-Game", img: "memory-game.png" },
        { game: "Ask-Me", img: "ask-me.png" },
        { game: "Calender", img: "calender.png" },
        { game: "Task Manager", img: "task-manager.jpg" },
        { game: "News Today", img: "news-today.jpg" },
        { game: "Calculator", img: "calculator.png" },
        { game: "Math-Challenger", img: "calculator.png" },
    ];

    const filteredGames = useMemo(() => {
        return gamesObj.filter((g) => {
            return g.game.toLowerCase().includes(searchMessage.toLowerCase());
        });
    });

    function NavigateToGamePage(game) {
        let gameValue = game.toLowerCase();
        navigate(`/${gameValue}`);
    }

    return (
        <Container className={classes.root}>
            <Grid container spacing={3}>
                {filteredGames.map((games) => (
                    <Grid item key={games.game} xs={6} sm={4} md={3}>
                        <Cardo gamesObj={games} NavigateToGamePage={NavigateToGamePage} />
                    </Grid>

                ))}
            </Grid>
        </Container>
    );
}
