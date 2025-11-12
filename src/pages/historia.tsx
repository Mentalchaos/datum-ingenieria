import { useAppSelector } from "@/store";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import { FeatureSection } from "@/components/UI/FeatureSection";
import Header from "@/components/UI/Header";
import ContactSection from "@/components/UI/ContactSection";
import Footer from "@/components/UI/Footer";


export default function IndexPage() {
  const history = useAppSelector((state) => state.history);

  const historyFeatureSections = history.map((section) => (
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
      {historyFeatureSections}
      <ContactSection />
      <Footer />
    </ContainerLayout>
  );
}
