import ServicesBoxes from "./ServicesBoxes";

const HomeServices = () => {
  return (
    <div className="text-[#181818] bg-[#EBEBEB] pt-14">
      <div className="text-[64px] flex justify-center font-bebas bg-[#EBEBEB]">Servicios</div>
      <div className="px-10 py-10 bg-[#EBEBEB]">
        <ServicesBoxes />
      </div>
    </div>
  );
};

HomeServices.displayName = "HomeServices";

export default HomeServices;
