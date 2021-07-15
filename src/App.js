import "./App.css";
import Calendar from "./component/calendar";

function App() {
  return (
    <div className="App">
      <Calendar month={2} year={2021} />
    </div>
  );
}

export default App;
