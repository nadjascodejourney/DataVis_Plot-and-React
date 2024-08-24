import Chart from "./components/Chart"; // Import the Chart component
import "./App.css";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import DashboardCard from "./components/DashboardCard";

function App() {
  // Example data; could also be fetched from an API or other source
  const data = [
    // Stimmung an Wochentagen
    { xValue: "Montag", yValue: 1 },
    { xValue: "Dienstag", yValue: 2 },
    { xValue: "Mittwoch", yValue: 4 },
    { xValue: "Donnerstag", yValue: 3 },
    { xValue: "Freitag", yValue: 6 },
    { xValue: "Samstag", yValue: 7 },
    { xValue: "Sonntag", yValue: 4 },
  ];

  return (
    <>
      <h1>Plot in React</h1>
      <h1>My Mood during the Week</h1>
      <LineChart data={data} />
      <BarChart data={data} />

      {/*tested shadcn ui for displaying data with shadcn components */}
      <DashboardCard data={data} />
    </>
  );
}

export default App;
