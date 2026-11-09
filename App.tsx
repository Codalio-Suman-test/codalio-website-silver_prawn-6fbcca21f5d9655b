import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";
import Market from "./pages/Market";
import Reservations from "./pages/Reservations";
import Story from "./pages/Story";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>

      <Routes>
        <Route element={<Layout />}>
                <Route path="/" element={<Landing />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/market" element={<Market />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/story" element={<Story />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
