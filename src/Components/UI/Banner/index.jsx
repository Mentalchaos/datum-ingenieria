const Banner = ({ image, children }) => {
  return (
    <div className="mb-10">
      <div className="w-full h-[100px] min-h-[600px]">
        <div className="w-full h-full">
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
