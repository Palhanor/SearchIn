import Website from "../../interfaces/website";
import searchin from "../../assets/icons/logo-gloopex-beta.svg";
import "./search.scss";

export default function Search({
  websites,
  searchValue,
  setSearchValue,
}: {
  websites: Website[];
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleSearchInputValue = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setSearchValue(() => event.target.value);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    websites.forEach((website) => {
      const regEx: RegExp = /(?:\b|\s+)\|(?:\b|\s+)/g;
      const queryList: string[] = searchValue.split(regEx);

      if (website.selected) {
        if (searchValue.length == 0) {
          window.open(`${website.url}`, "_blank");
        } else {
          queryList.forEach((query) => {
            window.open(
              `${website.search}${query}${website.lastValue}`,
              "_blank"
            );
          });
        }
      }
    });

    setSearchValue(() => "");
  };

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
