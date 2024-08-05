import React from "react";
import { foodItem } from "./Alltypes";
import ReusableButton from "../component/ReusableButton";
import Menu from "../types/Menu";
import { FaShoppingCart } from "react-icons/fa";
import { RiSubtractLine } from "react-icons/ri";
import useCategoryFilter from "../hooks/useCategoryFilter";
import useFoodData from "../hooks/useFoodData";

const FoodData: React.FC = () => {
  const { filteredFoodList, setSelectedCategory } = useCategoryFilter();
const {FoodList} = useFoodData();



  return (
    // display item
    <div className="main">
      <Menu onCategorySelect={setSelectedCategory} />

      <div className="food-list grid lg:grid-cols-4 gap-y-2 gap-x-2 md:grid-cols-3 sm:grid-cols-1 rounded-md  ">
        {/* {food_list.map((item: foodItem) => ( */}
        {filteredFoodList.map((item: foodItem) => (
          <div key={item._id} className="food-item  hover:shadow-2xl rounded-md bg-slate-200 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 py-2 px-4  transition-colors duration-300">
            <img className="w-auto border-spacing-1 rounded-2xl" 
            src={item.image} alt={item.name} />
            <h3 className="text-xl font-medium font-mono">{item.name}</h3>
            <p className="text-gray-500 text-sm">{item.description}</p>
            <p className="text">
              <strong>Category:</strong> {item.category}
            </p>
            <p className="font-semibold mt-3 mb-0 text-lg">
              <strong>Price:</strong> ${item.price}
            </p>
            <div className=" flex justify-end">
              <ReusableButton 
                text="Coffee"
                icon={FaShoppingCart}
                onClick={() => console.log(`Added ${item.name} to the cart.`)}
              />{" "}
              
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
  
};

export default FoodData;
