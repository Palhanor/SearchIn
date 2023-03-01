import {
  BsFillPinAngleFill,
  BsStarFill,
  BsLightbulbFill,
} from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import sidebarTabs from "../../interfaces/sidebarTabs";
import "./navigation.scss";

export default function Navigation({
  sidebarContent,
  setSidebarIsVisible,
  setSidebarContent,
}: {
  sidebarContent: sidebarTabs;
  setSidebarIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSidebarContent: React.Dispatch<React.SetStateAction<sidebarTabs>>;
}) {
  const handleTabChanges = (tabName: sidebarTabs): void => {
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
