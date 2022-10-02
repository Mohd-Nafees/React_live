import Profile from "./components/home/Profile";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Page404 from "./components/404page/Page404";
import Footer from "./components/footer/Footer";
import Project from "./components/projects/Project";
import Skill from "./components/skills/Skill";
import Certificate from "./components/certificates/Certificate";
import TestiMonials from "./components/TestiMonials/TestiMonials";

function App() {
  return (
    <BrowserRouter>
      <div
      // className="bg-move"
      // style={{
      //   backgroundImage: `url("assets/images/n2.jpg")`,
      // }}
      >
        <Navbar />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Profile />
              
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About />
              
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Contact />
              
            </>
          }
        />
        <Route
          path="/testimonial"
          element={
            <>
              <TestiMonials />
              
            </>
          }
        />
        <Route
          path="/resume"
          element={
            <>
              <Resume />
              
            </>
          }
        />
        <Route
          path="/skill"
          element={
            <>
              <Skill />
              
            </>
          }
        />
        <Route
          path="/certificate"
          element={
            <>
              <Certificate />
              
            </>
          }
        />
        <Route
          path="/project"
          element={
            <>
              <Project />
              
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Page404 />
              
            </>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
