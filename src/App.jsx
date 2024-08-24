import Chart from "./components/Chart"; // Import the Chart component
import "./App.css";
import LineChart from "./components/LineChart";

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
      <Chart data={data} /> {/* Render the Chart component */}
      <LineChart data={data} />
    </>
  );
}

export default App;
