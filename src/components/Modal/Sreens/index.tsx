export function Generics() {
  return (
    <>
      <h1>Busca múltipla genérica</h1>
      <h2>Explicação</h2>
      <p>
        A busca múltipla genérica consiste em executar diversas buscas através
        de um valor único inserido no input de buscas. Através desta abordagem é
        possível por exemplo executar duas pesquisas distintas em um ou mais
        buscadores. Por exemplo, através desta, podemos disparar respectivamente
        as buscas por "Linux" e "Windows" dentro do Google, utilizando apenas
        uma sentença "Linux | Windows".
      </p>
      <p>
        Tal formato de busca pode permite uma quantidade indefinida de
        sub-buscas, bastando para isso separar cada sub-busca uma da outra
        através do separador: |. Com isso, podemos realizar buscas duplas,
        triplas, quadruplas e assim por diante, náo se limitando a apenas um
        buscador. Por exemplo, é possível até mesmo executar as buscas por
        "Capinha de celular" e "Pen drive" em ambas Amazon e AliExpress,
        bastando que ambas estejas selecionadas e que seja insrido o valor
        "Capinha de celular | Pen drive" dentro do input de buscas do Searchin.
      </p>
      <h2>Exemplo</h2>
      <p>
        Aqui nós temos o exemplo onde buscamos por "Ada Lovelace" e "Alan
        Turing" em ambos os websites Google e Wikipedia. Perceba que dentro do
        campo de pre-visualização nós ja podemos observar os termos que serão
        bucados de forma separada, tal como os websites que serão utilizados
        para realizar a busca. Ainda, temos a quantidade de buscas que serão
        realizadas, que representam a quantidade de abas que serão abertas, e
        neste nosso caso, serão 4.
      </p>
      <img
        src="./exemplos/generica.png"
        alt="Exemplo da busca multipla genérica"
      />
      <h2>Permissão do navegador</h2>
      <p>
        É importante lembrar que o navegador irá bloquear a primeira pesquisa
        que demande a abertura de mais de uma janela por motivos de segurança.
        Desta forma, é preciso dar permissão para que o Searchin abra novas
        janelas. Tal permissão irá ser concedida de uma forma forma diferente a
        depender do navegador. A baixo estaremos exibindo a permissão dentro do
        Google Chrome:
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
      <h2>Explicação</h2>
      <p>
        A busca múltipla específica consiste em definir qual busca deve ser
        realizada por qual buscador. Isso será realizado ao separar uma busca
        simples em diferentes partes, onde cada qual será direcinada para um
        website selecionado, de acordo com a ordem de seleção. Assim, poderemos
        por exemplo, realizar as buscas por "Celular Samsung" na Amazon e "Memes
        de gatos" no YouTube a partir da sentença "Celular Samsung ^ Memes de
        gatos" (desde que Amazon e Youtube estejam selecionados nesta mesma
        ordem).
      </p>
      <p>
        Este formato de buscas é mais avançado e consegue endereçar uma ou mais
        buscas para cada buscador. É importante estar atento para a ordem de
        seleção dos buscadores, para que haja uma coerência com a ordem das
        sub-buscas inseridas no input de busca do Searchin.
      </p>
      <h2>Exemplo</h2>
      <p>
        Aqui nós podemos ver um caso onde estamos realizando três buscas, sendo
        a primeira por "Receita de Strgonoff" no YouTube, a segunda por "Mi Band
        7" no AliExpress e por fim, por "JoJo" na Crunchyroll:
      </p>
      <img
        src="./exemplos/especifica.png"
        alt="Exemplo da busca multipla específica"
      />
      <h2>Buscas combinadas</h2>
      <p>
        É possível combinar os dois formatos de busca, ou seja, a busca genérica
        com a específica. Esta combinação é relevante pois permite que um dos
        buscadores realize mais que uma única sub-busca. Para tal,
        priimeiramente configuramos a busca específica ao endereçar um valor
        para cada buscador, e só então quebramos o valor de uma busca em
        diversas sub-buscas através do separado das buscas genéricas. Podemos
        ver tal comportamento no exemplo a seguir:
      </p>
      <img
        src="./exemplos/combinada.png"
        alt="Exemplo da busca multipla combinada"
      />
      <h2>Casos excepcionais</h2>
      <h3>Mais buscas que buscadores</h3>
      <p>
        Caso ocorra de um valor ficar sem um respectivo buscador, então esta
        sub-busca será descartada ao disparar a busca do Searchin. No exemplo a
        seguir temos que o último valor será descartado por não estar endereçado
        à qualquer buscador.
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
      <h2>Permissão do navegador</h2>
      <p>
        É importante lembrar que o navegador irá bloquear a primeira pesquisa
        que demande a abertura de mais de uma janela por motivos de segurança.
        Desta forma, é preciso dar permissão para que o Searchin abra novas
        janelas. Tal permissão irá ser concedida de uma forma forma diferente a
        depender do navegador. A baixo estaremos exibindo a permissão dentro do
        Google Chrome:
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
      <h2>Explicação</h2>
      <p>
        A definição de um buscador padrão garante que ao acessar o Searchin, o
        buscador padrão já estará selecionado, não sendo necessário realizar sua
        seleção manualmente. Igualmente, caso seja realizado um recarregamento
        da página, este buscador já estará prontamente selecionado ao fim do
        carregamento.
      </p>
      <p>
        É importante lembrar que só pode ser definido um único buscador padrão,
        de tal forma que ao selecionar um outro buscador o anterior será
        substituido pelo novo.
      </p>
      <img
        src="./exemplos/padrao_botao.png"
        alt="Conceder permissão para o Searchin"
      />
      <h2>Exemplo</h2>
      <p>
        Aqui temos o buscador Google definido como o padrão, o que significa que
        sempre ao carregar a pagina o Google já estará selecionado para ser
        utilizado em pesquisas.
      </p>
      <img
        src="./exemplos/padrao.png"
        alt="Conceder permissão para o Searchin"
      />
      <h2>Limpar</h2>
      <p>
        É importante destacar que, caso haja a necessidade de remover buscadores
        padrão, basta clicar no botão "Limpar" logo abaixo do input de filtro.
      </p>
      <img
        src="./exemplos/limpar.png"
        alt="Conceder permissão para o Searchin"
      />
      <h2>Problemas com buscador padrão</h2>
      <p>
        Atualmente, o Searchin realiza o armazenamento do buscador padrão dentro
        do próprio navegador atraves do localStorage, como forma de evitar a
        necessidade de um banco de dados e realização de cadastro e logins de
        usuários.
      </p>
      <p>
        Desta forma, podem ocorrer inconssistências, por exemplo caso o
        localStorage seja corrompido ou caso alguma atualização quebre com o
        formato de armazenamento adotado anteriormente. Desta forma, caso seja
        identificados problemas na manipulação do buscado padrão, realize uma
        limpeza do armazenamento local clicando no botão abaixo.
      </p>
      <button className="clear__storage" onClick={clearLocalStorage}>
        Limpar dados salvos
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
      <h2>Explicação</h2>
      <p>
        A configuração de buscadores favoritos tem como função separar um grupos
        de buscadores mais relevantes entre aqueles atualmente suportados pelo
        Searchin. Dado que atualmente suportamos aproximadamente 100 sistemas de
        busca, e pretendemos expandir o suporte para ainda mais websites, é
        importante conseguir definir aqueles que tem uma posição privilegiada
        dado as suas necessidades de uso.
      </p>
      <p>
        Desta forma, ao definir um ou mais buscadores como favoritos, estes irão
        para um agrupamento intermediário, entre os Selecionados e Todos,
        chamado de Favoritos.
      </p>
      <img
        src="./exemplos/favoritos_botao.png"
        alt="Conceder permissão para o Searchin"
      />
      <h2>Exemplo</h2>
      <p>
        Aqui temos os mecanismos do Google, YouTube, Wikipedia e Reddit
        selecionados como favoritos, o que irá fazer com que estes sejam
        colocados loco acima de todos os demais mecanismos disponíveis no
        Searchin.
      </p>
      <img
        src="./exemplos/favoritos.png"
        alt="Conceder permissão para o Searchin"
      />
      <h2>Problemas com buscador padrão</h2>
      <p>
        Atualmente, o Searchin realiza o armazenamento dos buscadores
        favoritados dentro do próprio navegador atraves do localStorage, como
        forma de evitar a necessidade de um banco de dados e realização de
        cadastro e logins de usuários.
      </p>
      <p>
        Desta forma, podem ocorrer inconssistências, por exemplo caso o
        localStorage seja corrompido ou caso alguma atualização quebre com o
        formato de armazenamento adotado anteriormente. Desta forma, caso seja
        identificados problemas na manipulação dos buscadores favoritos, realize
        uma limpeza do armazenamento local clicando no botão abaixo.
      </p>
      <button className="clear__storage" onClick={clearLocalStorage}>
        Limpar dados salvos
      </button>
    </>
  );
}
