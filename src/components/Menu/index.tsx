export default function Menu() {
  return (
    <>
      <aside className="menu">
        <header className="menu__header">
          <img
            className="menu__logo"
            src="./assets/image/icons/logo-gloopex.svg"
            alt="Gloopex logo"
          />
          <span className="menu__close"></span>
        </header>

        <div className="menu__all">
          <ul className="menu__navigation">
            <li className="menu__navigation-item menu__navigation-item--active">
              Sobre o Gloopex
            </li>
            <li className="menu__navigation-item">Buscadores Fixados</li>
            <li className="menu__navigation-item">Buscador Padrão</li>
            <li className="menu__navigation-item">Ajuda</li>
          </ul>

          <section className="menu__section">
            <div className="menu__section-navigation">
              <span className="menu__section-navigation--return"></span>
              <h2 className="menu__section-navigation--title">Ajuda</h2>
            </div>
            <div className="menu__content">
              <h3 className="menu__content-title">Gloopex está falhando?</h3>
              <p className="menu__content-text">
                Caso haja algum problema no sistema, tente resolver clicando no
                botão abaixo:
              </p>
              <input
                className="menu__content-button"
                type="button"
                value="Restaurar Gloopex"
              />
              <h3 className="menu__content-title">Ferramentas</h3>
              <p className="menu__content-text">
                Aqui você pode descobrir e entender como usar todas as
                ferramentas disponíveis no nosso sistema!
              </p>
              <ul className="menu__content-cards">
                <li className="menu__content-card">
                  <h4 className="menu__content-card--title">Abrir websites</h4>
                  <p className="menu__content-card--description">
                    É possível abrir as páginas iniciais dos websites suportados
                    apenas os selecionando e então realizando uma busca com o
                    campo de busca em branco.
                  </p>
                </li>
                <li className="menu__content-card">
                  <h4 className="menu__content-card--title">
                    Busca simultanea
                  </h4>
                  <p className="menu__content-card--description">
                    É possível selecionar mais de um buscador, e desta forma,
                    qualquer valor adicionado no campo de busca será usado para
                    retornar o resultado em todos os buscadores selecionados.
                  </p>
                </li>
                <li className="menu__content-card">
                  <h4 className="menu__content-card--title">Busca multipla</h4>
                  <p className="menu__content-card--description">
                    Ainda, é possível adicionar diversos valores a serem
                    buscados em buscas separadas. Para isso é necessário apenas
                    separar os diferentes valores de busca usando o simbolo " |
                    ".
                  </p>
                </li>
                <li className="menu__content-card">
                  <h4 className="menu__content-card--title">Buscador Padrão</h4>
                  <p className="menu__content-card--description">
                    Aqui no próprio menu do sistema há uma ferramenta para
                    configuração de uma buscador padrão que será selecionado
                    automaticamente sempre que a plataforma for acessada.
                  </p>
                </li>
                <li className="menu__content-card">
                  <h4 className="menu__content-card--title">
                    Buscadores Fixados
                  </h4>
                  <p className="menu__content-card--description">
                    Por fim, você pode personalizar ainda mais a sua barra
                    lateral de buscadores ao selecionar aqueles que ficarão
                    fixados no topo através da configuração de fixados também
                    presente no menu.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          <section className="menu__section">
            <div className="menu__section-navigation">
              <span className="menu__section-navigation--return"></span>
              <h2 className="menu__section-navigation--title">
                Buscadores Fixados
              </h2>
            </div>
            <div className="menu__content">
              <h3 className="menu__content-title">Fixados</h3>
              <p className="menu__content-text">
                Selecione os buscadores que devem aparecer destacados no topo da
                barra lateral:{" "}
              </p>
              <div className="menu__content-container"></div>
            </div>
          </section>

          <section className="menu__section">
            <div className="menu__section-navigation">
              <span className="menu__section-navigation--return"></span>
              <h2 className="menu__section-navigation--title">
                Buscador Padrão
              </h2>
            </div>
            <div className="menu__content">
              <h3 className="menu__content-title">Padrão</h3>
              <p className="menu__content-text">
                Selecione o buscador que deve ser marcado como selecionado por
                padrão:{" "}
              </p>
              <div className="menu__content-container"></div>
            </div>
          </section>

          <section className="menu__section">
            <div className="menu__section-navigation">
              <span className="menu__section-navigation--return"></span>
              <h2 className="menu__section-navigation--title">
                Sobre o Gloopex
              </h2>
            </div>
            <div className="menu__content">
              <h3 className="menu__content-title">Projeto</h3>
              <p className="menu__content-text">
                O Gloopex se trata de um projeto de buscador univeral, ou um
                buscador de buscadores. Fundamentalmente se trata de uma
                ferramenta utilizada para acessar de forma cômoda e direta
                diversas das princiapis plataformas do mercado, através de uma
                integração com seus sistemas de busca. Search anything,
                anywhere!
              </p>
              <h3 className="menu__content-title">Página inicial</h3>
              <p className="menu__content-text">
                É possível tornar o Gloopex sua página inicial! Para isso basta
                arrastar a logo abaixo até o campo "Home" do seu navegador:{" "}
              </p>
              <a
                href="file:///C:/Users/Computador/Desktop/Gloopex/index.html"
                className="menu__content-gloopex"
              ></a>
              <h3 className="menu__content-title">Equipe</h3>
              <ul className="menu__content-cards">
                <li className="menu__content-card">
                  <h4 className="menu__content-card--title">Lucas Palhano</h4>
                  <p className="menu__content-card--description">
                    Idealizador do Gloopex e desenvolvedor do Minimum Viable
                    Product.
                  </p>
                  <div className="menu__content-card--medias">
                    <a
                      href="https://github.com/Palhanor"
                      target="_blank"
                      className="menu__content-card--media-item menu__content-card--media-github"
                    ></a>
                    <a
                      href="https://br.linkedin.com/in/lucaspalhano"
                      target="_blank"
                      className="menu__content-card--media-item menu__content-card--media-linkedin"
                    ></a>
                    <a
                      href="https://www.instagram.com/palhano_o/"
                      target="_blank"
                      className="menu__content-card--media-item menu__content-card--media-instagram"
                    ></a>
                  </div>
                </li>
                <li className="menu__content-card">
                  <h4 className="menu__content-card--title">Bruno Palhano</h4>
                  <p className="menu__content-card--description">
                    Colaborador com o desenvolvimento da primeira versão
                    estável.
                  </p>
                  <div className="menu__content-card--medias">
                    <a
                      href=""
                      target="_blank"
                      className="menu__content-card--media-item menu__content-card--media-github"
                    ></a>
                    <a
                      href=""
                      target="_blank"
                      className="menu__content-card--media-item menu__content-card--media-linkedin"
                    ></a>
                    <a
                      href=""
                      target="_blank"
                      className="menu__content-card--media-item menu__content-card--media-instagram"
                    ></a>
                  </div>
                </li>
              </ul>
              <h3 className="menu__content-title">Contatos</h3>
              <p className="menu__content-text">
                Nosso e-mail é... Ainda não temos e-mail!
              </p>
            </div>
          </section>
        </div>
      </aside>
    </>
  );
}
