import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CardInfo from "./components/cardInfo/cardInfo";
// import Cards from "./components/Tv_Shows/Cards/Cards";
import Cards from "./components/Movies/Cards/Cards";
import "./App.css";
import Common from "./components/Common/Common";
import TvCards from "./components/Tv_Shows/Cards/Cards";
import MovieCards from "./components/Movies/Cards/Cards";
import UpcomingCards from "./components/Upcoming_Movies/Cards/Cards";
import PopularCards from "./components/Popular_Movies/Cards/Cards";
import Common2 from "./components/Common/Common2";
import Footer from "./components/Footer/Footer";

// import { useCallback, useState } from "react";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact element={<Common2 />} path="/"></Route>
        <Route exact element={<TvCards />} path="shows"></Route>
        <Route exact element={<MovieCards />} path="movies"></Route>
        <Route exact element={<UpcomingCards />} path="upcomingmovies"></Route>
        <Route exact element={<PopularCards />} path="popularmovies"></Route>
      </Routes>
        <Footer />

    </BrowserRouter>
  );
};
export default App;
