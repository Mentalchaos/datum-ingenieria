import { info } from "./info.js";

const UsInfoBox = () => {
  const boxes = info.map(({ title, image, description }, index) => (
    <div className="bg-white w-full min-h-[450px]" key={index}>
      <div className="w-1/3 h-1/2 mx-auto">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>

      <div className="w-2/3 h-1/2 items-center text-center mx-auto">
        <h3 className="text-[36px] text-gray-800 whitespace-nowrap">{title}</h3>
        <div className="">
          <p className="text-base text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  ))


  return (
    <div className="top-0 left-0 w-[90%] mx-auto relative h-[400px]">
      <div className="absolute -top-20 left-0 w-full h-full">
        <div className="grid grid-cols-3">
          {boxes}
        </div>
      </div>
    </div>
  );
};

export default UsInfoBox;
