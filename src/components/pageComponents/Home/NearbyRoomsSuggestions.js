import React from 'react';
import { CardActions, makeStyles, Typography, Button, CardContent, Card } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 2,
        minWidth: 275,
        margin: 0,
    },

    leg: {

        display: 'inlineBlock',
        color: 'white',
        textAlign: 'center',
        marginTop: '1rem',
        textDecoration: 'none',
        width: '20rem',
        height: '23rem'
    }
}));

function NearbyRoomsSuggestions() {
    const classes = useStyles();
    return (


        <div className={classes.root} >
            <Typography variant="h4" >Rooms available near you.</Typography>
            <div style={{
                overflow: 'auto',
                whiteSpace: 'nowrap',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>


                <div style={{ overflowY: 'hidden', display: 'flex' }} class="scrollmenu">
                    <div className={classes.leg} ><Card className={classes.leg} variant="outlined">
                        <CardContent>
                            <Button>click here</Button><Typography>this is typography</Typography>
                        </CardContent>
                        <CardActions></CardActions>
                        <Button></Button>
                    </Card></div>
                    <div className={classes.leg} ><Card className={classes.leg} variant="outlined">
                        <CardContent>

                        </CardContent>
                        <CardActions></CardActions>
                        <Button></Button>
                    </Card></div>
                    <div className={classes.leg} ><Card className={classes.leg} variant="outlined">
                        <CardContent>

                        </CardContent>
                        <CardActions></CardActions>
                        <Button></Button>
                    </Card></div>
                    <div className={classes.leg} ><Card className={classes.leg} variant="outlined">
                        <CardContent>

                        </CardContent>
                        <CardActions></CardActions>
                        <Button></Button>
                    </Card></div>
                    <div className={classes.leg} ><Card className={classes.leg} variant="outlined">
                        <CardContent>

                        </CardContent>
                        <CardActions></CardActions>
                        <Button></Button>
                    </Card></div>
                    <div className={classes.leg} ><Card className={classes.leg} variant="outlined">
                        <CardContent>

                        </CardContent>
                        <CardActions></CardActions>
                        <Button></Button>
                    </Card></div>

                    <div className={classes.leg} ><Card className={classes.leg} variant="outlined">
                        <CardContent>
                            <Button>See More</Button>
                        </CardContent>
                        <CardActions></CardActions>
                        <Button></Button>
                    </Card></div>

                </div>


            </div>
        </div>
    )
}

export default NearbyRoomsSuggestions
