import React from "react";
import CardContent from "@material-ui/core/CardContent";
import {Paper, Typography} from "@material-ui/core";
import {alpha, makeStyles} from "@material-ui/core/styles";
import SearchBar from "../../molecules/searchBar/SearchBar";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        margin: 10,
        height: "fit-content",
        padding: 10
    },
}));

function Hero(props) {
    const classes = useStyles();

    return (
        <>
            <Paper elevation={0} className={classes.root}>
                <CardContent style={{ margin: '0rem' }} >
                    <Typography variant='h6'>
                        Search location where you want a room/flat on rent
                        <SearchBar />
                    </Typography>

                </CardContent>
            </Paper>
        </>
    );
}

export default Hero