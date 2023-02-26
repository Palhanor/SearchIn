// TODO: Criar uma nova logo e icone para o SearchIn
// TODO: Inserir o sistema de busca multipla como na versão original
// TODO: Adicionar um sinalizador quantas abas serão abertas
// TODO: Adicionar o Search _ in _ na area inferior

// TODO: Implementar a busca multipla diferenciada - endereça cada query para um ou mais buscador selecionado, e se não endereçar vai para todos
// TODO: Implementar a busca multipla combinada - usa um valor inicial ou comum para todas as variações de busca

// TODO: Fazer a interface mobile para atribuir responsividade (usar sistema de navegação inferior)

import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Search from "./components/Search";
import api from "./service/mockAPI.json";
import Website from "./interfaces/website";
import "./App.scss";

function App() {
  const [websites, setWebsites] = useState<Website[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [sidebarIsVisible, setSidebarIsVisible] = useState<boolean>(true);

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
        sidebarIsVisible={sidebarIsVisible}
        setSidebarIsVisible={setSidebarIsVisible}
      />
      <Sidebar
        sidebarIsVisible={sidebarIsVisible}
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
