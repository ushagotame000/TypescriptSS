import { useState, useEffect } from "react";
import axios from "axios";
import { foodItem } from "../types/Alltypes";
import { api } from "../config/api";


// Custom hook to filter food items based on selected category
const useCategoryFilter = () => {
  const [foodList, setFoodList] = useState<foodItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Fetch food items from the API when the component mounts or when the selected category changes
  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/food/list");
        // const response = await axios api.get('/list');
        console.log(response.data);

        if (response.data.success) {
          setFoodList(response.data.data); 
        } else {
        console.log("Failed to fetch food items.");
        }
      } catch (error) {
        console.log("An error occurred while fetching food items."); 
        console.error(error); 
   }
    };

    

    fetchFoodItems(); 
  }, [selectedCategory]); // Re-fetch data when the selected category changes

  // Filter the food list based on the selected category
  const filteredFoodList =
    selectedCategory === "All"
      ? foodList
      : foodList.filter((item: foodItem) => item.category === selectedCategory);

  return { filteredFoodList, setSelectedCategory};
};

export default useCategoryFilter;
