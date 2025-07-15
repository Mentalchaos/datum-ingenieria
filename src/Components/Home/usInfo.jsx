import { info } from "./info.js";
import { isMobile } from "../../utils/viewport.js";

const Box = ({ title, image, description }) => {
  return (
    <div className="w-full min-h-[350px]">
      <div className="w-1/3 h-1/2 mx-auto">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
      <div className="w-2/3 h-1/2 items-center text-center mx-auto">
        <h3 className="font-bebas text-[2em] text-gray-800 whitespace-nowrap uppercase tracking-wider">{title}</h3>
        <div className="">
          <p className="text-base text-gray-600 max-w-[250px] mx-auto">{description}</p>
        </div>
      </div>
    </div>
  )
}

const UsInfoBox = () => {
  const boxes = info.map(({ title, image, description }, index) => (
    <Box key={index} title={title} image={image} description={description} />
  ));

  const contentClass = isMobile ? "w-[90%] mx-auto relative" : "top-0 left-0 w-[90%] mx-auto relative h-[300px]";
  const containerClass = isMobile ? "w-[90%] mx-auto relative" : "absolute -top-20 left-0 w-full h-full";

  return (
    <div className={contentClass}>
      <div className={containerClass}>
        <div className="bg-[#EDEDED] border-2 border-[#E2E2E2] rounded-lg grid grid-cols-1 sm:grid-cols-3">
          {boxes}
        </div>
      </div>
    </div>
  );
};

export default UsInfoBox;
