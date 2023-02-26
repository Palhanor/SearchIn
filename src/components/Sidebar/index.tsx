import { useState } from "react";
import { MdSortByAlpha } from "react-icons/md";
import Card from "./Card";
import Website from "../../interfaces/website";
import "./sidebar.scss";

export default function Sidebar({
  sidebarIsVisible,
  websites,
  setWebsites,
}: {
  sidebarIsVisible: boolean;
  websites: Website[];
  setWebsites: React.Dispatch<React.SetStateAction<Website[]>>;
}) {
  const [filter, setFilter] = useState<string>("");
  const [category, setCategory] = useState<string>("geral");
  const [ascendentOrder, setAscendentOrder] = useState<boolean>(true);

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

  return (
    <>
      <aside
        className={
          sidebarIsVisible ? "sidebar open-sidebar" : "sidebar close-sidebar"
        }
      >
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
          <span className="filters-container__alphabetic" onClick={handleOrder}>
            <MdSortByAlpha size={25} color="#7292a9" />
          </span>
        </div>

        <div className="card-group">
          <h2 className="card-group__title">Selecionados</h2>
          {/* <span className="card-group__placeholder" data-selected-placeholder>Não há buscadores selecionados</span> */}
          <div>
            {orderWebsites(websites)
              .filter((website) => website.selected)
              .map((website) => (
                <Card
                  key={website.id}
                  website={website}
                  setWebsites={setWebsites}
                ></Card>
              ))}
          </div>
        </div>

        {/* <div className="card-group">
          <h2 className="card-group__title">Fixados</h2>
          <span className="card-group__placeholder" data-pinned-placeholder>Não há buscadores fixados</span>
          <div></div>
        </div> */}

        <div className="card-group">
          <h2 className="card-group__title">Todos</h2>
          <div>
            {orderWebsites(websites)
              .filter(
                (website) =>
                  website.name.toLowerCase().includes(filter) &&
                  website.categories.indexOf(category) !== -1 &&
                  !website.selected
              )
              .map((website) => (
                <Card
                  key={website.id}
                  website={website}
                  setWebsites={setWebsites}
                ></Card>
              ))}
          </div>
        </div>
      </aside>
    </>
  );
}
