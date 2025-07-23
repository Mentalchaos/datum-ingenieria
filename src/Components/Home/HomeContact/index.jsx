import ContactForm from "../../UI/ContactForm/ContactForm";
import { isMobile } from "../../../utils/viewport.js";

const HomeContact = () => {
  return (
    <div className={isMobile() ? "text-[#181818] bg-[#EBEBEB] font-[roboto] p-4" : "text-[#181818] bg-[#EBEBEB] font-[roboto] px-10 py-10"}>
      <div className={isMobile() ? "text-[2em] font-bebas flex text-center pb-10" : "text-[64px] font-bebas flex justify-center pb-10"}>Ponte en contacto con nosotros</div>
      <ContactForm />
    </div>
  );
};

HomeContact.displayName = "HomeContact";

export default HomeContact;
