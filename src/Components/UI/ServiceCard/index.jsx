import classNames from "classnames";
import logo from "../../../assets/images/logo.svg";
import { isMobile } from "../../../utils/viewport";

const Item = ({ title, description, image = logo }) => {
  const tooltipClass = classNames({
    "tooltip": true,
    "expand": true,
    "border-[3px]": true,
    "w-full": true,
    "h-[140px]": true,
    "flex": true,
    "items-center": true,
    "justify-between": true,
    "border-gray-300": true,
    "rounded-lg": true,
    "w-[450px]": !isMobile,
    "min-w-[450px]": !isMobile,
    "max-w-[450px]": !isMobile,
    "w-full": isMobile,
    "mb-4": isMobile
  });

  return (
    <div data-title={description} className={tooltipClass}>
      <div className="font-bengali font-medium text-[1.5em] text-center flex items-center justify-center gap-2 p-[25px] w-full">
        <div><img src={image} alt="earth" className="w-18 h-18" /></div>
        <div className="text-center w-full">{title}</div>
      </div>
  </div>
  );
};

export default Item;
