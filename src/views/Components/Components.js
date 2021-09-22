/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// nodejs library that concatenates classes
import classNames from 'classnames';

// core components
import Header from '../../components/Header/Header';
import HeaderLinks from '../../components/Header/HeaderLinks';
import Parallax from '../../components/Parallax/Parallax';

import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/CustomButtons/Button';

// @material-ui/icons

// react components for routing our app without refresh

import SectionBasics from './Sections/SectionBasics';
import SectionCarousel from './Sections/SectionCarousel';
import SectionCompletedExamples from './Sections/SectionCompletedExamples';
import SectionDownload from './Sections/SectionDownload';
import SectionExamples from './Sections/SectionExamples';
import SectionJavascript from './Sections/SectionJavascript';
import SectionLogin from './Sections/SectionLogin';
import SectionNavbars from './Sections/SectionNavbars';
import SectionNotifications from './Sections/SectionNotifications';
import SectionPills from './Sections/SectionPills';
import SectionTabs from './Sections/SectionTabs';
import SectionTypography from './Sections/SectionTypography';

import styles from '../../assets/jss/material-kit-react/views/components';

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Curtis de Castro"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax image={require('../../assets/img/bg7.jpg').default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Examples</h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link to="login-page" className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload />
      </div>
      <Footer />
    </div>
  );
}
