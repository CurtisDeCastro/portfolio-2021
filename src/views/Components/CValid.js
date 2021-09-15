import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import CurtisHeader from "components/Header/CurtisHeader.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import CurtisHeaderLinks from "components/Header/CurtisHeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/components.js";

import styled from "styled-components";


const useStyles = makeStyles(styles);

const ContentBox = styled.div`
  height: 3500px;
  background: pink;
`;

const UnderHeaderSpacer = styled.div`
  height: 70px;
  border: 3px dotted red;
`;

const YoutubeVideo = styled.iframe`
  margin: 15px auto;
`;

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div className={classes.section}>

      <Header
        brand="Curtis de Castro"
        rightLinks={<CurtisHeaderLinks />}
        fixed
        color="dark"
        changeColorOnScroll={{
          height: 400,
          color: "transparent",
        }}
        {...rest}
      />

      <UnderHeaderSpacer />

      <div className={classes.container}>

          <YoutubeVideo
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yNr1lnrxDro"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </YoutubeVideo>

          <Footer />

      </div>
    </div>
  );
}
