//* This is a custom component that I created to display the chart in the dashboard. The content components come from shadcn ui, and the chart component is a custom component that uses the Plot package to create a chart. The data for the chart is passed as a prop to the custom Chart component.

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Chart from "./Chart";

function DashboardCard({ data }) {
  return (
    <Card className="w-[550px]">
      <CardHeader>
        <CardTitle>Weekly Mood Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <Chart data={data} />{" "}
        {/* here, I put my custom Charts Component into the prestyled CardContent Component from shadcn ui */}
      </CardContent>
    </Card>
  );
}

export default DashboardCard;
