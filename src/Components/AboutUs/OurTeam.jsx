import Organigrama from "../../assets/images/aboutUs/Organigrama.png";

import InfoBox from "../UI/InfoBox/InfoBox";

const teamMembers = [
  { name: "Gerente General" },
  { name: "Lorem ipsum" },
  { name: "Lorem ipsum" },
  { name: "Lorem ipsum" },
  { name: "Lorem ipsum" },
  { name: "Lorem ipsum" },
];

const OurTeam = () => {
  return (
    <div className="w-full">
      <h2 className="flex justify-center text-[64px] font-[bebas_neue]">
        Nuestro equipo
      </h2>
      <div className="flex flex-wrap justify-center py-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-1/3 px-40 py-5">
            <InfoBox width="w-full" height="h-[251px]" />
            <div className="flex justify-center text-[20px]">{member.name}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center py-20">
        <img src={Organigrama} />
      </div>
    </div>
  );
};

OurTeam.displayName = "OurTeam";

export default OurTeam;
