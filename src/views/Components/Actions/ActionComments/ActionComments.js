import React from "react";
import styled from 'styled-components';
import {Link} from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Reply from "@material-ui/icons/Reply";
import Favorite from "@material-ui/icons/Favorite";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

// core components
import Media from "components/Media/Media.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import profile4 from "assets/img/faces/card-profile4-square.jpg";
import profile6 from "assets/img/faces/card-profile6-square.jpg";

import sectionCommentsStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionCommentsStyle.js";

const CommentScoreWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items; center;
  justify-content: center;
  font-size: .8em;
`;

const ScoreCompWrapper = styled.div`
  :hover{
    color: white;
  }
`;

const CommentInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  // align-items; center;
  // justify-content: center;
`;

const useStyles = makeStyles(sectionCommentsStyle);

export default function ActionComments() {
  const classes = useStyles();
  return (
    <Media
      avatar={profile4}
      title={
        <CommentInfoWrapper>
          <span>
            <CommentScoreWrapper>
              <ScoreCompWrapper>
                <ArrowUpward />
              </ScoreCompWrapper>
              <ScoreCompWrapper>
                69
              </ScoreCompWrapper>
              <ScoreCompWrapper>
              <ArrowDownward />
              </ScoreCompWrapper>
            </CommentScoreWrapper>
          </span>
          <span>
            Tina Andrew <small>· 7 minutes ago</small>
          </span>
        </CommentInfoWrapper>
      }
      body={
        <p className={classes.color555}>
          Chance too good. God level bars. I'm so proud of
          @LifeOfDesiigner #1 song in the country. Panda! Don't be
          scared of the truth because we need to restart the human
          foundation in truth I stand with the most humility. We are so
          blessed!
        </p>
      }
      footer={
        <div>
          <Tooltip
            id="tooltip-tina"
            title="Reply to comment"
            placement="top"
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="primary"
              simple
              className={classes.footerButtons}
            >
              <Reply className={classes.footerIcons} /> Reply
            </Button>
          </Tooltip>

          <Button
            color="danger"
            simple
            className={classes.footerButtons}
          >
            <Favorite className={classes.footerIcons} /> 243
          </Button>
        </div>
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