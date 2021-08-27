import React from "react";
import CardContent from "@material-ui/core/CardContent";
import {Paper, Typography} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import {alpha, makeStyles} from "@material-ui/core/styles";
import SearchBar from "../../molecules/searchBar/SearchBar";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 155,
        margin: 10,
        height: "fit-content",
        paddingTop: 50,
        
        
    },
}));

function Hero(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>

            <Paper elevation={0} className={classes.root}>
                <CardContent style={{ paddingTop: '0rem',  paddingBottom: '0rem'}} >
                    <Typography style={{paddingRight: '0rem'}} variant='3vh'>
                        Search location where you want a room/flat on rent
                        
                    </Typography>
                        <SearchBar />
                </CardContent>
            </Paper>
        </Card>
    );
}

export default Hero