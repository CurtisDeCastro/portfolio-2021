/*!

=========================================================
* Material Kit PRO React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/styles";
// @material-ui icons
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";

import Success from "components/Typography/Success.js";

import { cardTitle } from "assets/jss/material-kit-pro-react.js";

const style = {
  cardTitle
};

const useStyles = makeStyles(style);

export default function StatusCardDismissed() {
  const classes = useStyles();
  return (
    <Card style={{ width: "20rem" }}>
      {/* <CardHeader color="success">Dismissed</CardHeader> */}
      <CardBody>
        <h3 className={classes.cardTitle}>Dismissed</h3>
        <Success>
          With supporting text below as a natural lead-in to additional content.
        </Success>
        <Button color="success">Update Status</Button>
      </CardBody>
    </Card>
  );
}