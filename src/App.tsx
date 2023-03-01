// TODO: Desenvolver as telas de Default e Fixed no Modal

import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Search from "./components/Search";
import api from "./service/mockAPI.json";
import Website from "./interfaces/website";
import sidebarTabs from "./interfaces/sidebarTabs";
import Modal from "./components/Modal";
import modalTabs from "./interfaces/modalTabs";
import "./App.scss";

function App() {
  const [websites, setWebsites] = useState<Website[]>([]);
  const [sidebarIsVisible, setSidebarIsVisible] = useState<boolean>(true);
  const [sidebarContent, setSidebarContent] = useState<sidebarTabs>("Select");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalWindow, setModalWindow] = useState<modalTabs>("Generics");

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
        if (website.name === localStorage.getItem("default") || "")
          newWebsite.selected = true;
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
        setIsOpen={setIsOpen}
        setWebsites={setWebsites}
        setModalWindow={setModalWindow}
      />
      <Search websites={websites} />
      {isOpen && <Modal setIsOpen={setIsOpen} modalWindow={modalWindow} />}
    </>
  );
}

export default App;
