
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons
import Favorite from "@material-ui/icons/Favorite";
import ChatBubble from "@material-ui/icons/ChatBubble";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Danger from "components/Typography/Danger.js";

import styled from "styled-components";

import christian from "assets/img/faces/christian.jpg";

import cardsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";

const Thumbnail = styled.iframe`
  aspect-ratio: 16 / 9;
  border: none;
  width: 100%;
`;

const style = {
  ...cardsStyle
};
style.marginTop = "5px";
style.marginBottom = "5px";

const useStyles = makeStyles(style);

export default function CardTrending() {
  const classes = useStyles();
  return (
    <Card>
      <CardBody>
        <Danger>
          <h6 className={classes.cardCategory}>TRENDING</h6>
        </Danger>
        <Thumbnail
          src="https://www.youtube.com/embed/0Yf-5B7uai0?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
        ></Thumbnail>
      </CardBody>
      <CardFooter>
        <div className={classes.author}>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img
              src={christian}
              alt="..."
              className={`${classes.imgRaised} ${classes.avatar}`}
            />
            <span>Lord Alex</span>
          </a>
        </div>
        <div className={`${classes.stats} ${classes.mlAuto}`}>
          <Favorite />
          345 ·
          <ChatBubble />
          45
        </div>
      </CardFooter>
    </Card>
  );
}