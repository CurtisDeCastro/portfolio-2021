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
import teamStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import LineChart from "/Users/curtiscastro/work/Projects/portfolio-2021/src/components/LineChart/LineChart.js";
import SectionCarousel from "views/Components/Sections/SectionCarousel.js";

import Card from "/Users/curtiscastro/work/Projects/portfolio-2021/src/components/Card/Card.js";
import CardHeader from "/Users/curtiscastro/work/Projects/portfolio-2021/src/components/Card/CardHeader.js";
import CardAvatar from "/Users/curtiscastro/work/Projects/portfolio-2021/src/components/Card/CardAvatar.js";
import CardBody from "/Users/curtiscastro/work/Projects/portfolio-2021/src/components/Card/CardBody.js";
import CardFooter from "/Users/curtiscastro/work/Projects/portfolio-2021/src/components/Card/CardFooter.js";

import Button from "/Users/curtiscastro/work/Projects/portfolio-2021/src/components/CustomButtons/Button.js";

import FaceMarc from "assets/img/faces/marc.jpg";


import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
import styled from "styled-components";

const CenterWithBorder = styled.div`
  width: 93%;
  height: 93%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
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

const ToolBarHeaderText = styled.h4`
  margin: 0;
`;

const useStyles = makeStyles(teamStyle);

export default function ToolDriver() {
  const classes = useStyles();

  return (
    <GridContainer>
    <GridItem xs={12}>
      <ToolBarHeader>
        <ToolBarHeaderText>
          DRIVER
        </ToolBarHeaderText>
      </ToolBarHeader>
    </GridItem>
    <GridItem xs={12}>
      <ToolBarContent>

        <Card profile plain>
          <CardAvatar profile plain>
            <a href="#pablo">
              <img src={FaceMarc} alt="profile-pic" className={classes.img} />
            </a>
          </CardAvatar>
          <CardBody plain>
            <h4 className={classes.cardTitle}>DRIVER NAME</h4>
            <h6 className={classes.textMuted}>POSITION TITLE</h6>
            <p className={classes.cardDescription}>
              This is where the driver stats will go
            </p>
          </CardBody>
          <CardFooter className={classes.justifyContent}>
            <Button href="#pablo" justIcon simple color="twitter">
              <i className="fab fa-twitter" />
            </Button>
            <Button href="#pablo" justIcon simple color="facebook">
              <i className="fab fa-facebook" />
            </Button>
            <Button href="#pablo" justIcon simple color="google">
              <i className="fab fa-google" />
            </Button>
          </CardFooter>
        </Card>

      </ToolBarContent>
    </GridItem>
  </GridContainer>
  );
}


