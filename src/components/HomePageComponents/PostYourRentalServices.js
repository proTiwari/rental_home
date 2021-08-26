import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        margin: 5,
        height: 400
        }}));

function PostYourRentalServices() {

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
                    <Button variant="contained" color="secondary">
                       post your rental service here
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default PostYourRentalServices
