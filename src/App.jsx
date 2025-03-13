import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Calculator from "./pages/Calculator";
import Calender from "./pages/Calender";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard"

import NotFound from "./pages/NotFound";


import './App.css'

import { MonthProvider }from "./context/MonthContext";


function App() {

  return (
    <>
      <MonthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Calculator" element={<Calculator />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Calender" element={<Calender />} />
            <Route path="/DashBoard" element={<DashBoard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MonthProvider>
    </>
  );
}

export default App
