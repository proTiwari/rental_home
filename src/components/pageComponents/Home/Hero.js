import React from "react";
import CardContent from "@material-ui/core/CardContent";
import { Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { alpha, makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import SearchBar from "../../molecules/searchBar";
import d from "../../../images/d.svg";
import family from "../../../images/family.png"

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
    height: "88vh",
    paddingTop: 50,
  },
}));

function Hero(props) {
  const classes = useStyles();

  return (
    <div height="100%" width="100%">
      <Card
        className={classes.root}
        style={{
          backgroundImage: `url(${d})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          class: "responsive",
        }}
      >
        <div
          elevation={0}
          className={classes.root}
          style={{
            backgroundImage: `url(${family})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            class: "responsive",
          }}
        >
          <CardContent style={{ paddingTop: "5rem", paddingBottom: "0rem" }}>
            <Typography
              style={{ paddingRight: "0rem", color: "white" }}
              variant="h5"
            >
              Search location where you want a Room/Home on rent
            </Typography>

            <AppContainer>
              <SearchBar />
            </AppContainer>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

export default Hero;
