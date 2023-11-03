import "./styles/App.css";
import Home from "./pages/home/Home";
// import About from "./pages/about/About";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/About" element={<About />} /> */}
          {/* <Route path="/*" element={<Notfound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
