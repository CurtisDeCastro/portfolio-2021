import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/styles';

import styles from '../../../assets/jss/material-kit-react/views/componentsSections/pillsStyle';

// @material-ui/icons

// core components
import CustomTabs from '../../../components/CustomTabs/CustomTabs';

// Curtis' custom components
import ActionComments from '../Actions/ActionComments/ActionComments';
import ActionAddComment from '../Actions/ActionComments/ActionAddComment';
import ActionStatus from '../Actions/ActionStatus/ActionStatus';
import ActionTags from '../Actions/ActionTags/ActionTags';


const useStyles = makeStyles(styles);

export default function XSectionToolbar() {
  const classes = useStyles();
  return (
    <CustomTabs
      plainTabs
      headerColor="danger"
      tabs={[
        {
          tabName: "Tags",
          tabContent: (
            <ActionTags/>
          ),
        },
        {
          tabName: "Comments",
          tabContent: (
            <div>
              <ActionAddComment/>
              <ActionComments/>
              <ActionComments/>
              <ActionComments/>
            </div>
          ),
        },
        {
          tabName: "Status",
          tabContent: (
            <ActionStatus/>
          ),
        },
      ]}
    />
  );
}
