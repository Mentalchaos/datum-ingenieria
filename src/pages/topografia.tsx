import { useAppSelector } from "@/store";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import { FeatureSection } from "@/components/UI/FeatureSection";
import Header from "@/components/UI/Header";

export default function IndexPage() {
  const topography = useAppSelector((state) => state.topography);

  const topographyFeatureSections = topography.map((section) => (
    <FeatureSection
      key={section.title}
      title={section.title}
      description={section.description}
      imageUrl={section.imageUrl}
      buttonLabel={section.buttonLabel}
      video={section.video}
      border={section.border}
    />
  ));

  return (
    <ContainerLayout>
      <Header />
      {topographyFeatureSections}
    </ContainerLayout>
  );
}
