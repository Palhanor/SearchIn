import "./search.scss";
import searchin from "../../assets/icons/logo-gloopex-beta.svg";

export default function Search({
  searchValue,
  setSearchValue,
}: {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleSearchInputValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(() => event.target.value);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) =>
    event.preventDefault();

  return (
    <>
      <main className="search">
        {/* <div className="menu-icon"></div> */}
        <img className="gloopex-logo" src={searchin} alt="SearchIn" />
        <span className="gloopex-slogan">Busque o que quiser, onde quiser</span>
        <form className="query" onSubmit={handleSearch}>
          <input
            type="text"
            className="query__input"
            placeholder="Busque o que quiser, onde quiser"
            value={searchValue}
            onChange={handleSearchInputValue}
          />
          <button className="query__button"></button>
        </form>
        {/* <div className="infinity-mobile"></div> */}
      </main>
    </>
  );
}
