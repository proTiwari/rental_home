import React from "react";
import {
  CardActions,
  makeStyles,
  Typography,
  Button,
  CardContent,
  Card,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 0,
    minWidth: 275,
    margin: 0,
  },

  leg: {
    marginTop: "auto",
    display: "inlineBlock",
    color: "white",
    textAlign: "center",
    marginTop: "0rem",
    textDecoration: "none",
    width: "20rem",
    height: "23rem",
  },
}));

function Nearby_Room_suggestion_component() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div
        style={{
          overflow: "auto",
          whiteSpace: "nowrap",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{ overflowY: "hidden", display: "flex" }}
          class="scrollmenu"
        >
          <div className={classes.leg}>
            <Card className={classes.leg} variant="outlined">
              <CardContent>
                <Button>click here</Button>
                <Typography>this is typography</Typography>
              </CardContent>
              <CardActions></CardActions>
              <Button></Button>
            </Card>
          </div>
          <div className={classes.leg}>
            <Card className={classes.leg} variant="outlined">
              <CardContent></CardContent>
              <CardActions></CardActions>
              <Button></Button>
            </Card>
          </div>
          <div className={classes.leg}>
            <Card className={classes.leg} variant="outlined">
              <CardContent></CardContent>
              <CardActions></CardActions>
              <Button></Button>
            </Card>
          </div>
          <div className={classes.leg}>
            <Card className={classes.leg} variant="outlined">
              <CardContent></CardContent>
              <CardActions></CardActions>
              <Button></Button>
            </Card>
          </div>
          <div className={classes.leg}>
            <Card className={classes.leg} variant="outlined">
              <CardContent></CardContent>
              <CardActions></CardActions>
              <Button></Button>
            </Card>
          </div>
          <div className={classes.leg}>
            <Card className={classes.leg} variant="outlined">
              <CardContent></CardContent>
              <CardActions></CardActions>
              <Button></Button>
            </Card>
          </div>

          <div className={classes.leg}>
            <Card className={classes.leg} variant="outlined">
              <CardContent>
                <Button>See More</Button>
              </CardContent>
              <CardActions></CardActions>
              <Button></Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nearby_Room_suggestion_component;
