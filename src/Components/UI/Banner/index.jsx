const Banner = ({ image, children }) => {
  return (
    <div className="mb-10">
      <div className="w-full h-[100px] min-h-[600px]">
        <div className="w-full h-full relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <img className="w-full h-full object-cover" src={image} alt="Banner" />
        </div>
      </div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default Banner;
