const Input = ({ type = "text", name, placeholder = "", value, onChange, className = "" }) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  if (type === "textarea") {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={`border border-[#B5B5B5] bg-[#E5E5E5] text-black px-4 py-2 rounded-md focus:outline-none resize-none ${className}`}
      />
    );
  }

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className={`border border-[#B5B5B5] bg-[#E5E5E5] text-black px-4 py-2 rounded-md focus:outline-none ${className}`}
    />
  );
};

export default Input;
