import "./App.css";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="contact" element={<Contact />} />

        {/* <Profile /> */}
      </Routes>
    </div>
  );
}

export default App;
