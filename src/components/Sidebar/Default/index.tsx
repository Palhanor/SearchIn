import { useState } from "react";
import data from "../../../service/mockAPI.json";
import { AiFillPushpin, AiOutlinePushpin } from "react-icons/ai";
import "./default.scss";

export default function Default() {
  const [input, setInput] = useState<string>("");
  const [defaultWebsite, setDefaultWebsite] = useState<string>("");

  useState(() => {
    setDefaultWebsite(() => localStorage.getItem("default") || "");
  });

  const handleClickItem = (name: string) => {
    setDefaultWebsite(() => name);
    localStorage.setItem("default", name);
  };

  const handleClearDefault = () => {
    setDefaultWebsite(() => "");
    localStorage.setItem("default", "");
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
      <button className="clear_default" onClick={handleClearDefault}>
        Limpar
      </button>
      <ul className="default__list">
        {data.websites
          .filter((website) =>
            website.name.toLowerCase().includes(input.toLowerCase())
          )
          .map((website) => (
            <li key={website.id} value="">
              <label className="default__item" htmlFor={website.name}>
                <input
                  type="radio"
                  value={website.name}
                  id={website.name}
                  name="default"
                  className="radio__invisible"
                  onChange={() => handleClickItem(website.name)}
                />
                {website.name}
                {defaultWebsite == website.name ? (
                  <AiFillPushpin size={18} color="#365461" />
                ) : (
                  <AiOutlinePushpin size={18} color="#365461" />
                )}
              </label>
            </li>
          ))}
      </ul>
    </aside>
  );
}
