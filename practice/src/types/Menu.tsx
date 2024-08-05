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
    <div className="menu-list flex flex-wrap justify-between">
      {menu_list.map((item: MenuItem, index: number) => (
        <div
          key={index}
          className="menu-item"
          onClick={() => onCategorySelect(item.menu_name)} // Set selected category
        >
          <img src={item.menu_image} alt={item.menu_name} />
          <h3>{item.menu_name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Menu;
