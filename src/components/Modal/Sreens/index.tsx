export function Generics() {
  return (
    <>
      <h1>Busca múltipla genérica</h1>
      <h2>O que é busca múltipla genérica?</h2>
      <p>
        A busca múltipla genérica é uma técnica que consiste em executar várias
        buscas simultaneamente através de um único valor inserido no campo de
        busca. Essa abordagem permite que diferentes buscas sejam realizadas em
        um ou mais mecanismos de busca. Por exemplo, é possível executar a busca
        por "Linux" e "Windows" no Google, utilizando apenas uma sentença "Linux
        | Windows".
      </p>
      <p>
        A estrutura da busca múltipla genérica é simples: cada sub-busca é
        separada por um caractere especial "|" (pipe). Dessa forma, podemos
        realizar quantas sub-buscas quisermos, sem nos limitarmos a apenas um
        mecanismo de busca. Por exemplo, podemos executar a busca por "Capinha
        de celular" e "Pen drive" na Amazon e AliExpress simultaneamente,
        bastando selecionar ambos os sites e inserir o valor "Capinha de celular
        | Pen drive" no campo de busca do Searchin.
      </p>
      <h2>Exemplo prático</h2>
      <p>
        Aqui temos um exemplo prático de como usar a busca múltipla genérica
        para pesquisar por "Ada Lovelace" e "Alan Turing" no Google e na
        Wikipedia. O campo de pré-visualização mostra os termos de busca
        separados e os sites que serão usados para realizar a pesquisa. No caso
        deste exemplo, serão abertas quatro abas de navegador.
      </p>
      <img
        src="./exemplos/generica.png"
        alt="Exemplo da busca multipla genérica"
      />
      <h2>Permissões do navegador</h2>
      <p>
        É importante lembrar que, por questões de segurança, o navegador pode
        bloquear a primeira pesquisa que exija a abertura de várias janelas.
        Portanto, é necessário conceder permissão para que o Searchin abra novas
        janelas. Essa permissão pode ser concedida de diferentes maneiras,
        dependendo do navegador utilizado. Abaixo, explicamos como permitir a
        abertura de novas janelas no Google Chrome.
      </p>
      <img
        src="./exemplos/permissao.png"
        alt="Conceder permissão para o Searchin"
      />
    </>
  );
}

export function Advanced() {
  return (
    <>
      <h1>Busca múltipla específica</h1>
      <h2>O que é busca múltipla específica?</h2>
      <p>
        A busca múltipla específica consiste em definir qual busca deve ser
        realizada por qual buscador. Isso é feito ao separar uma busca simples
        em diferentes partes, onde cada qual será direcionada para um website
        selecionado, de acordo com a ordem de seleção dos buscadores. Assim,
        podemos realizar as buscas por "Celular Samsung" na Amazon e "Memes de
        gatos" no YouTube a partir da sentença "Celular Samsung ^ Memes de
        gatos" (desde que Amazon e YouTube estejam selecionados nessa mesma
        ordem).
      </p>
      <p>
        Este formato de buscas é mais avançado e consegue endereçar uma ou mais
        buscas para cada buscador. Sua utilização consiste simplesmente em
        quebrar as sentenças atraves do separador "^", no que a primeira parte
        será endereçada ao primeiro buscador selecionado e assim sucessivamente.
        Desta forma, é importante estar atento à ordem de seleção dos buscadores
        e à ordem de disposição dos blocos de busca, para que haja alguma
        coerência entre ambas.
      </p>
      <h2>Exemplo prático</h2>
      <p>
        Aqui nós podemos ver um exemplo de uso da funcionalidade, onde estamos
        realizando três buscas, sendo a primeira por "Receita de Strogonoff" no
        YouTube, a segunda por "Mi Band 7" no AliExpress e por fim, por "JoJo"
        na Crunchyroll.
      </p>
      <img
        src="./exemplos/especifica.png"
        alt="Exemplo da busca multipla específica"
      />
      <h2>Buscas combinadas</h2>
      <p>
        Também é possível combinar os dois formatos de busca, ou seja, a busca
        genérica com a específica. Isso permite que um dos buscadores realize
        mais de uma sub-busca. Para tal, primeiramente configuramos a busca
        específica ao endereçar um valor para cada buscador, e só então
        quebramos o valor de uma busca em diversas sub-buscas genéricas.
      </p>
      <img
        src="./exemplos/combinada.png"
        alt="Exemplo da busca multipla combinada"
      />
      <h2>Casos excepcionais</h2>
      <h3>Mais buscas que buscadores</h3>
      <p>
        Caso ocorra de um valor ficar sem um respectivo buscador, essa sub-busca
        será descartada ao disparar a busca do Searchin. No exemplo abaixo, o
        último valor será descartado por não estar endereçado a nenhum buscador.
      </p>
      <img
        src="./exemplos/caso1.png"
        alt="Caso onde há mais sub-buscas que buscadores"
      />
      <h3>Mais buscadores que buscas</h3>
      <p>
        Já caso sobrem um ou mais buscadores, estes serão endereçados para a
        ultima busca avançada. No caso a seguir temos que os dois últimos
        valores serão endereçados à todos os buscadores restantes, que neste
        caso são Amazon, Buscapé e AliExpress.
      </p>
      <img
        src="./exemplos/caso2.png"
        alt="Caso onde há mais buscadores que sub-buscas"
      />
      <h2>Permissões do navegador</h2>
      <p>
        É importante lembrar que, por questões de segurança, o navegador pode
        bloquear a primeira pesquisa que exija a abertura de várias janelas.
        Portanto, é necessário conceder permissão para que o Searchin abra novas
        janelas. Essa permissão pode ser concedida de diferentes maneiras,
        dependendo do navegador utilizado. Abaixo, explicamos como permitir a
        abertura de novas janelas no Google Chrome.
      </p>
      <img
        src="./exemplos/permissao.png"
        alt="Conceder permissão para o Searchin"
      />
    </>
  );
}

