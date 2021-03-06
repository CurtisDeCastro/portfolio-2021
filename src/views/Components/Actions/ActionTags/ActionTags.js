import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/styles';
import { cardTitle } from '../../../../assets/jss/material-kit-pro-react';
// core components

import GridContainer from '../../../../components/Grid/GridContainer';
import GridItem from '../../../../components/Grid/GridItem';

import TagsAccelerometer from './TagTypes/TagsAccelerometer';
import TagsExtCam from './TagTypes/TagsExtCam';
import TagsIntCam from './TagTypes/TagsIntCam';

import styles from '../../../../assets/jss/material-kit-pro-react/customCheckboxRadioSwitchStyle';

const style = {
  cardTitle,
};

const useStyles = makeStyles(styles);

export default function CheckboxExample() {
  const [checked, setChecked] = React.useState([24, 22]);
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={6} md={4}>
        <TagsAccelerometer />
      </GridItem>
      <GridItem xs={12} sm={6} md={4}>
        <TagsExtCam />
      </GridItem>
      <GridItem xs={12} sm={6} md={4}>
        <TagsIntCam />
      </GridItem>
    </GridContainer>
  );
}
