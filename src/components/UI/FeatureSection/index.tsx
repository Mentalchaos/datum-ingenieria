import { FeatureSectionProps } from "./interface";

import Image from "next/image";
import { withBase } from "@/lib/asset";

export function FeatureSection({
  title,
  description,
  imageUrl,
  buttonLabel,
  video,
  border
}: FeatureSectionProps) {
  const element = video
    ? <video src={withBase(imageUrl)} autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover" />
    : <Image src={withBase(imageUrl)} alt={title} fill className="absolute top-0 left-0 w-full h-full object-cover" />

  const borderClass = border
    ? "border-t-10 border-r-10 border-l-10 border-white"
    : "";

  const defaulgBg = imageUrl.length === 0 ? "bg-[#EF626C]" : "";

  return (
    <section className={`feature-section bg-cover bg-center relative h-[calc(100vh-80px)] ${borderClass}`}>
      <div className={`${borderClass}`}>
        {imageUrl.length > 0 ? element : null}
        <div className="bg-black/50 absolute top-0 left-0 w-full h-full"></div>
        <div className="absolute bottom-0 left-0 w-full h-full">
          <div className={`flex flex-col justify-between h-[calc(100vh-60px)] p-6 lg:p-16 ${defaulgBg}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full max-w-[1980px] mx-auto">
              <h2 className="flex flex-col max-w-[500px] text-[3em] lg:text-[4em] font-bold justify-start font-dm-serif-display text-white">{title}</h2>
              <p className="mb-[2em] lg:mb-0 flex text-right max-w-[400px] ml-auto lg:max-w-none flex-col text-[1.2em] lg:text-[1.5em] justify-end font-helvetica-neue text-white">{description}</p>
            </div>
            {buttonLabel && (
              <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
                <button className="mt-6 mb-6 px-6 py-2 bg-[#F0F0F0] text-black rounded-full">{buttonLabel}</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
