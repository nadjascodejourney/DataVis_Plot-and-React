import Chart from "./components/Chart"; // Import the Chart component
import "./App.css";

function App() {
  // Example data; could also be fetched from an API or other source
  const data = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
  ];

  return (
    <>
      <h1>Plot in React</h1>
      <h1>My first Chart</h1>
      <Chart data={data} /> {/* Render the Chart component */}
    </>
  );
}

export default App;
