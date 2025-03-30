import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Education from "./Pages/Education";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import ProjectDetailsPage from "./Pages/ProjectDetailsPage";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ToTop from "./Components/ToTop/ToTop";

function App() {
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  React.useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div className={`app-container ${theme}`}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <main className="content">
        <ToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutMe" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetailsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