export function Default() {
  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return (
    <>
      <h1>Configurar buscador padrão</h1>
      <h2>O que é um buscador padrão?</h2>
      <p>
        Ao definir um buscador padrão no Searchin, você garante que este
        buscador será automaticamente selecionado toda vez que você acessar a
        plataforma ou recarregar a página. Isso significa que você não precisará
        selecionar manualmente o buscador a cada vez que realizar uma pesquisa.
      </p>
      <p>
        É importante notar que somente um buscador padrão pode ser definido de
        cada vez, e quando um novo buscador padrão for selecionado, ele
        substituirá o anterior.
      </p>
      <img
        src="./exemplos/padrao_botao.png"
        alt="Área da barra lateral responsável pela configuração do buscador padrão"
      />
      <h2>Exemplo prático</h2>
      <p>
        No exemplo abaixo, o Duckduckgo é definido como o buscador padrão. Isso
        significa que, sempre que o usuário acessar o Searchin, o buscador
        Duckduckgo já estará selecionado por padrão.
      </p>
      <img
        src="./exemplos/padrao.png"
        alt="Exemplo de definição de um buscador padrão"
      />
      <h2>Limpeza do buscador padrão</h2>
      <p>
        Se você precisar remover um buscador padrão, basta clicar no botão
        "Limpar" abaixo do campo de filtro.
      </p>
      <img
        src="./exemplos/limpar.png"
        alt="Campo responsável pela limpeza do buscado pardão"
      />
      <h2>Problemas com buscador padrão</h2>
      <p>
        O Searchin armazena a configuração do buscador padrão no localStorage do
        navegador. Isso foi feito para evitar a necessidade de um banco de dados
        ou de cadastro e login de usuários. No entanto, pode haver problemas
        caso o localStorage seja corrompido ou caso ocorra uma atualização que
        quebre o formato de armazenamento adotado anteriormente. Se você estiver
        enfrentando problemas ao manipular o buscador padrão, é recomendado que
        você limpe o armazenamento local clicando no botão abaixo.
      </p>
      <button className="clear__storage" onClick={clearLocalStorage}>
        Limpar dados
      </button>
    </>
  );
}

export function Fixed() {
  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return (
    <>
      <h1>Configurar buscadores favoritos</h1>
      <h2>O que são os buscadores favoritos?</h2>
      <p>
        Os buscadores favoritos são uma forma de separar um grupo de buscadores
        mais relevantes dentre aqueles suportados pelo Searchin. Como atualmente
        suportamos cerca de 100 sistemas de busca e pretendemos expandir ainda
        mais esse suporte, é importante ter uma forma de definir os mais
        utilizados e relevantes para cada usuário de acordo com suas
        necessidades particulares.
      </p>
      <p>
        Ao definir um ou mais buscadores como favoritos, eles serão agrupados em
        uma seção intermediária, entre os grupos dos Selecionados e de Todos,
        chamada de Favoritos. Isso permite um acesso mais rápido e fácil aos
        buscadores mais relevantes.
      </p>
      <img
        src="./exemplos/favoritos_botao.png"
        alt="Conceder permissão para o Searchin"
      />
      <h2>Exemplo prático</h2>
      <p>
        Na imagem abaixo, os mecanismos de busca do Google, YouTube, Wikipedia e
        Reddit foram selecionados como favoritos, o que os colocará acima dos
        demais buscadores disponíveis no Searchin.
      </p>
      <img
        src="./exemplos/favoritos.png"
        alt="Conceder permissão para o Searchin"
      />
      <h2>Problemas com buscador padrão</h2>
      <p>
        O Searchin armazena a configuração dos buscadores favoritos no
        localStorage do navegador. Isso foi feito para evitar a necessidade de
        um banco de dados ou de cadastro e login de usuários. No entanto, pode
        haver problemas caso o localStorage seja corrompido ou caso ocorra uma
        atualização que quebre o formato de armazenamento adotado anteriormente.
        Se você estiver enfrentando problemas ao manipular os buscadores
        favoritos, é recomendado que você limpe o armazenamento local clicando
        no botão abaixo.
      </p>
      <button className="clear__storage" onClick={clearLocalStorage}>
        Limpar dados
      </button>
    </>
  );
}
