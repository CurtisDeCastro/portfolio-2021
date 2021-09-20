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


import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
import styled from "styled-components";

const Location = styled.iframe`
  border: none;
  height: 93%;
  width: 93%;
`;

const ToolBarHeader = styled.div`
  background: #f44336;
  border-radius: 5px 5px 0 0;
  box-shadow: 1px 2px 1px grey;
  height: 30px;
  width: 100%;
  color: white;
  text-align: center;
`;

const ToolBarContent = styled.div`
  color: grey;
  // background: #555555;
  background: white;
  border-radius: 0 0 5px 5px;
  box-shadow: 1px 2px 1px grey;
  width: 100%;
  height: 410px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const useStyles = makeStyles(styles);

export default function ToolLocation() {
  LineChart.containerProps = { width: "93%", display: "grid" };
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12}>
        <ToolBarHeader>
          INCIDENT LOCATION
        </ToolBarHeader>
      </GridItem>
      <GridItem xs={12}>
        <ToolBarContent>
          <Location
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.1074166339654!2d-122.53060660000001!3d37.99795490000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808599d13914ca07%3A0x160ed297b5691974!2sCounty%20of%20Marin!5e0!3m2!1sen!2sus!4v1631684737994!5m2!1sen!2sus"
            width="100%"
            allowfullscreen=""
            loading="lazy"
          ></Location>
        </ToolBarContent>
      </GridItem>
    </GridContainer>
  );
}
