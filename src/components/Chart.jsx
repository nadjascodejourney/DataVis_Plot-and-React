import React, { useRef, useEffect } from "react";
import * as Plot from "@observablehq/plot"; // Import Plot from the Plot package

function Chart({ data }) {
  // Accept the needed data as a prop
  const ref = useRef(); // Create a ref to the div element, to connect to a DOM node where Plot can insert a chart; in Vanilla JS, you would use getElementById() or querySelector() to select the element

  useEffect(() => {
    // Create the chart when the component mounts and update it when the data changes => useEffect()
    if (ref.current) {
      // if ref.current (= the div element) exists
      const plot = Plot.plot({
        // Create a Plot chart with the Plot.plot() function from the Plot package; .plot() accepts an object with configuration options like data, marks, and width
        // For example:
        style: {
          fontSize: "12px", // Change the base font size
        },
        marks: [Plot.dot(data, { x: "x", y: "y", fill: "blue", r: 5 })],
        // set the color of the dots to blue
        color: {},
        // set the width of the chart to 400
        /*  width: 400, */
        x: {
          label: "x axis",
        },
        y: {
          label: "y axis",
        },
      });
      ref.current.append(plot); // then append the plot to the div element

      return () => plot.remove(); // Return a cleanup function that removes the plot when the component unmounts
    }
  }, [data]); // Re-run the effect when the data changes

  return <div ref={ref} />; // Return the div element with the ref attribute, because Plot will insert the chart into this div
}

export default Chart;
