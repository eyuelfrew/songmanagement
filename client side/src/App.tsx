import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AddSong from "./components/AddSong";
import Songs from "./pages/SongsPage";
import ViewPage from "./pages/ViewPage";
import EditSong from "./pages/EditSong";
import Statistis from "./pages/Statistis";
import Artists from "./pages/Artists";

const App = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Routes View  */}
      <Routes>
        <Route path={"/"} element={<Songs />}></Route>
        <Route path={"/songstat"} element={<AddSong />}></Route>
        <Route path={"/newsong"} element={<AddSong />}></Route>
        <Route path={"/song/:id"} element={<ViewPage />}></Route>
        <Route path={"/edit/:id"} element={<EditSong />}></Route>
        <Route path={"/statistics"} element={<Statistis />}></Route>
        <Route path={"/artists"} element={<Artists />} />
      </Routes>
    </>
  );
};

export default App;
