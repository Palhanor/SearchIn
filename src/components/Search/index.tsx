import { useEffect, useState } from "react";
import Preview from "./Preview";
import Website from "../../interfaces/website";
import searchin from "../../assets/icons/searchin_logo.svg";
import "./search.scss";

export default function Search({ websites }: { websites: Website[] }) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [advancedQueries, setAdvancedQueries] = useState<string[]>([""]);
  const [selectedWebsites, setSelectedWebsites] = useState<Website[]>([]);

  useEffect(() => {
    setSelectedWebsites(() => getSelectedWebsites(websites));
  }, [websites]);

  const handleSearchValues = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchValue(() => event.target.value);
    setAdvancedQueries(() => getAdvancedQueries(event.target.value));
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (isAdvancedSearch()) advancedSearch();
    else basicSearch();

    clearSearchValues();
  };

  const advancedSearch = (): void => {
    for (let i = 0; i < advancedQueries.length; i++) {
      const query = advancedQueries[i];
      const basicQueries: string[] = query.split(/(?:\b|\s+)\|(?:\b|\s+)/g);
      const website: Website = selectedWebsites[i];
      const isLastQuerie: boolean = i == advancedQueries.length - 1;
      const theresMoreWebsites: boolean = selectedWebsites.length > i;
      basicQueries.forEach((query) => {
        if (website) {
          openWebsite(website.search, query, website.lastValue);
          if (isLastQuerie && theresMoreWebsites) {
            for (let j = i + 1; j < selectedWebsites.length; j++) {
              const nextWebsites = selectedWebsites[j];
              openWebsite(nextWebsites.search, query, nextWebsites.lastValue);
            }
          }
        }
      });
    }
  };

  const basicSearch = (): void => {
    const inputIsEmpty: boolean = !searchValue;
    const basicQueries = advancedQueries[0].split(/(?:\b|\s+)\|(?:\b|\s+)/g);
    selectedWebsites.forEach((website) => {
      if (inputIsEmpty) {
        window.open(`${website.url}`, "_blank");
      } else {
        basicQueries.forEach((query) =>
          openWebsite(website.search, query, website.lastValue)
        );
      }
    });
  };

  const openWebsite = (initial: string, value: string, final: string): void => {
    window.open(`${initial}${value}${final}`, "_blank");
  };

  const clearSearchValues = (): void => {
    setSearchValue(() => "");
    setAdvancedQueries(() => [""]);
  };

  const isAdvancedSearch = (): boolean => {
    return /(?:\b|\s+)\^(?:\b|\s+)/g.test(searchValue);
  };

  const getAdvancedQueries = (value: string): string[] => {
    return value.split(/(?:\b|\s+)\^(?:\b|\s+)/g);
  };

  const getSelectedWebsites = (websites: Website[]): Website[] => {
    return websites
      .filter((website) => website.selected)
      .map((website) => website);
  };

  return (
    <main className="search">
      <img className="searchin-logo" src={searchin} alt="SearchIn" />
      <span className="searchin-slogan">
        Buscas nos principais sites do mercado
      </span>
      <form className="query" onSubmit={handleSearch}>
        <input
          type="text"
          className="query__input"
          placeholder="Busque o que quiser, onde quiser"
          value={searchValue}
          onChange={handleSearchValues}
        />
        <button className="query__button"></button>
      </form>
      <Preview
        advancedQueries={advancedQueries}
        selectedWebsites={selectedWebsites}
        isAdvancedSearch={isAdvancedSearch}
      />
    </main>
  );
}
