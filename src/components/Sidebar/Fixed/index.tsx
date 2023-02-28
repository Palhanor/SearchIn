import { useState } from "react";
import data from "../../../service/mockAPI.json";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./fixed.scss";

export default function Fixed() {
  const [input, setInput] = useState<string>("");
  const [fixedWebsites, setFixedWebsites] = useState<string[]>([]);

  useState(() => {
    const fixed: string = localStorage.getItem("fixed") || "";
    const fixedList: string[] = fixed ? JSON.parse(fixed) : [];
    setFixedWebsites(() => fixedList);
  });

  const handleClickItem = (name: string) => {
    const newList = !fixedWebsites.includes(name)
      ? [...fixedWebsites, name]
      : fixedWebsites.filter((website) => website !== name);
    setFixedWebsites(() => newList);
    localStorage.setItem("fixed", JSON.stringify(newList));
  };

  return (
    <aside>
      <input
        className="input"
        type="text"
        placeholder="Filtrar buscadores"
        value={input}
        onChange={(e) => setInput(() => e.target.value)}
      />
      <ul className="default__list">
        {data.websites
          .filter((website) =>
            website.name.toLowerCase().includes(input.toLowerCase())
          )
          .map((website) => (
            <li key={website.id} value="">
              <label className="default__item" htmlFor={website.name}>
                <input
                  type="checkbox"
                  value={website.name}
                  id={website.name}
                  name="default"
                  className="checkbox__invisible"
                  onChange={() => handleClickItem(website.name)}
                />
                {website.name}
                {fixedWebsites.includes(website.name) ? (
                  <AiFillStar size={18} color="#365461" />
                ) : (
                  <AiOutlineStar size={18} color="#365461" />
                )}
              </label>
            </li>
          ))}
      </ul>
    </aside>
  );
}
