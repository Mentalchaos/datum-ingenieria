import { useRouter } from "next/router";
import { useAppSelector } from "@/store";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import { FeatureSection } from "@/components/UI/FeatureSection";
import { GroupFeatureSection } from "@/components/UI/GroupFeatureSection";
import Header from "@/components/UI/Header";
import ContactSection from "@/components/UI/ContactSection";
import Footer from "@/components/UI/Footer";


export default function IndexPage() {
  const router = useRouter();
  const home = useAppSelector((state) => state.home);

  const homeFeatureSections = home.featureSections.map((section) => (
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

  const homeGroupsFeaturesSections = <GroupFeatureSection data={home.groupsFeaturesSection} />

  return (
    <ContainerLayout>
      <Header />
      {homeFeatureSections}
      {homeGroupsFeaturesSections}
      <ContactSection />
      <Footer />
    </ContainerLayout>
  );
}
