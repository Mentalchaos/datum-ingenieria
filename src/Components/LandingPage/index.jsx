import { useState } from "react";
import Home from "../Home";
import Footer from "../UI/Footer/Footer";
import NavBar from "../UI/NavBar";
import Services from "../Services";
import HomeContact from "../Home/HomeContact";

const LandingPage = () => {
  const [activeComponent, setActiveComponent] = useState("Inicio");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Servicios":
        return <Services />;
      case "Inicio":
      default:
        return <Home />;
    }
  };

  return (
    <div className="text-[#181818] bg-[#E2E2E2] font-[roboto] min-h-svh">
      <NavBar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
      {renderComponent()}
      <Footer />
    </div>
  );
};

export default LandingPage;
