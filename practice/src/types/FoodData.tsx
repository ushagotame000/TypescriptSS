import React from "react";
import { foodItem } from "../types/Alltypes"; // Import type definitions
import ReusableButton from "../component/ReusableButton"; // Import ReusableButton component
import Menu from "../types/Menu"; // Import Menu component
import { IoIosAdd } from "react-icons/io"; // Import Add icon
import { RiSubtractLine } from "react-icons/ri"; // Import Subtract icon
import useCategoryFilter from "../hooks/useCategoryFilter"; // Import custom hook for category filtering

const FoodData: React.FC = () => {
  const { filteredFoodList, setSelectedCategory, loading, error } =
    useCategoryFilter(); // Destructure the return value from the custom hook

  return (
    <div className="main">
      <Menu onCategorySelect={setSelectedCategory} />{" "}
      {/* Render the Menu component */}
      {/* Display a loading spinner or message while data is being loaded */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? ( // Display an error message if there is an error
        <p>{error}</p>
      ) : (
        <div className="food-list grid lg:grid-cols-4 gap-y-2 gap-x-2 md:grid-cols-3 sm:grid-cols-1">
          {filteredFoodList.map((item: foodItem) => (
            <div key={item._id} className="food-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>
                <strong>Category:</strong> {item.category}
              </p>
              <p>
                <strong>Price:</strong> ${item.price}
              </p>
              <div className="items-end">
                <ReusableButton
                  text="Add to Cart"
                  icon={IoIosAdd}
                  onClick={() => console.log("Added")}
                />
                <ReusableButton
                  text="Remove"
                  icon={RiSubtractLine}
                  onClick={() => console.log("Deleted")}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  
};

export default FoodData;
