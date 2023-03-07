import "./modal.scss";
import { Advanced, Generics, Default, Fixed } from "./Sreens";
import { RiCloseFill } from "react-icons/ri";
import { ModalProps } from "../../interfaces/props";

export default function Modal({ modalWindow, setIsOpen }: ModalProps) {
  const handleClaseModal = () => {
    setIsOpen(() => false);
  };

  return (
    <div className="background_modal">
      <div className="close_modal" onClick={handleClaseModal}>
        <RiCloseFill size={50} color="#FFF" />
      </div>
      <div className="modal_container">
        {modalWindow == "Generics" && <Generics />}
        {modalWindow == "Advanced" && <Advanced />}
        {modalWindow == "Default" && <Default />}
        {modalWindow == "Fixed" && <Fixed />}
      </div>
    </div>
  );
}
