import InfoBox from "../../UI/InfoBox/InfoBox";
import topo from "../../../assets/images/inicio/Group1.png";
import electric from "../../../assets/images/inicio/electricos.png";

const services = [
  { text: "Topografía", image: topo, width: "w-1/3", height: "h-[451px]" },
  { text: "Proyectos Eléctricos", image: electric, width: "w-2/3", height: "h-[451px]" },
  { text: "", image: "", width: "w-2/3", height: "h-[451px]" },
  { text: "", image: "", width: "w-1/3", height: "h-[451px]" },
];

const ServicesBoxes = () => {
  return (
    <div className="text-[#181818] bg-[#E2E2E2] flex flex-wrap justify-around">
      {services.map(({ text, image, width, height }, index) => (
        <InfoBox key={index} width={width} height={height}>
          <div className="flex justify-evenly h-full">
            {image && <img alt={text} className="h-full object-cover rounded-md" src={image} />}
            {text && <p className="text-[40px] font-bebas text-[#000000]">{text}</p>}
          </div>
        </InfoBox>
      ))}
    </div>
  );
};

export default ServicesBoxes;
