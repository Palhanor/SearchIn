import { useState } from "react";
import Card from "./Card";
import Website from "../../interfaces/website";
import Default from "./Default";
import Fixed from "./Fixed";
import Tips from "./Tips";
import { SidebarProps } from "../../interfaces/props";
import { MdSortByAlpha } from "react-icons/md";
import "./sidebar.scss";

export default function Sidebar({
  sidebarIsVisible,
  sidebarContent,
  websites,
  setIsOpen,
  setWebsites,
  setModalWindow,
}: SidebarProps) {
  const [filter, setFilter] = useState<string>("");
  const [category, setCategory] = useState<string>("geral");
  const [ascendentOrder, setAscendentOrder] = useState<boolean>(true);

  const getFixedWebsites = (): string[] => {
    const fixed: string = localStorage.getItem("fixed") || "";
    const fixedList: string[] = fixed ? JSON.parse(fixed) : [];
    return fixedList;
  };

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFilter(() => event.target.value);
  };

  const handleClearFilter = (): void => {
    setFilter(() => "");
  };

  const handleCategories = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setCategory(event.target.value);
  };

  const handleOrder = (): void => {
    setAscendentOrder((order) => !order);
  };

  const orderWebsites = (websitesList: Website[]): Website[] => {
    const sortedWebsites: Website[] = websitesList.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    return ascendentOrder ? sortedWebsites : sortedWebsites.reverse();
  };

  const listOfGeneralWebsites = (): Website[] => {
    return orderWebsites(websites).filter(
      (website) =>
        website.name.toLowerCase().includes(filter.toLowerCase()) &&
        website.categories.indexOf(category) !== -1 &&
        !website.selected &&
        !getFixedWebsites().includes(website.name)
    );
  };

  const listOfFixedWebsites = (): Website[] => {
    return orderWebsites(websites).filter(
      (website) =>
        website.name.toLowerCase().includes(filter.toLowerCase()) &&
        website.categories.indexOf(category) !== -1 &&
        !website.selected &&
        getFixedWebsites().includes(website.name)
    );
  };

  const listOfSelectedWebsites = (): Website[] => {
    return orderWebsites(websites).filter((website) => website.selected);
  };

  return (
    <>
      <aside
        className={
          sidebarIsVisible ? "sidebar open-sidebar" : "sidebar close-sidebar"
        }
      >
        {sidebarContent === "Select" && (
          <div className="select_tab">
            <div className="filters-container">
              <input
                type="text"
                className="filters-container__term"
                placeholder="Filtrar buscadores"
                onChange={handleFilter}
                value={filter}
              />
              <i
                className={
                  filter
                    ? "filters-container__term-cleaner"
                    : "filters-container__term-cleaner disappear"
                }
                onClick={handleClearFilter}
              ></i>
              <select
                className="filters-container__categories"
                name="filter-categories"
                id="filter-categories"
                defaultValue={"geral"}
                onChange={handleCategories}
              >
                <option value="geral">Geral</option>
                <option value="buscadores">Buscadores</option>
                <option value="videos-filmes">Vídeos e filmes</option>
                <option value="compra-venda">Compra e venda</option>
                <option value="imagens">Imagens</option>
                <option value="musicas">Músicas</option>
                <option value="midiasSociais">Mídias sociais</option>
                <option value="streaming-lives">Streaming e lives</option>
                <option value="jogos-esportes">Jogos e esportes</option>
                <option value="noticias-governamental">
                  Notícias e governamental
                </option>
                <option value="trabalho-estudo">Trabalho e estudo</option>
                <option value="financas">Finanças</option>
                <option value="viagens-hospedagem">Viagens e hospedagem</option>
                <option value="saude-alimentacao">Saúde e alimentação</option>
                <option value="mapas-transporte-restreio">
                  Mapas, transporte e rastreio
                </option>
                {/* <!-- <option value="adultos">Adultos</option> --> */}
                <option value="outros">Outros</option>
              </select>
              <span
                className="filters-container__alphabetic"
                onClick={handleOrder}
              >
                <MdSortByAlpha size={25} color="#7292a9" />
              </span>
            </div>

            <div className="card-group">
              <h2 className="card-group__title">Selecionados</h2>
              <div>
                {listOfSelectedWebsites().map((website) => (
                  <Card
                    key={website.id}
                    website={website}
                    setWebsites={setWebsites}
                  ></Card>
                ))}
              </div>
            </div>

            {getFixedWebsites().length > 0 && (
              <details open={true} className="card-group">
                <summary className="card-group__title">Favorios</summary>
                <div>
                  {" "}
                  {listOfFixedWebsites().map((website) => (
                    <Card
                      key={website.id}
                      website={website}
                      setWebsites={setWebsites}
                    ></Card>
                  ))}
                </div>
              </details>
            )}

            <details open={true} className="card-group">
              <summary className="card-group__title">Todos</summary>
              <div>
                {listOfGeneralWebsites().map((website) => (
                  <Card
                    key={website.id}
                    website={website}
                    setWebsites={setWebsites}
                  ></Card>
                ))}
              </div>
            </details>
          </div>
        )}
        {sidebarContent === "Default" && <Default />}
        {sidebarContent === "Fixed" && <Fixed />}
        {sidebarContent === "Tips" && (
          <Tips setModalWindow={setModalWindow} setIsOpen={setIsOpen} />
        )}
      </aside>
    </>
  );
}
