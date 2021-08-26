import React from 'react';
import { CardActions, makeStyles, Typography, Button, CardContent, Card } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        margin: 3,
    },

    leg: {
        minWidth: 268,
        height:300,
        marginLeft: 10,
        marginTop:50
    }
}));

function NearbyRoomsSuggestions() {
    const classes = useStyles();
    return (

                    
            <div className={classes.root} >
            <Typography variant="h4" >Rooms available near you.</Typography>
               <div style={{
                    display: "flex", flexDirection: "row",
                    flexWrap: "wrap"
                }}>

                   <Card className={classes.leg} variant="outlined">
                       <CardContent>

                       </CardContent>
                       <CardActions></CardActions>
                       <Button></Button>
                   </Card>

                   <Card className={classes.leg} variant="outlined">
                       <CardContent>

                       </CardContent>
                       <CardActions>
                           <Button></Button>
                       </CardActions>
                   </Card>

                   <Card className={classes.leg} variant="outlined">
                       <CardContent>

                       </CardContent>
                       <CardActions>
                           <Button></Button>
                       </CardActions>
                   </Card>

                   <Card className={classes.leg} variant="outlined">
                       <CardContent>

                       </CardContent>
                       <CardActions>
                           <Button></Button>
                       </CardActions>
                   </Card>

                   <Card className={classes.leg} variant="outlined">
                       <CardContent>

                       </CardContent>
                       <CardActions></CardActions>
                       <Button></Button>
                   </Card>

                   <Card className={classes.leg} variant="outlined">
                       <CardContent>

                       </CardContent>
                       <CardActions>
                           <Button></Button>
                       </CardActions>
                   </Card>

                   <Card className={classes.leg} variant="outlined">
                       <CardContent>

                       </CardContent>
                       <CardActions>
                           <Button></Button>
                       </CardActions>
                   </Card>

                   <Card className={classes.leg} variant="outlined">
                       <CardContent>

                       </CardContent>
                       <CardActions>
                           <Button></Button>
                       </CardActions>
                   </Card>

                </div>
        </div>
    )
}

export default NearbyRoomsSuggestions
