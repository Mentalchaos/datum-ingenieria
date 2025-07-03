import logo from "../../../assets/images/logo.svg";

const Item = ({ title, description, image = logo }) => {
  return (
    <div className="relative group border-[3px] w-full h-[140px] flex items-center justify-between border-gray-300 rounded-lg">
      <div className="font-bengali font-medium text-[1.5em] text-center flex items-center justify-center gap-2 p-[25px] w-full">
        <div><img src={image} alt="earth" className="w-18 h-18" /></div>
        <div className="text-center w-full">{title}</div>
      </div>
      <span className="hidden group-hover:flex absolute top-[70%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[1.2em] text-center items-center justify-center p-4 shadow-lg z-10">
        {description}
      </span>
  </div>
  );
};

export default Item;