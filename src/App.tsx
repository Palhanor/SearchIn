// TODO: Elaborar o sistema de seleção (ir para selecionados e entrar na lista de sites a serem abertos)
// TODO: Criar a classe para objetos do tipo Website
// TODO: Implementar o sistema de busca

import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Search from "./components/Search";
import data from "./service/mock-API.json";
import "./App.scss";

function App() {
  const [websites, setWebsites] = useState<any>([]);

  const [sidebarIsVisible, setSidebarIsVisible] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    setWebsites(data.websites);
  }, []);

  return (
    <>
      <Navigation
        sidebarIsVisible={sidebarIsVisible}
        setSidebarIsVisible={setSidebarIsVisible}
      />
      <Sidebar sidebarIsVisible={sidebarIsVisible} websites={websites} />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      {/* <div className="modal-background"></div> */}
    </>
  );
}

export default App;
