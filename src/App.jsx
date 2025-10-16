
import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./componts/Layout/root.layout";
import Dashbord from "./componts/Dashbord/Dashbord";
import Products from "./componts/Dashbord/Products";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./componts/Dashbord/About";


function App() {

  useEffect(() => {
    AOS.init({ duration: 1500, once: true }); 
  }, []);   

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Dashbord />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/About" element={<About />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
