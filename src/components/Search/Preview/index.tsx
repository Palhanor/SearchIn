import { PreviewProps } from "../../../interfaces/props";
import Website from "../../../interfaces/website";
import "./preview.scss";

export default function Preview({
  advancedQueries,
  selectedWebsites,
  isAdvancedSearch,
}: PreviewProps) {
  const numberOpenTabs = (
    index: number,
    queries: string,
    selectedWebsites: Website[]
  ): number => {
    const numQueries: number = getBasicQueries(queries).length;
    const numWebsites: number = selectedWebsites.length;
    const isTheLastQuery: boolean = index == advancedQueries.length - 1;
    const theresCurrentWebsite: boolean = !!selectedWebsites[index];
    const theresMoreWebsites: boolean = numWebsites >= index;
    if (isAdvancedSearch()) {
      if (!isTheLastQuery && theresCurrentWebsite) return numQueries;
      else if (isTheLastQuery && theresMoreWebsites)
        return numQueries * (numWebsites - index);
      else return 0;
    } else {
      if (numQueries == 0 && numWebsites > 0) return numWebsites;
      return numQueries * numWebsites;
    }
  };

  const getBasicQueries = (queries: string): string[] => {
    return queries.split(/(?:\b|\s+)\|(?:\b|\s+)/g);
  };

  const alertTabs = (numTabs: number): string => {
    const className: string = "number_occurrences number_occurrences";
    if (numTabs < 8) return className + "--regular";
    else if (numTabs >= 8 && numTabs < 16) return className + "--atention";
    else if (numTabs >= 16 && numTabs < 24) return className + "--alert";
    else return className + "--danger";
  };

  const querieWebsites = (index: number): string[] => {
    const lastQuery: boolean = index == advancedQueries.length - 1;
    const moreWebsites: boolean = selectedWebsites.length > index;
    if (lastQuery && moreWebsites) {
      const nextWebsites: string[] = [];
      for (let i = index; i < selectedWebsites.length; i++)
        nextWebsites.push(selectedWebsites[i].name);
      return nextWebsites;
    }
    return !moreWebsites ? [""] : [selectedWebsites[index].name];
  };

  return (
    <section className="preview">
      {advancedQueries.map((querie, index) => {
        return (
          <article key={index} className="expected_result">
            {
              <code
                className={alertTabs(
                  numberOpenTabs(index, querie, selectedWebsites)
                )}
              >
                {numberOpenTabs(index, querie, selectedWebsites)}
              </code>
            }{" "}
            Search{" "}
            {getBasicQueries(querie)[0] &&
              getBasicQueries(querie).map((query, i) => (
                <code key={i} className="search_snippet">
                  "{query}"
                </code>
              ))}
            in{" "}
            {isAdvancedSearch()
              ? querieWebsites(index)[0] &&
                querieWebsites(index).map((name, i) => (
                  <code key={i} className="search_snippet">
                    {name}
                  </code>
                ))
              : selectedWebsites.map((website, i) => (
                  <code key={i} className="search_snippet">
                    {website.name}
                  </code>
                ))}
          </article>
        );
      })}
    </section>
  );
}
