import "./styles/App.css";
import Home from "./pages/home/Home";
import "../src/fonts/fonts.css";
import Animate from "./utils/Animate";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Articles from "./pages/articles/Articles";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Animate>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/articles" element={<Articles />} />
            {/* <Route path="/articles" element={<Articles />} /> */}

            {/* <Route path="/*" element={<Notfound />} /> */}
          </Routes>
        </BrowserRouter>
      </Animate>
    </>
  );
};

export default App;
