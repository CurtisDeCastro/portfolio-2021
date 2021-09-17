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




// sections for this page
import CurtisHeaderLinks from "components/Header/CurtisHeaderLinks.js";
import CanvasJSReact from "/Users/curtiscastro/work/Projects/portfolio-2021/src/components/canvasjs-3.4.1/canvasjs.react.js"
import LineChart from "/Users/curtiscastro/work/Projects/portfolio-2021/src/components/LineChart/LineChart.js";
import SectionCarousel from "views/Components/Sections/SectionCarousel.js";
import SectionPills from "views/Components/Sections/SectionPills.js"

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

import styles from "assets/jss/material-kit-react/views/components.js";

import styled from "styled-components";


const useStyles = makeStyles(styles);

const CenteredContent = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UnderHeaderSpacer = styled.div`
  height: 70px;
  border: 3px dotted red;
`;

const ExtCam = styled.iframe`
  margin: 0px auto;
  width: 100%;
  aspect-ratio: 16 / 9;
`;

const IntCam = styled.iframe`
  width: 70%;
  aspect-ratio: 16 / 9;
`;

const MainVideoDisplay = styled.div`
  color: grey;
  background: white;
  border-radius: 5px;
  width: 100%;
  margin: 0;
  padding: 15px;
  box-shadow: 1px 2px 1px grey;
  // max-height: 80px;
`;

const TitleText = styled.h3`
  margin: 0;
  font-size: .8em;
  line-height: 1em;
  padding-bottom: 4px;
`;

const TitleMetaData = styled.p`
  margin: 0;
  font-size: .6em;
  line-height: 1em;
`;

const ActionItemBoxStatic = styled.div`
  background: white;
  border-radius: 5px;
  min-height: 100px;
  width: 100%;
  margin: 0;
`;

const ActionItemBoxVariable = styled.div`
  background: white;
  border-radius: 5px;
  min-height: 100px;
  y-overflow: autoscroll;
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

          <GridContainer>

            <GridItem xs={12} sm={12} md={7}>
              <h3>
                <small>Exterior Camera</small>
              </h3>
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
                  >
                  </ExtCam>
                  <TitleMetaData>
                      Driver:<br></br>
                      Vehicle ID:<br></br>
                      Incident Date/Time:<br></br>
                      Auto-Tags:
                  </TitleMetaData>
                  </MainVideoDisplay>
                </GridItem>

              </GridContainer>

            </GridItem>

            <GridItem xs={12} sm={12} md={5}>
                  <SectionPills/>
            </GridItem>

          </GridContainer>
            <h3>
              <small>Action Items</small>
            </h3>
            <CustomTabs
              plainTabs
              headerColor="danger"
              tabs={[
                {
                  tabName: "Tags",
                  tabContent: (
                    <ActionItemBoxStatic/>
                  ),
                },
                {
                  tabName: "Comments",
                  tabContent: (
                    <ActionItemBoxVariable/>
                  ),
                },
                {
                  tabName: "Status",
                  tabContent: (
                    <ActionItemBoxStatic/>
                  ),
                },
              ]}
            />

          <Footer />

      </div>
    </div>
  );
}
