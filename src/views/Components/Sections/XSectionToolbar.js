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
import EmojiPeople from "@material-ui/icons/EmojiPeople";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import LineChart from "/Users/curtiscastro/work/Projects/portfolio-2021/src/components/LineChart/LineChart.js";
import SectionCarousel from "views/Components/Sections/SectionCarousel.js";

// Curtis' custom components
import ToolLocation from '../Tools/ToolLocation/ToolLocation.js';
import ToolIntCam from '../Tools/ToolIntCam/ToolIntCam.js';
import ToolAccelerometer from '../Tools/ToolAccelerometer/ToolAccelerometer.js';
import ToolEventQueue from '../Tools/ToolEventQueue/ToolEventQueue.js';
import ToolDriver from '../Tools/ToolDriver/ToolDriver.js';


import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
import styled from "styled-components";

const useStyles = makeStyles(styles);

export default function XSectionToolbar() {
  LineChart.containerProps = { width: "93%", display: "grid" };
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div id="navigation-pills">
        <NavPills
          color="danger"
          horizontal={{
            tabsGrid: { xs: 3, sm: 3, md: 3 },
            contentGrid: { xs: 9, sm: 9, md: 9},
          }}
          tabs={[
            {
              tabButton: "",
              tabIcon: Camera,
              tabContent: (
                <ToolIntCam />
              ),
            },
            {
              tabButton: "",
              tabIcon: LocationOn,
              tabContent: (
                <ToolLocation />
              ),
            },
            {
              tabButton: "",
              tabIcon: Speed,
              tabContent: (
                <ToolAccelerometer />
              ),
            },
            {
              tabButton: "",
              tabIcon: Subscriptions,
              tabContent: (
                <ToolEventQueue />
              ),
            },
            {
              tabButton: "",
              tabIcon: EmojiPeople,
              tabContent: (
                <ToolDriver />
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
