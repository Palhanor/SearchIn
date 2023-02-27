// TODO: Refatorar o código

import { useEffect, useState } from "react";
import Preview from "./Preview";
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
  const [specificQueries, setSpecificQueries] = useState<string[]>([""]);
  const [selectedWebsites, setSelectedWebsites] = useState<Website[]>([]);

  useEffect(() => {
    setSelectedWebsites(() => searchSelectedWebsites(websites));
  }, [websites]);

  const handleInputValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchValue(() => event.target.value);
    setSpecificQueries(() => findSpecificQueries(event.target.value));
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (isSpecificMultisearch()) {
      executeSpecificSearch();
    } else {
      executeGenericSearch();
    }
    clearSearchValue();
  };

  const executeSpecificSearch = (): void => {
    for (let i = 0; i < specificQueries.length; i++) {
      const genericQueries: string[] = specificQueries[i].split(
        /(?:\b|\s+)\|(?:\b|\s+)/g
      );
      genericQueries.forEach((query) => {
        const thereIsWebsite: boolean = !!selectedWebsites[i];
        if (thereIsWebsite) {
          openWebsite(
            selectedWebsites[i].search,
            query,
            selectedWebsites[i].lastValue
          );
          const isLastQuerie: boolean = i == specificQueries.length - 1;
          const theresMoreWebsites: boolean = selectedWebsites.length > i;
          if (isLastQuerie && theresMoreWebsites) {
            for (let j = i + 1; j < selectedWebsites.length; j++) {
              openWebsite(
                selectedWebsites[j].search,
                query,
                selectedWebsites[j].lastValue
              );
            }
          }
        }
      });
    }
  };

  const executeGenericSearch = (): void => {
    selectedWebsites.forEach((website) => {
      if (!searchValue) {
        window.open(`${website.url}`, "_blank");
      } else {
        specificQueries.forEach((queries) => {
          const genericQueries: string[] = queries.split(
            /(?:\b|\s+)\|(?:\b|\s+)/g
          );
          genericQueries.forEach((query) => {
            openWebsite(website.search, query, website.lastValue);
          });
        });
      }
    });
  };

  const openWebsite = (initial: string, value: string, final: string): void => {
    window.open(`${initial}${value}${final}`, "_blank");
  };

  const clearSearchValue = (): void => {
    setSearchValue(() => "");
    setSpecificQueries(() => [""]);
  };

  const isSpecificMultisearch = (): boolean => {
    const regEx: RegExp = /(?:\b|\s+)\^(?:\b|\s+)/g;
    return regEx.test(searchValue);
  };

  const findSpecificQueries = (value: string): string[] => {
    const regEx: RegExp = /(?:\b|\s+)\^(?:\b|\s+)/g;
    const queryList: string[] = value.split(regEx);
    return queryList;
  };

  const searchSelectedWebsites = (websites: Website[]): Website[] => {
    return websites
      .filter((website) => website.selected)
      .map((website) => website);
  };

  return (
    <>
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
            onChange={handleInputValue}
          />
          <button className="query__button"></button>
        </form>
        <Preview
          specificQueries={specificQueries}
          selectedWebsites={selectedWebsites}
          isSpecificMultisearch={isSpecificMultisearch}
        />
      </main>
    </>
  );
}
