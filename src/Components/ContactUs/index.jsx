import HomeContact from "../Home/HomeContact";
import contact from "../../assets/images/contact.png";
import LogosSlider from "../UI/LogosSlider/LogosSlider";

const ContactUs = () => {
    return (
        <div className="pt-25 mb-20">
            <img className="w-full h-[600px]" src={contact} />
            <HomeContact />
            <LogosSlider />
        </div>
    )
}

export default ContactUs;