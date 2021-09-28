import React from 'react';
import ChartistGraph from 'react-chartist';
import Chartist from 'chartist';
import styled from 'styled-components';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../../../assets/jss/material-dashboard-pro-react/views/dashboardStyle';
// core components
import GridContainer from '../../../../components/Grid/GridContainer';
import GridItem from '../../../../components/Grid/GridItem';
import Card from '../../../../components/Card/Card';
import CardHeader from '../../../../components/Card/CardHeader';
import CardBody from '../../../../components/Card/CardBody';
import CardFooter from '../../../../components/Card/CardFooter';
import Tooltip from "@material-ui/core/Tooltip";
import Button from '../../../../components/CustomButtons/Button';

import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";

import {
  chartTest,
  dailySalesChart,
} from '../../Sections/variables/charts';

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
  // color: grey;
  // background: #555555;
  background: white;
  // border-radius: 0 0 5px 5px;
  box-shadow: 1px 2px 1px grey;
  width: 100%;
  // height: 410px;
  // display: flex;
  // align-items: center;
  // justify-content: center;
`;

const ChartWrapper = styled.div`
display: block;
display: -webkit-box;
display: -moz-box;
display: -ms-flexbox;
display: -webkit-flex;
display: flex;
stroke: rgba(255, 255, 255, 0.2);
stroke-width: 1px;
stroke-dasharray: 2px;
`;

const useStyles = makeStyles(styles);

export default function ToolAccelerometer() {
  const classes = useStyles();

  return (
    <div>
      <ToolBarHeader>
        <ToolBarHeaderText>ACCELEROMETER</ToolBarHeaderText>
      </ToolBarHeader>
      {/* <ToolBarContent> */}
        <Card chart className={classes.cardHover}>
          <CardHeader color="danger" className={classes.cardHeaderHover}>
            <ChartWrapper>
              <ChartistGraph
                className={classes['ct-line']}
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </ChartWrapper>
          </CardHeader>
          <CardBody>
            <div className={classes.cardHoverUnder}>
              <Tooltip
                id="tooltip-top"
                title="Refresh"
                placement="bottom"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button simple color="info" justIcon>
                  <Refresh className={classes.underChartIcons} />
                </Button>
              </Tooltip>
              <Tooltip
                id="tooltip-top"
                title="Change Date"
                placement="bottom"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button color="transparent" simple justIcon>
                  <Edit className={classes.underChartIcons} />
                </Button>
              </Tooltip>
            </div>
            <h4 className={classes.cardTitle}>Daily Sales</h4>
            <p className={classes.cardCategory}>
              <span className={classes.successText}>
                <ArrowUpward className={classes.upArrowCardCategory} /> 55%
              </span>{" "}
              increase in today sales.
            </p>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> updated 4 minutes ago
            </div>
          </CardFooter>
        </Card>
      {/* </ToolBarContent> */}
    </div>
  );
}
