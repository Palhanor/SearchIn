// TODO: Refatorar o código

import Website from "../../../interfaces/website";
import "./preview.scss"

export default function Preview({
  specificQueries,
  selectedWebsites,
  isSpecificMultisearch,
}: {
  specificQueries: string[];
  selectedWebsites: Website[];
  isSpecificMultisearch: () => boolean;
}) {
  const numberSearches = (
    index: number,
    queries: string,
    selectedWebsites: Website[]
  ): number => {
    const numQueries: number = queriesList(queries).length;
    const numWebsites: number = selectedWebsites.length;
    const isTheLastQuery = index == specificQueries.length - 1;
    const theresWebsite = !!selectedWebsites[index]
    const theresMoreWebsites = numWebsites >= index;
    if (isSpecificMultisearch()) {
      if (!isTheLastQuery && theresWebsite) return numQueries;
      else if (isTheLastQuery && theresMoreWebsites)
        return numQueries * (numWebsites - index);
      else return 0;
    } else {
      if (numQueries == 0 && numWebsites > 0) return numWebsites;
      return numQueries * numWebsites;
    }
  };

  const queriesList = (queries: string): string[] => {
    return queries.split(/(?:\b|\s+)\|(?:\b|\s+)/g);
  };

  const numberSearchesAlert = (num: number): string => {
    if (num < 10) return "number_occurrences number_occurrences--regular";
    else if (num >= 10 && num < 20)
      return "number_occurrences number_occurrences--atention";
    else if (num >= 20 && num < 30)
      return "number_occurrences number_occurrences--alert";
    else return "number_occurrences number_occurrences--danger";
  };

  const selectedWebsite = (index: number): string[] => {
    if (
      index == specificQueries.length - 1 &&
      selectedWebsites.length > index
    ) {
      const websites: string[] = [];
      for (let i = index; i < selectedWebsites.length; i++) {
        websites.push(selectedWebsites[i].name);
      }
      return websites;
    }
    return selectedWebsites.length <= index
      ? [""]
      : [selectedWebsites[index].name];
  };

  return (
    <>
      {specificQueries.map((querie, index) => {
          return (
            <section key={index} className="expected_result">
              {
                <code
                  className={numberSearchesAlert(
                    numberSearches(index, querie, selectedWebsites)
                  )}
                >
                  {numberSearches(index, querie, selectedWebsites)}
                </code>
              }{" "}
              Search{" "}
              {queriesList(querie)[0] &&
                queriesList(querie).map((query, i) => (
                  <code key={i} className="search_snippet">
                    "{query}"
                  </code>
                ))}
              in{" "}
              {isSpecificMultisearch()
                ? selectedWebsite(index)[0] &&
                  selectedWebsite(index).map((name) => (
                    <code className="search_snippet">{name}</code>
                  ))
                : selectedWebsites.map((website, i) => (
                    <code key={i} className="search_snippet">
                      {website.name}
                    </code>
                  ))}
            </section>
          );
        })}
    </>
  );
}
