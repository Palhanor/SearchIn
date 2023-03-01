import { useState } from "react";
import modalTabs from "../../../interfaces/modalTabs";
import "./tips.scss";

export default function Tips({
  setIsOpen,
  setModalWindow,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalWindow: React.Dispatch<React.SetStateAction<modalTabs>>;
}) {
  const handleOpenModal = (modalTab: modalTabs): void => {
    setIsOpen(() => true);
    setModalWindow(() => modalTab);
  };

  return (
    <>
      <ul className="tips__list">
        <li className="tips__item" onClick={() => handleOpenModal("Generics")}>
          Busca múltipla genérica
        </li>
        <li className="tips__item" onClick={() => handleOpenModal("Advanced")}>
          Busca múltipla específica
        </li>
        <li className="tips__item" onClick={() => handleOpenModal("Default")}>
          Configurar buscador padrão
        </li>
        <li className="tips__item" onClick={() => handleOpenModal("Fixed")}>
          Configurar buscadores favoritos
        </li>
      </ul>
    </>
  );
}
