import InfoBox from "../../UI/InfoBox/InfoBox";
import us from "../../../assets/images/inicio/us.png";

const HomeAboutUs = () => {
  return (
    <div className="text-[#181818] bg-[#E2E2E2] font-[roboto] py-12 px-10">
      <div className="flex justify-center font-bebas text-[64px] pb-10">
        sobre nosotros
      </div>
      <InfoBox width="w-full" height="h-[821]">
        <div className="flex text-[20px] justify-evenly h-1/2 pt-10">
          <img
            alt="us"
            className="h-full object-cover rounded-md w-1/3"
            src={us}
          />
          <p className="text-[#000000] w-2/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
        </div>
        <div className="h-1/2 text-[20px] pt-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam
          bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer
          in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem.
          Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna.
          Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris
          sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat
          turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec
          ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin
          vitae facilisis nisi, ac posuere leo.
        </div>
      </InfoBox>
    </div>
  );
};

HomeAboutUs.displayName = "HomeAboutUs";

export default HomeAboutUs;
