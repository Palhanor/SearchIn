import Website from "../../../interfaces/website";
import "./card.scss";

export default function Card({
  website,
  setWebsites,
}: {
  website: Website;
  setWebsites: React.Dispatch<React.SetStateAction<Website[]>>;
}) {
  const handleClick = (): void => {
    const newWebsiteState: Website = {
      ...website,
      selected: !website.selected,
    };

    setWebsites((websites) =>
      websites.map((currentWebsite) =>
        currentWebsite.id == newWebsiteState.id
          ? newWebsiteState
          : currentWebsite
      )
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <label
      className={
        website.selected ? "card__label card__label--selected" : "card__label"
      }
      htmlFor={website.name}
      tabIndex={0}
      style={{
        backgroundImage: `url('logos/logo-${website.name
          .replaceAll(" ", "")
          .toLowerCase()}.png')`,
      }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <input
        type="checkbox"
        name={website.name}
        id={website.name}
        className="card__checkbox"
        value={website.name}
      />
    </label>
  );
}
