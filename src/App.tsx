import { useState } from "react";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Search from "./components/Search";
import "./App.scss";

function App() {
  const [sidebarIsVisible, setSidebarIsVisible] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Navigation
        sidebarIsVisible={sidebarIsVisible}
        setSidebarIsVisible={setSidebarIsVisible}
      />
      <Sidebar sidebarIsVisible={sidebarIsVisible} />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      {/* <div className="modal-background"></div> */}
    </>
  );
}

export default App;
