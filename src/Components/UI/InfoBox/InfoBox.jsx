const InfoBox = ({ children, width = "w-80", height = "h-auto", className = "", bgColor = "bg-white" }) => {
  return (
    <div className={`py-3 px-2 ${width} ${height} ${className}`}>
      <div className={` shadow-lg rounded-lg p-12 w-full h-full ${bgColor}`}>
        {children}
      </div>
    </div>
  );
};

export default InfoBox;
