import React from 'react';

import CanvasJSReact from "/Users/curtiscastro/work/Projects/portfolio-2021/src/components/canvasjs-3.4.1/canvasjs.react.js";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



 class LineChart extends React.Component {
   render() {
     const options = {
       animationEnabled: true,
       exportEnabled: true,
       theme: "light2", // "light1", "dark1", "dark2"
       title:{
         text: "Accelerometer Data"
       },
       axisY: {
         title: "Speed",
         suffix: "mph"
       },
       axisX: {
         title: "Time",
         suffix: "s",
         interval: 1
       },
       data: [{
         type: "line",
         toolTipContent: "Week {x}: {y}%",
         dataPoints: [
           { x: 1, y: 64 },
           { x: 2, y: 61 },
           { x: 3, y: 64 },
           { x: 4, y: 62 },
           { x: 5, y: 64 },
           { x: 6, y: 60 },
           { x: 7, y: 58 },
           { x: 8, y: 59 },
           { x: 9, y: 53 },
           { x: 10, y: 54 },
           { x: 11, y: 61 },
           { x: 12, y: 60 },
           { x: 13, y: 55 },
           { x: 14, y: 60 },
           { x: 15, y: 56 },
           { x: 16, y: 60 },
           { x: 17, y: 59.5 },
           { x: 18, y: 63 },
           { x: 19, y: 58 },
           { x: 20, y: 54 },
         ]
       }]
     }
     return (
     <div>
       <CanvasJSChart options = {options}
        //  onRef={ref => this.chart = ref}
       />
       {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
     </div>
     );
   }
 }

// module.exports = LineChart;
export default LineChart;

