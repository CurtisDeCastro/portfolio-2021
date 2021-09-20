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
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";

// import CanvasJSReact from "/Users/curtiscastro/work/Projects/portfolio-2021/src/components/canvasjs-3.4.1/canvasjs.react.js";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
import LocationOn from "@material-ui/icons/LocationOn";
import Speed from "@material-ui/icons/Speed";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Subscriptions from "@material-ui/icons/Subscriptions";
import Camera from "@material-ui/icons/Camera";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


// Curtis' custom components




// sections for this page
import CurtisHeaderLinks from "components/Header/CurtisHeaderLinks.js";
import CanvasJSReact from "/Users/curtiscastro/work/Projects/portfolio-2021/src/components/canvasjs-3.4.1/canvasjs.react.js"
import LineChart from "/Users/curtiscastro/work/Projects/portfolio-2021/src/components/LineChart/LineChart.js";
import SectionCarousel from "views/Components/Sections/SectionCarousel.js";
import XSectionToolbar from "views/Components/Sections/XSectionToolbar.js";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

import styles from "assets/jss/material-kit-react/views/components.js";

import styled from "styled-components";


const useStyles = makeStyles(styles);

const ExtCam = styled.iframe`
  margin: 0px auto;
  width: 100%;
  aspect-ratio: 16 / 9;
`;

const MainVideoDisplay = styled.div`
  color: grey;
  background: white;
  border-radius: 5px;
  width: 100%;
  padding: 15px;
  box-shadow: 1px 2px 1px grey;
  min-height: 440px;
`;

const TitleText = styled.h3`
  margin: 0;
  font-size: .8em;
  line-height: 1em;
  padding-bottom: 4px;
`;

const TitleMetaData = styled.p`
  margin: 0;
  font-size: .8em;
  line-height: 1em;
`;

export default function XSectionVideoPlayer(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <GridContainer>
      <GridItem xs={12}>
        <MainVideoDisplay>
          <TitleText>
            <strong>VIDEO TITLE</strong>
          </TitleText>
          <ExtCam
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yNr1lnrxDro"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></ExtCam>
          <TitleMetaData>
              Driver:<br></br>
              Vehicle ID:<br></br>
              Incident Date/Time:<br></br>
              Auto-Tags:
          </TitleMetaData>
        </MainVideoDisplay>
      </GridItem>
    </GridContainer>
  );
}
