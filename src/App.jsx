import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./componts/Layout/root.layout";
import Dashbord from "./componts/Dashbord/Dashbord";


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Dashbord />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
