import ContactForm from "../../UI/ContactForm/ContactForm";

const HomeContact = () => {
  return (
    <div className="text-[#181818] bg-[#E2E2E2] font-[roboto] py-20 px-10">
      <div className="text-[64px] font-bebas flex justify-center pb-10">Ponte en contacto con nosotros</div>
      <ContactForm />
    </div>
  );
};

HomeContact.displayName = "HomeContact";

export default HomeContact;
