import "./App.css";
import { useState } from "react";
import { MenuDrawer } from "./Components/MenuDrawer";
import { Navbar } from "./Components/Navbar";
import { ListBooks } from "./Pages/ListBooks";
import { Route, Routes } from "react-router";
import { Book } from "./Pages/Book";
import { Searcher } from "./Pages/Searcher/Searcher";
import { GiveBook } from "./Pages/GiveBook/GiveBook";

function App() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <>
      <Navbar setIsOpenDrawer={setIsOpenDrawer} />
      <MenuDrawer
        isOpenDrawer={isOpenDrawer}
        setIsOpenDrawer={setIsOpenDrawer}
      />
      <Routes>
        <Route index path="/" element={<ListBooks />} />
        <Route path="/book/:id" element={<Book />} />
        <Route path="/givebook" element={<GiveBook />} />
        <Route path="/searcher" element={<Searcher />} />
      </Routes>
    </>
  );
}

export default App;
{
  /**


      <ListBooks />
  */
}
