import "./App.css";
import { useState } from "react";
import { MenuDrawer } from "./Components/MenuDrawer";
import { Navbar } from "./Components/Navbar";
import { ListBooks } from "./Pages/ListBooks";

function App() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <>
      <Navbar setIsOpenDrawer={setIsOpenDrawer} />

      <MenuDrawer
        isOpenDrawer={isOpenDrawer}
        setIsOpenDrawer={setIsOpenDrawer}
      />

      <ListBooks />
    </>
  );
}

export default App;
