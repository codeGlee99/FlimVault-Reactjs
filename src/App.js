import "./App.css";
import Data from "./Component/Data"
import Navbar from "./Component/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
  useSearchParams,
  json,
} from "react-router-dom";
import WatchList from "./Component/WatchList";
import Banner from "./Component/Banner";
import { useEffect, useState } from "react";

function App() {
  const [watchlist, setWatchList] = useState([]);

  let handleWatchList = (dataObj) => {
    let newWatchLst = [...watchlist, dataObj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchLst));
    setWatchList(newWatchLst);
    console.log(newWatchLst, "newWatchLst");
  };

  console.log(watchlist, "watchList");

  let handleRemoveWatchList = (dataObj) => {
    let filterdWatchLst = watchlist.filter((watchlist) => {
      return watchlist.id != dataObj.id;
    });

    setWatchList(filterdWatchLst);
  };

  useEffect(() => {
    let localwatchList = localStorage.getItem("moviesApp");
    if (!localwatchList) {
      return;
    }
    setWatchList(JSON.parse(localwatchList));
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Data
                handleWatchList={handleWatchList}
                handleRemoveWatchList={handleRemoveWatchList}
                watchlist={watchlist}
              />
            </>
          }
        ></Route>
        <Route
          path="/watchlist"
          element={<WatchList watchlist={watchlist} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
