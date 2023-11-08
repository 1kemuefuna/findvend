import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NoMatch from "./pages/NoMatch/NoMatch";
import Layout from "./partials/Layout/Layout";
import Result from "./pages/Result/Result";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="result" element={<Result />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
