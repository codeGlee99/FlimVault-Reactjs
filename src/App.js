import "./App.css";
import Movies from "./Component/Movies";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WatchList from "./Component/WatchList";
import Banner from "./Component/Banner";

function App() {
  return (
   
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies />
              </>
            }
          ></Route>
          <Route path="/watchlist" element={<WatchList />}></Route>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
