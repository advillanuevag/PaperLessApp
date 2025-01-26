import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen.jsx";


const PlaceholderScreen = ({ name }) => (
  <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1>{name} Screen</h1>
    <p>This screen is under development.</p>
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/assign-roles" element={<PlaceholderScreen name="Assign Roles" />} />
        <Route path="/register-field-workers" element={<PlaceholderScreen name="Register Field Workers" />} />
        <Route path="/assign-forms" element={<PlaceholderScreen name="Assign Forms" />} />
        <Route path="/submit-forms" element={<PlaceholderScreen name="Submit Forms" />} />
        <Route path="/view-reports" element={<PlaceholderScreen name="View Reports" />} />
        <Route path="/team-stats" element={<PlaceholderScreen name="Team Stats" />} />
      </Routes>
    </Router>
  );
}
