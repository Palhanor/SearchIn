import { useEffect, useState } from "react";
import Website from "../../interfaces/website";
import searchin from "../../assets/icons/searchin_logo.svg";
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
  const [queries, setQueries] = useState<string[]>([]);
  const [selectedWebsites, setSelectedWebsites] = useState<Website[]>([]);

  useEffect(() => {
    setSelectedWebsites(() => searchEngineList(websites));
  }, [websites]);

  const handleSearchInputValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchValue(() => event.target.value);
    setQueries(() => queriesList(event.target.value));
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    selectedWebsites.forEach((selectedWebsite) => {
      if (selectedWebsite.selected) {
        if (!searchValue) window.open(`${selectedWebsite.url}`, "_blank");
        else
          queries.forEach((query) => {
            window.open(
              `${selectedWebsite.search}${query}${selectedWebsite.lastValue}`,
              "_blank"
            );
          });
      }
    });

    clearSearchValue();
  };

  const clearSearchValue = (): void => {
    setSearchValue(() => "");
    setQueries(() => []);
  };

  const queriesList = (value: string): string[] => {
    const regEx: RegExp = /(?:\b|\s+)\|(?:\b|\s+)/g;
    const queryList: string[] = value.split(regEx);
    return queryList;
  };

  const searchEngineList = (websites: Website[]): Website[] => {
    return websites
      .filter((website) => website.selected)
      .map((website) => website);
  };

  const numberSearches = (
    queries: string[],
    selectedWebsites: Website[]
  ): number => {
    if (queries.length == 0 && selectedWebsites.length > 0)
      return selectedWebsites.length;
    return queries.length * selectedWebsites.length;
  };

  const numberSearchesAlert = (num: number): string => {
    if (num < 10) return "number_occurrences number_occurrences--regular";
    else if (num >= 10 && num < 20)
      return "number_occurrences number_occurrences--atention";
    else if (num >= 20 && num < 30)
      return "number_occurrences number_occurrences--alert";
    else return "number_occurrences number_occurrences--danger";
  };

  return (
    <>
      <main className="search">
        <img className="searchin-logo" src={searchin} alt="SearchIn" />
        <span className="searchin-slogan">
          Buscas avançadas nos principais websites
        </span>
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
        <section className="expected_result">
          {
            <code
              className={numberSearchesAlert(
                numberSearches(queries, selectedWebsites)
              )}
            >
              {numberSearches(queries, selectedWebsites)}
            </code>
          }{" "}
          Search{" "}
          {searchValue &&
            queries.map((query) => (
              <code key={query} className="search_snippet">
                "{query}"
              </code>
            ))}
          in{" "}
          {selectedWebsites.map((website) => (
            <code key={website.id} className="search_snippet">
              {website.name}
            </code>
          ))}
        </section>
      </main>
    </>
  );
}
