import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NoMatch from "./pages/NoMatch/NoMatch";
import Layout from "./partials/Layout/Layout";
import Result from "./pages/Result/Result";
import HomeLayout from "./partials/HomeLayout/HomeLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index path="/" element={<Home />} />
      </Route>
      <Route path="/" element={<Layout />}>
        <Route path="result" element={<Result />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
