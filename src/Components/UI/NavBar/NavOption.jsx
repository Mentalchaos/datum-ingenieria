import phone from "../../../assets/images/contact-phone.png";

const NavOption = ({ label, isActive, onClick, isContactButton }) => {
  const baseClass =
    "relative font-[roboto] text-xl px-4 py-2 transition-colors duration-300";

  const normalButtonClass = "text-[#181818] hover:text-red-500";
  const contactButtonClass =
    "w-[193px] h-[43px] bg-[#EC1B1B] text-white rounded-[5px] flex items-center justify-center gap-[10px]";

  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${isContactButton ? contactButtonClass : normalButtonClass}`}
    >
      {isContactButton ? (
        <>
          <img src={phone} alt="Teléfono" className="w-5 h-5" />
          {label}
        </>
      ) : (
        <>
          {label}
          <span
            className={`absolute left-0 bottom-[-4px] w-full h-[6px] bg-red-500 rounded-b-lg rounded-t-lg
              transition-all duration-300 ease-in-out ${
                isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }`}
          ></span>
        </>
      )}
    </button>
  );
};

export default NavOption;
