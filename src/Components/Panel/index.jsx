import { useState } from "react";
import Sidebar from "./SideBar";
import Home from "./Home";
import Messages from "./Messages";
import Reports from "./Reports";

const Panel = () => {
  const [ itemActive, setItemActive ] = useState("home");
  const [ component, setComponent ] = useState(Home);

  const renderComponent = () => {
    switch (itemActive) {
      case "home":
        return <Home />;
      case "messages":
        return <Messages />;
      case "reports":
        return <Reports />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#E2E2E2] text-[#3a3a3a] font-[roboto] relative">
      <div className="min-h-screen fixed">
        <Sidebar onSelectItem={setItemActive} />
      </div>
      <div className="pl-[200px] w-full">
        <div className="p-4">
          {renderComponent(itemActive)}
        </div>
      </div>
    </div>
  );
};

export default Panel;