import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        margin: 5,
        height: 400
    }
}));

function RandomVideoSugessions() {
    const classes = useStyles();
    return (
        <div>
             <Card className={classes.root} variant="outlined">
                <CardContent style={{ margin: '0rem' }} >
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                   
                </CardContent>
            </Card>
        </div>
    )
}

export default RandomVideoSugessions
