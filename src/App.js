import './App.css'
import Layout from "./pages/Layout.js"
import Home from "./pages/Home.js"
import Project from "./pages/Project.js"
import About from "./pages/About.js"
import Nopage from "./pages/Nopage.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="Project" element={<Project />} />
              <Route path="About" element={<About />} />
              <Route path="*" element={<Nopage />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
