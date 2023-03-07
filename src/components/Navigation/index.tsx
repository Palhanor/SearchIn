import { NavigationProps } from "../../interfaces/props";
import { SidebarTab } from "../../interfaces/tabs";
import { FaSearch } from "react-icons/fa";
import {
  BsFillPinAngleFill,
  BsStarFill,
  BsLightbulbFill,
} from "react-icons/bs";
import "./navigation.scss";

export default function Navigation({
  sidebarContent,
  setSidebarIsVisible,
  setSidebarContent,
}: NavigationProps) {
  const handleTabChanges = (tabName: SidebarTab): void => {
    if (sidebarContent != tabName) {
      setSidebarContent(() => tabName);
      setSidebarIsVisible(() => true);
    } else setSidebarIsVisible((state) => !state);
  };

  return (
    <nav className="navigation">
      <div
        className="navigation_element"
        onClick={() => handleTabChanges("Select")}
      >
        <FaSearch size={25} color="#365461"></FaSearch>
      </div>
      <div
        className="navigation_element"
        onClick={() => handleTabChanges("Default")}
      >
        <BsFillPinAngleFill size={25} color="#365461"></BsFillPinAngleFill>
      </div>
      <div
        className="navigation_element"
        onClick={() => handleTabChanges("Fixed")}
      >
        <BsStarFill size={25} color="#365461"></BsStarFill>
      </div>
      <div
        className="navigation_element"
        onClick={() => handleTabChanges("Tips")}
      >
        <BsLightbulbFill size={25} color="#365461"></BsLightbulbFill>
      </div>
    </nav>
  );
}
