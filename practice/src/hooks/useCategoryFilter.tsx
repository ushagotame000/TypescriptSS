import { useState } from "react";
import { food_list } from "../assets/assets";
import { foodItem } from "../types/Alltypes";

const useCategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredFoodList =
    selectedCategory === "All"
      ? food_list
      : food_list.filter(
          (item: foodItem) => item.category === selectedCategory
        );

  return { selectedCategory, setSelectedCategory, filteredFoodList };
};

export default useCategoryFilter;

export const sampleVar = 2;
