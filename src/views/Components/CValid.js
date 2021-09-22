import React from 'react';
// nodejs library that concatenates classes
// import classNames from 'classnames';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';
// @material-ui/core components
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
// core components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import CustomTabs from '../../components/CustomTabs/CustomTabs';

// styles
import styles from '../../assets/jss/material-kit-react/views/components';

// sections for this page
import XSectionToolbar from './Sections/XSectionToolbar';
import XSectionVideoPlayer from './Sections/XSectionVideoPlayer';
import XSectionActions from './Sections/XSectionActions';
import CurtisHeaderLinks from '../../components/Header/CurtisHeaderLinks';

const useStyles = makeStyles(styles);

const Spacer = styled.div`
  height: 20px;
`;

const UnderHeaderSpacer = styled.div`
  height: 70px;
  border: 3px dotted red;
`;

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div className={classes.section}>
      <Header
        brand="Curtis de Castro"
        rightLinks={<CurtisHeaderLinks />}
        fixed
        color="danger"
        changeColorOnScroll={{
          height: 400,
          color: 'transparent',
        }}
        {...rest}
      />
      <UnderHeaderSpacer />

      <div className={classes.container}>

        <GridContainer>
          <GridItem xs={12} sm={12} md={7}>
            <Spacer />
            <XSectionVideoPlayer />
          </GridItem>

          <GridItem xs={12} sm={12} md={5}>
            <XSectionToolbar />
          </GridItem>
        </GridContainer>
        <XSectionActions />
        <Footer />

      </div>
    </div>
  );
}
