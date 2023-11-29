import React, { useState } from "react";
import {
  ChevronRight,
  LayoutDashboard,
  GanttChartSquare,
  CircleDashed,
  CreditCard,
  CircleDollarSign,
  CarFront,
  Factory,
  Network,
  Settings,
} from "lucide-react";
import { Button } from "./ui/button";

export const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const sidebarData = [
    {
      title: "Tableau de bord",
      logo: <LayoutDashboard />,
    },
    {
      title: "Administration",
      svg: <ChevronRight />,
      logo: <CircleDashed />,
    },
    {
      title: "Gestion des contrats d'assurances",
      logo: <GanttChartSquare size={36} />,
      svg: <ChevronRight />,
    },
    {
      title: "Gestion de cartes",
      svg: <ChevronRight />,
      logo: <CreditCard />,
    },
    {
      title: "Gestion des clients",
      logo: <CreditCard />,
    },
    {
      title: "Comptabilité",
      svg: <ChevronRight />,
      logo: <CircleDollarSign />,
    },
    {
      title: "Sinistre",
      svg: <ChevronRight />,
      logo: <CarFront />,
    },
    {
      title: "Gestion de la facturation",
      svg: <ChevronRight />,
      logo: <Factory />,
    },
    {
      title: "Réseau de soin",
      svg: <ChevronRight />,
      logo: <Network />,
    },
    {
      title: "Paramétrage",
      svg: <ChevronRight />,
      logo: <Settings />,
    },
  ];

  const handleItemClick = (title) => {
    setSelectedItem(title);
  };

  return (
    <aside className="center-flex h-screen w-72 flex-col border border-gray-200 bg-blue-300">
      <div className="mt-12 h-28 w-28 overflow-hidden rounded-full">
        <img
          className="h-full w-full object-cover "
          src="https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png"
          alt="Your Image"
        />
      </div>
      {/* Sidebar */}
      <div className="my-20">
        <ul>
          {sidebarData.map((item, index) => (
            <SidebarButton
              key={index}
              title={item.title}
              logo={item.logo}
              svg={item.svg}
              selected={selectedItem === item.title}
              onClick={() => handleItemClick(item.title)}
            />
          ))}
        </ul>
      </div>
      <Button variant="third" className="my-6">
        DEMANDE DE COTATION
      </Button>
    </aside>
  );
};

const SidebarButton = ({ title, logo, selected, onClick, svg }) => {
  return (
    <li
      className={` ${selected ? "bg-gray-200" : ""}`}
      id={`accordion-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <button
        type="button"
        className={`hs-accordion-toggle flex w-full items-center justify-between gap-x-3.5 rounded-lg px-2.5 py-2 text-start text-sm text-white hover:bg-gray-100 ${
          selected ? "bg-gray-100" : ""
        }`}
        onClick={onClick}
      >
        <div className="flex flex-row items-center">
          {logo}
          <div className="ml-4"> {title}</div>
        </div>
        <div className="mr-O" size={32}>
          {svg}
        </div>
      </button>
    </li>
  );
};
