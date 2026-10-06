function Sidebar({ activePage, onNavigate }) {

  const menuItem = (page, label) => (
    <p
      className={activePage === page ? "active-menu" : ""}
      onClick={() => onNavigate(page)}
    >
      {label}
    </p>
  );

  return (
    <aside>

      <h2>FxBull</h2>

      <nav>
        {menuItem("dashboard", "Dashboard")}
        {menuItem("analytics", "Analytics")}
        {menuItem("trades", "Trade History")}
        {menuItem("journal", "Journal")}
        {menuItem("strategies", "Strategies")}
        {menuItem("broker", "Broker Hub")}
        {menuItem("settings", "Settings")}
      </nav>

    </aside>
  );
}

export default Sidebar;
