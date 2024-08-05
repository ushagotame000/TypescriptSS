import { useState, useEffect } from "react";
import axios from "axios";
import { foodItem } from "../types/Alltypes";

// Custom hook to filter food items based on selected category
const useCategoryFilter = () => {
  const [foodList, setFoodList] = useState<foodItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch food items from the API when the component mounts or when the selected category changes
  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        setLoading(true); // Set loading to true while fetching data
        setError(null); // Clear any previous error

        // Make a POST request to the API endpoint to fetch food items
        const response = await axios.get("http://localhost:5000/api/food/list");
        console.log(response.data);

        if (response.data.success) {
          setFoodList(response.data.data); // Update the foodList state with the fetched data
        } else {
          setError("Failed to fetch food items."); // Set error message if the response is unsuccessful
        }
      } catch (error) {
        setError("An error occurred while fetching food items."); // Set error message if an exception is thrown
        console.error(error); // Log the error for debugging
      } finally {
        setLoading(false); // Set loading to false after data is fetched or an error occurs
      }
    };

    fetchFoodItems(); // Call the fetch function to load food items
  }, [selectedCategory]); // Re-fetch data when the selected category changes

  // Filter the food list based on the selected category
  const filteredFoodList =
    selectedCategory === "All"
      ? foodList
      : foodList.filter((item: foodItem) => item.category === selectedCategory);

  return { filteredFoodList, setSelectedCategory, loading, error };
};

export default useCategoryFilter;
