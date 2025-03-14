import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Calculator from "./pages/calculator";
import Calender from "./pages/Calender";
import Login from "./pages/Login";
import DashBoard from "./pages/dashboard";

import NotFound from "./pages/NotFound";

import "./App.css";

import { MonthProvider } from "./context/MonthContext";

function App() {
  return (
    <>
      <MonthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/calendar" element={<Calender />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MonthProvider>
    </>
  );
}

export default App;
