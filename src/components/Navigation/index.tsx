// import { useState } from "react";
import {
  BsFillPinAngleFill,
  BsStarFill,
  // BsLightbulbFill,
  // BsFillSunFill,
  // BsMoonStarsFill,
} from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Tabs from "../../interfaces/tabs";
import "./navigation.scss";

export default function Navigation({
  sidebarContent,
  setSidebarIsVisible,
  setSidebarContent,
}: {
  sidebarContent: Tabs;
  setSidebarIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSidebarContent: React.Dispatch<React.SetStateAction<Tabs>>;
}) {
  // const [lightTheme, setLightTheme] = useState<boolean>(true);

  const handleSearchEngines = (): void => {
    if (sidebarContent != "Select") {
      setSidebarContent(() => "Select");
      setSidebarIsVisible(() => true);
    } else setSidebarIsVisible((state) => !state);
  };

  const handleDefaultSearchEngine = (): void => {
    if (sidebarContent != "Default") {
      setSidebarContent(() => "Default");
      setSidebarIsVisible(() => true);
    } else setSidebarIsVisible((state) => !state);
  };

  const handleFixedSearchEngines = (): void => {
    if (sidebarContent != "Fixed") {
      setSidebarContent(() => "Fixed");
      setSidebarIsVisible(() => true);
    } else setSidebarIsVisible((state) => !state);
  };

  // const handleSearchinTips = (): void => {
  //   console.log(
  //     "Deve abrir um modal exibindo dicas de como navegar e realizar buscas na plataforma"
  //   );
  // };

  // const handleThemes = (): void => {
  //   setLightTheme((state) => !state);
  // };

  return (
    <>
      <nav className="navigation">
        {/* <div
          className="navigation_element navigation_element--searchin"
          onClick={handleSearchEngines}
        ></div> */}
        <div className="navigation_element" onClick={handleSearchEngines}>
          <FaSearch size={25} color="#365461"></FaSearch>
        </div>
        <div className="navigation_element" onClick={handleDefaultSearchEngine}>
          <BsFillPinAngleFill size={25} color="#365461"></BsFillPinAngleFill>
        </div>
        <div className="navigation_element" onClick={handleFixedSearchEngines}>
          <BsStarFill size={25} color="#365461"></BsStarFill>
        </div>
        {/* <div className="navigation_element" onClick={handleSearchinTips}>
          <BsLightbulbFill size={25} color="#365461"></BsLightbulbFill>
        </div> */}
        {/* <div className="navigation_element" onClick={handleThemes}>
          {lightTheme ? (
            <BsFillSunFill size={25} color="#365461"></BsFillSunFill>
          ) : (
            <BsMoonStarsFill size={25} color="#365461"></BsMoonStarsFill>
          )}
        </div> */}
      </nav>
    </>
  );
}
