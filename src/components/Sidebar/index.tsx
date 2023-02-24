import "./sidebar.scss";
import { MdSortByAlpha } from "react-icons/md";

export default function Sidebar({
  sidebarIsVisible,
}: {
  sidebarIsVisible: boolean;
}) {
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
          />
          <i className="filters-container__term-cleaner disappear"></i>
          <select
            className="filters-container__categories"
            name="filter-categories"
            id="filter-categories"
            defaultValue={"geral"}
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
          <span className="filters-container__alphabetic">
            <MdSortByAlpha size={25} color="#7292a9" />
          </span>
        </div>

        <div className="card-group">
          <h2 className="card-group__title">Selecionados</h2>
          {/* <span className="card-group__placeholder" data-selected-placeholder>Não há buscadores selecionados</span> */}
          <div>
            {/* AQUI DEVEM FICAR TODOS OS CARDS DOS BUSCADORES SELECIONADOS PARA A BUSCA */}
          </div>
        </div>

        {/* <div className="card-group">
          <h2 className="card-group__title">Fixados</h2>
          <span className="card-group__placeholder" data-pinned-placeholder>Não há buscadores fixados</span>
          <div></div>
        </div> */}

        <div className="card-group">
          <h2 className="card-group__title">Todos</h2>
          <div>{/* AQUI DEVEM FICAR TODOS OS CARDS DOS BUSCADORES */}</div>
        </div>
      </aside>
    </>
  );
}
