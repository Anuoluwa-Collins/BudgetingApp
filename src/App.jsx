import { HashRouter as HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Calculator from "./pages/Calculator";
import Calendar from "./pages/Calendar";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";
import NotFound from "./pages/NotFound";

import "./App.css";

import { MonthProvider } from "./context/MonthContext";

function App() {
  return (
    <>
      <MonthProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/login" element={<Login />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </MonthProvider>
    </>
  );
}

export default App;
