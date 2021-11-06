import React from 'react';
import { CardActions, makeStyles, Typography, Button, CardContent, Card } from '@material-ui/core';

const useStyles = makeStyles((theme) =>({ 
    root: {
        minWidth: 155,
        margin: 0,
        height: "88vh",
        paddingTop: 50,
        }
    
}) )

function Upload_rental_service_component() {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Button></Button>
              </CardContent>
              <CardActions></CardActions>
              <Button></Button>
            </Card>
        </div>
    )
}

export default Upload_rental_service_component
