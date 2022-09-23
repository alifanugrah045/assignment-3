import logo from "./logo.svg";
// import './App.css';
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/navbar/Navbar";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ExperiencePage from "./pages/experience/ExperiencePage";
import AwardsPage from "./pages/awards/AwardsPage";
import InterestPage from "./pages/interest/InterestPage";
import SkillsPage from "./pages/skills/SkillsPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/interest" element={<InterestPage />} />
          <Route path="/awards" element={<AwardsPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
