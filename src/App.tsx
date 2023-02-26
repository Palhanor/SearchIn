// TODO: Implementar sistema de buscador default
// TODO: Implementar sistema de buscadores favoritados

import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Search from "./components/Search";
import api from "./service/mockAPI.json";
import Website from "./interfaces/website";
import Tabs from "./interfaces/tabs";
import "./App.scss";

function App() {
  const [websites, setWebsites] = useState<Website[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [sidebarIsVisible, setSidebarIsVisible] = useState<boolean>(true);
  const [sidebarContent, setSidebarContent] = useState<Tabs>("Select");

  useEffect(() => {
    const data = api.websites;
    setWebsites(
      data.map((website) => {
        const newWebsite: Website = new Website(
          website.id,
          website.name,
          website.url,
          website.search,
          website.lastValue,
          website.categories,
          website.concat
        );
        return newWebsite;
      })
    );
  }, []);

  return (
    <>
      <Navigation
        sidebarContent={sidebarContent}
        setSidebarIsVisible={setSidebarIsVisible}
        setSidebarContent={setSidebarContent}
      />
      <Sidebar
        sidebarIsVisible={sidebarIsVisible}
        sidebarContent={sidebarContent}
        websites={websites}
        setWebsites={setWebsites}
      />
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        websites={websites}
      />
    </>
  );
}

export default App;
