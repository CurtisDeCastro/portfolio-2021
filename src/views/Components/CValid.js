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

import SectionCarousel from "views/Components/Sections/SectionCarousel.js"


// sections for this page
import CurtisHeaderLinks from "components/Header/CurtisHeaderLinks.js";
import CanvasJSReact from "/Users/curtiscastro/work/Projects/portfolio-2021/src/components/canvasjs-3.4.1/canvasjs.react.js"
import LineChart from "/Users/curtiscastro/work/Projects/portfolio-2021/src/components/LineChart/LineChart.js";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

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

const IntCam = styled.iframe`
  margin: 0 auto;
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
        color="danger"
        changeColorOnScroll={{
          height: 400,
          color: "transparent",
        }}
        {...rest}
      />

      <UnderHeaderSpacer />

      <div className={classes.container}>

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              {/* <div className={classNames(classes.container)}> */}
                <YoutubeVideo
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/yNr1lnrxDro"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
                </YoutubeVideo>
              {/* </div> */}
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>Event Data</small>
              </h3>
              <CustomTabs
                headerColor="danger"
                tabs={[
                  {
                    tabName: "Int. Cam",
                    tabIcon: Camera,
                    tabContent: (
                      <YoutubeVideo
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/cCu2_6WKeUQ"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      >
                      </YoutubeVideo>
                    ),
                  },
                  {
                    tabName: "Location",
                    tabIcon: LocationOn,
                    tabContent: (
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.1074166339654!2d-122.53060660000001!3d37.99795490000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808599d13914ca07%3A0x160ed297b5691974!2sCounty%20of%20Marin!5e0!3m2!1sen!2sus!4v1631684737994!5m2!1sen!2sus"
                        width="100%"
                        height="250px"
                        allowfullscreen=""
                        loading="lazy"
                      ></iframe>
                    ),
                  },
                  {
                    tabName: "Speed",
                    tabIcon: Speed,
                    tabContent: (
                      <LineChart />
                    ),
                  },
                  {
                    tabName: "Queue",
                    tabIcon: Subscriptions,
                    tabContent: (
                      <SectionCarousel />
                    ),
                  },
                ]}
              />
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
                    <p className={classes.textCenter}>
                      I think that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at. So when you get something that has
                      the name Kanye West on it, it’s supposed to be pushing
                      the furthest possibilities. I will be the leader of a
                      company that ends up being worth billions of dollars,
                      because I got the answers. I understand culture. I am
                      the nucleus.
                    </p>
                  ),
                },
                {
                  tabName: "Comments",
                  tabContent: (
                    <p className={classes.textCenter}>
                      I think that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at. I will be the leader of a company
                      that ends up being worth billions of dollars, because I
                      got the answers. I understand culture. I am the nucleus.
                      I think that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at.
                    </p>
                  ),
                },
                {
                  tabName: "Status",
                  tabContent: (
                    <p className={classes.textCenter}>
                      think that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at. So when you get something that has
                      the name Kanye West on it, it’s supposed to be pushing
                      the furthest possibilities. I will be the leader of a
                      company that ends up being worth billions of dollars,
                      because I got the answers. I understand culture. I am
                      the nucleus.
                    </p>
                  ),
                },
              ]}
            />

          <Footer />

      </div>
    </div>
  );
}
