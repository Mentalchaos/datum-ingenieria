const InfoBox = ({ children, width = "w-80", height = "h-auto", className = "" }) => {
  return (
    <div className={`py-3 px-2 ${width} ${height} ${className}`}>
      <div className={`bg-white shadow-lg rounded-lg p-12 w-full h-full`}>
        {children}
      </div>
    </div>
  );
};

export default InfoBox;
