import { GroupsFeaturesSectionProps } from "@/components/UI/FeatureSection/interface";


const Item = ({ title, description, imageUrl }: { title: string, description: string, imageUrl: string }) => {
  return (
    <div className="group-feature-section relative w-full rounded-lg overflow-hidden group cursor-pointer">
      <div className="absolute inset-0">
        <={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 h-full min-h-[475px] flex flex-col justify-end p-6 lg:p-8 text-right">
        <h3 className="text-white text-2xl lg:text-4xl font-bold mb-4 font-dm-serif-display">
          {title}
        </h3>
        <p className="text-white text-base lg:text-lg font-helvetica-neue-light leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};


export function GroupFeatureSection({ data }: { data: GroupsFeaturesSectionProps }) {
  const group = data.sections;

  const leftColumn = group.filter((_, idx) => idx % 2 === 0);
  const rightColumn = group.filter((_, idx) => idx % 2 === 1);

  const leftColumnElements = leftColumn.map((item) => (
    <Item key={item.title} title={item.title} description={item.description} imageUrl={item.imageUrl} />
  ));

  const rightColumnElements = rightColumn.map((item) => (
    <Item key={item.title} title={item.title} description={item.description} imageUrl={item.imageUrl} />
  ));

  return (
    <section id={data.id} className="bg-white">
      <div className="p-6 lg:p-12 h-[calc(60vh-80px)] flex items-center justify-center">
        <div className="text-center text-[#2D2E33]">
          <h2 className="flex flex-col text-[3em] lg:text-[4em] font-bold justify-start font-dm-serif-display">{data.title}</h2>
          <div className="mt-6 text-xl lg:text-2xl max-w-[500px] mx-auto">{data.description}</div>
        </div>
      </div>

      <div className="grid gap-1 grid-cols-2 lg:gap-2">
        <div className="flex flex-col gap-1 lg:gap-2 pt-[100px]">
          {leftColumnElements}
        </div>

        <div className="flex flex-col gap-1 lg:gap-2">
          {rightColumnElements}
        </div>
      </div>
    </section>
  );
}
