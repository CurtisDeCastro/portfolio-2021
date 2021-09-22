import React from 'react';
import styled from 'styled-components';

// @material-ui/icons
import ErrorOutline from '@material-ui/icons/ErrorOutline';
// @material-ui/core components
import { makeStyles } from '@material-ui/styles';
import styles from '../../../../assets/jss/material-kit-react/views/componentsSections/pillsStyle';

// core components
import GridContainer from '../../../../components/Grid/GridContainer';
import GridItem from '../../../../components/Grid/GridItem';
import ToolIntCamCardBody from '../../../../components/Card/ToolIntCam/ToolIntCamCardBody';

const IntCam = styled.iframe`
  aspect-ratio: 16 / 9;
  border: none;
  width: 100%;
  border-bottom: 1px solid grey;
`;

const ToolBarHeader = styled.div`
  background: #f44336;
  border-radius: 5px 5px 0 0;
  box-shadow: 1px 2px 1px grey;
  height: 30px;
  width: 100%;
  color: white;
  text-align: center;
  margin: 0;
`;

const ToolBarContent = styled.div`
  // color: grey;
  background: white;
  border-radius: 0 0 5px 5px;
  box-shadow: 1px 2px 1px grey;
  width: 100%;
  height: 410px;
  padding: 2.5%;
`;

const ToolBarHeaderText = styled.h4`
  margin: 0;
`;

const Warning = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  text-align: left;
  background: #f59c95;
`;

const WarningIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: .2em;
  color: #f44336;
`;

const WarningText = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
`;

const SubCompHeader = styled.div`
  text-align: center;
  color: #f44336;
  border-bottom: 1px solid grey;
`;

const ViolationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow-y: auto;
  height: 80%;
`;

const ViolationsInnerWrapper = styled.div`
  overflow-y: auto;
`;

const useStyles = makeStyles(styles);

export default function ToolIntCam() {
  const classes = useStyles();

  return (
    <GridContainer>

      <GridItem xs={12}>
        <ToolBarHeader>
          <ToolBarHeaderText>
            COMPUTER VISION
          </ToolBarHeaderText>
        </ToolBarHeader>
      </GridItem>

      <GridItem xs={12}>

        <ToolBarContent>

          <GridContainer>

            <GridItem xs={12}>
              <SubCompHeader>Interior Camera</SubCompHeader>
              <IntCam
                src="https://www.youtube.com/embed/cCu2_6WKeUQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></IntCam>
            </GridItem>

            <GridItem xs={12}>
              <ViolationsWrapper>
                <SubCompHeader>Safety Violations</SubCompHeader>
                  <ViolationsInnerWrapper>
                  <ToolIntCamCardBody>
                    <Warning>
                      <WarningIcon>
                        <ErrorOutline />
                      </WarningIcon>
                      <WarningText>
                        <p><strong>Warning:</strong> Poor Camera Installation Quality</p>
                      </WarningText>
                    </Warning>
                  </ToolIntCamCardBody>
                  <ToolIntCamCardBody>
                    <Warning>
                      <WarningIcon>
                        <ErrorOutline />
                      </WarningIcon>
                      <WarningText>
                        <p><strong>Warning:</strong> Distracted Driving Detected</p>
                      </WarningText>
                    </Warning>
                  </ToolIntCamCardBody>
                  <ToolIntCamCardBody>
                    <Warning>
                      <WarningIcon>
                        <ErrorOutline />
                      </WarningIcon>
                      <WarningText>
                        <p><strong>Warning:</strong> Drowsiness Detected</p>
                      </WarningText>
                    </Warning>
                  </ToolIntCamCardBody>
                </ViolationsInnerWrapper>
              </ViolationsWrapper>
            </GridItem>

          </GridContainer>

        </ToolBarContent>

      </GridItem>

    </GridContainer>
  );
}
