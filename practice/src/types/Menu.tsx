import React from 'react'
import { menu_list } from '../assets/assets';



export interface MenuItem{
    menu_name: string;
    menu_image: string;
}

const Menu:React.FC = () => {

  return (

     
    <div className="menu-list flex flex-wrap justify-between">
    {menu_list.map((item: MenuItem, index: number) => (
        <div key={index} className="menu-item">
            <img src={item.menu_image} alt={item.menu_name} />
            <h3>{item.menu_name}</h3>
        </div>
    ))}
</div>
  )
}

export default Menu
