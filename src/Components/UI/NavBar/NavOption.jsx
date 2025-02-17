const NavOption = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative text-[#181818] font-[roboto] text-xl px-4 py-2 transition-colors duration-300 hover:text-red-500"
    >
      {label}
      <span
        className={`absolute left-0 bottom-[-4px] w-full h-[6px] bg-red-500 rounded-b-lg rounded-t-lg
          transition-all duration-300 ease-in-out ${
            isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
          }`}
      ></span>
    </button>
  );
};

export default NavOption;
