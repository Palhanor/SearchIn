# Searchin

O projeto se trata de uma start page com pretensão de vir a ser um buscador personalizável. Sua abordagem se trata da busca direta dentro de mecanismos de busca tradicionais, assim como dentro de buscadores imbutidos em websites famosos, como o Youtube, Amazon, Wikipedia e afins. Com o Searchin é possível não apenas realizar buscas internas nos wesites sem a necessidades de os acessar diretamente, mas também executar buscas avançadas, como a busca multipla, busca múltipla básica e a busca múltipla avançada.

---

## Tecnologias

  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="SQLite shield" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React shield"/>
  <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"/>

---

## Modos de busca

- **Busca simples**: A busca simples se trata de uma querie única, que pode ser buscada por um ou mais websites suportados pelo Searchin. Para realizar a busca basta inserir a querie no input de buscas e selecionar os websites que devem ser utilizados. Desta forma, serão abertas novas abas, uma para cada website selecionado.
- **Busca múltipla básica**: Neste caso a querie inserida no inpur de busca é quebrada em diversas sub-queries. Desta forma, é possível realiza mais que um único valor dentro de cada buscador selecionado. Para realizar esta operação é necessário separar cada sub-querie através do operador "|" (pipe).
- **Busca múltipa avançada**: Por fim, a busca avançada se trata de uma estratégia de endereçamento de queries ou uma série de sub-queries para determinados websites. Esta distribuição é realizada de acordo com a ordem de seleção de cada website, tal como a disposição dos separadores dentro do input de busca. Esta operação pode ser realizada através do operador "^", e pode ser combinada com a busca múltipla básica.

---

## Próximos Passos

- [x] Dar suporte para o mobile através de um design responsivo
- [ ] Verificar buscas que estão quebrando e realizar as correções
- [ ] Criar as interfaces usadas pelos componentes da aplicação
- [ ] Desenvolver testes automatizados para assegurar as regras de negócio
- [ ] Passar a estilização para a biblioteca Styled Components
- [ ] Implementar o sistema de buscas através de shortcuts
- [ ] Fazer uma limpeza nos dados retornados pelo mockAPI.json
- [ ] Utilizar a biblioteca Redux para realizar a gestão de estados
- [ ] Permitir o reajuste de largura da sidebar
- [ ] Realizar correções de performance no React (evitar re-renderização)
- [ ] Implementar tooltips para ajudar com o uso da barra de navegação
- [ ] Mecanismo de histórico de buscas e armazenamentos de buscas repetidas
- [ ] Criar uma API e um sistema back-end para armazenar os dados dos websites suportados

---

## Guia de Estilo

<img src="../SearchIn/public/style-guide.png" alt="Interface do Searchin"/>

---

## Referência Visual

<img src="../SearchIn/public/searchin.png" alt="Interface do Searchin"/>
