import ServiceCard from "../ServiceCard/index.jsx";
import { isMobile } from "../../../utils/viewport";

const ServiceSection = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className={isMobile() ? "justify-center px-4" : "flex gap-4 mb-[1em] justify-center"}>
          {item.blocks.map((block, index) => (
            <ServiceCard key={index} title={block.title} description={block.description} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ServiceSection;
