import "./App.css";
import Calendar from "./component/calendar";

// events status
export const eventStatus = {
  success: "event--success",
  danger: "event--danger",
  warn: "event--warn",
};
// events structure
const events = [
  { id: 1, desc: "event 1", status: eventStatus.success, date: "2021-07-01" },
  { id: 2, desc: "event 2", status: eventStatus.danger, date: "2021-07-01" },
  { id: 3, desc: "event 3", status: eventStatus.success, date: "2021-07-01" },
  { id: 4, desc: "event 4", status: eventStatus.warn, date: "2021-07-02" },
];

function App() {
  return (
    <div className="App">
      <Calendar month={6} year={2021} events={events} />
    </div>
  );
}

export default App;
