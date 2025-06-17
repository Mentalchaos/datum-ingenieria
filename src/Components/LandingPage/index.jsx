import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Home from "../Home";
import Footer from "../UI/Footer/Footer";
import NavBar from "../UI/NavBar";
import Services from "../Services";
import AboutUs from "../AboutUs";
import Complaints from "../Complaints";
import ContactUs from "../ContactUs";

const LandingPage = () => {
  const [searchParams] = useSearchParams();
  const pageParam = searchParams.get("page");
  const [activeComponent, setActiveComponent] = useState(pageParam || "Inicio");

  useEffect(() => {
    if (pageParam && pageParam !== activeComponent) {
      setActiveComponent(pageParam);
    }
  }, [pageParam]);

  const renderComponent = () => {
    switch (activeComponent) {
      case "Servicios":
        return <Services />;
      case "Nosotros":
        return <AboutUs />;
      case "Denuncias":
        return <Complaints />;
      case "Contáctanos":
        return <ContactUs />;
      case "Inicio":
      default:
        return <Home />;
    }
  };

  return (
    <div className="text-[#181818] bg-[#E2E2E2] font-[roboto] min-h-svh">
      <NavBar
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
      <div className="max-w-[1440px] mx-auto">
        {renderComponent()}
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
