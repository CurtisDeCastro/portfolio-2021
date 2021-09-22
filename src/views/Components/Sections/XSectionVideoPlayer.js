// @material-ui/core components
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import styles from '../../../assets/jss/material-kit-react/views/components';

const ExtCam = styled.iframe`
  margin: 0px auto;
  width: 100%;
  aspect-ratio: 16 / 9;
`;

const MainVideoDisplay = styled.div`
  color: grey;
  background: white;
  border-radius: 5px;
  width: 100%;
  padding: 15px;
  box-shadow: 1px 2px 1px grey;
  min-height: 440px;
`;

const TitleText = styled.h3`
  margin: 0;
  font-size: .8em;
  line-height: 1em;
  padding-bottom: 4px;
`;

const TitleMetaData = styled.p`
  margin: 0;
  font-size: .8em;
  line-height: 1em;
`;

const useStyles = makeStyles(styles);

export default function XSectionVideoPlayer(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <GridContainer>
      <GridItem xs={12}>
        <MainVideoDisplay>
          <TitleText>
            <strong>VIDEO TITLE</strong>
          </TitleText>
          <ExtCam
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yNr1lnrxDro"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <TitleMetaData>
            Driver:
            <br />
            Vehicle ID:
            <br />
            Incident Date/Time:
            <br />
            Auto-Tags:
          </TitleMetaData>
        </MainVideoDisplay>
      </GridItem>
    </GridContainer>
  );
}
