import services from "../../assets/images/servicesPage/services.png";

const Services = () => {
  return (
    <div className="text-[#181818] bg-[#E2E2E2] font-[roboto] min-h-svh">
      <div className="flex justify-center">
        <img src={services} alt="servicios" className="h-[90vh]" />
      </div>
      <div className="flex justify-center text-[64px] font-bebas py-30 h-[90vh]">topografía</div>
    </div>
  );
};

Services.displayName = "Services";

export default Services;
