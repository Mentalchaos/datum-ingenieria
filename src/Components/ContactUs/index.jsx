import HomeContact from "../Home/HomeContact";
import contact from "../../assets/images/contact.png";
import LogosSlider from "../UI/LogosSlider/LogosSlider";
import Banner from "../UI/Banner";

const ContactUs = () => {
  return (
    <div>
      <Banner image={contact} />
      <HomeContact />
      <LogosSlider />
    </div>
  )
}

export default ContactUs;
