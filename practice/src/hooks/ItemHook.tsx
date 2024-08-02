import { useState } from "react"
import { food_list, menu_list } from "../assets/assets";



const useCategoryFilter = () =>{
    const [selectedCategory, setSelectedCategory] = useState<string|null>(null);

    const filteredFoodItems = selectedCategory
    ? food_list.filter(item=> item.category === selectedCategory)
    :food_list;
    
    const filteredMenuItem = selectedCategory
    ? menu_list.filter(item=> item.menu_name=== selectedCategory)
    :menu_list;


    return{
        selectedCategory,
        setSelectedCategory,
        filteredFoodItems,
        filteredMenuItem
    }

}
export default useCategoryFilter;

