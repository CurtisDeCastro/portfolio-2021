import React from 'react';
import ChartistGraph from 'react-chartist';
import styled from 'styled-components';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../../../assets/jss/material-kit-react/views/componentsSections/pillsStyle';
// core components
import GridContainer from '../../../../components/Grid/GridContainer';
import GridItem from '../../../../components/Grid/GridItem';
import {
  colouredLinesChart,
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

export default function ToolAccelerometer() {
  const classes = useStyles();

  return (
    <GridContainer>
      <GridItem xs={12}>
        <ToolBarHeader>
          <ToolBarHeaderText>ACCELEROMETER</ToolBarHeaderText>
        </ToolBarHeader>
      </GridItem>
      <GridItem xs={12}>
        <ToolBarContent>
          <ChartistGraph
            data={colouredLinesChart.data}
            type="Line"
            options={colouredLinesChart.options}
            listener={colouredLinesChart.animation}
          />
        </ToolBarContent>
      </GridItem>
    </GridContainer>
  );
}
