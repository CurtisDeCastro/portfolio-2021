import {
  successColor,
  tooltip,
  cardTitle,
  grayColor,
} from "../../material-dashboard-pro-react.js";

import hoverCardStyle from "../hoverCardStyle.js";

const dashboardStyle = {
  ...hoverCardStyle,
  tooltip,
  cardTitle: {
    ...cardTitle,
    marginTop: "0px",
    marginBottom: "3px",
  },
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
  },
  cardProductTitle: {
    ...cardTitle,
    marginTop: "0px",
    marginBottom: "3px",
    textAlign: "center",
  },
  cardCategory: {
    color: grayColor[0],
    fontSize: "14px",
    paddingTop: "10px",
    marginBottom: "0",
    marginTop: "0",
    margin: "0",
  },
  cardProductDesciprion: {
    textAlign: "center",
    color: grayColor[0],
  },
  stats: {
    color: grayColor[0],
    fontSize: "12px",
    lineHeight: "22px",
    display: "inline-flex",
    "& svg": {
      position: "relative",
      top: "4px",
      width: "16px",
      height: "16px",
      marginRight: "3px",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "4px",
      fontSize: "16px",
      marginRight: "3px",
    },
  },
  productStats: {
    paddingTop: "7px",
    paddingBottom: "7px",
    margin: "0",
  },
  successText: {
    color: successColor[0],
  },
  upArrowCardCategory: {
    width: 14,
    height: 14,
  },
  underChartIcons: {
    width: "17px",
    height: "17px",
  },
  price: {
    color: "inherit",
    "& h4": {
      marginBottom: "0px",
      marginTop: "0px",
    },
  },
  ctChartWhiteColors: {
    stroke: 'rgba(255, 255, 255, 0.2)',
    strokeWidth: '1px',
    strokeDasharray: '2px',
  },
  ctLine: {
    stroke: 'rgba(255, 255, 255, 0.2)',
    strokeWidth: '1px',
    strokeDasharray: '2px',
  },
  ".ct-chart-white-colors .ct-grid": {
    stroke: "rgba(255, 255, 255, 0.2)",
    strokeWidth: "1px",
    strokeDasharray: "2px"
  },
  ".ct-chart-white-colors .ct-series-a .ct-point,\n.ct-chart-white-colors .ct-series-a .ct-line,\n.ct-chart-white-colors .ct-series-a .ct-bar,\n.ct-chart-white-colors .ct-series-a .ct-slice-donut": {
    stroke: "rgba(255, 255, 255, 0.8)"
  },
  ".ct-chart-white-colors .ct-label.ct-horizontal.ct-end": {
    WebkitBoxAlign: "flex-start",
    WebkitAlignItems: "flex-start",
    msFlexAlign: "flex-start",
    alignItems: "flex-start",
    WebkitBoxPack: "flex-start",
    WebkitJustifyContent: "flex-start",
    msFlexPack: "flex-start",
    justifyContent: "flex-start",
    textAlign: "left",
    textAnchor: "start"
  },
  ".ct-chart-white-colors .ct-label": { color: "rgba(255, 255, 255, 0.7)" },
  ".ct-chart-line .ct-label,\n.ct-chart-bar .ct-label": {
    display: [
      "block",
      "-webkit-box",
      "-moz-box",
      "-ms-flexbox",
      "-webkit-flex",
      "flex"
    ]
  },
  ".ct-label": { fill: "rgba(0, 0, 0, 0.4)", lineHeight: 1 },
  ".ct-series-a .ct-point,\n.ct-series-a .ct-line,\n.ct-series-a .ct-bar,\n.ct-series-a .ct-slice-donut": {
    stroke: "#00bcd4"
  },
  ".ct-series-a .ct-slice-pie,\n.ct-series-a .ct-slice-donut-solid,\n.ct-series-a .ct-area": {
    fill: "#00bcd4"
  }
};

export default dashboardStyle;



// .ct-chart-white-colors .ct-series-a .ct-point,
// .ct-chart-white-colors .ct-series-a .ct-line,
// .ct-chart-white-colors .ct-series-a .ct-bar,
// .ct-chart-white-colors .ct-series-a .ct-slice-donut {
//   stroke: rgba(255, 255, 255, 0.8);
// }

// .ct-chart-white-colors .ct-label.ct-horizontal.ct-end {
//   -webkit-box-align: flex-start;
//   -webkit-align-items: flex-start;
//   -ms-flex-align: flex-start;
//   align-items: flex-start;
//   -webkit-box-pack: flex-start;
//   -webkit-justify-content: flex-start;
//   -ms-flex-pack: flex-start;
//   justify-content: flex-start;
//   text-align: left;
//   text-anchor: start;
// }

// .ct-chart-white-colors .ct-label {
//   color: rgba(255, 255, 255, 0.7);
// }

// .ct-chart-line .ct-label,
// .ct-chart-bar .ct-label {
//   display: block;
//   display: -webkit-box;
//   display: -moz-box;
//   display: -ms-flexbox;
//   display: -webkit-flex;
//   display: flex;
// }

// .ct-label {
//   fill: rgba(0, 0, 0, 0.4);
//   line-height: 1;
// }

// .ct-series-a .ct-point,
// .ct-series-a .ct-line,
// .ct-series-a .ct-bar,
// .ct-series-a .ct-slice-donut {
//   stroke: #00bcd4;
// }

// .ct-series-a .ct-slice-pie,
// .ct-series-a .ct-slice-donut-solid,
// .ct-series-a .ct-area {
//   fill: #00bcd4;
// }

