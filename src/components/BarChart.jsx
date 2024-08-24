import React, { useRef, useEffect } from "react";
import * as Plot from "@observablehq/plot";

function Chart({ data }) {
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
          paddingInner: 0.3, // Adds space between bars
        },
        y: {
          label: "Mood (1 = bad, 7 = good)",
          domain: [0, 7], // Start from 0 for bar charts
          grid: true, // Add horizontal grid lines
        },
        marks: [
          Plot.barY(data, {
            x: "xValue",
            y: "yValue",
            fill: "steelblue", // Color of the bars
            title: (d) => `${d.xValue}: ${d.yValue}`, // Tooltip
          }),
          Plot.ruleY([0]), // Add a baseline at y=0
        ],
      });

      ref.current.append(plot);

      return () => plot.remove();
    }
  }, [data]);

  return <div ref={ref} style={{ width: "100%", height: "400px" }} />;
}

export default Chart;
