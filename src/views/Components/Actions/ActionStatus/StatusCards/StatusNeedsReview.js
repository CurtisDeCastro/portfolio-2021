// @material-ui/core components
import { makeStyles } from '@material-ui/styles';
import { cardTitle } from 'assets/jss/material-kit-pro-react.js';
// @material-ui icons
// core components
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import Button from 'components/CustomButtons/Button.js';
import Warning from 'components/Typography/Warning.js';
import React from 'react';

const style = {
  cardTitle,
};

const useStyles = makeStyles(style);

export default function StatusCardNeedsReview() {
  const classes = useStyles();
  return (
    <Card style={{ width: '20rem' }}>
      {/* <CardHeader color='danger'>Needs Review</CardHeader> */}
      <CardBody>
        <h3 className={classes.cardTitle}>Needs Review</h3>
        <Warning>
          With supporting text below as a natural lead-in to additional content.
        </Warning>
        <Button color='warning'>Update Status</Button>
      </CardBody>
    </Card>
  );
}