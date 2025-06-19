import ContactForm from "../../UI/ContactForm/ContactForm";

const HomeContact = () => {
  return (
    <div className="text-[#181818] bg-[#EBEBEB] font-[roboto] px-10 py-10">
      <div className="text-[64px] font-bebas flex justify-center pb-10">Ponte en contacto con nosotros</div>
      <ContactForm />
    </div>
  );
};

HomeContact.displayName = "HomeContact";

export default HomeContact;
