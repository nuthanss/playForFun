import React from 'react'
import { Grid, Card, CardContent, Typography } from '@material-ui/core'
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
    cardo:{
        backgroundColor: red[200],
        width: "200px"
    }
}))

export default function Cardo({ gamesObj, NavigateToGamePage }) {

    const classes = useStyles();

    function moveToGame(game) {
        NavigateToGamePage(game);
    }


    return (
        <Grid item sm={3}>
            <Card className={classes.cardo} onClick={moveToGame.bind(this, gamesObj.game)}>
                <CardContent className={classes.cardContent}>
                    <img src={`/assets/images/${gamesObj.img}`}
                        width='160px' height='200px'
                        style={{ marginRight: "10px" }}></img>
                    <Typography className={classes.typo}><b>{gamesObj.game}</b></Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
