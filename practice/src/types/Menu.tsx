import React from "react";
import { menu_list } from "../assets/assets"; // Import menu data

export interface MenuItem {
  menu_name: string;
  menu_image: string;
}

interface MenuProps {
  onCategorySelect: (category: string) => void; // Function to handle category selection
}

const Menu: React.FC<MenuProps> = ({ onCategorySelect }) => {
  return (
    <div className="grid  gap-y-2 gap-x-1   bg-gray-100"> 
    <h1 className="text-3xl  font-semibold mt-4">Select Menu</h1>
    <div className="menu-list flex flex-wrap justify-between">
      {menu_list.map((item: MenuItem, index: number) => (
        <div
          key={index}
          className="menu-item"
          onClick={() => onCategorySelect(item.menu_name)} // Set selected category
        >
          <img src={item.menu_image} alt={item.menu_name} className="rounded-full ring-4 bg-blue-400 transform transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 mb-4 lg:mt-0" />
          <h3>{item.menu_name}</h3>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Menu;
