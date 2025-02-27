import { useState } from "react";
import { FiUsers, FiHome, FiSettings, FiChevronRight } from "react-icons/fi";
import { useLocation, Link } from "react-router-dom";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Inicio", path: "/dashboard", icon: <FiHome size={20} /> },
    { name: "Opción 2", path: "/dashboard/users", icon: <FiUsers size={20} /> },
    {
      name: "Ajustes",
      path: "/dashboard/settings",
      icon: <FiSettings size={20} />,
    },
  ];

  return (
    <aside
      className="group w-[60px] hover:w-[200px] transition-all duration-300 bg-[#181818] text-white p-4 flex flex-col gap-4 min-h-screen"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex items-center gap-3">
        {isExpanded ? (
          <h2 className="text-xl font-bold font-bebas tracking-widest">
            Admin
          </h2>
        ) : (
          <FiChevronRight size={20} className="ml-1" />
        )}
      </div>

      <nav className="mt-4">
        <ul className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 p-2 rounded-md transition-colors duration-200 ${
                    isExpanded
                      ? isActive
                        ? "bg-[#383838]"
                        : "hover:bg-[#2f2f2f]"
                      : isActive
                      ? "bg-transparent text-gray-400"
                      : ""
                  }`}
                >
                  {item.icon}
                  <span
                    className={`transition-opacity duration-300 ${
                      isExpanded ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
