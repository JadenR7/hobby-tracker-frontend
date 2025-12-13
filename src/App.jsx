import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AddActivity from "./AddActivity";
import ViewActivities from "./ViewActivities";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddActivity />} />
        <Route path="/view" element={<ViewActivities />} />
      </Routes>
    </Router>
  );
}

export default App;
