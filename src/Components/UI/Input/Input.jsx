const Input = ({ type = "text", placeholder = "", value, onChange, className = "" }) => {
    if (type === "textarea") {
      return (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`border border-[#B5B5B5] bg-[#E5E5E5] text-black px-4 py-2 rounded-md focus:outline-none resize-none ${className}`}
        />
      );
    }
  
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border border-[#B5B5B5] bg-[#E5E5E5] text-black px-4 py-2 rounded-md focus:outline-none ${className}`}
      />
    );
  };
  
  export default Input;
  