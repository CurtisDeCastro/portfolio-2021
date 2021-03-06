import React from "react";
import {Link} from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Reply from "@material-ui/icons/Reply";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Media from "components/Media/Media.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import StatusCardDismissed from "./StatusCards/StatusDismissed.js";
import StatusCardNeedsCoaching from "./StatusCards/StatusNeedsCoaching.js";
import StatusCardNeedsReview from "./StatusCards/StatusNeedsReview.js";

import profile4 from "assets/img/faces/card-profile4-square.jpg";

import sectionCommentsStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionCommentsStyle.js";

const useStyles = makeStyles(sectionCommentsStyle);

export default function ActionStatus() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
        <StatusCardDismissed />
      </ GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <StatusCardNeedsReview />
      </ GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <StatusCardNeedsCoaching />
      </ GridItem>
    </GridContainer>
  );
};

// Media.defaultProps = {
//   avatarLink: "#pablo",
//   avatarAlt: "..."
// };

// Media.propTypes = {
//   avatarLink: PropTypes.string,
//   avatar: PropTypes.string,
//   avatarAlt: PropTypes.string,
//   title: PropTypes.node,
//   body: PropTypes.node,
//   footer: PropTypes.node,
//   innerMedias: PropTypes.arrayOf(PropTypes.object)
// };