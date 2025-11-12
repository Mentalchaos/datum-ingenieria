import { useAppSelector } from "@/store";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import { FeatureSection } from "@/components/UI/FeatureSection";
import Header from "@/components/UI/Header";
import ContactSection from "@/components/UI/ContactSection";
import Footer from "@/components/UI/Footer";
import ContactForm from "@/components/forms/ContactForm";

export default function IndexPage() {
  const contact = useAppSelector((state) => state.contact);

  const contactFeatureSections = contact.map((section) => (
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
      {contactFeatureSections}
      <ContactSection />
      <ContactForm />
      <Footer />
    </ContainerLayout>
  );
}
