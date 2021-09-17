import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import Subscriptions from "@material-ui/icons/Subscriptions";
import Camera from "@material-ui/icons/Camera";
import Speed from "@material-ui/icons/Speed";
import LocationOn from "@material-ui/icons/LocationOn";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import LineChart from "/Users/curtiscastro/work/Projects/portfolio-2021/src/components/LineChart/LineChart.js";
import SectionCarousel from "views/Components/Sections/SectionCarousel.js";


import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
import styled from "styled-components";

const CenteredContent = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ExtCam = styled.iframe`
  margin: 0px auto;
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
`;

const IntCam = styled.iframe`
  aspect-ratio: 16 / 9;
  border: none;
`;

const Location = styled.iframe`
  height: 300%;
  border: none;
`;

const ToolBarContent = styled.div`
  color: grey;
  background: black;
  border-radius: 5px;
  box-shadow: 1px 2px 1px grey;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChartWrapper = styled.div`
  color: grey;
  background: black;
  border-radius: 5px;
  box-shadow: 1px 2px 1px grey;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30%;
  aspect-ratio: 16 / 9;
`;

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div id="navigation-pills">
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <NavPills
              color="danger"
              horizontal={{
                tabsGrid: { xs: 12, sm: 3, md: 3 },
                contentGrid: { xs: 12, sm: 9, md: 9},
              }}
              tabs={[
                {
                  tabButton: "Int. Cam",
                  tabIcon: Camera,
                  tabContent: (
                    <ToolBarContent>
                      <IntCam
                        src="https://www.youtube.com/embed/cCu2_6WKeUQ"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      >
                      </IntCam>
                    </ToolBarContent>
                  ),
                },
                {
                  tabButton: "Location",
                  tabIcon: LocationOn,
                  tabContent: (
                    <ToolBarContent>
                      <Location
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.1074166339654!2d-122.53060660000001!3d37.99795490000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808599d13914ca07%3A0x160ed297b5691974!2sCounty%20of%20Marin!5e0!3m2!1sen!2sus!4v1631684737994!5m2!1sen!2sus"
                        width="100%"
                        allowfullscreen=""
                        loading="lazy"
                      ></Location>
                    </ToolBarContent>
                  ),
                },
                {
                  tabButton: "Speed",
                  tabIcon: Speed,
                  tabContent: (
                    <ChartWrapper>
                      <LineChart />
                    </ChartWrapper>
                  ),
                },
                {
                  tabButton: "Queue",
                  tabIcon: Subscriptions,
                  tabContent: (
                    <ToolBarContent>
                      <SectionCarousel />
                    </ToolBarContent>
                  ),
                },
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
