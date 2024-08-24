import React, { useRef, useEffect } from "react";
import * as Plot from "@observablehq/plot";

function LineChart({ data }) {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const plot = Plot.plot({
        width: 600,
        height: 400,
        margin: 60,
        style: {
          fontSize: "12px",
        },
        marks: [
          Plot.line(data, {
            x: "xValue",
            y: "yValue",
            stroke: "blue", // Color of the line
            strokeWidth: 2, // Width of the line
          }),
          Plot.dot(data, {
            x: "xValue",
            y: "yValue",
            fill: "blue", // Color of the dots
            r: 4, // Radius of the dots
          }),
        ],
        x: {
          label: "Weekday",
          domain: [
            "Montag",
            "Dienstag",
            "Mittwoch",
            "Donnerstag",
            "Freitag",
            "Samstag",
            "Sonntag",
          ],
        },
        y: {
          label: "Mood (1 = bad, 7 = good)",
          domain: [1, 7], // Set the y-axis range from 1 to 7
        },
      });
      ref.current.append(plot);

      return () => plot.remove();
    }
  }, [data]);

  return <div ref={ref} />;
}

export default LineChart;
