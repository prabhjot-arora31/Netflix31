import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CardInfo from "./components/cardInfo/cardInfo";
import Cards from "./components/Cards/Cards";
import "./App.css";
// import { useCallback, useState } from "react";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact element={<Cards />} path="/"></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
