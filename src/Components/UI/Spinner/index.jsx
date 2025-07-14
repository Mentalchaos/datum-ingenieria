import classNames from "classnames";


const Spinner = ({ fullPage = false, isLoading = true }) => {
  const contentClases = classNames({
    "fixed top-0 left-0 w-full h-full bg-white bg-opacity-50 z-50": fullPage,
    "relative": !fullPage,
    "hidden": !isLoading,
  });

  const classes = classNames({
    "h-screen": fullPage,
    "h-auto": !fullPage,
    "fixed top-0 left-0 w-full": fullPage,
    "relative": !fullPage,
    "hidden": !isLoading,
    "flex justify-center items-center": isLoading,
  });

  return (
    <div className={contentClases}>
      <div className={classes}>
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    </div>
  );
};

export default Spinner;
