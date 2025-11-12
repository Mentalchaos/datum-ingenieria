import { useRouter } from "next/router";
import { useAppSelector } from "@/store";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import { FeatureSection } from "@/components/UI/FeatureSection";
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import ReportForm from "@/components/forms/ReportForm";


export default function IndexPage() {
  const router = useRouter();
  const report = useAppSelector((state) => state.report);

  const reportFeatureSections = report.featureSections.map((section) => (
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
      {reportFeatureSections}
      <ReportForm />
      <Footer />
    </ContainerLayout>
  );
}
