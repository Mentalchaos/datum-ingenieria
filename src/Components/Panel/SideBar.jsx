import { useState } from "react";
import { FiHome, FiMessageCircle, FiAlertTriangle } from "react-icons/fi";


const Sidebar = ({ onSelectItem }) => {
  const [itemActive, setItemActive] = useState(0);

  const menuItems = [
    {
      label: "Inicio",
      icon: <FiHome size={20} />,
      name: "home",
    },
    {
      label: "Mensajes",
      icon: <FiMessageCircle size={20} />,
      name: "messages",
    },
    {
      label: "Reportes",
      icon: <FiAlertTriangle size={20} />,
      name: "reports",
    },
  ];

  const handleSelectItem = (item) => {
    onSelectItem(item.name);
  };



  return (
    <aside
      className="group bg-[#181818] text-white p-4 flex flex-col gap-4 min-h-screen w-[200px]"
    >
      <h2 className="text-xl font-bold font-bebas tracking-widest">
        Admin
      </h2>

      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <div className="flex items-center cursor-pointer gap-3 p-2 rounded-md transition-colors duration-200 hover:bg-[#2f2f2f]" onClick={() => handleSelectItem(item)}>
                {item.icon}
                <span className="transition-opacity duration-300">{item.label}</span>
              </div>
            </li>
          ))}
          </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
