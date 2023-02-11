import React from 'react'
import { Grid, Card, CardContent, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
    typo: {
        fontSize: 14,
        fontFamily: 'Raleway, Arial',
        fontWeight: 500,
        textAlign: "center",

    },
    cardContent: {
        justifyContent: "center"
    },
    cardo: {
        backgroundColor: red[200],
        width: "190px"
    }
}))

export default function Cardo({ gamesObj, NavigateToGamePage }) {

    const classes = useStyles();

    function moveToGame(game) {
        NavigateToGamePage(game);
    }


    return (
        <Card className={classes.cardo} onClick={moveToGame.bind(this, gamesObj.game)}>
            <CardContent className={classes.cardContent}>
                <Box component="img" src={`/assets/images/${gamesObj.img}`} style={{ width: 160, height: 200, marginRight: 10 }} />
                <Typography className={classes.typo}><b>{gamesObj.game}</b></Typography>
            </CardContent>
        </Card>
    )
}
