const InfoBox = ({ children, width = "w-80", height = "h-auto", className = "", bgColor = "bg-[#EDEDED]", style = "" }) => {
  return (
    <div className={`py-3 px-2 ${width} ${height} ${className}`}>
      <div className={`border-2 border-[#E2E2E2] rounded-lg p-6 w-full h-full ${bgColor} ${style}`}>
        {children}
      </div>
    </div>
  );
};

export default InfoBox;
