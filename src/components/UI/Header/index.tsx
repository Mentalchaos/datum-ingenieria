import { useState } from "react";
import { useRouter } from "next/router";


interface HeaderItemProps {
  label: string;
  keyPage: string;
  suboptions?: HeaderItemProps[];
  id?: string;
}


const HeaderItem = ({ label, onClick, keyPage, id }: { label: string, onClick: () => void, keyPage: string, id?: string }) => {
  const router = useRouter();
  const isActive = router.pathname === `/${keyPage.toLowerCase()}` && !id;

  return (
    <div className={`flex items-center justify-center cursor-pointer`}>
      <span className={`${!isActive ? "text-white" : "text-gray-white underline underline-offset-4"}`} onClick={onClick}>{label}</span>
    </div>
  );
};

const Header = () => {
  const router = useRouter();
  const [optionSelected, setOptionSelected] = useState<HeaderItemProps | null>(null);

  const handleOptionSelected = (item: HeaderItemProps, id?: string) => {
    setOptionSelected(item);

    if(item.suboptions && item.suboptions.length === 0) {
      router.push(`/${item.keyPage.toLowerCase()}${id ? `#${id}` : ""}`);
    }
  }

  const headerItemsList = [
    {
      label: "Inicio",
      keyPage: "",
      suboptions: []
    },
    {
      label: "Historia",
      keyPage: "historia",
      suboptions: []
    },
    {
      label: "Servicios",
      keyPage: "servicios",
      suboptions: [
        {
          label: "Topografía Avanzada",
          keyPage: "topografia",
          suboptions: []
        },
        {
          label: "Fotogrametría y Lidar",
          keyPage: "lidar",
          suboptions: []
        },
        {
          label: "Energías Renovables",
          keyPage: "energia",
          suboptions: []
        }
      ]
    },
    {
      id: "industry-header-item",
      label: "Industria",
      keyPage: "",
      suboptions: []
    },
    {
      id: "clients-header-item",
      label: "Clientes",
      keyPage: "",
      suboptions: []
    },
    {
      label: "Contacto",
      keyPage: "contacto",
      suboptions: []
    },
  ];

  const headerItems = headerItemsList.map((item: HeaderItemProps) => {
    return (
      <HeaderItem
        key={item.label}
        label={item.label}
        onClick={() => handleOptionSelected(item, item?.id)}
        keyPage={item.keyPage}
        id={item.id}
      />
    );
  });

  const suboptionsItems = optionSelected?.suboptions?.map((item: HeaderItemProps) => (
    <div key={item.label}>
      <HeaderItem
        key={item.label}
        label={item.label}
        onClick={() => handleOptionSelected(item)}
        keyPage={item.keyPage}
        id={item.id}
      />
    </div>
  ));

  const suboptions = suboptionsItems && suboptionsItems.length > 0 ? (
    <div className="h-[80px] w-full bg-[#2D2E33] flex items-center justify-center">
      <div className="max-w-[1280px] w-full h-[80px]  mx-auto flex items-center gap-10 justify-around">
        {suboptionsItems}
      </div>
    </div>
  ) : null;

  return (
    <header className="bg-[#2D2E33] text-white sticky top-0 z-50">
      <div className="grid grid-cols-2 max-w-[1200px] mx-auto h-[80px]">
        <div className="flex items-center w-[200px]">
          <img src="/images/logo.png" alt="Logo" className="object-fit" />
        </div>
        <div className="flex items-center justify-end relative">
          <div className="hidden lg:flex items-center gap-10">
            {headerItems}
          </div>
        </div>
      </div>
      {suboptions}
    </header>
  );
};

export default Header;
