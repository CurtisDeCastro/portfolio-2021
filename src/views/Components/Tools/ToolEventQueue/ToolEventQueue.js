import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import LineChart from "/Users/curtiscastro/work/Projects/portfolio-2021/src/components/LineChart/LineChart.js";
import SectionCarousel from "views/Components/Sections/SectionCarousel.js";

import Button from "components/CustomButtons/Button.js";
import CardTrending from "./CardTrending.js";

import Card from "/Users/curtiscastro/work/Projects/portfolio-2021/src/components/Card/Card.js";
import CardBody from "/Users/curtiscastro/work/Projects/portfolio-2021/src/components/Card/CardBody.js";


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

const ToolBarHeaderText = styled.h4`
  margin: 0;
`;

const ToolBarContent = styled.div`
  color: grey;
  // background: #555555;
  background: white;
  border-radius: 0 0 5px 5px;
  box-shadow: 1px 2px 1px grey;
  width: 100%;
  height: 410px;
  padding: 10px;
  // display: flex;
  // align-items: center;
  // justify-content: center;
`;

const Controller = styled.div`
  // border: 2px solid red;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const ControllerText = styled.div`
  margin: 0 auto;
  display: flex;
  height: 100%;
  position-content: center;
  justify-content: center;
  align-text: center;
  align-items: center;
`;

const QueueBox = styled.div`
  border: 1px solid grey;
  background: grey;
  overflow-y: scroll;
  max-height: 335px;
  border-radius: 5px;
  padding: 0;
`;

const QueueItem = styled.div`
padding: 0;
`;


const useStyles = makeStyles(styles);

export default function SectionPills() {
  LineChart.containerProps = { width: "93%", display: "grid" };
  const classes = useStyles();

  return (
<GridContainer>

  <GridItem xs={12}>
    <ToolBarHeader>

      <ToolBarHeaderText>
        QUEUE
      </ToolBarHeaderText>

    </ToolBarHeader>
  </GridItem>

  <GridItem xs={12}>
    <ToolBarContent>

      <GridContainer>

        <GridItem xs={12}>
          <Controller>
            <GridContainer>
              <GridItem xs={4}>
                <Button href="#pablo" className={classes.button} color="transparent">
                  <ArrowBackIos />
                </Button>
              </GridItem>
              <GridItem xs={4}>
                <ControllerText>
                  1 / 15
                </ControllerText>
              </GridItem>
              <GridItem  xs={4}>
                <Button href="#pablo" className={classes.button} color="transparent">
                  <ArrowForwardIos />
                </Button>
              </GridItem>
            </GridContainer>
          </Controller>
        </GridItem>

        <GridItem xs={12}>
          <QueueBox>
            <CardTrending/>
            <CardTrending/>
            <CardTrending/>
            <CardTrending/>
            <CardTrending/>
          </QueueBox>
        </GridItem>

      </GridContainer>

    </ToolBarContent>
  </GridItem>

</GridContainer>
  );
}

