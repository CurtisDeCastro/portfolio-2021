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
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import profile4 from "assets/img/faces/card-profile4-square.jpg";
import profile6 from "assets/img/faces/card-profile6-square.jpg";

import sectionCommentsStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionCommentsStyle.js";

const useStyles = makeStyles(sectionCommentsStyle);

export default function ActionAddComment() {
  const classes = useStyles();
  return (
    <Media
      avatar={profile6}
      body={
        <CustomInput
          labelText=" Write some nice stuff or nothing..."
          id="nice"
          formControlProps={{
            fullWidth: true,
          }}
          inputProps={{
            multiline: true,
            rows: 5,
          }}
        />
      }
      footer={
        <Button color="danger" round className={classes.footerButtons}>
          Post comment
        </Button>
      }
    />
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