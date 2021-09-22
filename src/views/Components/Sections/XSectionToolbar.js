import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Camera from '@material-ui/icons/Camera';
import EmojiPeople from '@material-ui/icons/EmojiPeople';
import LocationOn from '@material-ui/icons/LocationOn';
import Speed from '@material-ui/icons/Speed';
import Subscriptions from '@material-ui/icons/Subscriptions';
// Curtis' custom components
import styles from '../../../assets/jss/material-kit-react/views/componentsSections/pillsStyle';
import NavPills from '../../../components/NavPills/NavPills';
import ToolAccelerometer from '../Tools/ToolAccelerometer/ToolAccelerometer';
import ToolDriver from '../Tools/ToolDriver/ToolDriver';
import ToolEventQueue from '../Tools/ToolEventQueue/ToolEventQueue';
import ToolIntCam from '../Tools/ToolIntCam/ToolIntCam';
import ToolLocation from '../Tools/ToolLocation/ToolLocation';

const useStyles = makeStyles(styles);

export default function XSectionToolbar() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div id="navigation-pills">
        <NavPills
          color="danger"
          horizontal={{
            tabsGrid: { xs: 3, sm: 3, md: 3 },
            contentGrid: { xs: 9, sm: 9, md: 9 },
          }}
          tabs={[
            {
              tabButton: '',
              tabIcon: Camera,
              tabContent: (
                <ToolIntCam />
              ),
            },
            {
              tabButton: '',
              tabIcon: LocationOn,
              tabContent: (
                <ToolLocation />
              ),
            },
            {
              tabButton: '',
              tabIcon: Speed,
              tabContent: (
                <ToolAccelerometer />
              ),
            },
            {
              tabButton: '',
              tabIcon: Subscriptions,
              tabContent: (
                <ToolEventQueue />
              ),
            },
            {
              tabButton: '',
              tabIcon: EmojiPeople,
              tabContent: (
                <ToolDriver />
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
