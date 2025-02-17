const Button = ({ label, onClick, variant = "primary", className = "" }) => {
    const baseStyles = "px-6 py-2 font-normal rounded-md font-bold transition-all duration-200 text-[24px]";
    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-600 text-white hover:bg-gray-700",
      danger: "bg-[#FF0500] text-white hover:bg-red-700",
    };
  
    return (
      <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {label}
      </button>
    );
  };
  
  export default Button;
  