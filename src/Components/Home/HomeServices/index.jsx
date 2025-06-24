import ServicesBoxes from "./ServicesBoxes";

const HomeServices = () => {
  return (
    <div className="text-[#181818] bg-[#EBEBEB] pt-14">
      <div className="text-[3em] flex justify-center font-bebas bg-[#EBEBEB]">Servicios</div>
      <div className="px-[1em] py-[1em] bg-[#EBEBEB]">
        <ServicesBoxes />
      </div>
    </div>
  );
};

HomeServices.displayName = "HomeServices";

export default HomeServices;
