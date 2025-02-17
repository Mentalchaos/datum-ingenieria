import ServicesBoxes from "./ServicesBoxes";

const HomeServices = () => {
  return (
    <div className="text-[#181818] bg-[#E2E2E2] pt-24">
      <div className="text-[64px] flex justify-center font-bebas">Servicios</div>
      <div className="px-10 py-20">
        <ServicesBoxes />
      </div>
    </div>
  );
};

HomeServices.displayName = "HomeServices";

export default HomeServices;
