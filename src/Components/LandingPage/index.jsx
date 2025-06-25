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
      case "Services":
        return <Services />;
      case "About":
        return <AboutUs />;
      case "Complaints":
        return <Complaints />;
      case "Contact":
        return <ContactUs />;
      case "Home":
      default:
        return <Home />;
    }
  };

  return (
    <div className="text-[#181818] bg-[#EBEBEB] font-[roboto] min-h-svh">
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
