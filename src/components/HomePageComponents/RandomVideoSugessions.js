import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import Footer from './Footer';


const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        margin: 3,
        height: 805
    },

    leg: {
        minWidth: 268,
        height:400,
        marginLeft: 10,
        marginTop:50
    }
}));

function RandomVideoSugessions() {
    const classes = useStyles();
    return (
        <div>

                    
            <div style={{ margin: "3rem" }} className={classes.root} variant="outlined">
                <br/><br/>
            <Typography variant="h4" >Some of our latest rental services</Typography>
            <br/>
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
                    <Footer />

                </div>
                <br /><br />
            </div>
        </div>
    )
}

export default RandomVideoSugessions
