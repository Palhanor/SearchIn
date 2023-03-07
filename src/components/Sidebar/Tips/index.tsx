import { TipsProps } from "../../../interfaces/props";
import { ModalTab } from "../../../interfaces/tabs";
import "./tips.scss";

export default function Tips({ setIsOpen, setModalWindow }: TipsProps) {
  const handleOpenModal = (modalTab: ModalTab): void => {
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
