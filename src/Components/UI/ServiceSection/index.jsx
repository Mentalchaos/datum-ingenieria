import ServiceCard from "../ServiceCard/index.jsx";

const ServiceSection = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="flex gap-4 mb-[1em] justify-center">
          {item.blocks.map((block, index) => (
            <ServiceCard key={index} title={block.title} description={block.description} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ServiceSection;
