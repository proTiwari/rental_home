import React from "react";
import CardContent from "@material-ui/core/CardContent";
import { Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { alpha, makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import SearchBar from "../../molecules/searchBar";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3em;
  margin-bottom: 8em;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 155,
    margin: 0,
    height: "fit-content",
    paddingTop: 50,
  },
}));

function Hero(props) {
  const classes = useStyles();

  return (
    <div>
      <Card
        className={classes.root}
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1600244887665-65c86a4e25ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100em 60em",
          class: "responsive",
        }}
      >
        <div elevation={0} className={classes.root}>
          <CardContent style={{ paddingTop: "0rem", paddingBottom: "0rem" }}>
            <Typography
              style={{ paddingRight: "0rem", color: "white" }}
              variant="h5"
            >
              Search location where you want a Room/Home on rent
            </Typography>
            {/* <AutoComplete /> */}
            <AppContainer >
              <SearchBar />
            </AppContainer>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

export default Hero;
