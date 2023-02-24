import "./navigation.scss";

export default function Navigation({
  sidebarIsVisible,
  setSidebarIsVisible,
}: {
  sidebarIsVisible: boolean,
  setSidebarIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleNavbar = () => {
    setSidebarIsVisible((state) => !state);
  };

  return (
    <>
      <nav className="navbar">
        <div className={sidebarIsVisible ? "infinity infinity--active" : "infinity"} onClick={handleNavbar}></div>
      </nav>
    </>
  );
}
