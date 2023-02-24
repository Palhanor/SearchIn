import "./card.scss";

export default function Card({ website }: { website: any }) {
  return (
    <>
      <input
        type="checkbox"
        name={website.name}
        id={website.name}
        className="card__checkbox"
        value={website.name}
      />
      <label
        className="card__label"
        htmlFor={website.name}
        tabIndex={0}
        style={{
          backgroundImage: `url('logos/logo-${website.name
            .replaceAll(" ", "")
            .toLowerCase()}.png')`,
        }}
      ></label>
    </>
  );
}
