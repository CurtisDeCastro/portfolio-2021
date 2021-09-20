import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import ChartistGraph from "react-chartist";
import {
  roundedLineChart,
  straightLinesChart,
  simpleBarChart,
  colouredLineChart,
  multipleBarsChart,
  colouredLinesChart,
  pieChart,
} from "/Users/curtiscastro/work/Projects/portfolio-2021/src/views/Components/Sections/variables/charts.js";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import Subscriptions from "@material-ui/icons/Subscriptions";
import Camera from "@material-ui/icons/Camera";
import Speed from "@material-ui/icons/Speed";
import LocationOn from "@material-ui/icons/LocationOn";
import EmojiPeople from "@material-ui/icons/EmojiPeople";
import Timeline from "@material-ui/icons/Timeline";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import LineChart from "/Users/curtiscastro/work/Projects/portfolio-2021/src/components/LineChart/LineChart.js";
import SectionCarousel from "views/Components/Sections/SectionCarousel.js";

import Card from "/Users/curtiscastro/work/Projects/portfolio-2021/src/components/Card/Card.js";
import CardHeader from "/Users/curtiscastro/work/Projects/portfolio-2021/src/components/Card/CardHeader.js";
import CardIcon from "/Users/curtiscastro/work/Projects/portfolio-2021/src/components/Card/CardIcon.js";
import CardBody from "/Users/curtiscastro/work/Projects/portfolio-2021/src/components/Card/CardBody.js";
import CardFooter from "/Users/curtiscastro/work/Projects/portfolio-2021/src/components/Card/CardFooter.js";



import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
import styled from "styled-components";


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

const ToolBarHeaderText = styled.h4`
  margin: 0;
`;

const useStyles = makeStyles(styles);

export default function ToolAccelerometer() {
  LineChart.containerProps = { width: "93%", display: "grid" };
  const classes = useStyles();

  return (
    <GridContainer>
      <GridItem xs={12}>
        <ToolBarHeader>
          ACCELEROMETER
        </ToolBarHeader>
      </GridItem>
      <GridItem xs={12}>
        <ToolBarContent>
          <CardBody>
            <ChartistGraph
              data={colouredLinesChart.data}
              type="Line"
              options={colouredLinesChart.options}
              listener={colouredLinesChart.animation}
            />
          </CardBody>
        </ToolBarContent>
      </GridItem>
    </GridContainer>
  );
}
