import { BrowserRouter, Route, Routes, } from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import Testimonials from "./pages/testimonials/Testimonials";
import Consultation from "./pages/consultation/Consultation";
import Construction from "./pages/construction/Construction";
import Interior from "./pages/interior/Interior";
import Homes from "./pages/Homes/Homes";
import NotFound from "./pages/notFound/NotFound";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/homes" element={<Homes />} />
          <Route path="/services" element={<Services />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/interior" element={<Interior />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
